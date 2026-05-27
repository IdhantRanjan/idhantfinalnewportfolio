export function getSpotifyAuthUrl() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
  const scope = "user-read-recently-played user-read-private user-read-email";

  const params = new URLSearchParams({
    client_id: clientId || "",
    response_type: "code",
    redirect_uri: redirectUri || "",
    scope,
  });

  return `https://accounts.spotify.com/authorize?${params.toString()}`;
}

export async function fetchSpotifyStats() {
  try {
    const response = await fetch("/api/spotify/stats");
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Failed to fetch Spotify stats:", error);
    return null;
  }
}
