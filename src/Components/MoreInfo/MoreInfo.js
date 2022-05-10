import "./MoreInfo.css";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../Data/ProductData";

export default function MoreInfo({ addItemToCart }) {
    const params = useParams();
    const [item, setItem] = useState();
    const [ammount, setAmmount] = useState(1);
    const [loading, setLoading] = useState(true);
    const [mainImg, setMainImg] = useState();
    
    useEffect(() => {
        Object.values(data).forEach(val => val.items.filter(val => {if(val.name === params.name) setItem(val);}));
        setLoading(false);
    }, [])

    let listElements;
    let extraImgElements;
    useEffect(() => {
        if(loading === false) {
            setMainImg(item.img);
        }
    }, [item])
    
    if(loading === false) {
        const listInfo = item.info.split(",");
        listElements = listInfo.map(item => <li className="info" key={nanoid()}>{item}</li>)
        extraImgElements = item.extraImgs.map(img => <img onClick={() => setMainImg(img)} key={nanoid()} className="img-card" src={img} alt="Product" />)
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
                    <Link to="/shop/checkout"><button className="button">Checkout</button></Link>
                </div>
                <div className="imgs">
                    <img className="img" src={mainImg} alt="Product" />
                    <div className="img-cards-container">
                        {extraImgElements}
                    </div>
                </div>
            </div>
        ) : 
        <div></div>
    )
}