import './App.css';
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Shop from "./Components/Shop/Shop";
import Contact from "./Components/Contact/Contact";
import Cart from './Components/Cart/Cart';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartAmmount, setCartAmmount] = useState(0);
  const [displayCart, setDisplayCart] = useState(false);

  function addItemToCart(item) {
    let itemInCart = false;
    setCartItems(prevCart =>  {
      for(let i = 0; i < prevCart.length; i++) {
        if(prevCart[i].id === item.id) {
          itemInCart = true;
        }
      }
      if(itemInCart) {
        return [...prevCart];
      } else {
        item.ammount = 0;
        return [...prevCart, item];
      }
    }) 
    item.ammount += 1;
  }

  useEffect(() => {
    updateCartAmmount();
  }, [cartItems])

  function updateCartAmmount() {
    setCartAmmount(cartItems.reduce((acc, currentItem) => acc + currentItem.ammount, 0));
  }



  function toggleCartDisplay() {
    setDisplayCart(prevState => !prevState);
  }

  return (
    <Router>
      <div className="App">
          <Header toggleCartDisplay={toggleCartDisplay} cartAmmount={cartAmmount} />
        <Routes>
          <Route path="/" element={ <Hero /> } />
          <Route path="/shop/*" element={ <Shop cartItems={cartItems} addItemToCart={addItemToCart} /> } />
          <Route path="/contact" element={ <Contact /> } />
        </Routes>
        {displayCart && <Cart cartItems={cartItems} />}
      </div>
    </Router>
  );
}

export default App;