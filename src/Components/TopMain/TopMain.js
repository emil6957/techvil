import "./TopMain.css";
import Search from "../../Images/MagnifyingGlass.svg";

export default function TopMain() {
    return (
        <div className="top-main">
            <div className="search">
                <img className="search__img" src={Search} alt="Magnifying Glass" />
                <input className="search__input" type="text" placeholder="Search..." />
            </div>
            <select defaultValue="placeholder" className="dropdown">
                <option disabled value="placeholder">Sort by...</option>
                <option value="high-low">Price High to Low</option>
                <option value="low-high">Price Low to High</option>
                <option value="a-z">Ascending Alphabetically</option>
                <option value="z-a">Descending Alphabetically</option>
            </select>
        </div>
    )
}