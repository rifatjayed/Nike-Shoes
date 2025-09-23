// import React, { useContext, useEffect, useState } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import EmptyCart from "../assets/EmptyCart.png";
// import { X, Plus, Minus } from "lucide-react";
// import { Link } from "react-router";
// import { motion, AnimatePresence } from "framer-motion";

// const Cart = () => {
//   const [animatedTotal, setAnimatedTotal] = useState(0);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const {
//     all_product,
//     cartItems,
//     removeFormCart,
//     getTotalCartAmount,
//     increaseQuantity,
//     decreaseQuantity,
//   } = useContext(ShopContext);

//   const totalAmount = getTotalCartAmount();

//   useEffect(() => {
//     setAnimatedTotal(totalAmount);
//   }, [totalAmount]);

//   return (
//     <div className="bg-gray-50 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         {Object.keys(cartItems).length === 0 ? (
//           <div className="flex flex-col items-center justify-center mt-20">
//             <motion.img
//               src={EmptyCart}
//               alt="Empty Cart"
//               className="w-64"
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 1, repeat: Infinity }}
//             />
//             <p className="mt-6 text-gray-600 text-xl font-semibold">
//               Your cart is empty!
//             </p>
//             <Link to="/" className="mt-4">
//               <button className="px-6 py-3 bg-gradient-to-r from-[#138695] to-[#0f6d75] text-white rounded-full font-semibold shadow-lg hover:scale-105 transform transition">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Cart Items */}
//             <div className="flex-1 space-y-4">
//               <div className="hidden md:grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">
//                 <p>Product</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//               </div>

//               <AnimatePresence>
//                 {all_product.map((item) => {
//                   const quantity = cartItems[item.id] || 0;
//                   if (quantity > 0) {
//                     return (
//                       <motion.div
//                         key={item.id}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 0.3 }}
//                         className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:grid md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-4 md:gap-2 hover:shadow-2xl transition-shadow"
//                       >
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="h-20 w-20 object-cover rounded-md"
//                         />
//                         <p className="text-gray-700 font-medium">{item.name}</p>
//                         <p className="hidden md:block font-semibold">
//                           ${item.new_price}
//                         </p>
//                         <div className="flex items-center justify-center gap-2">
//                           <motion.button
//                             onClick={() => decreaseQuantity(item.id)}
//                             className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
//                             whileTap={{ scale: 0.9 }}
//                           >
//                             <Minus size={16} />
//                           </motion.button>
//                           <motion.span
//                             key={quantity}
//                             initial={{ scale: 0.8, opacity: 0 }}
//                             animate={{ scale: 1, opacity: 1 }}
//                             transition={{ duration: 0.2 }}
//                             className="font-medium"
//                           >
//                             {quantity}
//                           </motion.span>
//                           <motion.button
//                             onClick={() => increaseQuantity(item.id)}
//                             className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
//                             whileTap={{ scale: 0.9 }}
//                           >
//                             <Plus size={16} />
//                           </motion.button>
//                         </div>
//                         <motion.p
//                           key={quantity * item.new_price}
//                           initial={{ scale: 0.8, opacity: 0 }}
//                           animate={{ scale: 1, opacity: 1 }}
//                           transition={{ duration: 0.2 }}
//                           className="hidden md:block font-semibold"
//                         >
//                           ${item.new_price * quantity}
//                         </motion.p>
//                         <X
//                           onClick={() => removeFormCart(item.id)}
//                           className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
//                           size={20}
//                         />
//                       </motion.div>
//                     );
//                   }
//                   return null;
//                 })}
//               </AnimatePresence>
//             </div>

