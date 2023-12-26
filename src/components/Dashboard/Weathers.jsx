import React from "react";
import "./Styles/Weather.scss";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import Weatherpart1 from "./WeatherPart1";
import button1 from "../../Images/Vector2.png";
import button2 from "../../Images/Icon1.png";
import { useUserContext } from "../loginSignup/UserProvider";

export default function Weathers() {
  const { devices, array } = useUserContext();
  //   console.log(devices, array, lastUpdate);
  //   array.map((item) =>
  //     console.log(devices[item][Object.keys(devices[item])[0]].DT)
  //   );
  function convertEpoch(value) {
    if (!value) {
      return "";
    }
    var time = new Date(0);
    time.setUTCSeconds(value);
    // const time = new Date(Number(value));
    // console.log("time", time);
    if (isNaN(time.valueOf())) {
      return "";
    }
    // console.log(time.toLocaleString);
    return time.toLocaleString("en-US", {
      month: "numeric",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour24: true,
    });
  }
  //   console.log(convertEpoch(1686820318));
  function timechanger(utcSeconds) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
  }
  //   var utcSeconds = 1686820318;

  return (
    <div className="container-fluid mb-4">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8 table-heading ">
         <div className="table-heading">
         <div className="row bg-light my-1 py-3 d-flex">
         <div className="col-6 ">
           <h2 className="text-dark text-start"> History Logs</h2>
         </div>
         <div className="col-6  text-end">
           <button className="table-button">
             <img src={button2} alt=""></img>
           </button>
           <button className="table-button">
             <img src={button1} alt=""></img>
           </button>
         </div>
       </div>
         </div>
 
          <div className="tableData">
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th scope="col">S. No</th>
                  <th scope="col">Device names</th>
                  <th scope="col">Last updated</th>
                  <th scope="col">Moisture</th>
                  <th scope="col">pH</th>
                </tr>
              </thead>
              <tbody>
                {array.map((item, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item}</td>
                    <td>
                      {convertEpoch(
                        devices[item][Object.keys(devices[item])[0]].DT
                      )}
                    </td>
                    <td>{devices[item][Object.keys(devices[item])[0]].SM}</td>
                    <td>{devices[item][Object.keys(devices[item])[0]].PH}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center">
          <Weatherpart1 />
        </div>
      </div>
    </div>
  );
}
