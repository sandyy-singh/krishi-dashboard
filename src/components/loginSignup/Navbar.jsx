import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { apppp } from "./firebase";
import { BiArrowToLeft } from "react-icons/bi";

import { getAuth, onAuthStateChanged } from "firebase/auth";
const auth = getAuth(apppp);

const Navbar = ({ toggleFun }) => {
  const [pupup, setPopup] = useState(false);
  const [userName, setUuserName] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const email = user;
        setUuserName(email.auth.currentUser.email);
      }
    });
  }, []);
  const contact = () => {
    navigate("/Contact");
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    window.location.reload();
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-success  bg-success p-2" >
        
          <Link className=" navbar-brand text-light d-block " onClick={toggleFun}>
            <BiArrowToLeft />KRISHI
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link text-light"
                  aria-current="page"
                >
                  <AiOutlineHome />
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/ContactUs"
                  className="nav-link text-light"
                  aria-current="page"
                >
                  ContactUs
                </Link>
              </li>

              <li className="nav-item">
                <Link

                  className="nav-link text-light"
                  aria-current="page"
                  onClick={() => setPopup(!pupup)}
                >
                  <FaUserCircle />
                </Link>
              </li>
            </ul>
          </div>
        
      </nav>
      {pupup ? (
        <div className="userPopup bg-dark p-2">
          <p className="text-light">{userName}</p>
          <button className="btn btn-success m-1" onClick={contact}>
            contact
          </button>
          <button className="btn btn-danger" onClick={logout}>
            logout
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
