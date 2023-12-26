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

export default function Weathers() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-8  ">
          <div className="table-heading">
            <div className="row bg-light my-2 py-3  d-flex">
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
          <div className=" ">
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>@mdo</td>
                </tr>
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
