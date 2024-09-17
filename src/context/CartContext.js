"use client"; // Ensures it's treated as a client-side component

import { createContext, useContext, useEffect, useState } from "react";

// Create the Cart context
const CartContext = createContext();

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage when the component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem("48voltscart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("48voltscart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("48voltscart"); // Remove if cart is empty
    }
  }, [cart]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
