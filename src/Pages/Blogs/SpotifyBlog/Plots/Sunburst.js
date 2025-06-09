// src/Pages/Blogs/SpotifyBlog/Plots/Sunburst.js
import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const Sunburst = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/4_sunburst_albums.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const [plotHeight, setPlotHeight] = useState(400);
  const [plotWidth, setPlotWidth] = useState(720);
  useEffect(() => {
    const updatePlotDimension = () => {
      if (window.innerWidth < 768) {
        setPlotHeight(window.innerWidth - 50);
        setPlotWidth(window.innerWidth - 50);
      } else {
        setPlotHeight(720);
        setPlotWidth(720);
      }
    };

    updatePlotDimension();
    window.addEventListener("resize", updatePlotDimension);
    return () => {
      window.removeEventListener("resize", updatePlotDimension);
    };
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    const children = data.map((row) => row.child);
    const parents = data.map((row) => row.parent);
    const values = data.map((row) => row.scale);
    const durations = data.map((row) => row.duration);
    const hovertemplate = children.map(
      (child, index) =>
        `<b>${child}</b><br>${durations[index]} minutes<extra></extra>`
    );

    return [
      {
        type: "sunburst",
        labels: children,
        parents: parents,
        values: values,
        hovertemplate: hovertemplate,
        outsidetextfont: { size: 20, color: "white" },
        leaf: { opacity: 1 },
        marker: {
          line: {
            width: 2,
            color: "black",
          },
        },
      },
    ];
  };

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    height: plotHeight,
    width: plotWidth,
    paper_bgcolor: "#181e39",
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default Sunburst;
