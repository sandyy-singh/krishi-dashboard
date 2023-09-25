import React from "react";
import MainContent from "./MainContent"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const [tokenNo, setTokenNo] = useState("");
    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate("/login");
          }
    }, []);
    return (
        <div className="Dashboard">
            <MainContent />
        </div>

    )
}