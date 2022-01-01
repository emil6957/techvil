import "./BottomMain.css";
import Card from "../Card/Card";
import data from "../../Data/ProductData";

export default function BottomMain({ sortBy, search, filterBy }) {

    let cardElements; 
    if(filterBy === "all") {
        const CPUS = data.CPU.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const GPUS = data.GPU.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const RAMS = data.RAM.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const Desktops = data.Desktop.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const Laptops = data.Laptop.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        cardElements = [...CPUS, ...GPUS, ...RAMS, ...Desktops, ...Laptops];
    }

    if(filterBy === "computer-parts") {
        const CPUS = data.CPU.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const GPUS = data.GPU.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const RAMS = data.RAM.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        cardElements = [...CPUS, ...GPUS, ...RAMS];
    } 

    if(filterBy === "pre-built") {
        const Desktops = data.Desktop.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        const Laptops = data.Laptop.items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
        cardElements = [...Desktops, ...Laptops];
    }

    if(filterBy === "CPU" || filterBy === "GPU" || filterBy === "RAM" || filterBy === "Desktop" || filterBy === "Laptop") {
        cardElements =  data[filterBy].items.map(item => <Card key={item.id} id={item.id} name={item.name} img={item.img} price={item.price} />);
    }

    function searchBy() {
        cardElements = cardElements.filter(item => item.props.name.toLowerCase().includes(search.toLowerCase()));
    }

    function sort() {
        if(sortBy === "a-z") {
            cardElements.sort((a, b) => a.props.name.toLowerCase() < b.props.name.toLowerCase() ? -1 : 1);
        }
        if(sortBy === "z-a") {
            cardElements.sort((a, b) => b.props.name.toLowerCase() < a.props.name.toLowerCase() ? -1 : 1);
        }
        if(sortBy === "low-high") {
            cardElements.sort((a, b) => a.props.price - b.props.price);
        }
        if(sortBy === "high-low") {
            cardElements.sort((a, b) => b.props.price - a.props.price);
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
