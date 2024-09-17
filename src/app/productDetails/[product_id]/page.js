import MaxWidthWrapper from "@/pagecomponents/MaxWidthWrapper";
import { ProductTechDetails } from "./ProductTechDetails";
import { CartHandler } from "@/components/CartHandler";

const ProductDetails = async ({ params }) => {
  const { product_id } = params;
  const responce = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/products/${product_id}`
  );
  const { product } = await responce.json();
  console.log("product", product);

  const techs = () => {
    
  }
  return (
    <MaxWidthWrapper>
      <div className="py-20">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="w-full h-96 self-center">
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
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default ProductDetails;
