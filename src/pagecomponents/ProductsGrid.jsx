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
          <div
            key={el.id}
            className="flex flex-col gap-4 bg-slate-500 px-5 py-5 rounded-lg justify-between items-center"
          >
            <h3 className="text-xl font-bold text-center">Назва: {el.name}</h3>
            <Link
              // href={`${process.env.NEXT_PUBLIC_API_URL}/api/${el.categoryId}/${el.id}`}
              href={`${process.env.NEXT_PUBLIC_API_URL}/productDetails/${el.id}`}
            >
              <div className="w-40">
                <img
                  src={el.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>{" "}
            </Link>

          </div>
        );
      })}
    </>
  );
};
