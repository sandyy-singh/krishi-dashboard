import React, { useEffect, useState } from "react";
import "./AddDivices.scss";
import { useUserContext } from "../loginSignup/UserProvider";
import { apppp } from "../loginSignup/firebase";
import { getDatabase, push, ref, set, update } from "firebase/database";


const AddDivices = ({ AddDiviceClose, setaddDivicePopup }) => {

  const { userId, setUserDevices, userDevices, setArray, array, devices,
    setDevices, } = useUserContext();
  const db = getDatabase(apppp);
  const [deviceID, setDeviceID] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const userid = localStorage.getItem("uid");


  const handleAddDevice = async (e) => {

    if (!deviceID && !deviceName) {
      alert("Enter all fields");
    }

    if (deviceID in devices) {

      try {
        const userDevicesRef = ref(db, `Users_Devices/${userid}`);

        await update(userDevicesRef, {
          [deviceName]: deviceID,
        });
        console.log("data sent successfully");
        setUserDevices({
          ...userDevices,
          [deviceName]: deviceID,
        });
        setArray([...array], deviceName);

        AddDiviceClose();
      } catch (error) {
        console.error("Error", error);
      }

    } else {
      alert("enter valid deavice Name")
      setDeviceID("")
      setDeviceName("")
    }




  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col popup-boxx">
          <div className=" row popup-contentt">
            <span className="  closed" onClick={AddDiviceClose}>
              &times;
            </span>
            <div className="col-12">
              <h2 className="fw-bolder text-dark">Add Device</h2>
            </div>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="col">
                  <label className="labelsName" htmlFor="DeviceID">
                    Device ID
                  </label>
                  <input
                    type="text"
                    id="DeviceID"
                    className="form-control"
                    placeholder="Device ID"
                    onChange={(e) => setDeviceID(e.target.value)}
                    value={deviceID}
                  // required
                  />
                </div>
                <div className="col">
                  <label className="labelsName" for="DeviceName">
                    Device Name
                  </label>
                  <input
                    type="text"
                    id="DeviceName"
                    className="form-control"
                    placeholder="Device Name"
                    onChange={(e) => setDeviceName(e.target.value)}
                    value={deviceName}
                  // required
                  />
                </div>

                <button
                  className="btn btn-success mt-3 w-100"
                  onClick={handleAddDevice}
                >
                  Add Device
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDivices;
