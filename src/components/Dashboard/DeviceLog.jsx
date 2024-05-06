import React, { useState } from "react";
import "./DeviceLog.scss";
import { useUserContext } from "../loginSignup/UserProvider";

const DeviceLog = ({ activeDevice }) => {
  const { DevicesLogs, setDevicesLogs, deviceLogData } = useUserContext();
  const logclosedHandle = () => {
    setDevicesLogs(false);
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
    <div className="container-fluid">
      <div className="row">
        <div className=" col log-popup-boxx">
          <div className=" row log-popup-contentt ">

            <div className="col">
              <div className="row">
                <div className="col-12 deviceName">
                  <div>
                    <h6>Device Name : {activeDevice} </h6>
                    <span>
                      <b>Last Update :</b>{" "}
                      {convertEpoch(Object?.keys(deviceLogData)[0])}
                    </span>
                  </div>
                  <div className=" log-closed" onClick={logclosedHandle}>
                    &times;
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-90 log-table">
              <table className="table borderless-table text-center">
                <thead>
                  <tr>
                    <th scope="col">Logs</th>
                    <th scope="col">Battery</th>
                    <th scope="col">Amb. Temperature</th>
                    <th scope="col">Soil Moisture</th>
                    <th scope="col">Amb. Humidity</th>
                    <th scope="col">Soil Temperature</th>
                    <th scope="col">Light Internsity</th>
                    <th scope="col">ph</th>
                    <th scope="col">Ec</th>
                  </tr>
                </thead>
                <tbody>

                  {Object.keys(deviceLogData).map((device, index) => (
                    <tr>
                      <td className="device">{convertEpoch(device)}</td>
                      <td className={deviceLogData[device].BT < 10 ? 'red pt-3' : 'green pt-3'}>{deviceLogData[device].BT}</td>
                      <td>{deviceLogData[device].SM}</td>
                      <td>{deviceLogData[device].H}</td>
                      <td>{deviceLogData[device].ST}</td>
                      <td>{deviceLogData[device].LI}</td>
                      <td>{deviceLogData[device].PH}</td>
                      <td>{deviceLogData[device].EC}</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default DeviceLog;
