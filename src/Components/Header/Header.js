import "./Header.css";
import Nav from "../Nav/Nav";
import Cart from "../../Images/Cart.svg";

export default function Header() {
    return (
        <header>
            <h2 className="header__title">Techvil</h2>
            <Nav />
            <div className="cart">
                <img className="cart__img" src={Cart} alt="Shopping Cart" />
                <p className="cart__count">0</p>
            </div>
        </header>
    )
}