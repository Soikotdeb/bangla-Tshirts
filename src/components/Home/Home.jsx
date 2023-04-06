import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import toast from 'react-hot-toast';

const Home = () => {
  const tshirts = useLoaderData();
  // add to cart
  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirt) => {
    // check allready add to cart now show toast 
    const exists = cart.find(ts => ts._id === tshirt._id);
    if (exists) {
        toast('You have already added this T-shirt .');
    }
    else {
      const newCart = [...cart, tshirt];
      setCart(newCart);
    }
  };

  // remove from Cart
  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((ts) => ts._id !== id);
    setCart(remaining);
  };

  return (
    <div className="home-container">
      <div className="t-shirts-container">
        {tshirts.map((tshirt) => (
          <Tshirt
            key={tshirt._id}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
          ></Tshirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  );
};

export default Home;
