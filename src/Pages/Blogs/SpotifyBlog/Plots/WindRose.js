// src/Pages/Blogs/SpotifyBlog/Plots/WindRoseReplayer.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const WindRose = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    Papa.parse("/data/9_wind_rose_replayer_js.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    const songs = data.map((row) => row.song);
    const mins_30_45 = data.map((row) => row.mins_30_45);
    const mins_45_60 = data.map((row) => row.mins_45_60);
    const mins_60_plus = data.map((row) => row.mins_60_plus);

    return [
      {
        r: mins_30_45,
        theta: songs,
        name: "30-45 mins",
        marker: { color: "#f0f921" },
        type: "barpolar",
      },
      {
        r: mins_45_60,
        theta: songs,
        name: "45-60 mins",
        marker: { color: "#fdca26" },
        type: "barpolar",
      },
      {
        r: mins_60_plus,
        theta: songs,
        name: "60+ mins",
        marker: { color: "#fb9f3a" },
        type: "barpolar",
      },
    ];
  };

  var layout = {
    color: "white",
    paper_bgcolor: "#181e39",
    plot_bgcolor: "#181e39",
    height: 480,
    width: 720,
    margin: {
      l: 70,
      r: 0,
      b: 50,
      t: 50,
    },
    polar: {
      bgcolor: "black",
      angularaxis: {
        showline: false,
        linecolor: "white",
        ticks: [],
        tickfont: {
          color: "white",
          size: 9,
        },
      },
      radialaxis: {
        showline: false,
        linecolor: "white",
        ticks: "",
        ticktext: [
          /* */
        ],
        tickfont: {
          size: 1,
        },
      },
    },
    legend: {
      font: {
        color: "white",
      },
      bgcolor: "#181e39",
    },
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default WindRose;
