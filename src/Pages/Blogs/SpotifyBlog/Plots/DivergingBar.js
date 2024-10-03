// src/Pages/Blogs/SpotifyBlog/Plots/DivergingBar.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const DivergingBar = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    Papa.parse("/data/6_diverging_bar_chart.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data.reverse());
      },
    });
  }, []);

  const createPlotData = (data) => {
    if (!data || data.length === 0) return [];

    const rows = data.map((row) => `Row ${data.indexOf(row) + 1}`);
    const scale_factor = 1.5;

    const wl = data.map((row) => -row.westlife_percentage / scale_factor);
    const wl_categories = data.map((row) => row.westlife);
    const wl_duration = data.map((row) => `${row.westlife_duration}m`);

    const bsb = data.map((row) => row.bsb_percentage / scale_factor);
    const bsb_categories = data.map((row) => row.bsb);
    const bsb_duration = data.map((row) => `${row.bsb_duration}m`);

    const bar_width = 0.7;
    const bar_border = {
      color: "white", // Set border color to white
      width: 2,
    };

    const westlifeHovertemplate = data.map(
      (row) =>
        `${row.westlife}<br><b>Duration</b>: ${row.westlife_duration} minutes<extra></extra>`
    );
    const bsbHovertemplate = data.map(
      (row) =>
        `${row.bsb}<br><b>Duration</b>: ${row.bsb_duration} minutes<extra></extra>`
    );

    const traceWestlife = {
      x: wl,
      y: rows,
      name: "Westlife",
      type: "bar",
      text: wl_categories,
      textposition: "inside",
      orientation: "h",
      hovertemplate: westlifeHovertemplate,
      width: bar_width,
      marker: {
        color: "#FF69B4",
        line: bar_border,
      },
    };

    const traceBsB = {
      x: bsb,
      y: rows,
      name: "Backstreet Boys",
      type: "bar",
      text: bsb_categories,
      textposition: "inside",
      orientation: "h",
      hovertemplate: bsbHovertemplate,
      width: bar_width,
      marker: {
        color: "#DDA0DD",
        line: bar_border,
      },
    };

    const traceWestlifeOutside = {
      x: wl,
      y: rows,
      name: "Westlife",
      type: "bar",
      text: wl_duration,
      textposition: "outside",
      textfont: {
        color: "white",
      },
      orientation: "h",
      showlegend: false,
      width: bar_width,
      marker: {
        color: "#FF69B4",
        line: bar_border,
      },
    };

    const traceBsBOutside = {
      x: bsb,
      y: rows,
      name: "Backstreet Boys",
      type: "bar",
      text: bsb_duration,
      textposition: "outside",
      textfont: {
        color: "white",
      },
      orientation: "h",
      showlegend: false,
      width: bar_width,
      marker: {
        color: "#DDA0DD",
        line: bar_border,
      },
    };

    return [traceWestlifeOutside, traceBsBOutside, traceWestlife, traceBsB];
  };

  const layout = {
    title: {
      text: "Westlife vs Backstreet Boys",
      font: { color: "white" }, // Title text color
    },
    barmode: "overlay",
    xaxis: {
      visible: false,
      range: [-105, 80],
      title: {
        font: { color: "white" }, // X-axis title color
      },
      tickfont: { color: "white" }, // X-axis tick color
    },
    yaxis: {
      visible: false,
    },
    showlegend: true,
    legend: {
      x: 1.15,
      y: 1.15,
      xanchor: "right",
      yanchor: "top",
      bgcolor: "rgba(0, 0, 0, 0.5)", // Adjust legend background if needed
      bordercolor: "white", // Legend border color
      borderwidth: 1,
      font: { color: "white" }, // Legend text color
    },
    height: 300,
    width: 720,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
    bargroupgap: 0.01,
    paper_bgcolor: "#181e39", // Background color of the entire plot
    plot_bgcolor: "#181e39",  // Background color of the plotting area
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default DivergingBar;
