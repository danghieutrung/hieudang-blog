// src/Pages/Blogs/SpotifyBlog/Plots/Treemap.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const Treemap = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/7_disney_treemap.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    const labels = data.map((row) => row.song);
    const parents = data.map((row) => row.movie);
    const values = data.map((row) => row.duration);
    const hovertemplate = data.map(
      (row) =>
        `${row.song}<br><b>Duration</b>: ${row.duration} minutes<extra></extra>` // Custom hover text
    );

    return [
      {
        type: "treemap",
        branchvalues: "total",
        labels: labels,
        parents: parents,
        values: values,
        textfont: {
          size: 18,
          color: "white"
        },
        textposition: "middle center",
        insidetextfont: {
          variant: "small-caps",
        },
        hovertemplate: hovertemplate
      },
    ];
  };

  const layout = {
    height: 300,
    width: 720,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
    paper_bgcolor: "#181e39",
  }

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot
        data={createPlotData(data)}
        layout={layout}
        config={config}
      />
    </div>
  );
};

export default Treemap;
