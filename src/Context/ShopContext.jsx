import React, { createContext, useState } from "react";
import all_products from "../Data/all_products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length; i++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = () => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFormCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  return <div></div>;
};

export default ShopContextProvider;
