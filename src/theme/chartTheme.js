// src/theme/chartTheme.js
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

export const useCsv = (path) => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    Papa.parse(path, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete: (results) => setRows(results.data),
    });
  }, [path]);

  return rows;
};

// Categorical slots, validated for CVD separation on each surface.
// Fixed order: assign by entity, never cycle past the end.
const palettes = {
  light: {
    series: ["#2a78d6", "#eb6834", "#1baf7a", "#eda100", "#e87ba4", "#008300", "#6250d6", "#e34948", "#0d9fb8"],
    surface: "#ffffff",
    ink: "#141413",
    inkSecondary: "#55534e",
    muted: "#8a8780",
    grid: "#e8e6e0",
    axis: "#c3c2b7",
    neutral: "#c9c7bf",
    up: "#2a78d6",
    down: "#e34948",
  },
  dark: {
    series: ["#3987e5", "#d95926", "#199e70", "#c98500", "#d55181", "#008300", "#9085e9", "#e66767", "#1aa6bd"],
    surface: "#1a1a19",
    ink: "#f0efec",
    inkSecondary: "#c3c2b7",
    muted: "#898781",
    grid: "#2c2c2a",
    axis: "#4a4a46",
    neutral: "#55544f",
    up: "#3987e5",
    down: "#e66767",
  },
};

const darkQuery = "(prefers-color-scheme: dark)";

export const useChartTheme = () => {
  const getScheme = () =>
    window.matchMedia && window.matchMedia(darkQuery).matches ? "dark" : "light";
  const [scheme, setScheme] = useState(getScheme);

  useEffect(() => {
    const media = window.matchMedia(darkQuery);
    const onChange = () => setScheme(getScheme());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return palettes[scheme];
};

export const useIsNarrow = (breakpoint = 640) => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const onResize = () => setIsNarrow(window.innerWidth < breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isNarrow;
};

// Hex to rgba, for translucent fills such as Sankey links.
export const withAlpha = (hex, alpha) => {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
};

// Number formatting shared by tooltips and labels.
export const fmt = (n) => Math.round(Number(n)).toLocaleString("en-US");
export const pct = (part, whole) => `${((100 * part) / whole).toFixed(1)}%`;
export const signed = (n) => `${n > 0 ? "+" : n < 0 ? "−" : ""}${fmt(Math.abs(n))}`;

// Consistent tooltip body: a bold title, then "label  value" rows with the
// label in muted ink. Values may be literal text or Plotly %{...} tokens.
export const tooltipBody = (theme, title, rows = []) =>
  `<b>${title}</b>` +
  rows
    .filter(Boolean)
    .map(([label, value]) =>
      label
        ? `<br><span style="color:${theme.muted}">${label}</span>\u00a0\u00a0${value}`
        : `<br><span style="color:${theme.muted}">${value}</span>`
    )
    .join("");

export const tooltip = (theme, title, rows) =>
  `${tooltipBody(theme, title, rows)}<extra></extra>`;

// For traces that take hover text through customdata.
export const CUSTOM_TOOLTIP = "%{customdata}<extra></extra>";

export const fontFamily = '"Inter", system-ui, -apple-system, "Segoe UI", sans-serif';

export const baseLayout = (theme) => ({
  autosize: true,
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  font: { family: fontFamily, size: 13, color: theme.inkSecondary },
  hoverlabel: {
    bgcolor: theme.surface,
    bordercolor: theme.axis,
    font: { family: fontFamily, size: 13, color: theme.ink },
    align: "left",
    namelength: -1,
  },
  hoverdistance: 30,
  margin: { l: 0, r: 0, t: 8, b: 0 },
});

export const axisStyle = (theme) => ({
  color: theme.muted,
  gridcolor: theme.grid,
  linecolor: theme.axis,
  zerolinecolor: theme.axis,
  tickfont: { color: theme.muted, size: 12 },
  automargin: true,
  fixedrange: true,
});

// Shared wrapper: HTML title, subtitle and source note around a
// responsive Plotly chart with the toolbar hidden.
export const ChartFigure = ({ title, subtitle, note, height, data, layout, children }) => (
  <figure className="chart">
    {(title || subtitle) && (
      <figcaption className="chart__header">
        {title && <h3 className="chart__title">{title}</h3>}
        {subtitle && <p className="chart__subtitle">{subtitle}</p>}
      </figcaption>
    )}
    {children || (
      <Plot
        data={data}
        layout={{ ...layout, height }}
        config={{ displayModeBar: false, responsive: true }}
        useResizeHandler
        style={{ width: "100%", height }}
      />
    )}
    {note && <p className="chart__note">{note}</p>}
  </figure>
);
