// src/Pages/Blogs/SpotifyBlog/Plots/GanttArtist.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const GanttArtist = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Papa.parse("/data/3_gantt_top_otm.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    const points = data.map((row) => ({
      marker: {
        color: "#181e39",
      },
      line: {
        color: "white",
        width: 2,
      },
      name: "",
      showlegend: false,
      x: [row.timestamp_start, row.timestamp_end],
      y: [row.artist_y, row.artist_y],
      type: "scatter",
    }));

    const shapes = data.map((row) => ({
      fillcolor: row.artist_color,
      line: {
        width: 0,
      },
      opacity: 1,
      type: "rect",
      x0: row.timestamp_start,
      x1: row.timestamp_end,
      xref: "x",
      y0: row.artist_y0,
      y1: row.artist_y1,
      yref: "y",
    }));

    return {
      data: points,
      layout: {
        margin: {
          l: 150,
          r: 20,
          t: 30,
          b: 50,
        },
        height: 360,
        width: 720,
        paper_bgcolor: "#181e39",
        plot_bgcolor: "#181e39",
        hovermode: "closest",
        shapes: shapes,
        showlegend: true,
        title: {
          text: "Artist of The Month",
          font: { color: "white" },
        },
        xaxis: {
          title: {
            font: { color: "white" },
          },
          tickfont: { color: "white" },
          gridcolor: "white",
        },
        yaxis: {
          autorange: false,
          range: [0, 5],
          showgrid: false,
          ticktext: [
            "Sơn Tùng M-TP",
            "Andiez",
            "JustaTee",
            "Lana Del Rey",
            "Joe Hisaishi",
            "Frédéric Chopin",
            "Ludovico Einaudi",
            "Ed Sheeran",
            "Taylor Swift",
          ],
          tickvals: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5],
          zeroline: false,
          title: {
            font: { color: "white" },
          },
          tickfont: { color: "white" },
          gridcolor: "white",
        },
        font: { color: "white" },
      },
    };
  };

  const config = { responsive: true };

  return (
    <div className="plot" style={{ width: "100%", height: "100%" }}>
      <Plot
        data={createPlotData(data).data}
        layout={createPlotData(data).layout}
        config={config}
      />
    </div>
  );
};

export default GanttArtist;
