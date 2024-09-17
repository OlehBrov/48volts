"use client";

import { useCart } from "@/context/CartContext";

export const CartIcon = () => {
  const { cart } = useCart();
  
  return (
    <div className="relative w-6 h-6 mr-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="currentColor"
        id="Cart--Streamline-Mynaui"
        height="24"
        width="24"
      >
        <desc>Cart Streamline Icon: https://streamlinehq.com</desc>
        <path
          d="M16.5 21a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3m-8 0a1.5 1.5 0 1 0 0 -3 1.5 1.5 0 0 0 0 3M3.71 5.4h15.214c1.378 0 2.373 1.27 1.995 2.548l-1.654 5.6C19.01 14.408 18.196 15 17.27 15H8.112c-0.927 0 -1.742 -0.593 -1.996 -1.452zm0 0L3 3"
          strokeWidth="1.5"
        ></path>
      </svg>
      {cart.length > 0 && (
        <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-800 rounded-full text-xs flex items-center justify-center text-white grow-0">
          {cart.length}
        </span>
      )}
    </div>
  );
};
