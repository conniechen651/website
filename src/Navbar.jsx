import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return(
        <nav className="navbar">
            <h3>Logo here</h3>
            <ul className="navbar-links">
                <li><a href="#">properties</a></li>
                <li><a href="#">who we are</a></li>
                <li><a href="#">contact us</a></li>
            </ul>
        </nav>
    )
}