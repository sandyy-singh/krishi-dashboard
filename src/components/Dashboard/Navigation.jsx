import React from "react";
import Navbar from "../loginSignup/Navbar";
import Sidebar from "./Sidebar";
const Navigation = () => {
  return (
    <div>
      <div className="d-flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="col">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
