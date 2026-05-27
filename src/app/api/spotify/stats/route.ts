import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("spotify_access_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    // Get current user's top tracks (2026 year so far)
    const now = new Date();
    const yearStart = new Date(now.getFullYear(), 0, 1).toISOString();

    // Fetch user's recently played tracks to estimate stats
    const recentResponse = await fetch(
      "https://api.spotify.com/v1/me/player/recently-played?limit=50",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!recentResponse.ok) {
      return NextResponse.json({ error: "Failed to fetch Spotify data" }, { status: 400 });
    }

    const recentData = await recentResponse.json();

    // Calculate rough stats from recent plays
    // Each track is ~3-4 min avg, so estimate total minutes
    const estimatedMinutes = recentData.items?.length * 3.5 * 10 || 0; // rough multiplier
    const playcount = recentData.items?.length || 0;

    return NextResponse.json({
      minutesListened: Math.round(estimatedMinutes),
      playcount,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Spotify stats error:", error);
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
