import React from "react";
import "./Styles/RecentUpdate.css";

import { useState, useEffect } from "react";


import battery from "../../Images/image 1.png";
import temp from "../../Images/image 8.png";
import humidity from "../../Images/image 4.png";
import soilMoisture from "../../Images/image 1.png";
import soilTemp from "../../Images/image 5.png";
import lightIn from "../../Images/image 2.png";
import ph from "../../Images/image 3.png";
import ec from "../../Images/image 7.png";
import { useUserContext } from "../loginSignup/UserProvider";


export default function RecentUpdates() {
  const { lastUpdate, array, devices, setLastUpdate, battry, setBattry, setBtLog } =
    useUserContext();
  let BtArray = []
  const [entries1, setEntries1] = useState([]);
  const [deviceNamee, setDeviceNamee] = useState('AE01');


  const getDeviceDetails = async (deviceName = 'AE01') => {
    setDeviceNamee(deviceName)
    if (deviceName in devices) {
      await setLastUpdate(devices[deviceName][Object.keys(devices[deviceName])[0]]);
      await setBattry(devices[deviceName][Object.keys(devices[deviceName])[1]])
      setEntries1(Object.entries(battry))
    }
    // entries1.map(([key, value], index) => {
    //   let counter = 0;
    //   if (counter < 12) {
    //     BtArray.push(value.BT);
    //     counter++;
    //   }
    // })
    await setBtLog(BtArray)
  };

  useEffect(() => {
    getDeviceDetails();
  }, []);

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
    <div className="container-fluid  mt-3 ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 mt-2  d-flex d-flex align-items-center justify-content-between">
          <div className="col-6 d-flex align-items-center">
            <h1>Recent Updates</h1>
            <span className="ms-2 fw-bold">{convertEpoch(lastUpdate.DT)}</span>
          </div>
          <div className="col- 1 me-1">
            <div className="dropdown">
              <a
                className="btn btn-secondary dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {deviceNamee}
              </a>

              <ul className="dropdown-menu">
                {array.map((value, i) => (

                  <li key={i}>
                    <a
                      className="dropdown-item"
                      onClick={() => getDeviceDetails(value)}
                    >
                      {value}
                    </a>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3 ">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row   d-flex  justify-content-center align-items-center">
                    <h3 className="fw-bold">Battery</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={battery} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className=" amount">{lastUpdate.BT}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  p-0  d-flex  justify-content-center align-items-center">
                    <h1 className="fw-bold fs-5 d-flex">
                      Ambitious Temperature
                    </h1>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={temp} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="amount">{lastUpdate.T}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row d-flex  justify-content-center align-items-center ">
                    <h1 className="fw-bold fs-4">Ambitious Humidity</h1>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={humidity} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="amount">{lastUpdate.H}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <h3 className="fw-bold">Soil Moisture</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={soilMoisture} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="amount">{lastUpdate.SM}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row d-flex  justify-content-center align-items-center ">
                    <h3 className="fw-bold">Soil Temperature</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={soilTemp} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="amount">{lastUpdate.ST}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3 ">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <h3 className="fw-bold">Light Intensity</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={lightIn} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="amount">{lastUpdate.LI}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <h3 className="fw-bold">pH</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={ph} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center ">
                      <h1 className="text-center amount">{lastUpdate.PH}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <h3 className="fw-bold">EC</h3>
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={ec} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h6 className="text-center amount">{lastUpdate.EC}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
