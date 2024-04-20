import { useState, useEffect } from "react";
import SignUp from "./components/loginSignup/SignUp";
import Login from "./components/loginSignup/Login";
import ResetPassword from "./components/loginSignup/ResetPassword";
import Contact from "./components/loginSignup/Contact";
import Dashboard from "./components/Dashboard/Dashboard";
import Location from "./components/Dashboard/Location";
import ViewLog from "./components/Dashboard/ViewLog";
import FarmerData1 from "./components/loginSignup/FarmerData1";
import AddDivices from "./components/Dashboard/AddDivices";
import "./App.css";
import EnterNumber from "./components/loginSignup/EnterNumber";
import Navbar from "./components/loginSignup/Navbar";
import Sidebar from "./components/Dashboard/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [addDivicePopup, setaddDivicePopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [tokenNo, setTokenNo] = useState("");

  const AddDiviceFunc = () => {
    setaddDivicePopup(true);
  };
  const AddDiviceClose = () => {
    setaddDivicePopup(false);
  };

  useEffect(() => {
    const tocken = localStorage.getItem("token");
    setTokenNo(tocken);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767); // Adjust the width based on your mobile breakpoint
    };

    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <BrowserRouter>
        <div className="d-flex  parent">
          {tokenNo && (
            <div>
              {!isMobile && (
                <Sidebar
                  AddDiviceFunc={AddDiviceFunc}
                  setaddDivicePopup={setaddDivicePopup}
                />
              )}
            </div>
          )}

          <div className="col rightSide h-80">
            {tokenNo && <Navbar />}
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/ResetPassword" element={<ResetPassword />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
              <Route path="/FarmerData1" element={<FarmerData1 />}></Route>
              <Route path="/Location" element={<Location />}></Route>
              <Route path="/ViewLog" element={<ViewLog />}></Route>
              <Route path="/EnterNumber" element={<EnterNumber />}></Route>
            </Routes>
            <div>
              {addDivicePopup && <AddDivices AddDiviceClose={AddDiviceClose} />}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
