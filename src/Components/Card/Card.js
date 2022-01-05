import { Link } from "react-router-dom";
import "./Card.css";

export default function Card({ getProduct, addItemToCart, item }) {
    const { id, name, img, price } = item;

    return (
        <div id={id} className="card">
            <h3 className="card__title">{name}</h3>
            <img className="card__img" src={img} alt={img} />
            <p className="card__price">£{price}</p>
            <div className="card__hover">
                <button onClick={() => getProduct(item)} className="hover__button"><Link to={`/shop/${name}`}>More Info</Link></button>
                <button onClick={() => addItemToCart(item)} className="hover__button">Add to Cart</button>
            </div>

        </div>
    )
}