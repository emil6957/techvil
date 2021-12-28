import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav>
            <ul className="page-links">
                <li className="nav-link"><Link to="/">Home</Link></li>
                <li className="nav-link"><Link to="/Shop">Shop</Link></li>
                <li className="nav-link"><Link to="/Contact">Contact</Link></li>
            </ul>
        </nav>
    )
}