// src/Pages/Blogs/SpotifyBlog/Plots/DivergingBar.js
import {
  ChartFigure,
  baseLayout,
  pct,
  tooltip,
  useChartTheme,
  useCsv,
  useIsNarrow,
} from "../../../../theme/chartTheme";

// Row 0 of the CSV holds each band's total; rows 1+ are their top songs.
const DivergingBar = () => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const rows = useCsv("/data/6_diverging_bar_chart.csv");

  if (rows.length === 0) return <ChartFigure height={320} data={[]} layout={baseLayout(theme)} />;

  const [totals, ...songs] = rows;
  const ranks = songs.map((_, i) => `#${i + 1}`);
  const max = Math.max(...songs.flatMap((row) => [+row.westlife_duration, +row.bsb_duration]));
  // Leave room beside each bar for the song name.
  const reach = max * (isNarrow ? 1.9 : 2.6);

  const westlife = theme.series[0];
  const bsb = theme.series[1];

  const side = (name, color, songField, minutesField, sign) => ({
    type: "bar",
    orientation: "h",
    name,
    y: ranks,
    x: songs.map((row) => sign * row[minutesField]),
    width: 0.62,
    marker: { color, line: { width: 0 } },
    text: songs.map((row) =>
      isNarrow ? `${row[minutesField]}` : `${row[songField]}  ${row[minutesField]} min`
    ),
    textposition: "outside",
    cliponaxis: false,
    textfont: { color: theme.inkSecondary, size: isNarrow ? 11 : 12 },
    hovertemplate: songs.map((row, i) =>
      tooltip(theme, row[songField], [
        ["Artist", name],
        ["Rank", `#${i + 1} for ${name}`],
        ["Played", `${row[minutesField]} min`],
        [`Share of all ${name}`, pct(row[minutesField], totals[minutesField])],
      ])
    ),
  });

  const data = [
    side("Westlife", westlife, "westlife", "westlife_duration", -1),
    side("Backstreet Boys", bsb, "bsb", "bsb_duration", 1),
  ];

  const layout = {
    ...baseLayout(theme),
    barmode: "relative",
    showlegend: false,
    margin: { l: 0, r: 0, t: 8, b: 8 },
    xaxis: {
      range: [-reach, reach],
      visible: false,
      fixedrange: true,
    },
    yaxis: {
      autorange: "reversed",
      showgrid: false,
      zeroline: false,
      tickfont: { color: theme.muted, size: 12 },
      fixedrange: true,
    },
    shapes: [
      { type: "line", x0: 0, x1: 0, yref: "paper", y0: 0, y1: 1, line: { color: theme.axis, width: 1 } },
    ],
  };

  return (
    <ChartFigure
      title="Top four songs by minutes played"
      subtitle={
        <>
          <span className="legend-swatch" style={{ background: westlife }} />
          Westlife · {Number(totals.westlife_duration).toLocaleString("en-US")} min total
          <span className="legend-swatch" style={{ background: bsb }} />
          Backstreet Boys · {Number(totals.bsb_duration).toLocaleString("en-US")} min total
        </>
      }
      note={isNarrow ? "Tap a bar to see the song name." : null}
      height={300}
      data={data}
      layout={layout}
    />
  );
};

export default DivergingBar;
