import "./Cart.css";

export default function Cart({ cartItems }) {
    const cartItemElements = cartItems.map(item => <p key={item.id}>{item.name} x1</p>)

    return (
        <div className="overlay" >
            <div className="cart">
                {cartItemElements}
            </div>
        </div>
    )
}