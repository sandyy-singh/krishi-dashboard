import React from "react";
import krishi_logo from "../../Images/krishi_logo.jpg";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";
const Sidebar = ({ AddDiviceFunc }) => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    // window.location.reload();
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
        <hr text-light />
        <ul className="nav   flex-column  ">
          <li className="nav-item ">
            <NavLink className="nav-link text-dark " to="/">
              DashBoard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark  " to="/Conta">
              CropAdvisory
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark " to="/Location">
              CropSection
            </NavLink>
          </li>
          <li className="nav-item" onClick={AddDiviceFunc}>
            <button className="nav-link text-dark ">Add Device</button>
          </li>

          {/* <li>
            <button className="add-divice" onClick={AddDiviceFunc}>
              Add Device
            </button>
          </li> */}

          <li className="nav-item">
            <NavLink className="nav-link text-dark " to="/Contact">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-dark  " to="/Login">
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <hr text-light />
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
