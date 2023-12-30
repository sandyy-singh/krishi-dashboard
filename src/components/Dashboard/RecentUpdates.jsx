import React from "react";
import "./Styles/RecentUpdate.css";
import { getDatabase, ref, child, get } from "firebase/database";
import { useState, useEffect } from "react";
import { apppp } from "../loginSignup/firebase";

import battery from "../../Images/image 1.png";
import temp from "../../Images/image 8.png";
import humidity from "../../Images/image 4.png";
import soilMoisture from "../../Images/image 1.png";
import soilTemp from "../../Images/image 5.png";
import lightIn from "../../Images/image 2.png";
import ph from "../../Images/image 3.png";
import ec from "../../Images/image 7.png";
import { useUserContext } from "../loginSignup/UserProvider";
import { compileString } from "sass";
export default function RecentUpdates() {
  const { lastUpdate } = useUserContext();
  // const { devices, setDevices } = useUserContext();
  // console.log(devices);
  // console.log(array);
  // const database = getDatabase(apppp);
  // useEffect(() => {
  //   get(child(ref(database), "WiFi_Devices/"))
  //     .then((snapshot) => {
  //       // setLastUpdate(snapshot.val());
  //       setDevices(snapshot.val());
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [database]);
  // console.log("devices", devices);
  // const obj = [];
  // const obj = Object.keys(devices);
  // console.log(obj);

  return (
    <div className="container-fluid  mt-3 ">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 ">
          <h1>Recent Updates</h1>
        </div>
        <div className="col-12">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3 ">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row   d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={battery} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.BT}</h1>

                      <h6 className="">Battery</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row   d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={temp} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.T}</h1>
                      <h6 className="">Amb. Temperature</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row d-flex  justify-content-center align-items-center ">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={humidity} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.H}</h1>
                      <h6 className="">Amb. Humidity</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={soilMoisture} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.SM}</h1>
                      <h6 className="">Soil Moisture</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row d-flex  justify-content-center align-items-center ">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={soilTemp} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.ST}</h1>

                      <h6 className="">Soil Temperature</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3 ">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={lightIn} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="">{lastUpdate.LI}</h1>

                      <h6 className="">Light Intensity</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={ph} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center ">
                      <h1 className="text-center">{lastUpdate.PH}</h1>

                      <h6 className="text-center">pH</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 mt-sm-4 mt-3">
              <div className="row   d-flex flex-column justify-content-center align-items-center">
                <div className="cards col-11">
                  <div className="row  d-flex  justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-center align-items-center ">
                      <img src={ec} alt=""></img>
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                      <h1 className="text-center">{lastUpdate.EC}</h1>

                      <h6 className="text-center">EC</h6>
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
