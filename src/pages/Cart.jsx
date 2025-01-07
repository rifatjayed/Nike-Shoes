import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import EmptyCart from "../assets/EmptyCart.png";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    getTotalCartItems,
    all_product,
    cartItems,
    removeFormCart,
    getTotalCartAmount,
  } = useContext(ShopContext);
  return (
    <div>
      <div className="max-w-7xl mx-auto my-10 p-4">
        {getTotalCartItems() === 0 ? (
          <div className="flex items-center justify-center">
            <img src={EmptyCart} alt="" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[0.5fr, 2fr, 1fr, 1fr, 1fr, 1fr] items-center px-4">
              <p>Products</p>
              <p>Title</p>
              <p className="hidden md:block">Price</p>
              <p className="hidden md:block">Quantity</p>
              <p className="hidden md:block">Total</p>
              <p className="hidden md:block">Remove</p>
            </div>
            <hr className="bg-gray-300 border-0 h-[2px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
