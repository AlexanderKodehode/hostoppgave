import React from "react"
import './Contact.css';
export default function Contact()
{
    return <div className="contact">
        <h1>Contact us!</h1>
        <div className="break"></div>
        <div className="fields">
            <input type="email" placeholder="email"/>
            <div className="break"></div>
            <input type="submit" value="Send"/>

        </div>

    </div>
}