//             {/* Cart Summary */}
//             <motion.div
//               className="flex-1 sticky top-24 space-y-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//             >
//               <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col gap-6">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Cart Summary
//                 </h2>
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-600 font-medium">Subtotal</p>
//                   <motion.p
//                     key={animatedTotal}
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     className="font-bold text-gray-800 text-lg"
//                   >
//                     ${animatedTotal}
//                   </motion.p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-600 font-medium">Shipping Fee</p>
//                   <p className="font-bold text-gray-800 text-lg">Free</p>
//                 </div>
//                 <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-2xl font-extrabold">
//                   <p>Total</p>
//                   <motion.p
//                     key={animatedTotal}
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     ${animatedTotal}
//                   </motion.p>
//                 </div>
//                 <Link to="#">
//                   <motion.button
//                     className="w-full py-4 bg-gradient-to-r from-[#138695] to-[#0f6d75] text-white font-bold rounded-xl shadow-lg hover:scale-105 transform transition"
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Proceed to Checkout
//                   </motion.button>
//                 </Link>
//               </div>

//               {/* Promo Code */}
//               <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col gap-4">
//                 <h3 className="text-gray-700 font-semibold text-lg">
//                   Have a promo code?
//                 </h3>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Enter promo code"
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138695] transition"
//                   />
//                   <motion.button
//                     className="px-6 py-3 bg-gradient-to-r from-[#138695] to-[#0f6d75] text-white font-semibold rounded-lg hover:scale-105 transform transition"
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     Apply
//                   </motion.button>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

// import React, { useContext, useEffect } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import EmptyCart from "../assets/EmptyCart.png";
// import { X, Plus, Minus } from "lucide-react";
// import { Link } from "react-router";

// const Cart = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const {
//     all_product,
//     cartItems,
//     increaseQuantity,
//     decreaseQuantity,
//     deleteFromCart,
//     getTotalCartAmount,
//   } = useContext(ShopContext);

//   const totalAmount = getTotalCartAmount();

//   return (
//     <div className="bg-gray-50 min-h-screen py-10">
//       <div className="max-w-7xl mx-auto px-4">
//         {Object.keys(cartItems).length === 0 ? (
//           <div className="flex flex-col items-center justify-center mt-20">
//             <img src={EmptyCart} alt="Empty Cart" className="w-64" />
//             <p className="mt-6 text-gray-600 text-xl font-semibold">
//               Your cart is empty!
//             </p>
//             <Link to="/" className="mt-4">
//               <button className="px-6 py-3 bg-[#138695] text-white rounded-full font-semibold shadow-lg hover:bg-[#0f6d75] transition">
//                 Continue Shopping
//               </button>
//             </Link>
//           </div>
//         ) : (
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Cart Items */}
//             <div className="flex-1 space-y-4">
//               <div className="hidden md:grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 py-2 font-semibold text-gray-700 border-b border-gray-300">
//                 <p>Product</p>
//                 <p>Title</p>
//                 <p>Price</p>
//                 <p>Quantity</p>
//                 <p>Total</p>
//                 <p>Remove</p>
//               </div>

//               {all_product.map((item) => {
//                 const quantity = cartItems[item.id] || 0;
//                 if (quantity > 0) {
//                   return (
//                     <div
//                       key={item.id}
//                       className="bg-white rounded-lg shadow-lg p-4 flex flex-col md:grid md:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-4 md:gap-2 hover:shadow-2xl transition-shadow"
//                     >
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="h-20 w-20 object-cover rounded-md"
//                       />
//                       <p className="text-gray-700 font-medium">{item.name}</p>
//                       <p className="hidden md:block font-semibold">
//                         ${item.new_price}
//                       </p>
//                       <div className="flex items-center justify-center gap-2">
//                         <button
//                           onClick={() => decreaseQuantity(item.id)}
//                           className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
//                         >
//                           <Minus size={16} />
//                         </button>
//                         <span className="font-medium">{quantity}</span>
//                         <button
//                           onClick={() => increaseQuantity(item.id)}
//                           className="p-2 bg-gray-100 rounded hover:bg-gray-200 transition"
//                         >
//                           <Plus size={16} />
//                         </button>
//                       </div>
//                       <p className="hidden md:block font-semibold">
//                         ${item.new_price * quantity}
//                       </p>
//                       <X
//                         onClick={() => deleteFromCart(item.id)}
//                         className="cursor-pointer text-red-500 hover:text-red-700 transition-colors"
//                         size={20}
//                       />
//                     </div>
//                   );
//                 }
//                 return null;
//               })}
//             </div>

