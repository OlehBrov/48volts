import { CartHandler } from "@/components/CartHandler";
import Link from "next/link";
import React from "react";

export const ProductsGrid = async (props) => {
  const products = await props.data;
 
  return (
    <>
      {products.map((el, index) => {
        if (props.limit) {
          if (index >= props.limit) return;
        }
        return (
          <Link
            key={el.id}
            className="flex flex-col gap-4 bg-blue-200 px-5 py-5 rounded-lg justify-between items-center transition-all duration-300 hover:shadow-[0_0_11px_rgba(33,33,33,.2)]"
             href={`${process.env.NEXT_PUBLIC_API_URL}/productDetails/${el.id}`}
          >
            <h3 className="text-xl font-bold text-center">Назва: {el.name}</h3>
          
              <div className="w-40">
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>{" "}
          

            <CartHandler product={ el} />

          </Link>
        );
      })}
    </>
  );
};
