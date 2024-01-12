import React from "react";
import "./AddDivices.scss";

const AddDivices = ({ AddDiviceClose }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className=" col popup-boxx">
          <div className=" row popup-contentt">
            <span className="  closed" onClick={AddDiviceClose}>              &times;
            </span>

            <div className="col-12">

              <h2 className="fw-bolder text-dark" >Add Device</h2>
            </div>


            <form>
              <div class="form-row">
                <div class="col">
                  <label className="labelsName" for="DeviceID">Device ID</label>
                  <input
                    type="text"
                    id="DeviceID"
                    class="form-control"
                    placeholder="Device ID"
                  />
                </div>
                <div class="col">
                  <label className="labelsName" for="DeviceName">Device Name</label>
                  <input
                    type="text"
                    id="DeviceName"
                    class="form-control"
                    placeholder="Device Name"
                  />
                </div>

                <button className="btn btn-success mt-3 w-100">Add Device</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDivices;
