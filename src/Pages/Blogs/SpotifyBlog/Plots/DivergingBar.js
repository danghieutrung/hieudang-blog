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

  const [plotWidth, setPlotWidth] = useState(720);
  const [showOutsideText, setShowOutsideText] = useState(true);
  const [showLegendBox, setShowLegendBox] = useState(true);

  useEffect(() => {
    const updatePlotWidth = () => {
      if (window.innerWidth < 768) {
        setPlotWidth(window.innerWidth - 50);
        setShowOutsideText(false);
        setShowLegendBox(false);
      } else {
        setPlotWidth(720);
        setShowOutsideText(true);
        setShowLegendBox(true);
      }
    };

    updatePlotWidth();
    window.addEventListener("resize", updatePlotWidth);
    return () => {
      window.removeEventListener("resize", updatePlotWidth);
    };
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
      color: "white",
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
      insidetextanchor: "start",
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
      insidetextanchor: "start",
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
      insidetextanchor: "start",
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
      insidetextanchor: "start",
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

    const plotData = showOutsideText
      ? [traceWestlifeOutside, traceBsBOutside, traceWestlife, traceBsB]
      : [traceWestlife, traceBsB];
    return plotData;
  };

  const layout = {
    barmode: "overlay",
    xaxis: {
      visible: false,
      range: [-105, 80],
      title: {
        font: { color: "white" },
      },
      tickfont: { color: "white" },
    },
    yaxis: {
      visible: false,
    },
    showlegend: showLegendBox,
    legend: {
      x: 1.15,
      y: 1.15,
      xanchor: "right",
      yanchor: "top",
      bgcolor: "rgba(0, 0, 0, 0.5)",
      bordercolor: "white",
      borderwidth: 1,
      font: { color: "white" },
    },
    height: 300,
    width: plotWidth,
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
    bargroupgap: 0.01,
    paper_bgcolor: "#181e39",
    plot_bgcolor: "#181e39",
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot data={createPlotData(data)} layout={layout} config={config} />
    </div>
  );
};

export default DivergingBar;
