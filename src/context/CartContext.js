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
    setCart((prevCart) => {
      const isAddedIdx = prevCart.findIndex((item) => item.id === product.id);
      if (isAddedIdx !== -1) {
        const updatedCart = prevCart.map((item, index) =>
          index === isAddedIdx
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        return updatedCart;
      } else return [...prevCart, product];
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };
  const increaseProductQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((prod) =>
        prod.id === productId
          ? {
              ...prod,
              quantity: prod.quantity + 1,
            }
          : prod
      );
    });
  };
  const decreaseProductQuantity = (productId) => {
    setCart((prevCart) => {
      return prevCart.map((prod) =>
        prod.id === productId
          ? {
              ...prod,
              quantity: prod.quantity - 1,
            }
          : prod
      );
    });
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the Cart context
export const useCart = () => useContext(CartContext);
