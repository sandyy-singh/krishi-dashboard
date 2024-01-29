import React from "react";
import { useState } from "react";
import Location from "./Location"
import RecentUpdates from "./RecentUpdates";
import Weathers from "./Weathers"


export default function MainContent() {


    return (
        <div >
            <RecentUpdates />
            <Location />
            <Weathers />
        </div>




    )
}