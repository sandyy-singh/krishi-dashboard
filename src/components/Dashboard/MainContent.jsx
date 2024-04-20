import React from "react";
import { useState } from "react";


import RecentUpdates from "./RecentUpdates";
import Weathers from "./Weathers"
// import GrphLocation from "./GrphLocation";


export default function MainContent() {


    return (
        <div >
            <RecentUpdates />
            {/* <GrphLocation /> */}
            <Weathers />
        </div>




    )
}