"use client";
import { useCart } from "@/context/CartContext";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { SpanButtons } from "./ui/spanButtons";

export const CartHandler = ({ product }) => {
  const { addToCart, cart } = useCart();
  const [productQuantity, setProductQuantity] = useState(1);
  const increaseQuantity = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      setProductQuantity((prev) => prev + 1);
    },
    [productQuantity]
  );

  const decreaseQuantity = useCallback(
    (event) => {
      event.stopPropagation();
      event.preventDefault();
      if (productQuantity <= 1) return;
      setProductQuantity((prev) => prev - 1);
    },
    [productQuantity]
  );
  const addProductToCart = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const productToAdd = {
      ...product,
      quantity: productQuantity,
    };

    addToCart(productToAdd);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-3 items-center mb-3">
        <span
          className="flex w-8 h-8 items-center justify-center rounded-full overflow-hidden text-center text-2xl font-semibold text-black/70 transition-all duration-300 hover:text-blue-400"
          onClick={decreaseQuantity}
        >
          <SpanButtons sign={"remove"} />
        </span>
        <span className="flex items-center justify-center p-5 w-3 h-3 border-2 text-center text-2xl font-semibold">
          {productQuantity}
        </span>
        <span
          className="flex w-8 h-8 items-center justify-center rounded-full overflow-hidden text-center text-2xl font-semibold text-black/70 transition-all duration-300 hover:text-blue-400"
          onClick={increaseQuantity}
        >
          <SpanButtons sign={"add"} />
        </span>
      </div>
      <Button onClick={addProductToCart}>Додати в корзину</Button>
    </div>
  );
};
