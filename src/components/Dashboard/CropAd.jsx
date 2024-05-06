import React from 'react'
import "./CropAd.scss"
const CropAd = () => {
  return (
    <div className=" containerClass overflow-hidden overflow-scroll zindex ">
      <div className=" d-flex justify-content-center align-items-center ">

        <div className="col-10  col-sm-8 col-md-6 col-lg-4 EnterNumberbox   p-2">

          <h4 className="text-center mt-2">Crop Advisory</h4>
          <form autoComplete="off" className="form-group ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-10 mt-1">
                <label htmlFor="PhoneNumber">
                  Device Id
                </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="PhoneNumber"
                  placeholder="Enter your Device Id "
                  required
                />
              </div>

              <div className="col-10 mt-1">
                <label htmlFor="PhoneNumber">
                  Crop Selection
                </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="PhoneNumber"
                  placeholder="Enter Crop Selection "
                  required
                />
              </div>

              <div className="col-10 mt-1">
                <label htmlFor="PhoneNumber">
                  Farmland
                </label>
                <input
                  type="text"
                  className="form-control mt-1"
                  id="PhoneNumber"
                  placeholder="Enter Farmland "
                  required
                />
              </div>

              <div className="col-10 mt-1">
                <label htmlFor="PhoneNumber">
                  Acres
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="PhoneNumber"
                  placeholder="Enter Acres"
                  required
                />
              </div>

              <div className="col-10 mt-1">
                <label htmlFor="PhoneNumber">
                  Location ( Latitude & longitude of farmLand )
                </label>
                <input
                  type="email"
                  className="form-control mt-1"
                  id="PhoneNumber"
                  placeholder="Enter Location"
                  required
                />
              </div>




              <div className="row mt-2  ">
                <div className="col-8 offset-2 mb-2 EnterNumberSubmit  ">
                  <button type="submit" className="btn-primary ">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CropAd
