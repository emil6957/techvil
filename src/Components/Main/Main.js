import "./Main.css";
import TopMain from "../TopMain/TopMain";
import BottomMain from "../BottomMain/BottomMain";

export default function Main({ filterBy }) {
    return (
        <main>
            <TopMain />
            <BottomMain filterBy={filterBy} />
        </main>
    )
}