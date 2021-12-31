import "./TopMain.css";
import Search from "../../Images/MagnifyingGlass.svg";

export default function TopMain() {
    return (
        <div className="top-main">
            <div className="search">
                <img className="search__img" src={Search} alt="Magnifying Glass" />
                <input className="search__input" type="text" placeholder="Search..." />
            </div>
            <select className="dropdown">
                <option disabled selected value="">Sort by...</option>
                <option value="">Price High to Low</option>
                <option value="">Price Low to High</option>
                <option value="">Accending Alphabetically</option>
            </select>
        </div>
    )
}