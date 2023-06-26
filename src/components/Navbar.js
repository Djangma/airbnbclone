import React from "react"
import myimage from "../images/airbnb.png"
import "../styles/Navbar.css"

export default function Navabar(){
    return(
        <nav>
         <img src={myimage} alt="airbnb-logo" className="nav--logo"/>
        </nav> 
    )
}