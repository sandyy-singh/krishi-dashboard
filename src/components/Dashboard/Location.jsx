import React, { useEffect, useState } from "react";
import "./Styles/Location.scss";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { useUserContext } from "../loginSignup/UserProvider";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const Location = () => {
  const [chartData, setChartData] = useState([32, 20, 18, 32, 32, 20, 18, 32, 32, 20, 11, 19])
  const { array, setArray, lastUpdate, devices, setLastUpdate, battry, setBattry, ecLog, setEcLog } =
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

  const getDeviceDetails = async (deviceName) => {
    if (deviceName in devices) {
      setLastUpdate(devices[deviceName][Object.keys(devices[deviceName])[0]]);
      setBattry(devices[deviceName][Object.keys(devices[deviceName])[1]])
    }
    // console.log("battry", battry)
    const entries = Object.entries(battry);
    let ecArray = []
    entries.map(([key, value], index) => {
      // console.log("BT", key, value.BT)
      let counter = 0;
      if (counter < 12) {
        ecArray.push(value.BT); // Pushing modified elements into newArray
        counter++;
      }
    })
    setEcLog(ecArray)

    console.log("ecLog", ecLog)
  };






  function convertEpoch(value) {
    if (!value) {
      return "";
    }
    var time = new Date(0);
    time.setUTCSeconds(value);
    if (isNaN(time.valueOf())) {
      return "";
    }
    return time.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour24: true,
    });
  }

  return (
    <div className="container-fluid location_height">
      <div className="row ">

        <div className="col-6 d-flex align-items-center">
          <h1>Recent Updates</h1>
          <span className="ms-2 fw-bold">{convertEpoch(lastUpdate.DT)}</span>
        </div>

        <div className="col- 1 me-1">
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Devices
            </a>

            <ul className="dropdown-menu">
              {array.map((value, i) => (
                // {
                //   console.log(value);
                // }
                <li key={i}>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => getDeviceDetails(value)}
                  >
                    {value}
                  </a>
                </li>
              ))}

              {/* <li>
          <a className="dropdown-item" href="#">
            AE02
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="#">
            AE03
          </a>
        </li> */}
            </ul>
          </div>
        </div>



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

        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>Soil moisture</h5></div>
          <div className="box ">


            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5  ">
          <div className="graphname"><h5>Amb. Humidity</h5></div>
          <div className="box">
            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>Soil Temperature</h5></div>
          <div className="box">
            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5  ">
          <div className="graphname"><h5>Light Intensity</h5></div>
          <div className="box">
            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>PH</h5></div>
          <div className="box">
            <Bar data={data1} options={option1} />
          </div>
        </div>

        <div className="col-md-6 pt-5 ">
          <div className="graphname"><h5>Ec</h5></div>
          <div className="box">
            <Bar data={data1} options={option1} />
          </div>
        </div>





        {/* <div className="col-12 mt-4 ">
          <h1 className="">Device Updates</h1>
        </div>
        <div className="col-md-6 mt-4 mt-sm-5 chart-cards1">
          <div className="row   pt-2">
            <div className="col-5 col-sm-6">
              <h2 className="">Overview</h2>
            </div>
            <div className="col-7 col-sm-5 col-md-4">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">week</button>
                </div>
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">month</button>
                </div>
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">year</button>
                </div>
              </div>
            </div>
            <div className="col-10 d-flex justify-content-center align-items-center w-80">
              <Bar data={data1} options={option1} />
            </div>
          </div>
        </div>

        <div className="col-md-6 mt-4 mt-sm-5  chart-cards1">
          <div className="row  w-80  pt-2">
            <div className="col-5 col-sm-6 ">
              <h2 className="">Overview</h2>
            </div>
            <div className="col-7  col-sm-4">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">week</button>
                </div>
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">month</button>
                </div>
                <div className="col-4">
                  <button className="btn btn-secondary btn-sm">year</button>
                </div>
              </div>
            </div>
            <div className="col-10 d-flex justify-content-center align-items-center chart">
              <Line data={data2} options={option2} />
            </div>
          </div>
      </div> */}
      </div>
    </div>
  );
};

export default Location;
