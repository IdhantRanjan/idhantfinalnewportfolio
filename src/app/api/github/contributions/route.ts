import { NextResponse } from "next/server";

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return NextResponse.json({ error: "GITHUB_TOKEN not set" }, { status: 500 });
  }

  const now = new Date().toISOString();
  const from = new Date(new Date().getFullYear(), 0, 1).toISOString();

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query {
        user(login: "IdhantRanjan") {
          contributionsCollection(from: "${from}", to: "${now}") {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }`,
    }),
    next: { revalidate: 3600 },
  });

  const data = await res.json();
  const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;

  if (!calendar) {
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }

  const days: { date: string; contributionCount: number }[] = calendar.weeks.flatMap(
    (w: { contributionDays: { date: string; contributionCount: number }[] }) => w.contributionDays
  );
  const activeDays = days.filter((d) => d.contributionCount > 0).length;

  let streak = 0;
  const reversed = [...days].reverse();
  for (const day of reversed) {
    if (day.contributionCount > 0) streak++;
    else break;
  }

  return NextResponse.json({
    totalContributions: calendar.totalContributions,
    activeDays,
    streak,
  });
}
