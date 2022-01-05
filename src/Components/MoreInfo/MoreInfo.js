import "./MoreInfo.css";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function MoreInfo({ addItemToCart, item }) {
    const [ammount, setAmmount] = useState(1);
    const { id, name, img, price, info, extraImgs } = item;
    const listInfo = info.split(",");

    const listElements = listInfo.map(item => <li className="info" key={nanoid()}>{item}</li>)
    const extraImgElements = extraImgs.map(img => <img key={nanoid()} className="img-card" src={img} alt="Product" />)

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
        <div className="more-info">
            <div className="content">
                <h1 className="title">{name}</h1>
                <ul className="list">
                    {listElements}
                </ul>
                <p className="price">£{price * ammount}</p>
                <div className="ammount-container">
                    <button onClick={reduceAmmount} className="ammount__button minus">-</button>
                    <p className="ammount">{ammount}</p>
                    <button onClick={incrementAmmount} className="ammount__button plus">+</button>
                </div>
                <button onClick={addItemsToCart} className="button">Add To Cart</button>
                <button className="button">Checkout</button>
            </div>
            <div className="imgs">
                <img className="img" src={img} alt="Product" />
                <div className="img-cards-container">
                    {extraImgElements}
                </div>
            </div>
        </div>
    )
}