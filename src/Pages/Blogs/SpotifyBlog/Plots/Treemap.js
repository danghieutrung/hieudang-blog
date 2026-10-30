// src/Pages/Blogs/SpotifyBlog/Plots/Treemap.js
import {
  CUSTOM_TOOLTIP,
  ChartFigure,
  baseLayout,
  pct,
  tooltipBody,
  useChartTheme,
  useCsv,
  useIsNarrow,
} from "../../../../theme/chartTheme";

const Treemap = () => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const rows = useCsv("/data/7_disney_treemap.csv");

  const movies = rows.filter((row) => row.movie === "Disney").map((row) => row.song);
  const colorOf = (row) => {
    if (!row.movie) return "rgba(0,0,0,0)";
    const movie = row.movie === "Disney" ? row.song : row.movie;
    return theme.series[movies.indexOf(movie) % theme.series.length];
  };

  const durationOf = (name) => Number((rows.find((row) => row.song === name) || {}).duration);
  const total = durationOf("Disney") || 1;
  const rowTooltip = (row) => {
    const minutes = Number(row.duration);
    const isSong = row.movie && row.movie !== "Disney";
    return tooltipBody(theme, row.song, [
      isSong && ["Film", row.movie],
      ["Played", `${minutes} min`],
      row.movie && ["Share of Disney", pct(minutes, total)],
      isSong && [`Share of ${row.movie}`, pct(minutes, durationOf(row.movie))],
    ]);
  };

  const data = [
    {
      type: "treemap",
      branchvalues: "total",
      labels: rows.map((row) => row.song),
      parents: rows.map((row) => row.movie || ""),
      values: rows.map((row) => Number(row.duration)),
      marker: {
        colors: rows.map(colorOf),
        line: { width: 2, color: theme.surface },
        pad: { t: 22, l: 2, r: 2, b: 2 },
      },
      root: { color: "rgba(0,0,0,0)" },
      pathbar: { visible: false },
      tiling: { packing: "squarify" },
      texttemplate: "<b>%{label}</b><br>%{value} min",
      textposition: "top left",
      textfont: { color: "#ffffff", size: isNarrow ? 11 : 13 },
      customdata: rows.map(rowTooltip),
      hovertemplate: CUSTOM_TOOLTIP,
    },
  ];

  return (
    <ChartFigure
      title="Minutes played per Disney song"
      subtitle="Grouped by film; tile size is minutes played."
      height={isNarrow ? 480 : 420}
      data={data}
      layout={baseLayout(theme)}
    />
  );
};

export default Treemap;
