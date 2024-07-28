import React from "react";
import Plot from "react-plotly.js";

const PlotlyChart = () => {
  return (
    <Plot
      data={[
        {
          x: [1, 2, 3, 4, 5],
          y: [2, 6, 3, 8, 5],
          type: "scatter",
          mode: "lines+markers",
          marker: { color: "red" },
        },
        {
          type: "bar",
          x: [1, 2, 3, 4, 5],
          y: [2, 5, 3, 7, 4],
        },
      ]}
      layout={{ title: "A Simple Plotly Chart" }}
    />
  );
};

export default PlotlyChart;
