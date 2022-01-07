import { useState } from "react";
import "./Shop.css";
import { Routes, Route } from "react-router-dom";
import ShopMain from "../ShopMain/ShopMain";
import MoreInfo from "../MoreInfo/MoreInfo";
import Checkout from "../Checkout/Checkout";

export default function Shop({ cartItems, addItemToCart }) {
    const [filterBy, setFilterBy] = useState("all");
    const [displayProduct, setDisplayProduct] = useState();

    function handleFilter(event) {
        setFilterBy(event.target.id);
    }

    function getProduct(item) {
        setDisplayProduct(item);
    }

    return(
        <Routes>
            <Route path="/" element={<ShopMain getProduct={getProduct} handleFilter={handleFilter} addItemToCart={addItemToCart} filterBy={filterBy} />} />
            <Route path="/:name" element={<MoreInfo addItemToCart={addItemToCart} item={displayProduct} />} />
            <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        </Routes>
    )
}