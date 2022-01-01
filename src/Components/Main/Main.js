import "./Main.css";
import TopMain from "../TopMain/TopMain";
import BottomMain from "../BottomMain/BottomMain";
import { useState } from "react";

export default function Main({ filterBy }) {
    const [search, setSearch] = useState("");

    function handleSearch(e) {
        const { value } = e.target;
        setSearch(value);
        console.log(value);
    }

    return (
        <main>
            <TopMain search={search} handleSearch={handleSearch} />
            <BottomMain search={search} filterBy={filterBy} />
        </main>
    )
}