import { useState, useEffect } from "react";
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import ResetPassword from "./components/loginSignup/ResetPassword";
import Contact from "./components/loginSignup/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Location from "./components/Dashboard/Location";
import FarmerData1 from "./components/loginSignup/FarmerData1";
//
import EnterNumber from "./components/loginSignup/EnterNumber";
import Navbar from "./components/loginSignup/Navbar";
import Sidebar from "./components/Dashboard/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [toggleNav, setToggleNav] = useState(false)

  function toggleFun() {
    setToggleNav(!toggleNav);
  }
  const [tokenNo, setTokenNo] = useState("");
  useEffect(() => {
    const tocken = localStorage.getItem("token");
    setTokenNo(tocken);
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="d-flex  parent">
          {tokenNo && (
            <div className={toggleNav ? "d-none" : "w-auto"}>
              <Sidebar />
            </div>
          )}
          <div className="col rightSide vh-100" >
            {tokenNo && <Navbar toggleFun={toggleFun} />}
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/ResetPassword" element={<ResetPassword />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/FarmerData1" element={<FarmerData1 />}></Route>
              <Route path="/Location" element={<Location />}></Route>
              <Route path="/EnterNumber" element={<EnterNumber />}></Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
