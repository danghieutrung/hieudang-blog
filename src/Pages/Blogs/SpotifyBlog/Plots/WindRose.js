// src/Pages/Blogs/SpotifyBlog/Plots/WindRose.js
import {
  ChartFigure,
  baseLayout,
  fmt,
  pct,
  tooltip,
  useChartTheme,
  useCsv,
  useIsNarrow,
} from "../../../../theme/chartTheme";

const hourLabel = (hour) => {
  const h = Number(hour);
  if (h === 0) return "12 AM";
  if (h === 12) return "12 PM";
  return h < 12 ? `${h} AM` : `${h - 12} PM`;
};

const WindRose = () => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const rows = useCsv("/data/9_wind_rose_listening_hour.csv");

  const labels = rows.map((row) => hourLabel(row.hour));
  const total = rows.reduce((sum, row) => sum + Number(row.duration), 0);
  const rank = (row) => rows.filter((r) => Number(r.duration) > Number(row.duration)).length + 1;

  const data = [
    {
      type: "barpolar",
      r: rows.map((row) => Number(row.duration)),
      theta: labels,
      marker: { color: theme.series[0], line: { color: theme.surface, width: 1.5 } },
      hovertemplate: rows.map((row) =>
        tooltip(theme, `${hourLabel(row.hour)} – ${hourLabel((Number(row.hour) + 1) % 24)}`, [
          ["Played", `${fmt(row.duration)} min (${fmt(row.duration / 60)} h)`],
          ["Share of listening", pct(row.duration, total)],
          ["Rank", `${rank(row)} of 24 hours`],
        ])
      ),
    },
  ];

  const layout = {
    ...baseLayout(theme),
    margin: { l: 32, r: 32, t: 24, b: 24 },
    polar: {
      bgcolor: "rgba(0,0,0,0)",
      angularaxis: {
        direction: "clockwise",
        rotation: 90,
        type: "category",
        categoryarray: labels,
        showline: false,
        gridcolor: theme.grid,
        ticks: "",
        tickfont: { color: theme.muted, size: isNarrow ? 9 : 12 },
        // Label every third hour on small screens.
        tickvals: isNarrow ? labels.filter((_, i) => i % 3 === 0) : labels,
      },
      radialaxis: {
        showline: false,
        gridcolor: theme.grid,
        tickfont: { color: theme.muted, size: 10 },
        tickformat: ",",
        angle: 90,
        tickangle: 90,
        nticks: 4,
      },
    },
  };

  return (
    <ChartFigure
      title="Minutes played by hour of day"
      subtitle="Midnight at the top, reading clockwise. Busiest hour: 9 PM to 10 PM."
      height={isNarrow ? 360 : 520}
      data={data}
      layout={layout}
    />
  );
};

export default WindRose;
