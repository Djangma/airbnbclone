import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Cards from "./components/Cards"
import data from "./data"
console.log(data)


export default function App() {
    
    const cards  = data.map(item => {
        return (
           <Cards
            img={item.coverImg}
            rating={item.stats.rating}
            title={item.title}            
            reviewCount={item.stats.reviewCount}
            location={item.location}
            price={item.price}
             />
        )
    })

    return (
        <div>
            <Navbar/>
            <Hero/>
            {cards}
        </div>
    )
}