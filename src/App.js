import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
        <Routes>
          <Route path="/" element={ <Hero /> } />
          <Route path="/Shop" element={ <Shop /> } />
          <Route path="/Contact" element={ <Contact /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
