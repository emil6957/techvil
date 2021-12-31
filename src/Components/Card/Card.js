import "./Card.css";

export default function Card({ name, img, price }) {
    return (
        <div className="card">
            <h3 className="title">{name}</h3>
            <img className="img" src={img} alt={img} />
            <p className="price">£{price}</p>
        </div>
    )
}