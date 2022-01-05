import "./Header.css";
import Nav from "../Nav/Nav";
import CartImg from "../../Images/Cart.svg";

export default function Header({ toggleCartDisplay, cartItems }) {

    return (
        <header>
            <h2 className="header__title">Techvil</h2>
            <Nav />
            <div onClick={toggleCartDisplay} className="header__cart">
                <img className="cart__img" src={CartImg} alt="Shopping Cart" />
                <p className="cart__count">{ cartItems.length }</p>
            </div>
        </header>
    )
}