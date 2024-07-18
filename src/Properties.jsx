import React from 'react'
import { Link } from "react-router-dom";

export default function Properties() {
    return(
        <div>
            <h1>Properties</h1>
            <ul>
                <li><Link to="/properties/1">Property 1</Link></li>
                <li><Link to="/properties/2">Property 2</Link></li>
                <li><Link to="/properties/3">Property 3</Link></li>
            </ul>
        </div>
    )
}