import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "No authorization code" }, { status: 400 });
  }

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
    return NextResponse.json({ error: "Failed to get access token", detail: tokenData }, { status: 400 });
  }

  const refreshToken = tokenData.refresh_token;

  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Spotify Connected</title>
  <style>
    body { font-family: monospace; padding: 48px; background: #f4f0e8; color: #1a1a1a; max-width: 640px; margin: 0 auto; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    p { color: #5a5a5a; margin-bottom: 20px; }
    code { background: #e8e4dc; padding: 2px 6px; border-radius: 3px; }
    textarea { width: 100%; height: 80px; font-family: monospace; font-size: 13px; padding: 10px; border: 1px solid #ccc; border-radius: 4px; background: #fff; margin-bottom: 20px; }
    ol { color: #5a5a5a; line-height: 2; }
    a { color: #1a1a1a; }
  </style>
</head>
<body>
  <h1>Spotify connected!</h1>
  <p>Copy this refresh token and add it to Vercel as <code>SPOTIFY_REFRESH_TOKEN</code>.</p>
  <textarea readonly onclick="this.select()">${refreshToken}</textarea>
  <ol>
    <li>Go to <a href="https://vercel.com/dashboard" target="_blank">vercel.com</a> → your project → Settings → Environment Variables</li>
    <li>Add <code>SPOTIFY_REFRESH_TOKEN</code> = the value above</li>
    <li>Redeploy — Spotify stats go live automatically</li>
  </ol>
  <br>
  <a href="/extra">← back to site</a>
</body>
</html>`;

  return new Response(html, { headers: { "Content-Type": "text/html" } });
}
