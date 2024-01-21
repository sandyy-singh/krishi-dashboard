import React from "react";
import "./Styles/Weather.scss";
import Weatherpart1 from "./WeatherPart1";
import button1 from "../../Images/Vector2.png";
import button2 from "../../Images/Icon1.png";
import { useUserContext } from "../loginSignup/UserProvider";

import DeviceLog from "./DeviceLog";


export default function Weathers() {


  const { devices, array, DevicesLogs, setDevicesLogs } = useUserContext();

  const deviceLogPopUp = () => {
    setDevicesLogs(true)
  }
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
  // function timechanger(utcSeconds) {
  //   var d = new Date(0);
  //   d.setUTCSeconds(utcSeconds);
  // }
  return (
    <div className="container-fluid mb-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-8 table-heading ">
          <div className="table-heading">
            <div className="row bg-light my-1 py-3 d-flex">
              <div className="col-6 ">
                <h2 className="text-dark text-start"> History Logs</h2>
              </div>
              <div className="col-6  text-end">
                <button className="table-button">
                  <img src={button2} alt=""></img>
                </button>
                <button className="table-button">
                  <img src={button1} alt=""></img>
                </button>
              </div>
            </div>
          </div>

          <div className="tableData">
            <table className="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">S. No</th>
                  <th scope="col">Device names</th>
                  <th scope="col">Last updated</th>
                  <th scope="col">Moisture</th>
                  <th scope="col">pH</th>
                </tr>
              </thead>
              <tbody>
                {array &&
                  array?.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td onClick={deviceLogPopUp}>{item}</td>
                      <td>
                        {convertEpoch(
                          devices[item]?.[Object.keys(devices[item])[0]]?.DT
                        )}
                      </td>
                      <td>
                        {devices[item]?.[Object.keys(devices[item])[0]].SM}
                      </td>
                      <td>
                        {devices[item]?.[Object.keys(devices[item])[0]].PH}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>


        <div className="col-lg-4 d-flex justify-content-center align-items-center">
          <Weatherpart1 />
        </div>
      </div>
      <div >
      {DevicesLogs && <DeviceLog />}

    </div>
    </div>
  );
}
