import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(item) {
    console.log(item);
    setCart(prevCart => [...prevCart, item])
  }

  return (
    <Router>
      <div className="App">
          <Header cart={cart} />
        <Routes>
          <Route path="/" element={ <Hero /> } />
          <Route path="/shop" element={ <Shop addItemToCart={addItemToCart} /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
