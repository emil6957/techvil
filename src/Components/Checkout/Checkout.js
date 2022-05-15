import { useState, useEffect } from "react";
import "./Checkout.css";

export default function Checkout({ cartItems }) {
    const [total, setTotal] = useState(0);
    const [checkoutData, setCheckoutData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: ""
    });

    useEffect(() => {
        const sum = cartItems.reduce((acc, curr) => acc + Math.round((curr.price * curr.ammount) * 100) / 100, 0)
        setTotal(sum);
    }, [])

    function checkoutDataChange(event) {
        const {name, value} = event.target
        setCheckoutData(prevData => ({...prevData, [name]: value}))
    }

    const cartItemElements = cartItems.map(item => {
        const price = Math.round((item.price * item.ammount) * 100) / 100;
        return (
            <tr key={item.id}>
                <td className="table__item">{item.name}</td>
                <td className="table__ammount">x{item.ammount}</td>
                <td className="table__price">£{price}</td>
            </tr>
        )
    })

    return (
        <div className="checkout">
            <form className="checkout__form">
                <input id="firstName" name="firstName" value={checkoutData.firstName} onChange={(e) => checkoutDataChange(e)} type="text" placeholder="First Name" autoComplete="off" required/>
                <input id="lastName" name="lastName" value={checkoutData.lastName} onChange={(e) => checkoutDataChange(e)} type="text" placeholder="Last Name" autoComplete="off" required/>
                <input id="email" name="email" value={checkoutData.email} onChange={(e) => checkoutDataChange(e)} type="email" placeholder="Email" autoComplete="off" required/>
                <input id="address" name="address" value={checkoutData.address} onChange={(e) => checkoutDataChange(e)} type="text" placeholder="Address" autoComplete="off" required/>
                <div className="checkout-btn-container">
                    <button className="checkout-btn">Purchase</button>
                </div>
            </form>
            <div className="checkout__table-container">
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
                {<p className="checkout__total">Total ${total}</p>}
            </div>
        </div>
    )
}