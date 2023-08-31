import React from "react";
import { PieChart } from "react-minimal-pie-chart"; // this is also nice pie chart for last div section
import {
  Chart as ChartJS,
  PointElement,
  Title,
  LineElement,
  ArcElement,
  BarElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Title,
  BarElement,
  LineElement,
  PointElement,

  CategoryScale, //x axis
  LinearScale, //y axis
  Tooltip,

  Legend
);

const Dashboard = () => {
  let data2 = [
    { title: "One", value: 1, color: "#FFC074" },
    { title: "Two", value: 2, color: "#A2D2FF" },
    { title: "Three", value: 3, color: "#FF9292" },
  ];
  const data = {
    type: "bar",

    labels: ["tuhin", "abul", "kodom", "rohim"],
    datasets: [
      {
        label: 33333,
        data: [10, 60, 30, 20],
        backgroundColor: ["red", "purple", "gray", "green"],
        // backgroundColor: "yellow",
        borderColor: "pink",
        borderWidth: 4,
        PointBorderColor: "blue",

        // fill: true,
        tension: 0.5,
        hoverOffset: 30,
      },
    ],
  };
  const options = {
    animations: {
      tension: {
        duration: 1000,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    layout: {
      padding: {
        left: 20,
        top: 20,
        right: 20,
        bottom: 20,
      },
    },
    scales: {
      y: {
        // min: 1,
        // max: 100,
      },
      x: {
        // min: 0,
        // max: 100,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Custom Chart Title",
        color: "blue",
        align: "center", //start,center,end
        position: "bottom", // top,left,bottom,rigt
        padding: {
          top: 10,
          bottom: 30,
        },
      },
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 20,
            style: "italic",
          },
        },
      },
    },
  };
  return (
    <div>
      Dashboard
      <div className="p-4 w-96 ">
        <Doughnut data={data} options={options} />
        <Pie data={data} options={options} />
        <div style={{ width: "620px", height: "400px" }}>
          <Bar data={data} options={options} />
        </div>
        <div style={{ width: "620px", height: "400px" }}>
          <Line data={data} options={options}></Line>
        </div>
        {/* ----------------react-minimal-pie-chart----------------- */}
        <div style={{ backgroundColor: "#DAE5D0" }}>
          <h1>react-minimal-pie-chart</h1>
          <PieChart
            animate
            animationDuration={40}
            animationEasing="ease-in"
            center={[50, 50]}
            data={data2}
            lineWidth={15}
            lengthAngle={360}
            paddingAngle={0}
            radius={50}
            rounded
            startAngle={0}
            viewBoxSize={[100, 100]}
            labelStyle={{
              fontSize: "6px",
              fontColor: "FFFFFA",
              fontWeight: "500",
              fontFamily: "monospace",
            }}
            label={(data) => data.dataEntry.title}
            labelPosition={70}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
