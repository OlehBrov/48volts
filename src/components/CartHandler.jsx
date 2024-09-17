"use client";
import { useCart } from "@/context/CartContext";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";

export const CartHandler = ({ product }) => {
 
  const { addToCart, cart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);
  const increaseQuantity = useCallback(() => {
    console.log("+ productQuantity", productQuantity);
    setProductQuantity((prev) => prev + 1);
  }, [productQuantity]);

  const decreaseQuantity = useCallback(() => {
    console.log("- productQuantity", productQuantity);
    if (productQuantity <= 1) return;
    setProductQuantity((prev) => prev - 1);
  }, [productQuantity]);
  const addProductToCart = () => { 
    const productToAdd = {
      ...product,
      quantity: productQuantity
    }
    addToCart(productToAdd)
  }
  return (
    <div>
      <div className="flex gap-3 items-center mb-3">
        <span
          className="flex items-center justify-center p-3 w-3 h-3 bg-green-500 text-center text-2xl font-semibold"
          onClick={decreaseQuantity}
        >
          -
        </span>
        <span className="flex items-center justify-center p-5 w-3 h-3 border-2 text-center text-2xl font-semibold">
          {productQuantity}
        </span>
        <span
          className="flex items-center justify-center p-3 w-3 h-3 bg-green-500 text-center text-2xl font-semibold"
          onClick={increaseQuantity}
        >
          +
        </span>
      </div>
      <Button onClick={addProductToCart}>Додати в корзину</Button>
    </div>
  );
};
