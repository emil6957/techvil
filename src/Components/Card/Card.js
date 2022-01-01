import "./Card.css";

export default function Card({ id, name, img, price }) {
    return (
        <div id={id} className="card">
            <h3 className="title">{name}</h3>
            <img className="img" src={img} alt={img} />
            <p className="price">£{price}</p>
        </div>
    )
}