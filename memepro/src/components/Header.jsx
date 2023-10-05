import React from "react"
import Image from "../images/trollface.png"

export default function Header() {
    return (
        <header className="header">
            <img 
                src={Image}
                className="header--image"
                alt="404" 
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}