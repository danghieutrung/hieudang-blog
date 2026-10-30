// src/Pages/Blogs/SpotifyBlog/Plots/Sunburst.js
import {
  CUSTOM_TOOLTIP,
  ChartFigure,
  baseLayout,
  fmt,
  pct,
  tooltipBody,
  useChartTheme,
  useCsv,
  useIsNarrow,
} from "../../../../theme/chartTheme";

// The three biggest artists get their own color; the rest share a neutral.
const highlighted = ["Taylor Swift", "Ludovico Einaudi", "Sơn Tùng M-TP"];

const Sunburst = () => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const rows = useCsv("/data/4_sunburst_albums.csv");

  const idOf = (row) => (row.parent ? `${row.parent}/${row.child}` : row.child);
  const parentIdOf = (row) => {
    if (!row.parent) return "";
    const parentRow = rows.find((r) => r.child === row.parent);
    return parentRow ? idOf(parentRow) : row.parent;
  };
  const artistOf = (row) => (row.parent === "Top Albums" ? row.child : row.parent);
  const colorOf = (row) => {
    if (!row.parent) return "rgba(0,0,0,0)";
    const slot = highlighted.indexOf(artistOf(row));
    return slot >= 0 ? theme.series[slot] : theme.neutral;
  };

  const total = rows.length ? Number(rows.find((row) => !row.parent).duration) : 1;
  const durationOf = (name) => Number((rows.find((row) => row.child === name) || {}).duration);
  const rowTooltip = (row) => {
    const minutes = Number(row.duration);
    const isAlbum = row.parent && row.parent !== "Top Albums";
    return tooltipBody(theme, row.child, [
      isAlbum && ["Artist", row.parent],
      ["Played", `${fmt(minutes)} min (${fmt(minutes / 60)} h)`],
      ["Tracks played", row.n_songs],
      row.parent && ["Share of all albums", pct(minutes, total)],
      isAlbum && [`Share of ${row.parent}`, pct(minutes, durationOf(row.parent))],
    ]);
  };

  const data = [
    {
      type: "sunburst",
      ids: rows.map(idOf),
      labels: rows.map((row) => row.child),
      parents: rows.map(parentIdOf),
      values: rows.map((row) => Number(row.duration)),
      branchvalues: "total",
      customdata: rows.map(rowTooltip),
      hovertemplate: CUSTOM_TOOLTIP,
      marker: {
        colors: rows.map(colorOf),
        line: { width: 2, color: theme.surface },
      },
      insidetextorientation: "radial",
      insidetextfont: { color: "#ffffff", size: isNarrow ? 10 : 12 },
      leaf: { opacity: 1 },
    },
  ];

  return (
    <ChartFigure
      title="Minutes played by artist and album"
      subtitle="Inner ring: artist. Outer ring: album. Slice size is minutes played."
      note="Small albums are too thin to label; hover or click an artist to see them."
      height={isNarrow ? 380 : 560}
      data={data}
      layout={baseLayout(theme)}
    />
  );
};

export default Sunburst;
