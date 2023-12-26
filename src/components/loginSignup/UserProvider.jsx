import { child, get, getDatabase, ref } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { apppp } from "./firebase";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [allData, setAllData] = useState([]);
  const [updateDataa, setUpdateDataa] = useState([]);
  const [farmerNumber, setFarmerNumber] = useState("");
  const [editData, setEditData] = useState([]);
  const [accessDataForEdit, setAccessDataForEdit] = useState({});
  const [devices, setDevices] = useState([]);
  const [array, setArray] = useState([]);
  // const [dateAndTime, setDateAndTime] = useState();
  // const [lastUpdate, setLastUpdate] = useState([]);
  // console.log(array);
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

  const database = getDatabase(apppp);
  useEffect(() => {
    get(child(ref(database), "WiFi_Devices/"))
      .then((snapshot) => {
        // setLastUpdate(snapshot.val());
        setDevices(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, [database]);
  // console.log(devices);
  // console.log(array);

  // console.log(devices["AE01"][Object.keys(devices["AEO1"])[0]]);
  // console.log(devices);
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
