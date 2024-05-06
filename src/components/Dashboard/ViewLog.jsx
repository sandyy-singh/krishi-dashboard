import React, { useEffect, useState } from "react";
import "./Styles/Location.scss";
import Chart from "chart.js/auto";
import { Bar, Line } from "react-chartjs-2";
import { useUserContext } from "../loginSignup/UserProvider";
import { CategoryScale } from "chart.js";
import { child, get, getDatabase, ref } from "firebase/database";
import { apppp } from "../loginSignup/firebase";

const ViewLog = () => {


  const database = getDatabase(apppp);

  const [deviceName, setDeviceName] = useState('AE01')
  const { array, setArray, lastUpdate, devices, setLastUpdate, battry, setBattry, btLog, setBtLog, setUserDevices, userDevices, setDeviceLogData, deviceLogData } =
    useUserContext();



  useEffect(() => {
    const userid = localStorage.getItem("uid");
    if (userid) {
      get(child(ref(database), "Users_Devices/" + userid))
        .then((snapshot) => {
          setUserDevices(snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [database]);

  const getDeviceDetails = async (deviceName = 'AE01') => {
    if (deviceName in devices) {
      setDeviceName(deviceName)
      await setDeviceLogData(
        devices[deviceName][Object.keys(devices[deviceName])[1]]
      );
    }
  };
  useEffect(() => {
    const getUserDevices = () => {
      setArray(Object.keys(userDevices));
    };
    getUserDevices();
    getDeviceDetails()
  }, [userDevices]);






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
    <div className="container location_height">
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
              {deviceName}
            </a>

            <ul className="dropdown-menu">
              {array.map((value, i) => (

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

              { }
            </ul>
          </div>
        </div>
        <div className=" pt-3 log-table">

          <table className="table  text-center">
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
              {Object.keys(deviceLogData)?.map((item, index) => (

                <tr key={index}>
                  <td>
                    {convertEpoch(item)}
                  </td>
                  <td className={deviceLogData[item].BT < 10 ? 'red pt-3' : 'green pt-3'}>{deviceLogData[item].BT}</td>
                  <td>{deviceLogData[item].T}</td>
                  <td>{deviceLogData[item].SM}</td>
                  <td>{deviceLogData[item].H}</td>
                  <td>{deviceLogData[item].ST}</td>
                  <td>{deviceLogData[item].LI}</td>
                  <td>{deviceLogData[item].PH}</td>
                  <td>{deviceLogData[item].EC}</td>
                </tr>

              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default ViewLog
