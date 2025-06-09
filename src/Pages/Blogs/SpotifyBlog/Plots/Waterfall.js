// src/Pages/Blogs/SpotifyBlog/Plots/Waterfall.js
import { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const Waterfall = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/8_waterfall_month.csv", {
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
        var w = window.innerWidth - 50;
        var h = parseInt(w * 0.55);
        setPlotHeight(h);
        setPlotWidth(w);
      } else {
        setPlotHeight(400);
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

    const x = data.map((row) => row.x);
    const y = data.map((row) => row.y);
    const text = data.map((row) => "Month " + parseInt(row.n_weeks));

    return [
      {
        name: "8_waterfall",
        type: "waterfall",
        x: x,
        y: y,
        text: text,
        text_position: "inside",
        decreasing: { marker: { color: "#FF7F7F" } },
        increasing: { marker: { color: "#A0E5D9" } },
      },
    ];
  };

  const layout = {
    height: plotHeight,
    width: plotWidth,
    xaxis: {
      title: "",
      color: "white",
    },
    yaxis: {
      title: "min",
      color: "white",
    },
    paper_bgcolor: "#181e39",
    plot_bgcolor: "#181e39",
    margin: {
      l: 50,
      r: 50,
      b: 50,
      t: 50,
    },
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default Waterfall;
