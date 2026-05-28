"use client";

type Day = { date: string; contributionCount: number };
type Week = { contributionDays: Day[] };

function getColor(count: number): string {
  if (count === 0) return "#e2ddd5";
  if (count < 3) return "#9be9a8";
  if (count < 6) return "#40c463";
  if (count < 10) return "#30a14e";
  return "#216e39";
}

export default function GitHubHeatmap({ weeks }: { weeks: Week[] }) {
  const CELL = 11;
  const GAP = 3;

  return (
    <div style={{ overflowX: "auto", paddingBottom: "2px" }}>
      <div style={{ display: "flex", gap: GAP, alignItems: "flex-start", width: "max-content" }}>
        {weeks.map((week, wi) => {
          const startOffset =
            wi === 0 && week.contributionDays.length > 0
              ? new Date(week.contributionDays[0].date + "T12:00:00").getDay()
              : 0;

          return (
            <div key={wi} style={{ display: "flex", flexDirection: "column", gap: GAP }}>
              {Array.from({ length: startOffset }).map((_, i) => (
                <div key={`pad-${i}`} style={{ width: CELL, height: CELL }} />
              ))}
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.contributionCount} contribution${day.contributionCount !== 1 ? "s" : ""}`}
                  style={{
                    width: CELL,
                    height: CELL,
                    borderRadius: 2,
                    backgroundColor: getColor(day.contributionCount),
                    flexShrink: 0,
                    cursor: "default",
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
