import "./Cart.css";

export default function Cart({ cartItems }) {
    const cartItemElements = cartItems.map(item => <div className="flex"><p className="cart-item" key={item.id}>{item.name}</p><p>x1</p></div>)

    return (
        <div className="overlay" >
            <div className="cart">
                {cartItemElements}
                <div className="flex" >
                    <p>Total</p>
                    <p>£550.98</p>
                </div>
                <button className="cart__button">Checkout</button>
            </div>
        </div>
    )
}