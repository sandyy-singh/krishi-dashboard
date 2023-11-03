import React from "react";
import "./Styles/Location.scss";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Location = () => {
  const data1 = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [
      {
        label: "2022 ",
        data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 9],
        backgroundColor: "rgba(158, 232, 86, 1)",
      },
      // {
      //     label: "2023 ",
      //     data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 9],
      //     backgroundColor: "rgba(158, 232, 86, 1)",
      // },
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
    scales: {
      y: [
        {
          ticks: {
            min: 0,
            max: 60,
          },
        },
      ],
    },
  };

  const data2 = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
    datasets: [
      {
        label: "2022 ",
        data: [32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 8],
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
    scales: {
      y: [
        {
          ticks: {
            min: 0,
            max: 60,
          },
        },
      ],
    },
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 mt-4">
          <h1 className="">Device Updates</h1>
        </div>

        <div className="col-6">
          <button className="btn btn-secondary mt-4">Divices</button>
        </div>

        <div className="col-md-6 mt-4 mt-sm-5 ">
          <div className="row">
            <div className="col-5 col-sm-6">
              <h2 className="">Overview</h2>
            </div>
            <div className="col-7 col-sm-5 col-md-4">
              <div className="row">
                <div className="col-4"><button className="btn btn-secondary btn-sm">week</button></div>
                <div className="col-4"><button className="btn btn-secondary btn-sm">month</button></div>
                <div className="col-4"><button className="btn btn-secondary btn-sm">year</button></div>
              </div>
            </div>
            <div className="co-12 d-flex justify-content-center align-items-center">
              <Bar data={data1} options={option1} />
            </div>
          </div>
        </div>


        <div className="col-md-6 mt-4 mt-sm-5 ">
          <div className="row">
            <div className="col-5 col-sm-6">
              <h2 className="">Overview</h2>
            </div>
            <div className="col-7  col-sm-4">
              <div className="row">
                <div className="col-4"><button className="btn btn-secondary btn-sm">week</button></div>
                <div className="col-4"><button className="btn btn-secondary btn-sm">month</button></div>
                <div className="col-4"><button className="btn btn-secondary btn-sm">year</button></div>
              </div>
            </div>
            <div className="co-12 d-flex justify-content-center align-items-center">
              <Bar data={data2} options={option2} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Location;