//             {/* Cart Summary */}
//             <div className="flex-1 sticky top-24 space-y-6">
//               <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col gap-6">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   Cart Summary
//                 </h2>
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-600 font-medium">Subtotal</p>
//                   <p className="font-bold text-gray-800 text-lg">
//                     ${totalAmount}
//                   </p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-600 font-medium">Shipping Fee</p>
//                   <p className="font-bold text-gray-800 text-lg">Free</p>
//                 </div>
//                 <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-2xl font-extrabold">
//                   <p>Total</p>
//                   <p>${totalAmount}</p>
//                 </div>
//                 <Link to="#">
//                   <button className="w-full py-4 bg-[#138695] text-white font-bold rounded-xl shadow-lg hover:bg-[#0f6d75] transition">
//                     Proceed to Checkout
//                   </button>
//                 </Link>
//               </div>

//               {/* Promo Code */}
//               <div className="bg-white p-6 rounded-xl shadow-2xl flex flex-col gap-4">
//                 <h3 className="text-gray-700 font-semibold text-lg">
//                   Have a promo code?
//                 </h3>
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Enter promo code"
//                     className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138695] transition"
//                   />
//                   <button className="px-6 py-3 bg-[#138695] text-white font-semibold rounded-lg hover:bg-[#0f6d75] transition">
//                     Apply
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Cart;

