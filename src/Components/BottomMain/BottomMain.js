import "./BottomMain.css";
import Card from "../Card/Card";
import data from "../../Data/ProductData";

export default function BottomMain({ getProduct, addItemToCart, sortBy, search, filterBy }) {

    let cardElements; 
    if(filterBy === "all") {
        const CPUS = data.CPU.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const GPUS = data.GPU.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const RAMS = data.RAM.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const Desktops = data.Desktop.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const Laptops = data.Laptop.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        cardElements = [...CPUS, ...GPUS, ...RAMS, ...Desktops, ...Laptops];
    }

    if(filterBy === "computer-parts") {
        const CPUS = data.CPU.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const GPUS = data.GPU.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        const RAMS = data.RAM.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
        cardElements = [...CPUS, ...GPUS, ...RAMS];
    } 

    if(filterBy === "pre-built") {
        const Desktops = data.Desktop.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id}  />);
        const Laptops = data.Laptop.items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id}  />);
        cardElements = [...Desktops, ...Laptops];
    }

    if(filterBy === "CPU" || filterBy === "GPU" || filterBy === "RAM" || filterBy === "Desktop" || filterBy === "Laptop") {
        cardElements =  data[filterBy].items.map(item => <Card getProduct={getProduct} addItemToCart={addItemToCart} item={item} key={item.id} />);
    }

    function searchBy() {
        cardElements = cardElements.filter(card => card.props.item.name.toLowerCase().includes(search.toLowerCase()));
    }

    function sort() {
        if(sortBy === "a-z") {
            cardElements.sort((a, b) => a.props.item.name.toLowerCase() < b.props.item.name.toLowerCase() ? -1 : 1);
        }
        if(sortBy === "z-a") {
            cardElements.sort((a, b) => b.props.item.name.toLowerCase() < a.props.item.name.toLowerCase() ? -1 : 1);
        }
        if(sortBy === "low-high") {
            cardElements.sort((a, b) => a.props.item.price - b.props.item.price);
        }
        if(sortBy === "high-low") {
            cardElements.sort((a, b) => b.props.item.price - a.props.item.price);
        }
    }

    if(search !== "") {
        searchBy();
    }

    if(sortBy !== "") {
        sort() 
    }

    return (
        <div className="bottom-main">
            <div className="products">
                {cardElements}        
            </div>
        </div>
    )
}
