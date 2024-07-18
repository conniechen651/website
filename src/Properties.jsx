import React from 'react'
import Card from './Card';
import cardHouse1 from "./assets/card-house-1.jpg"
import cardHouse2 from "./assets/card-house-2.jpg"
import cardHouse3 from "./assets/card-house-3.jpg"
import cardHouse4 from "./assets/card-house-4.jpg"
import './Properties.css'

export default function Properties() {
    return(
        <div>
            <h1>Properties</h1>
            <div className="card-row">
                <Card className="card" house={cardHouse1}
                    title="Vulputate odio ut enim blandit volutpat maecenas volutpat."
                    children="Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor
                    orci eu lobortis. Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam
                    tempor orci eu lobortis." />
                <Card className="card" house={cardHouse2}
                    title="Vulputate odio ut enim blandit volutpat maecenas volutpat."
                    children="Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor
                    orci eu lobortis. Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam
                    tempor orci eu lobortis." />
            </div>
            <div className="card-row">
                <Card className="card" house={cardHouse3}
                    title="Vulputate odio ut enim blandit volutpat maecenas volutpat."
                    children="Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor
                    orci eu lobortis. Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam
                    tempor orci eu lobortis." />
                <Card className="card" house={cardHouse4}
                    title="Vulputate odio ut enim blandit volutpat maecenas volutpat."
                    children="Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam tempor
                    orci eu lobortis. Malesuada bibendum arcu vitae elementum curabitur vitae. Facilisis magna etiam
                    tempor orci eu lobortis." />
            </div>
        </div>
    )
}