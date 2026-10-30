// src/Pages/Blogs/SpotifyBlog/Plots/SankeyDiagram.js
import { useState, useEffect } from "react";
import {
  CUSTOM_TOOLTIP,
  ChartFigure,
  baseLayout,
  tooltipBody,
  useChartTheme,
  useIsNarrow,
  withAlpha,
} from "../../../../theme/chartTheme";

const genres = ["US-UK", "V-pop", "Neo-classical", "Classical"];

// Artists with a single song in the top 100 fold into one node per genre,
// which keeps the right-hand column readable.
const foldSmallArtists = (raw) => {
  const flows = raw.source.map((s, i) => ({
    source: raw.label[s],
    target: raw.label[raw.target[i]],
    value: parseInt(raw.value[i], 10),
  }));

  const folded = [];
  genres.forEach((genre) => {
    const artists = flows.filter((f) => f.source === genre);
    const small = artists.filter((f) => f.value < 2);
    artists.filter((f) => f.value >= 2).forEach((f) => folded.push(f));
    if (small.length > 0) {
      folded.push({
        source: genre,
        target: `${small.length} other ${genre} artists`,
        value: small.reduce((sum, f) => sum + f.value, 0),
        members: small.map((f) => f.target),
      });
    }
  });

  return flows.filter((f) => !genres.includes(f.source)).concat(folded);
};

const SankeyDiagram = () => {
  const theme = useChartTheme();
  const isNarrow = useIsNarrow();
  const [raw, setRaw] = useState(null);

  useEffect(() => {
    fetch("/data/2_sankey_top_100.json")
      .then((response) => response.json())
      .then(setRaw)
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!raw) return <ChartFigure height={560} data={[]} layout={baseLayout(theme)} />;

  const flows = foldSmallArtists(raw);
  const labels = [...new Set(flows.flatMap((f) => [f.source, f.target]))];
  const genreOf = (label) => {
    if (genres.includes(label)) return label;
    const flow = flows.find((f) => f.target === label && genres.includes(f.source));
    return flow ? flow.source : null;
  };
  const colorOf = (label) => {
    const genre = genreOf(label);
    return genre ? theme.series[genres.indexOf(genre)] : theme.neutral;
  };

  const songsIn = (label) => {
    const incoming = flows.filter((f) => f.target === label);
    const flowsOf = incoming.length ? incoming : flows.filter((f) => f.source === label);
    return flowsOf.reduce((sum, f) => sum + f.value, 0);
  };
  const total = songsIn(labels[0]);
  const songs = (n) => `${n} ${n === 1 ? "song" : "songs"}`;

  const nodeTooltip = (label) =>
    tooltipBody(theme, label, [
      ["Songs", songs(songsIn(label))],
      label !== labels[0] && ["Share of top 100", `${Math.round((100 * songsIn(label)) / total)}%`],
      genreOf(label) && !genres.includes(label) && ["Genre", genreOf(label)],
    ]);

  const linkTooltip = (f) =>
    tooltipBody(theme, f.target, [
      ["From", f.source],
      ["Songs", songs(f.value)],
      [`Share of ${f.source}`, `${Math.round((100 * f.value) / songsIn(f.source))}%`],
      // Three names per line keeps the tooltip narrow.
      ...(f.members || [])
        .reduce((lines, name, i) => {
          if (i % 3 === 0) lines.push([]);
          lines[lines.length - 1].push(name);
          return lines;
        }, [])
        .map((line) => [null, line.join(", ")]),
    ]);

  const data = [
    {
      type: "sankey",
      arrangement: "snap",
      node: {
        label: labels,
        color: labels.map(colorOf),
        pad: isNarrow ? 8 : 12,
        thickness: isNarrow ? 12 : 16,
        line: { width: 0 },
        customdata: labels.map(nodeTooltip),
        hovertemplate: CUSTOM_TOOLTIP,
      },
      link: {
        source: flows.map((f) => labels.indexOf(f.source)),
        target: flows.map((f) => labels.indexOf(f.target)),
        value: flows.map((f) => f.value),
        color: flows.map((f) => withAlpha(colorOf(f.target), 0.35)),
        customdata: flows.map(linkTooltip),
        hovertemplate: CUSTOM_TOOLTIP,
      },
      textfont: { color: theme.ink, size: isNarrow ? 10 : 12 },
    },
  ];

  const layout = {
    ...baseLayout(theme),
    margin: { l: 4, r: 4, t: 8, b: 8 },
  };

  return (
    <ChartFigure
      title="Where my top 100 songs come from"
      subtitle="Songs by type, genre and artist. Artists with one song are grouped."
      height={isNarrow ? 520 : 560}
      data={data}
      layout={layout}
    />
  );
};

export default SankeyDiagram;
