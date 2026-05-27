import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");

  if (!code) {
    return NextResponse.json({ error: "No authorization code" }, { status: 400 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
        ).toString("base64")}`,
      },
      body: new URLSearchParams({
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI || "",
        grant_type: "authorization_code",
      }).toString(),
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok) {
      return NextResponse.json({ error: "Failed to get access token" }, { status: 400 });
    }

    // Store token in cookie or session (for now just return success)
    const response = NextResponse.redirect(new URL("/extra?spotify=connected", request.url));
    response.cookies.set("spotify_access_token", tokenData.access_token, {
      maxAge: tokenData.expires_in,
      httpOnly: true,
      secure: true,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Spotify callback error:", error);
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 });
  }
}
