import React from 'react'
import './Home.css'
import house from "./assets/green-house.jpg"

export default function Home() {
    return(
        <>
            <div className="main-image">
                <h1>Consistency is our priority</h1>
            </div>
            <div className="main-text">
                <h2>About JAMR Partners</h2>
                <p>JAMR Partners, LLC is a UCLA student-run real estate fund focused on capturing asymmetric opportunities 
                    across the single-family rental market. Through our refined investment framework, we are capable of 
                    consistently achieving outsized returns while effectively managing risk.
                </p>
            </div>
            <div className="main-facts">
                <div className="fact">
                    <h3>Faucibus purus in massa tempor</h3>
                    <p>Dictum varius duis at consectetur lorem donec massa. Volutpat est velit egestas dui id ornare.</p>
                </div>
                <div className="vertical-line"></div>
                <div className="fact">
                    <h3>Dis parturient montes nascetur ridiculus mus</h3>
                    <p>Nam aliquam sem et tortor consequat id porta nibh venenatis.</p>
                </div>
                <div className="vertical-line"></div>
                <div className="fact">
                    <h3>Ante in nibh mauris cursus</h3>
                    <p>Sed viverra tellus in hac habitasse platea dictumst. Massa sed elementum tempus egestas sed.</p>
                </div>
            </div>
            <div className="main-img-text">
                <img src={house} alt="image of a green house"/>
                <div className="colored-part">
                    <p>Nullam vehicula ipsum a arcu cursus vitae congue. Elit ullamcorper dignissim cras tincidunt 
                        lobortis feugiat vivamus. Commodo ullamcorper a lacus vestibulum sed. Egestas integer eget 
                        aliquet nibh praesent. Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. 
                    </p>
                </div>
            </div>
        </>
    )
}