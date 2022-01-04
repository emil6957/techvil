import "./ShopMain.css";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";

export default function ShopMain({ getProduct, handleFilter, addItemToCart, filterBy }) {
    return (
        <section className="shop">
            <Aside handleFilter={handleFilter} />
            <Main getProduct={getProduct} addItemToCart={addItemToCart} filterBy={filterBy} />
        </section>
    )
}