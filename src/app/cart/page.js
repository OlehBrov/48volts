"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import MaxWidthWrapper from "@/pagecomponents/MaxWidthWrapper";

const CartPage = () => {
  const {
    cart,
    increaseProductQuantity,
    decreaseProductQuantity,
    removeFromCart,
  } = useCart();
  const handleDecrease = (id, qty) => {

    if (qty <= 1) {
      removeFromCart(id);
      return;
    }
    decreaseProductQuantity(id);
  };
  return (
    <MaxWidthWrapper>
      {cart.length ? (
        <h2 className="mt-10 text-3xl">Корзина товарів</h2>
      ) : (
        <h2 className="mt-10 text-3xl">Корзина порожня</h2>
      )}
      {cart.length && (
        <div className="flex flex-col gap-6 mt-10">
          {cart.map((product) => (
            <div
              key={product.id}
              className="flex w-full p-5 bg-slate-300 rounded-lg"
            >
              <div className="w-40 h-40 rounded-md overflow-hidden mr-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="font-medium">Назва: </p>
                <p className="font-bold">{product.name}</p>
                <p className="font-medium">Модель: </p>
                <p className="font-bold">{product.model}</p>
              </div>
              <div className="mr-0 ml-auto flex gap-5 items-center">
                <p className="font-medium inline-block">Ціна: </p>
                <p className="font-bold inline-block">{product.price} грн.</p>
                <div className="flex gap-2 items-center">
                  <Button
                              onClick={() => handleDecrease(product.id, product.quantity)}
                              
                  >
                             <span className="text-red-700 text-3xl">-</span>
                  </Button>
                  <span className="font-bold">{product.quantity}</span>
                          <Button onClick={() => increaseProductQuantity(product.id)}
                          className="text-green-700 text-3xl"
                          >
                    +
                  </Button>
                </div>
                <p className="font-medium">Вартість: </p>
                <p className="font-bold inline-block">{product.quantity * product.price} грн.</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </MaxWidthWrapper>
  );
};

export default CartPage;
