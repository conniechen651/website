import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

export default function Navbar() {
    return(
        <nav className="navbar">
            <h3><Link to="/">Logo here</Link></h3>
            <ul className="navbar-links">
                <li><Link to="/properties">properties</Link></li>
                <li><Link to="/who-we-are">who we are</Link></li>
                <li><Link to="/contact-us">contact us</Link></li>
            </ul>
        </nav>
    )
}