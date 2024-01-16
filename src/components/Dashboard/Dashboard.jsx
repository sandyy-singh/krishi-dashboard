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
  const { setUserDevices, userDevices } = useUserContext();

  useEffect(() => {
    get(child(ref(database), "Users_Devices/MBfl4iZAvfQHEYnNidj9Ag1WtUo2"))
      .then((snapshot) => {
        // setLastUpdate(snapshot.val());
        setUserDevices(snapshot.val());
      })
      .catch((error) => {
        console.error(error);
      });
  }, [database]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);
  return (
    <div className="container-fluid containerClass overflow-hidden overflow-scroll ">
      <div className=" row d-flex justify-content-center align-items-center ">
        <MainContent />
      </div>
    </div>
  );
}
