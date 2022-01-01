import "./BottomMain.css";
import Card from "../Card/Card";
import data from "../../Data/ProductData";
import { useState } from "react";

export default function BottomMain({ filterBy }) {

    let cpuElements = <h1></h1>
    if(filterBy === "CPU" || filterBy === "GPU" || filterBy === "RAM" || filterBy === "Desktop" || filterBy === "Laptop") {
        cpuElements =  data[filterBy].items.map(item => <Card name={item.name} img={item.img} price={item.price} />)
    }
    
    return (
        <div className="bottom-main">
            <div className="products">
                {cpuElements}        
            </div>
        </div>
    )
}
