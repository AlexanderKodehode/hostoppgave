import React from "react";
import './Layout.css';
import {Outlet, Link} from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Layout()
{
    return <div>
        <Navbar />

        <div className="page"></div>
        <Outlet />
    </div>
}