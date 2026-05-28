import { NextResponse } from "next/server";

async function getAccessToken(): Promise<string | null> {
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;
  if (!refreshToken) return null;

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }).toString(),
  });

  if (!res.ok) return null;
  const data = await res.json();
  return data.access_token ?? null;
}

export async function GET() {
  const token = await getAccessToken();
  if (!token) {
    return NextResponse.json({ error: "Spotify not connected" }, { status: 401 });
  }

  const [recentRes, topTracksRes] = await Promise.all([
    fetch("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
      headers: { Authorization: `Bearer ${token}` },
    }),
    fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20", {
      headers: { Authorization: `Bearer ${token}` },
    }),
  ]);

  if (!recentRes.ok) {
    return NextResponse.json({ error: "Failed to fetch Spotify data" }, { status: 400 });
  }

  const recentData = await recentRes.json();
  const playcount = recentData.items?.length ?? 0;
  const minutesListened = Math.round(playcount * 3.5 * 10);

  let topTracks: { title: string; artist: string; image: string | null; color: string }[] = [];
  if (topTracksRes.ok) {
    const topData = await topTracksRes.json();
    topTracks = (topData.items ?? []).map((track: {
      name: string;
      artists: { name: string }[];
      album: { images: { url: string }[] };
    }) => ({
      title: track.name,
      artist: track.artists.map((a: { name: string }) => a.name).join(", "),
      image: track.album.images[0]?.url ?? null,
      color: "#1a1a2e",
    }));
  }

  return NextResponse.json({ minutesListened, playcount, topTracks });
}
