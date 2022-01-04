import MoreInfo from "../MoreInfo/MoreInfo";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, } from "react-router-dom";

import "./Card.css";

export default function Card({ addItemToCart, item }) {
    const { id, name, img, price } = item;
    const { pathname } = useLocation();

    return (
        <div id={id} className="card">
            <h3 className="title">{name}</h3>
            <img className="img" src={img} alt={img} />
            <p className="price">£{price}</p>
            <div className="card__hover">
                <button className="hover__button"><Link to={`/shop/`}>More Info</Link></button>
                <button onClick={() => addItemToCart(item)} className="hover__button">Add to Cart</button>
            </div>

        </div>
    )
}