// src/Pages/Blogs/SpotifyBlog/Plots/MonthlyGantt.js
import {
  ChartFigure,
  axisStyle,
  baseLayout,
  fmt,
  pct,
  tooltip,
  useChartTheme,
  useCsv,
  useIsNarrow,
} from "../../../../theme/chartTheme";

const MS_PER_DAY = 24 * 60 * 60 * 1000;

const formatMonth = (date) =>
  new Date(date).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

// One row per category, one bar per month in which it was the top pick.
// category / yField / minutesField / detailField are CSV column names.
// Each row gets its own color, assigned top to bottom; `grouped` names a
// catch-all row that stays neutral.
const MonthlyGantt = ({
  title,
  subtitle,
  category,
  yField,
  minutesField,
  detailField,
  detailLabel,
  grouped,
  shortLabels = {},
}) => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const rows = useCsv("/data/3_gantt_top_otm.csv");
  const months = useCsv("/data/8_waterfall_month.csv");

  const monthTotal = Object.fromEntries(months.map((m) => [m.x, Number(m.duration)]));
  const monthsWon = {};
  rows.forEach((row) => {
    monthsWon[row[category]] = (monthsWon[row[category]] || 0) + 1;
  });

  // Row order comes from the y position in the data; bottom first for Plotly.
  const order = [...new Map(rows.map((row) => [row[category], +row[yField]])).entries()]
    .sort((a, b) => a[1] - b[1])
    .map(([name]) => name);

  const topDown = [...order].reverse().filter((name) => name !== grouped);
  const colorOf = (name) =>
    name === grouped ? theme.neutral : theme.series[topDown.indexOf(name) % theme.series.length];

  const label = (name) => (isNarrow && shortLabels[name]) || name;

  const hover = (row) => {
    const minutes = Number(row[minutesField]);
    const total = monthTotal[row.timestamp_start];
    return tooltip(theme, formatMonth(row.timestamp_start), [
      [detailLabel, row[detailField]],
      ["Played", `${fmt(minutes)} min`],
      total && ["Share of month", pct(minutes, total)],
      row[category] !== grouped && ["Months at #1", `${monthsWon[row[category]]} of ${rows.length}`],
    ]);
  };

  // One trace per row so each can carry its own color.
  const data = order.map((name) => {
    const own = rows.filter((row) => row[category] === name);
    return {
      type: "bar",
      orientation: "h",
      name,
      base: own.map((row) => row.timestamp_start),
      x: own.map((row) => new Date(row.timestamp_end) - new Date(row.timestamp_start) - MS_PER_DAY),
      y: own.map(() => label(name)),
      width: 0.6,
      marker: { color: colorOf(name), line: { width: 0 } },
      hovertemplate: own.map(hover),
      showlegend: false,
    };
  });

  const layout = {
    ...baseLayout(theme),
    margin: { l: 0, r: 8, t: 8, b: 0 },
    barmode: "overlay",
    xaxis: {
      ...axisStyle(theme),
      type: "date",
      showgrid: true,
      dtick: "M12",
      tickformat: "%Y",
    },
    yaxis: {
      ...axisStyle(theme),
      type: "category",
      categoryorder: "array",
      categoryarray: order.map(label),
      showgrid: false,
      tickfont: { color: theme.inkSecondary, size: isNarrow ? 11 : 12 },
    },
  };

  return (
    <ChartFigure
      title={title}
      subtitle={subtitle}
      height={Math.max(260, order.length * 34 + 40)}
      data={data}
      layout={layout}
    />
  );
};

export default MonthlyGantt;
