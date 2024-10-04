// src/Pages/Blogs/SpotifyBlog/Plots/GanttSong.js
import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import Papa from "papaparse";

const GanttSong = () => {
  const [data, setData] = useState(null);
  const [plotWidth, setPlotWidth] = useState(720); // Default width

  useEffect(() => {
    Papa.parse("/data/3_gantt_top_otm.csv", {
      download: true,
      header: true,
      complete: function (results) {
        setData(results.data);
      },
    });
  }, []);

  useEffect(() => {
    const updatePlotWidth = () => {
      if (window.innerWidth < 768) {
        setPlotWidth(window.innerWidth - 50);
      } else {
        setPlotWidth(720);
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

    const points = data.map((row) => ({
      marker: {
        symbol: "|",
        color: "#181e39",
      },
      name: "",
      showlegend: false,
      x: [row.timestamp_start, row.timestamp_end],
      y: [row.song_y, row.song_y],
      type: "scatter",
    }));

    const shapes = data.map((row) => ({
      fillcolor: row.song_color,
      line: {
        width: 0,
      },
      opacity: 1,
      type: "rect",
      x0: row.timestamp_start,
      x1: row.timestamp_end,
      xref: "x",
      y0: row.song_y0,
      y1: row.song_y1,
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
        width: plotWidth,
        paper_bgcolor: "#181e39",
        plot_bgcolor: "#181e39",
        hovermode: "closest",
        shapes: shapes,
        showlegend: true,
        title: {
          text: "Song of The Month",
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
          range: [0, 5.5],
          showgrid: false,
          ticktext: [
            "Nơi này có Anh",
            "Born To Die",
            "Heal the World",
            "Speechless",
            "Mặt Trời Của Em",
            "Enchanted",
            "Nuvole Bianche",
            "Sparks Fly",
            "13 Others",
            "Everything Has Changed",
          ],
          tickvals: [0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
          zeroline: false,
        },
        font: { color: "white" },
      },
    };
  };

  const config = { responsive: true };

  return (
    <div className="plot">
      <Plot
        data={createPlotData(data).data}
        layout={createPlotData(data).layout}
        config={config}
      />
    </div>
  );
};

export default GanttSong;
