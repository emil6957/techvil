import "./Footer.css";
import Github from "../../Images/Github.svg"

export default function Footer() {
    return (
        <footer>
            <p className="footer__text">Copyright © Emil 2021</p>
            <a href="https://github.com/emil6957" target="_blank" rel="noreferrer"><img className="footer__github" src={Github} alt="github icon" /></a>
        </footer>
    )
}