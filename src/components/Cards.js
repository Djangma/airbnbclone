import React from "react"
// import spImage from "../images/image 12.png"
import star from "../images/Star 1.png"
 import "../styles/Cards.css"


export default function Cards(props) {
 return (
 <div className=" card ">
     <img src={`{spImage}${props.img}`} alt="photocard" className=""/>

    <div className="card--stats">
    <img src={star} alt="photocard" className=".card--star"/>
      
         <span>{props.rating}</span>
         <span>{props.reviewCount}</span>
         <span>{props.country}</span>

    </div>
    <p className=".card--star">{props.title}</p>
    <p className="card--price">{props.price}</p>

 </div>
 )
}
 