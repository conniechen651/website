import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import menu from "./assets/menu.svg"

export default function Navbar() {
    const [burgerOpen, setBurgerOpen] = React.useState(false);
    const toggleBurger = () => setBurgerOpen(!burgerOpen);

    return(
        <>
            <nav className="navbar">
                <h3><Link to="/">JAMR Partners</Link></h3>
                <ul className="navbar-links">
                    <li><Link to="/properties">properties</Link></li>
                    <li><Link to="/strategy">strategy</Link></li>
                    <li><Link to="/contact-us">contact us</Link></li>
                </ul>
                <button className="burger-icon" itemID='burger' onClick={toggleBurger}><img src={menu} /></button>
            </nav>
            <div className="navbar-burger-links">
                <ul>
                    <li><a href="/">home</a></li>
                    <li><Link to="/properties">properties</Link></li>
                    <li><Link to="/strategy">strategy</Link></li>
                    <li><Link to="/contact-us">contact us</Link></li>
                </ul>
            </div>
            <style jsx>{`
                .navbar-burger-links {
                    display: ${burgerOpen ? 'block' : 'none'};
                }
            `}</style>
        </>
    )
    
}