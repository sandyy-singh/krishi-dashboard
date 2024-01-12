import React, { useEffect, useState } from "react";
import "./AddDivices.scss";
import { useUserContext } from "../loginSignup/UserProvider";
import { apppp } from "../loginSignup/firebase";
import { getDatabase, push, ref, set, update } from "firebase/database";
const AddDivices = ({ AddDiviceClose, setaddDivicePopup }) => {
  const { userId, setUserDevices, userDevices, setArray, array } =
    useUserContext();
  const db = getDatabase(apppp);
  const [deviceID, setDeviceID] = useState("");
  const [deviceName, setDeviceName] = useState("");
  const handleAddDevice = async (e) => {
    if (!deviceID && !deviceName) {
      alert("Enter all fields");
    }
    try {
      const userDevicesRef = ref(db, `Users_Devices/${userId}`);
      console.log("adding data to firebase");
      console.log("devicename", deviceName);
      await update(userDevicesRef, {
        [deviceName]: deviceID,
      });
      console.log("data sent successfully");
      setUserDevices({
        ...userDevices,
        [deviceID]: { deviceName: "192.168.6.9" },
      });
      setArray((prevArray) => [...prevArray, deviceName]);

      AddDiviceClose();
    } catch (error) {
      console.error("Error", error);
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
                  <label className="labelsName" for="DeviceID">
                    Device ID
                  </label>
                  <input
                    type="text"
                    id="DeviceID"
                    className="form-control"
                    placeholder="Device ID"
                    onChange={(e) => setDeviceID(e.target.value)}
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
