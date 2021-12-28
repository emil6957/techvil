import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul className="page-links">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/shop">Shop</Link></li>
                <li className="nav-link"><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    )
}