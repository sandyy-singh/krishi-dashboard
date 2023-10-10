import React from "react";
import krishi_logo from "../../Images/krishi_logo.jpg";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="d-flex justify-content-between flex-column bg-success text-light p-3 vh-100 position-sticky ">
      <div className="flex-column">
        <NavLink
          className="d-flex justify-content-center align-item-center  "
          to="/"
        >
          <img src={krishi_logo} alt="krishi_logo" width={"80px"} />
        </NavLink>
        <hr className="text-light" />
        <ul className="nav nav-pills  flex-column  ">
          <li className="nav-item ">
            <NavLink className="nav-link text-light " to="/">
              DashBoard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light  " to="/Conta">
              CropAdvisory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light " to="/Location">
              CropSection
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light " to="/Contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light  " to="/Login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr text-light />
        <div className="n">
          <ul className="nav nav-pills ">
            <li className="nav-item">
              <NavLink className="nav-link text-light  " to="/yfg">
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


