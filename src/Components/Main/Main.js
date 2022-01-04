import "./Main.css";
import TopMain from "../TopMain/TopMain";
import BottomMain from "../BottomMain/BottomMain";
import { useState } from "react";

export default function Main({ getProduct, addItemToCart, filterBy }) {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");

    function handleSearch(e) {
        const { value } = e.target;
        setSearch(value);
    }

    function handleSort(e) {
        const { value } = e.target;
        setSortBy(value);
    }

    return (
        <main>
            <TopMain handleSort={handleSort} search={search} handleSearch={handleSearch} />
            <BottomMain getProduct={getProduct} addItemToCart={addItemToCart} sortBy={sortBy} search={search} filterBy={filterBy} />
        </main>
    )
}