import React from 'react'

export default function Burger() {
    return(
        <div className="burger-menu">
            <button><img src={menu} /></button>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/properties">properties</a></li>
                <li><a href="/strategy">strategy</a></li>
                <li><a href="/contact-us">contact us</a></li>
            </ul>
        </div>
    )
}
