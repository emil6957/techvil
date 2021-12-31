import "./BottomMain.css";
import Card from "../Card/Card";
import data from "../../Data/ProductData";

export default function BottomMain() {

    const cpuElements = data.CPU.items.map(item => <Card name={item.name} img={item.img} price={item.price} />)

    return (
        <div className="bottom-main">
            <div className="products">
                {cpuElements};
            </div>
        </div>
    )
}
