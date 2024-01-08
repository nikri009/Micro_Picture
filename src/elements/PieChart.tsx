// import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
  { x: "78%", y: 780 },
  { x: "25%", y: 250 },
  { x: "45%", y: 450 },
];

const PieChart = () => {
  return (
    <div>
      <VictoryPie
        data={myData}
        colorScale={["#ef4444", "#0284c7", "#fde047"]}
        radius={100}
      />
    </div>
  );
};

export default PieChart;