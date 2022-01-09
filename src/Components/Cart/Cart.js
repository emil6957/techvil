import "./Cart.css";
import { Link } from "react-router-dom";

export default function Cart({ cartItems }) {
    const cartItemElements = cartItems.map(item => <div key={item.id} className="flex"><p className="cart-item">{item.name}</p><p>x{item.ammount}</p></div>)

    return (
        <div className="overlay" >
            <div className="cart">
                {cartItemElements}
                <div className="flex" >
                    <p>Total</p>
                    <p>£550.98</p>
                </div>
                <Link className="cart__button" to="/shop/checkout">Checkout</Link>
            </div>
        </div>
    )
}