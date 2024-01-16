import { child, get, getDatabase, ref, set, update } from "firebase/database";
import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import { apppp } from "./firebase";
// import { json } from "react-router-dom";

const UserContext = createContext();
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [allData, setAllData] = useState([]);
  const [updateDataa, setUpdateDataa] = useState([]);
  const [farmerNumber, setFarmerNumber] = useState("");
  const [editData, setEditData] = useState([]);
  const [accessDataForEdit, setAccessDataForEdit] = useState({});
  const [devices, setDevices] = useState([]);
  const [array, setArray] = useState(["AE01"]);
  const [userDevices, setUserDevices] = useState([]);
  const database = getDatabase(apppp);
  // const [userID, serUserID] = useState(null);
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
  useEffect(() => {
    setUserId(localStorage.getItem("uid"));
  }, []);
  console.log("userid", userId);
  useEffect(() => {
    const userid = localStorage.getItem("uid");
    console.log("userid", userid);
    if (userid) {
      get(child(ref(database), `Users_Devices/fsvIv6XcVmd9Um4LxPTPSAeNEWv2`))
        .then((snapshot) => {
          console.log(snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
    }
    // }
  }, [database]);
  useEffect(() => {
    const getUserDevices = () => {
      setArray(Object.keys(userDevices));
    };
    getUserDevices();
  }, [devices]);
  useEffect(() => {
    // console.log("second");
    get(child(ref(database), "WiFi_Devices/"))
      .then((snapshot) => {
        // setLastUpdate(snapshot.val());
        setDevices(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, [database]);
  //

  // console.log("userdevices", userDevices);
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
        userDevices,
        setUserDevices,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
     

