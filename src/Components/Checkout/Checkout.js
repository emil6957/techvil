import "./Checkout.css";

export default function Checkout({ cartItems }) {
    const cartItemElements = cartItems.map(item => {
        return (
            <tr key={item.id}>
                <td className="table__item">{item.name}</td>
                <td className="table__ammount">x{item.ammount}</td>
                <td className="table__price">£{item.price * item.ammount}</td>
            </tr>
        )
    })

    return (
        <div className="checkout">
            <form>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="email" placeholder="Email" />
            </form>
            <table className="checkout__table">
                <thead className="table__head">
                    <tr>
                        <th className="table__item">Item</th>
                        <th className="table__ammount">Quantity</th>
                        <th className="table__price">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItemElements}
                </tbody>
            </table>
        </div>
    )
}