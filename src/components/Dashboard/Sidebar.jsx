import React from "react";
import krishi_logo from "../../Images/krishi_logo.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, } from "react";
import "./Sidebar.scss";
const Sidebar = ({ AddDiviceFunc }) => {
  const navigate = useNavigate();


  const [activeListItem, setActiveListItem] = useState("Dashboard");

  const handleListItemClick = async (listItemName) => {

    setActiveListItem(listItemName);

  };
  const handleListItemClick2 = async (listItemName) => {
    await AddDiviceFunc()
    setActiveListItem(listItemName);

  };


  const isListItemActive = (listItemName) => {
    return activeListItem === listItemName ? "orange" : "black";
  };


  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-between flex-column text-dark p-3 vh-100 position-sticky cardsiside ">
      <div className="flex-column">
        <NavLink
          className="d-flex justify-content-center align-item-center  "
          to="/"
        >
          <img src={krishi_logo} alt="krishi_logo" width={"80px"} />
        </NavLink>
        <hr />
        <ul className="nav   flex-column  ">

          <li className="nav-item " onClick={() => handleListItemClick("Dashboard")}>
            <NavLink className="nav-link  " style={{ color: isListItemActive("Dashboard") }} to="/" >
              DashBoard
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => handleListItemClick("CropAdvisory")}>
            <NavLink className="nav-link " style={{ color: isListItemActive("CropAdvisory") }} to="/CropAd" >
              Crop Advisory
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => handleListItemClick("CropSection")}>
            <NavLink className="nav-link " style={{ color: isListItemActive("CropSection") }} to="/KnowledgeBase" >
              Knowledge Base
            </NavLink>
          </li>

          <li className="nav-item" onClick={() => handleListItemClick2("Add Device")}   >
            <NavLink className="nav-link " style={{ color: isListItemActive("Add Device") }}>Add Device</NavLink>
          </li>


          <li className="nav-item" onClick={() => handleListItemClick("Contact Us")}>
            <NavLink className="nav-link " style={{ color: isListItemActive("Contact Us") }} to="/Contact">
              Contact Us
            </NavLink>
          </li>

          {/*
          <li className="nav-item" onClick={() => handleListItemClick("View Graph")}>
            <NavLink className="nav-link " style={{ color: isListItemActive("View Graph") }} to="/Location">
              View Graph
            </NavLink>
          </li>
          */ }


          <li className="nav-item" onClick={() => handleListItemClick("View Graph")}>
            <NavLink className="nav-link " style={{ color: isListItemActive("View Graph") }} to="/ViewLog">
              View Log
            </NavLink>
          </li>


        </ul>
      </div>
      <div>
        <hr />
        <div className="n">
          <ul className="nav  ">
            <li className="nav-item">
              <NavLink className="nav-link text-dark  " onClick={logout}>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
