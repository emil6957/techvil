import "./Header.css";
import Nav from "../Nav/Nav";
import CartImg from "../../Images/Cart.svg";

export default function Header({ cartBeenOpened, toggleCartDisplay, cartAmmount }) {
    return (
        <header>
            <h2 className="header__title">Techvil</h2>
            <Nav />
            <div onClick={() => {cartBeenOpened(); toggleCartDisplay();}} className="header__cart">
                <img className="cart__img" src={CartImg} alt="Shopping Cart" />
                <p className="cart__count">{ cartAmmount }</p>
            </div>
        </header>
    )
}