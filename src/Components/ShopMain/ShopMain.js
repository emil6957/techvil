import "./ShopMain.css";
import Aside from "../Aside/Aside";
import Main from "../Main/Main";
import bkg from "../../Images/shop-bkg.jpg";

export default function ShopMain({ getProduct, handleFilter, addItemToCart, filterBy }) {

    const styles = {
        "backgroundImage": `url(${bkg})`,
        "backgroundRepeat": "no-reapeat",
        "backgroundSize": "cover",
    }

    return (
        <section className="shop" style={styles}>
            <Aside filterBy={filterBy} handleFilter={handleFilter} />
            <Main getProduct={getProduct} addItemToCart={addItemToCart} filterBy={filterBy} />
        </section>
    )
}