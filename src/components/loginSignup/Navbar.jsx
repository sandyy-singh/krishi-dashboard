import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { apppp } from "./firebase";
import { useNavigate } from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(apppp);

const Navbar = ({ toggleFun }) => {
  const [pupup, setPopup] = useState(false);
  const [userName, setUuserName] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user;
        setUuserName(email.auth.currentUser.email);
      }
    });
  }, []);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();
    navigate("/login");
  };



  return (
    <div className="cards1 zzindex">
      <nav className="navbar navbar-expand-lg p-2 bg-light w-100 zzindex " >

        <Link className=" navbar-brand text-dark d-block zzindex" onClick={toggleFun}>
          <b>KRISHI</b>
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse zzindex " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-dark"
                aria-current="page"
              >
                Home
              </Link>
            </li>


            <li className="nav-item">
              <Link
                to="/CropAd"
                className="nav-link text-dark"
                aria-current="page"
              >
                Crop Advisory
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/KnowledgeBase"
                className="nav-link text-dark"
                aria-current="page"
              >
                Knowledge Base
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/ContactUs"
                className="nav-link text-dark"
                aria-current="page"
              >
                ContactUs
              </Link>
            </li>


          </ul>
          <form className="d-flex">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0  mr-4">
              <li className="nav-item dropdown  mr-4">
                <Link className="nav-link dropdown-toggle  mr-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <b>{userName}</b>  <FaUserCircle />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className=" dropdown-item fonts"><button className="btn btn-danger  btn-sm" onClick={logout}>logout</button></li>

                </ul>
              </li>
            </ul>
          </form>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;
