import React, { useEffect, useState } from "react";
import "./Styles/Location.scss";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { useUserContext } from "../loginSignup/UserProvider";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const GrphLocation = () => {

  const [chartData, setChartData] = useState([32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 19])
  const { array, devices, setArray, lastUpdate, setLastUpdate, ecLog, setEcLog } =
    useUserContext();
  // console.log(array);
  const data1 = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [
      {
        label: "2022 ",
        data: ecLog,
        backgroundColor: "rgba(158, 232, 86, 1)",
      },

    ],
  };

  const option1 = {
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "bar chart",
    },
    // scales: {
    //   y: [

    //     {

    //       ticks: {
    //         min: 0,
    //         max: 60,
    //       },
    //     },
    //   ],
    // },
  };

  const data2 = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [
      {
        label: "2022 ",
        data: ["32", 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 8],
        backgroundColor: "rgba(158, 232, 86, 1)",
      },
    ],
  };

  const option2 = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    title: {
      display: true,
      text: "bar chart",
    },
    // scales: {
    //   y:
    //   {
    //     ticks: {
    //       min: 0,
    //       max: 60,
    //     },
    //   },

    // },
  };
  return (
    <div className="container-fluid ">
      <div className="row ">


        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>Battery</h5></div>
          <div className="box ">
            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>Amb. Temperature</h5></div>
          <div className="box ">
            <Bar data={data1} options={option1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GrphLocation
