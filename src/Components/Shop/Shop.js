import { useState } from "react";
import "./Shop.css";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";

export default function Shop() {
    const [filterBy, setFilterBy] = useState("all");

    function handleFilter(event) {
        setFilterBy(event.target.id);
    }

    return(
        <section className="shop">
            <Aside handleFilter={handleFilter} />
            <Main filterBy={filterBy} />
        </section>
    )
}