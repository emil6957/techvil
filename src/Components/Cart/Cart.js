import "./Cart.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Cart({ cartOpened, toggleCartDisplay, displayCart, cartItems }) {
    const [total, setTotal] = useState(0);
    const cartItemElements = cartItems.map(item => <div key={item.id} className="flex"><p className="cart-item">{item.name}</p><p>x{item.ammount}</p></div>)

    useEffect(() => {
        setTotal(Math.round(cartItems.reduce((acc, currentItem) => acc + (currentItem.price * currentItem.ammount), 0) * 100) / 100);
    }, [cartItems]);

    const styles = {
        display: cartOpened ? "flex" : "none",
    }

    return (
        <div style={styles} className={`overlay ${displayCart ? "" : "closing"}`} >
            {
            cartItemElements.length 
            ?
            <div style={styles} className={`cart ${displayCart ? "" : "closing"}`}>
                {cartItemElements}
                <div className="flex" >
                    <p>Total</p>
                    <p>£{total}</p>
                </div>
                <Link onClick={toggleCartDisplay} className="cart__button" to="/shop/checkout">Checkout</Link>
            </div>
            :
            <div style={styles} className={`cart center ${displayCart ? "" : "closing"}`}>
                <p>No Items Currently In Cart</p>
            </div>
            }
        </div>
    )
}