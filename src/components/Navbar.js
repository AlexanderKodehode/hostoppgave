import React from "react";
import {Outlet, Link} from "react-router-dom"
export default function Navbar()
{
    return <nav className="navbar">
        <li>
            <Link to=".">
                Home
            </Link>
            <Link to="contact">
                Contact
            </Link>
        </li>
    </nav>
}

