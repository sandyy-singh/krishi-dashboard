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

export default function RecentUpdates() {
  const [lastUpdate, setLastUpdate] = useState({});
  const database = getDatabase(apppp);
  useEffect(() => {
    get(child(ref(database), "WiFi_Devices/AE01/Last Update"))
      .then((snapshot) => {
        setLastUpdate(snapshot.val());
        console.log(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
    console.log(database);
    console.log(apppp);
  }, []);

  return (
    <div className="container-fluid  mt-3 ">
      <div className="row">
        <div className="col-12 ">
          <h1>Recent Updates</h1>
        </div>
        <div className="col-12 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards ">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={battery} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.BT}</h1>

                  <h6 className="">Battery</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={temp} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.T}</h1>

                  <h6 className="">Amb. Temperature</h6>
                </div>
              </div>
            </div>
            

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={humidity} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.H}</h1>

                  <h6 className="">Amb. Humidity</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={soilMoisture} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.SM}</h1>

                  <h6 className="">Soil Moisture</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={soilTemp} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.ST}</h1>

                  <h6 className="">Soil Temperature</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={lightIn} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.LI}</h1>

                  <h6 className="">Light Intensity</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={ph} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.PH}</h1>

                  <h6 className="">pH</h6>
                </div>
              </div>
            </div>

            <div className="col-sm-5 col-md-3 d-flex justify-content-center align-items-center cards">
              <div className="row  ">
                <div className="col-6 d-flex justify-content-center align-items-center ">
                  <img src={ec} alt=""></img>
                </div>
                <div className="col-6 d-flex flex-column justify-content-center align-items-center">
                  <h1 className="">{lastUpdate.EC}</h1>

                  <h6 className="">EC</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
