import React from 'react'
import './Navbar.scss'
import logo from "../../logo.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo} alt="city tours log" />
            <ul className="nav-links">
                <li>
                    <a className="nav-link" href="/">home</a>
                </li>
                <li>
                    <a className="nav-link" href="/">about</a>
                </li>
                <li>
                    <a className="nav-link" href="/">tours</a>
                </li>
                
            </ul>
        </div>
    )
}
