import "./MoreInfo.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Data/ProductData";
import arrow from "../../Images/right-arrow.svg";

export default function MoreInfo({ cartItems, addItemToCart }) {
    const params = useParams();
    const [item, setItem] = useState();
    const [ammount, setAmmount] = useState(1);
    const [loading, setLoading] = useState(true);
    const [mainImg, setMainImg] = useState();
    const [allImgs, setAllImgs] = useState([]);
    
    useEffect(() => {
        Object.values(data).forEach(val => val.items.filter(val => {if(val.name === params.name) setItem(val);}));
        setLoading(false);
    }, [])

    let listElements;
    let extraImgElements;
    useEffect(() => {
        if(loading === false) {
            setMainImg(item.img);
            item.extraImgs.forEach(img => setAllImgs(prevState => [...prevState, img]));
        }
    }, [item])
    
    if(loading === false) {
        const listInfo = item.info.split(",");
        listElements = listInfo.map(item => <li className="info" key={nanoid()}>{item}</li>)
        extraImgElements = item.extraImgs.map(img => <div key={nanoid()} className={`img-card-container ${img === mainImg ? "current-img" : ""}`}><img onClick={() => setMainImg(img)} className="img-card" src={img} alt="Product" /></div>)
    }
    
    function incrementAmmount() {
        setAmmount(prevAmmount => prevAmmount + 1);
    }

    function reduceAmmount() {
        if (ammount > 1) {
            setAmmount(prevAmmount => prevAmmount - 1);
        }
    }

    function addItemsToCart() {
        for(let i = 0; i < ammount; i++) {
            addItemToCart(item);
        } 
    }

    function prevImg() {
        for(let i = 0; i < allImgs.length; i++) {
            if(allImgs[i] === mainImg) {
                if(i === 0) {
                    setMainImg(allImgs[allImgs.length - 1]);
                } else {
                    setMainImg(allImgs[i-1]);
                }
            }
        }
    }

    function nextImg() {
        for(let i = 0; i < allImgs.length; i++) {
            if(allImgs[i] === mainImg) {
                if(i === allImgs.length - 1) {
                    setMainImg(allImgs[0]);
                } else {
                    setMainImg(allImgs[i+1]);
                }
            }
        }
    }

    return (
        !loading ? 
        (
            <div className="more-info">
                <div className="content">
                    <h1 className="title">{item.name}</h1>
                    <ul className="list">
                        {listElements}
                    </ul>
                    <p className="price">£{item.price * ammount}</p>
                    <div className="ammount-container">
                        <button onClick={reduceAmmount} className="ammount__button minus">-</button>
                        <p className="ammount">{ammount}</p>
                        <button onClick={incrementAmmount} className="ammount__button plus">+</button>
                    </div>
                    <button onClick={addItemsToCart} className="button">Add To Cart</button>
                    <Link to="/shop/checkout"><button disabled={cartItems.length === 0} className="button">Checkout</button></Link>
                </div>
                <div className="imgs">
                    <div className="main-img">
                        <img onClick={prevImg} src={arrow} alt="left arrow" className="arrow-left" />
                        <div className="img-container">
                            <img className="img" src={mainImg} alt="Product" />
                        </div>
                        <img onClick={nextImg} src={arrow} alt="right arrow" className="arrow-right" />
                    </div>
                    <div className="img-cards-container">
                        {extraImgElements}
                    </div>
                </div>
            </div>
        ) : 
        <div></div>
    )
}