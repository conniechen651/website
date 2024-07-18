import React from 'react'
import './Card.css'

export default function Card({ title, children, house }) { 
    return(
        <div className="card">
            <img src={house} />
            <h2>{title}</h2>
            <p>{children}</p>
        </div>
    )
}