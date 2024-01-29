import React from "react";
import MainContent from "./MainContent";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../loginSignup/UserProvider";
import { apppp } from "../loginSignup/firebase";
import { child, get, getDatabase, ref } from "firebase/database";

export default function Dashboard() {
  const navigate = useNavigate();
  const database = getDatabase(apppp);
  const { setUserDevices, userDevices, setArray } = useUserContext();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  useEffect(() => {
    const userid = localStorage.getItem("uid");
    // console.log("userid", userid);
    if (userid) {
      get(child(ref(database), `Users_Devices/${userid}`))
        .then((snapshot) => {
          setUserDevices(snapshot.val());
        })
        .catch((error) => {
          console.error(error);
        });
    }
    // }
  }, [database]);
  useEffect(() => {
    // console.log("userdevices", userDevices);
    const getUserDevices = () => {
      setArray(Object.keys(userDevices));
    };
    getUserDevices();
  }, [userDevices]);
  return (
    <div className=" containerClass overflow-hidden overflow-scroll ">
      <div className=" d-flex justify-content-center align-items-center ">
        <MainContent />
      </div>
    </div>
  );
}