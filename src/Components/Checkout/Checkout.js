import "./Checkout.css";

export default function Checkout({ cartItems }) {
    const cartItemElements = cartItems.map(item => {
        return (
            <tr key={item.id}>
                <td className="table__item">{item.name}</td>
                <td className="table__quantity">x1</td>
                <td className="table__price">£{item.price}</td>
            </tr>
        )
    })

    return (
        <div className="checkout">
            <table className="checkout__table">
                <thead className="table__head">
                    <tr>
                        <th className="table__item">Item</th>
                        <th className="table__quantity">Quantity</th>
                        <th className="table__price">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItemElements}
                </tbody>
            </table>
        </div>
    )
}