import { BackLink } from "@/components/BackLink";
import { CartHandler } from "@/components/CartHandler";
import { cn } from "@/lib/utils";
import MaxWidthWrapper from "@/pagecomponents/MaxWidthWrapper";
import Link from "next/link";

const Categories = async ({ params }) => {
  const { category_id } = params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/${category_id}`
  );

  const { products, category } = await response.json();

  const backgroundClass = `/prods/categories/${category_id}.webp`;
  return (
    <>
      <section
        className="bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${backgroundClass})` }}
      >
        <MaxWidthWrapper className={cn("flex")}>
          <div className="p-12 my-auto flex rounded-xl bg-white/40 shadow-lg ring-1 ring-black/5">
            <h2 className="text-7xl font-bold uppercase text-amber-700">
              {category.name_local}
            </h2>
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <MaxWidthWrapper>
          <div className="py-20">
            <BackLink/>
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  className="bg-slate-300 p-6 rounded-lg flex flex-col"
                  href={`${process.env.NEXT_PUBLIC_API_URL}/productDetails/${product.id}`}
                >
                  <div className="w-64 mb-6">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full"
                    />
                  </div>
                  <p className="font-medium text-xl">{product.name}</p>
                  <p className="font-medium text-xl">Бренд: {product.brand}</p>
                  <p className="font-medium text-xl mt-4">
                    Ціна: {product.price.toFixed(2)} грн.
                  </p>
                  <CartHandler product={product} />
                </Link>
              ))}
              {/* <div className="w-full h-96 self-center">
            <img src={product.image} className="w-full h-full object-contain " />
          </div>
          <div>
            <h2 className="text-6xl font-semibold mb-4 leading-normal">{product.name}</h2>
            <h3 className="text-3xl font-medium">{product.brand}</h3>
            <div className="max-full h-2 bg-green-900 rounded-md mt-4" />
            <ProductTechDetails product={product} />
          </div>
          <div className="px-3">
            <div className="w-full h-px bg-slate-500 mb-4" />
            <p className="font-medium text-xl my-4">Ціна: {product.price} грн.</p>
            <CartHandler product={ product} />
          </div> */}
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default Categories;
