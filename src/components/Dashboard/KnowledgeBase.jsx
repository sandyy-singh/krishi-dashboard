import React from 'react'

const KnowledgeBase = () => {
  return (
    <div className=" containerClass overflow-hidden overflow-scroll zindex ">
      <div className=" d-flex justify-content-center align-items-center ">

        <div className="col-10  col-sm-8 col-md-6 col-lg-4 EnterNumberbox   p-2">
          <h4 className="text-center mt-2">Knowledge Base</h4>
          <form autoComplete="off" className="form-group ">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-10 mt-4">
                <label htmlFor="PhoneNumber">
                  Crop Selection
                </label>
                <input
                  type="email"
                  className="form-control mt-3"
                  id="PhoneNumber"
                  placeholder="Enter Crop Selection "
                  required
                />
              </div>

              <div className="row mt-4   ">
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

export default KnowledgeBase
