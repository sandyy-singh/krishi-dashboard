import React, { useState } from 'react'
import "./DeviceLog.scss"
import { useUserContext } from "../loginSignup/UserProvider";

const DeviceLog = () => {
  const { DevicesLogs, setDevicesLogs } = useUserContext();
  const logclosedHandle =()=>{
    setDevicesLogs(false)
  }
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col log-popup-boxx">
          <div className=" row log-popup-contentt">
            <div className='deviceName'>
              <div>
                <h6>Device Name : AE01 </h6>
                <span><b>Last Update :</b> 12:05 | 29.06.2023</span>
              </div>
              <div className=" log-closed"onClick={logclosedHandle}  >&times;</div>

            </div>
            <div className="col-12 log-table">
              <table class="table borderless-table">
                <thead>
                  <tr>
                    <th scope="col">Logs</th>
                    <th scope="col">Battery</th>
                    <th scope="col">Amb. Temperature</th>
                    <th scope="col">Soil Moisture</th>
                    <th scope="col">Amb. Humidity</th>
                    <th scope="col">Soil Temperature</th>
                    <th scope="col">Light Internsity</th>
                    <th scope="col">ph</th>
                    <th scope="col">Ec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12:05 | 29.06.2023</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                  </tr>
                  <tr>
                    <td>12:05 | 29.06.2023</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                  </tr>
                  <tr>
                    <td>12:05 | 29.06.2023</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                  </tr>
                  <tr>
                    <td>12:05 | 29.06.2023</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                    <td>06</td>
                  </tr>



                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default DeviceLog
