import { child, get, getDatabase, ref, set, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { apppp } from "./firebase";
const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [userId, setUserId] = useState(null);
  const [allData, setAllData] = useState([]);
  const [updateDataa, setUpdateDataa] = useState([]);
  const [farmerNumber, setFarmerNumber] = useState("");
  const [editData, setEditData] = useState([]);
  const [accessDataForEdit, setAccessDataForEdit] = useState({});
  const [devices, setDevices] = useState([]);
  const [array, setArray] = useState(["AE01"]);
  const [userDevices, setUserDevices] = useState([]);
  const [DevicesLogs, setDevicesLogs] = useState(false);
  const [deviceLogData, setDeviceLogData] = useState([]);
  const [battry, setBattry] = useState({});
  const [btLog, setBtLog] = useState([62, 53, 43, 65, 44, 62, 53, 43, 65, 44, 62, 53, 43, 65, 44,]);
  const database = getDatabase(apppp);

  const [lastUpdate, setLastUpdate] = useState({
    BT: "62",
    DT: "1686820318",
    EC: "NA",
    H: "51",
    LI: "165",
    PH: "NA",
    SM: "29",
    ST: "23",
    T: "25",
    iNet: "1",
  });


  const [addDivicePopup, setaddDivicePopup] = useState(false);

  const AddDiviceFunc = () => {
    setaddDivicePopup(true);
    console.log("run")
  };
  const AddDiviceClose = () => {
    setaddDivicePopup(false);
  };

  useEffect(() => {
    get(child(ref(database), "WiFi_Devices/"))
      .then((snapshot) => {

        setDevices(snapshot.val());

      })
      .catch((error) => {
        console.error(error);
      });
  }, [database]);


  return (
    <UserContext.Provider
      value={{
        userId,
        setUserId,
        allData,
        setAllData,
        updateDataa,
        setUpdateDataa,
        farmerNumber,
        setFarmerNumber,
        editData,
        setEditData,
        accessDataForEdit,
        setAccessDataForEdit,
        devices,
        setDevices,
        array,
        setArray,
        lastUpdate,
        setLastUpdate,
        userDevices,
        setUserDevices,
        DevicesLogs,
        setDevicesLogs,
        deviceLogData,
        setDeviceLogData,
        battry,
        setBattry,
        btLog,
        setBtLog,
        AddDiviceFunc,
        AddDiviceClose
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