import React, { useContext, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import EmptyCart from "../assets/EmptyCart.png";
import { X, Plus, Minus } from "lucide-react";
import { Link } from "react-router";

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    all_product,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    deleteFromCart,
    getTotalCartAmount,
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  return (
    <div className="bg-gray-50 min-h-screen py-4 sm:py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6">
        {Object.keys(cartItems).length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 text-center">
            <img
              src={EmptyCart}
              alt="Empty Cart"
              className="w-40 sm:w-52 md:w-64 lg:w-72"
            />
            <p className="mt-4 sm:mt-6 md:mt-8 text-gray-600 text-base sm:text-lg md:text-xl font-semibold">
              Your cart is empty!
            </p>
            <Link to="/" className="mt-3 sm:mt-4 md:mt-6">
              <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#138695] text-white text-sm sm:text-base rounded-full font-semibold shadow-md hover:bg-[#0f6d75] transition duration-300 transform hover:scale-105">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col xl:flex-row gap-6 lg:gap-8">
            {/* Cart Items */}
            <div className="flex-1 space-y-3 sm:space-y-4">
              {/* Desktop Header */}
              <div className="hidden lg:grid grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center px-4 py-3 font-semibold text-gray-700 border-b border-gray-300 bg-white rounded-t-lg">
                <p className="text-sm md:text-base">Product</p>
                <p className="text-sm md:text-base">Title</p>
                <p className="text-sm md:text-base">Price</p>
                <p className="text-sm md:text-base">Quantity</p>
                <p className="text-sm md:text-base">Total</p>
                <p className="text-sm md:text-base">Remove</p>
              </div>

              {/* Mobile Header */}
              <div className="lg:hidden bg-white p-4 rounded-lg shadow-sm">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">
                  Cart Items (
                  {Object.values(cartItems).reduce((a, b) => a + b, 0)})
                </h2>
              </div>

              {all_product.map((item) => {
                const quantity = cartItems[item.id] || 0;
                if (quantity > 0) {
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-lg shadow-sm sm:shadow-md p-3 sm:p-4 flex flex-col sm:flex-row lg:grid lg:grid-cols-[0.5fr,2fr,1fr,1fr,1fr,1fr] items-center gap-3 sm:gap-4 hover:shadow-lg transition-all duration-300 border border-gray-100"
                    >
                      {/* Product Image */}
                      <div className="flex items-center justify-center w-full sm:w-auto">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-cover rounded-md"
                        />
                      </div>

                      {/* Title */}
                      <div className="text-center sm:text-left w-full sm:flex-1">
                        <p className="text-gray-700 font-medium text-sm sm:text-base md:text-lg line-clamp-2">
                          {item.name}
                        </p>
                        {/* Mobile Price Display */}
                        <div className="lg:hidden flex justify-between items-center mt-2 text-xs sm:text-sm">
                          <span className="font-semibold text-gray-800">
                            ${item.new_price}
                          </span>
                          <span className="font-semibold text-gray-800">
                            Total: ${item.new_price * quantity}
                          </span>
                        </div>
                      </div>

                      {/* Price - Desktop */}
                      <p className="hidden lg:block font-semibold text-gray-800 text-base md:text-lg">
                        ${item.new_price}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-center gap-1 sm:gap-2 w-full sm:w-auto">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="p-1 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200 active:scale-95"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={14} sm:size={16} />
                        </button>
                        <span className="font-medium text-sm sm:text-base min-w-[30px] text-center">
                          {quantity}
                        </span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="p-1 sm:p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition duration-200 active:scale-95"
                          aria-label="Increase quantity"
                        >
                          <Plus size={14} sm:size={16} />
                        </button>
                      </div>

                      {/* Total Price - Desktop */}
                      <p className="hidden lg:block font-semibold text-gray-800 text-base md:text-lg">
                        ${(item.new_price * quantity).toFixed(2)}
                      </p>

                      {/* Remove Button */}
                      <div className="flex justify-center w-full sm:w-auto mt-2 sm:mt-0">
                        <button
                          onClick={() => deleteFromCart(item.id)}
                          className="p-1 sm:p-2 bg-red-50 hover:bg-red-100 rounded-full transition duration-200 active:scale-95"
                          aria-label="Remove item"
                        >
                          <X
                            size={16}
                            sm:size={20}
                            className="text-red-500 hover:text-red-700"
                          />
                        </button>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Cart Summary */}
            <div className="flex-1 xl:max-w-sm space-y-4 sm:space-y-6 sticky top-4">
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">
                  Cart Summary
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <p className="text-gray-600 font-medium">Subtotal</p>
                    <p className="font-bold text-gray-800">
                      ${totalAmount.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex justify-between items-center text-sm sm:text-base">
                    <p className="text-gray-600 font-medium">Shipping Fee</p>
                    <p className="font-bold text-green-600">Free</p>
                  </div>

                  <div className="border-t border-gray-200 pt-3 sm:pt-4 flex justify-between items-center text-base sm:text-lg md:text-xl font-extrabold">
                    <p>Total</p>
                    <p className="text-[#138695]">${totalAmount.toFixed(2)}</p>
                  </div>
                </div>

                <Link to="/checkout" className="block mt-4 sm:mt-6">
                  <button className="w-full py-3 sm:py-4 bg-[#138695] text-white text-sm sm:text-base font-bold rounded-xl shadow-md hover:bg-[#0f6d75] transition duration-300 transform hover:scale-[1.02] active:scale-100">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>

              {/* Promo Code */}
              <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md border border-gray-100">
                <h3 className="text-gray-700 font-semibold text-sm sm:text-base md:text-lg mb-3">
                  Have a promo code?
                </h3>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder="Enter promo code"
                    className="flex-1 p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#138695] transition text-sm sm:text-base"
                  />
                  <button className="px-4 sm:px-5 py-2 sm:py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-200 text-sm sm:text-base">
                    Apply
                  </button>
                </div>
              </div>

              {/* Continue Shopping - Mobile */}
              <div className="lg:hidden bg-white p-4 rounded-xl shadow-md border border-gray-100">
                <Link to="/" className="block w-full">
                  <button className="w-full py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition duration-200">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
