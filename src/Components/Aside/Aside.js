import "./Aside.css";
import Arrow from "../../Images/Arrow.svg";
import { useState, useEffect } from "react";

export default function Aside({ filterBy, handleFilter }) {
    const [showAllItems, setShowAllItems] = useState(false);
    const [showComputerPartsItems, setShowComputerPartsItems] = useState(false);
    const [showPreBuiltItems, setShowPreBuiltItems] = useState(false);
    const [prevFiltered, setPrevFiltered] = useState();

    useEffect(() => {
        if(prevFiltered) { prevFiltered.classList.remove("aside__selected"); }
        const filtered = document.getElementById(filterBy);
        filtered.classList.add("aside__selected");
        setPrevFiltered(filtered);
    }, [filterBy])

    const stylesAll = {
        display: showAllItems ? "inherit" : "none",
    }

    const allArrow = {
        transform: `rotate(${showAllItems ? "180deg" : "0deg"})`
    }

    const stylesComputerParts = {
        display: showComputerPartsItems ? "inherit": "none",
    }
    
    const computerPartsArrow = {
        transform: `rotate(${showComputerPartsItems ? "180deg" : "0deg"})`
    }

    const stylesPreBuilt = {
        display: showPreBuiltItems ? "inherit" : "none",
    }

    const preBuiltArrow = {
        transform: `rotate(${showPreBuiltItems ? "180deg" : "0deg"})`
    }

    function shortenAfter(preBuilt, computerParts) { // A function to make sure the after element of all__items is the correct height
        if(preBuilt === true && computerParts === false) {
            document.querySelector(".all__items").classList.add("shorten-after");
        } else {
            document.querySelector(".all__items").classList.remove("shorten-after");
        }
    }

    function displayAll(event) {
        setShowAllItems(prevBool => !prevBool);
        setShowComputerPartsItems(false);
        setShowPreBuiltItems(false);
    }

    function displayComputerParts(event) {
        shortenAfter(showPreBuiltItems, !showComputerPartsItems);
        setShowComputerPartsItems(prevBool => !prevBool);
    }

    function displayPreBuilt(event) {
        shortenAfter(!showPreBuiltItems, showComputerPartsItems);
        setShowPreBuiltItems(prevBool => !prevBool);
    }

    return (
        <aside>
            <h2 className="aside__title">Catagories</h2>
            <div className="aside__all">
                <div className="all__header">
                    <p className="all__title" id="all" onClick={(e) => handleFilter(e)}>All</p>
                    <img style={allArrow} onClick={(e) => displayAll(e)} className="all__arrow arrow" src={Arrow} alt="Arrow" />
                </div>
                <div style={stylesAll} className="all__items">
                    <div className="all__computer-parts">
                        <div className="computer-parts__header">
                            <p className="computer-parts__title" id="computer-parts" onClick={(e) => handleFilter(e)}>Computer Parts</p>
                            <img style={computerPartsArrow} onClick={(e) => displayComputerParts(e)} className="computer-parts__arrow arrow" src={Arrow} alt="Arrow" />
                        </div>
                        <div style={stylesComputerParts} className="computer-parts__items">
                            <p className="item" id="CPU" onClick={(e) => handleFilter(e)}>CPU</p>
                            <p className="item" id="GPU" onClick={(e) => handleFilter(e)}>GPU</p>
                            <p className="item" id="RAM" onClick={(e) => handleFilter(e)}>RAM</p>
                        </div>
                    </div>
                    <div className="all__pre-built">
                        <div className="pre-built__header">
                            <p className="pre-built__title" id="pre-built" onClick={(e) => handleFilter(e)}>Pre-built</p>
                            <img style={preBuiltArrow} onClick={(e) => displayPreBuilt(e)} className="pre-built__arrow arrow" src={Arrow} alt="Arrow" />
                        </div>
                        <div style={stylesPreBuilt} className="pre-built__items">
                            <p className="item" id="Desktop" onClick={(e) => handleFilter(e)}>Desktop Computers</p>
                            <p className="item" id="Laptop" onClick={(e) => handleFilter(e)}>Laptops</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}