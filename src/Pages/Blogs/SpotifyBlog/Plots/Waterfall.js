// src/Pages/Blogs/SpotifyBlog/Plots/Waterfall.js
import {
  ChartFigure,
  axisStyle,
  baseLayout,
  fmt,
  pct,
  signed,
  tooltip,
  useChartTheme,
  useCsv,
} from "../../../../theme/chartTheme";

const formatMonth = (date) =>
  new Date(date).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

const daysIn = (date) => {
  const d = new Date(date);
  return new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
};

const Waterfall = () => {
  const theme = useChartTheme();
  const rows = useCsv("/data/8_waterfall_month.csv");

  const data = [
    {
      type: "waterfall",
      x: rows.map((row) => row.x),
      y: rows.map((row) => Number(row.y)),
      // The first month starts from zero; every later bar is a change.
      measure: rows.map((_, i) => (i === 0 ? "absolute" : "relative")),
      hovertemplate: rows.map((row, i) => {
        const change = Number(row.y);
        const previous = Number(row.duration) - change;
        return tooltip(theme, formatMonth(row.x), [
          ["Played", `${fmt(row.duration)} min (${fmt(row.duration / 60)} h)`],
          ["Per day", `${fmt(row.duration / daysIn(row.x))} min`],
          i > 0 && ["vs previous", `${signed(change)} min${previous > 0 ? ` (${change >= 0 ? "+" : "−"}${pct(Math.abs(change), previous)})` : ""}`],
        ]);
      }),
      increasing: { marker: { color: theme.up } },
      decreasing: { marker: { color: theme.down } },
      totals: { marker: { color: theme.neutral } },
      connector: { line: { color: theme.axis, width: 1 } },
    },
  ];

  const layout = {
    ...baseLayout(theme),
    showlegend: false,
    bargap: 0.25,
    xaxis: { ...axisStyle(theme), type: "date", showgrid: false, dtick: "M12", tickformat: "%Y" },
    yaxis: {
      ...axisStyle(theme),
      title: { text: "Minutes per month", font: { size: 12, color: theme.muted } },
      tickformat: ",",
      rangemode: "tozero",
    },
  };

  return (
    <ChartFigure
      title="Minutes played per month"
      subtitle={
        <>
          <span className="legend-swatch" style={{ background: theme.up }} /> More than the month before
          <span className="legend-swatch" style={{ background: theme.down }} /> Less than the month before
        </>
      }
      note="Peak: May 2024 with 9,611 minutes. September 2024 is a partial month."
      height={400}
      data={data}
      layout={layout}
    />
  );
};

export default Waterfall;
