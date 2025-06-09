// src/Pages/Blogs/SpotifyBlog/Plots/SankeyDiagram.js
import { useState, useEffect } from "react";
import Plot from "react-plotly.js";

const SankeyDiagram = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/data/2_sankey_top_100.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [plotWidth, setPlotWidth] = useState(720);
  useEffect(() => {
    const updatePlotDimension = () => {
      if (window.innerWidth < 768) {
        setPlotWidth(window.innerWidth - 50);
      } else {
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

    const labels = data.label;
    const sources = data.source;
    const targets = data.target;
    const values = data.value.map((value) => parseInt(value, 10));

    return [
      {
        type: "sankey",
        orientation: "h",
        node: {
          pad: 15,
          thickness: 30,
          line: {
            color: "black",
            width: 0.5,
          },
          label: labels,
          hovertemplate: "%{value} Songs<extra></extra>",
        },

        link: {
          source: sources,
          target: targets,
          value: values,
          color: "purple",
        },
      },
    ];
  };

  const layout = {
    font: {
      size: 11,
      color: "white",
    },
    height: 500,
    width: plotWidth,
    margin: {
      l: 10,
      r: 10,
      b: 10,
      t: 30,
      pad: 4,
    },
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

export default SankeyDiagram;
