// src/Pages/Blogs/SpotifyBlog/Plots/WindRose.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const WindRose2 = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/9_wind_rose_listening_hour.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  const [plotHeight, setPlotHeight] = useState(720);
  const [plotWidth, setPlotWidth] = useState(720);
  useEffect(() => {
    const updatePlotDimension = () => {
      if (window.innerWidth < 768) {
        setPlotHeight(parseInt(window.innerWidth * 0.75));
        setPlotWidth(parseInt(window.innerWidth * 0.75));
      } else {
        setPlotHeight(480);
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

    const hour = data.map((row) => row.hour);
    const duration = data.map((row) => row.duration);

    return [
      {
        r: duration,
        theta: hour,
        name: "duration",
        marker: { color: "#f0f921" },
        type: "barpolar",
        hovertemplate: "Hour: %{theta}<br>Minutes: %{r:.0f}<extra></extra>",
      },
    ];
  };

  var layout = {
    color: "white",
    paper_bgcolor: "#181e39",
    plot_bgcolor: "#181e39",
    height: plotHeight,
    width: plotWidth,
    margin: {
      l: 20,
      r: 20,
      b: 75,
      t: 75,
    },
    polar: {
      bgcolor: "black",
      angularaxis: {
        direction: "clockwise",
        showline: false,
        showgrid: false,
        linecolor: "white",
        type: "category",
        ticks: " ",
        tickfont: {
          color: "white",
          size: 15,
        },
      },
      radialaxis: {
        angle: 90,
        tickangle: 45,
        showgrid: false,
        showline: false,
        showticklabels: false,
        ticks: "",
      },
    },
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default WindRose2;
