import Link from "next/link";
import React from "react";
import { ProductsGrid } from "./ProductsGrid";

export const Populars = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const { products } = await res.json();
 
  const popular = products.filter((el) => el.isPopular);

  return (
    <>
      <div className="flex justify-center mb-6">
        <h2 className="text-3xl">Популярні товари</h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {<ProductsGrid data={popular} limit={3} />}
      </div>
    </>
  );
};
