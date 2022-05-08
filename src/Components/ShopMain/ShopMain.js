import "./ShopMain.css";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import bkg from "../../Images/shop-bkg.jpg";

export default function ShopMain({ getProduct, handleFilter, addItemToCart, filterBy }) {

    const styles = {
        "background-image": `url(${bkg})`,
        "background-repeat": "no-reapeat",
        "background-size": "cover",
    }

    return (
        <section className="shop" style={styles}>
            <Aside handleFilter={handleFilter} />
            <Main getProduct={getProduct} addItemToCart={addItemToCart} filterBy={filterBy} />
        </section>
    )
}