import "./Aside.css";
import Arrow from "../../Images/Arrow.svg";
import { useState } from "react";

export default function Aside({ handleFilter }) {
    const [showAllItems, setShowAllItems] = useState(false);
    const [showComputerPartsItems, setShowComputerPartsItems] = useState(false);
    const [showPreBuiltItems, setShowPreBuiltItems] = useState(false);

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

    function displayAll(event) {
        setShowAllItems(prevBool => !prevBool);
        setShowComputerPartsItems(false);
        setShowPreBuiltItems(false);
    }

    function displayComputerParts(event) {
        setShowComputerPartsItems(prevBool => !prevBool);
    }

    function displayPreBuilt(event) {
        setShowPreBuiltItems(prevBool => !prevBool);
    }

    return (
        <aside>
            <h2 className="aside__title">Catagories</h2>
            <div className="aside__all">
                <div className="all__header" onClick={(e) => displayAll(e)}>
                    <p className="all__title">All</p>
                    <img style={allArrow} className="all__arrow arrow" src={Arrow} alt="Arrow" />
                </div>
                <div style={stylesAll} className="all__items">
                    <div className="all__computer-parts">
                        <div className="computer-parts__header" onClick={(e) => displayComputerParts(e)}>
                            <p className="computer-parts__title">Computer Parts</p>
                            <img style={computerPartsArrow} className="computer-parts__arrow arrow" src={Arrow} alt="Arrow" />
                        </div>
                        <div style={stylesComputerParts} className="computer-parts__items">
                            <p className="item" id="CPU" onClick={(e) => handleFilter(e)}>CPU</p>
                            <p className="item" id="GPU" onClick={(e) => handleFilter(e)}>GPU</p>
                            <p className="item" id="RAM" onClick={(e) => handleFilter(e)}>RAM</p>
                        </div>
                    </div>
                    <div className="all__pre-built">
                        <div className="pre-built__header" onClick={(e) => displayPreBuilt(e)}>
                            <p className="pre-built__title">Pre-built</p>
                            <img style={preBuiltArrow} className="pre-built__arrow arrow" src={Arrow} alt="Arrow" />
                        </div>
                        <div style={stylesPreBuilt} className="pre-built__items">
                            <p className="item" id="desktop-computers" onClick={(e) => handleFilter(e)}>Desktop Computers</p>
                            <p className="item" id="laptops" onClick={(e) => handleFilter(e)}>Laptops</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}