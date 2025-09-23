// import React, { createContext, useState } from "react";
// import all_product from "../Data/all_products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   for (let i = 0; i < all_product.length + 1; i++) {
//     cart[i] = 0;
//   }
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState(getDefaultCart());

//   const addToCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//   };

//   const removeFormCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = all_product.find(
//           (product) => product.id === Number(item)
//         );
//         totalAmount += cartItems[item] * itemInfo.new_price;
//       }
//     }
//     return totalAmount;
//   };

//   const getTotalCartItems = () => {
//     let totalItem = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         totalItem += cartItems[item];
//       }
//     }
//     return totalItem;
//   };

//   const contextValue = {
//     all_product,
//     cartItems,
//     addToCart,
//     removeFormCart,
//     getTotalCartAmount,
//     getTotalCartItems,
//   };

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

import React, { createContext, useState, useMemo, useEffect } from "react";
import all_product from "../Data/all_products";

export const ShopContext = createContext(null);

console.log("=== CONTEXT API DEBUG ===");
console.log("All products data:", all_product);
console.log("Number of products:", all_product.length);
console.log("First product:", all_product[0]);

const getDefaultCart = () => {
  let cart = {};
  // শুধুমাত্র existing product IDs এর জন্য cart initialize করুন
  all_product.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

const ShopContextProvider = (props) => {
  // localStorage থেকে cart load করুন
  const getInitialCart = () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      return savedCart ? JSON.parse(savedCart) : getDefaultCart();
    }
    return getDefaultCart();
  };

  const [cartItems, setCartItems] = useState(getInitialCart);

  // cartItems change হলে localStorage এ save করুন
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const updateCartItemQuantity = (itemId, quantity) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max(0, quantity),
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const getTotalCartAmount = () => {
    return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
      if (quantity > 0) {
        const itemInfo = all_product.find(
          (product) => product.id === Number(itemId)
        );
        if (itemInfo) {
          return total + quantity * itemInfo.new_price;
        }
      }
      return total;
    }, 0);
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce((total, quantity) => {
      return total + Math.max(quantity, 0);
    }, 0);
  };

  const getCartItemsWithDetails = () => {
    return Object.entries(cartItems)
      .filter(([_, quantity]) => quantity > 0)
      .map(([itemId, quantity]) => {
        const product = all_product.find((p) => p.id === Number(itemId));
        return product ? { ...product, quantity } : null;
      })
      .filter((item) => item !== null);
  };

  const getProductById = (id) => {
    return all_product.find((product) => product.id === Number(id));
  };

  const getProductsByCategory = (category) => {
    return all_product.filter((product) => product.category === category);
  };

  const getRelatedProducts = (currentProductId, limit = 4) => {
    const currentProduct = getProductById(currentProductId);
    if (!currentProduct) return [];

    return all_product
      .filter(
        (product) =>
          product.id !== currentProductId &&
          product.category === currentProduct.category
      )
      .slice(0, limit);
  };

  // useMemo দিয়ে context value optimize করুন
  const contextValue = useMemo(
    () => ({
      // Products data
      all_product,

      // Cart state and functions
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemQuantity,
      clearCart,
      getTotalCartAmount,
      getTotalCartItems,
      getCartItemsWithDetails,

      // Product utility functions
      getProductById,
      getProductsByCategory,
      getRelatedProducts,
    }),
    [cartItems]
  );

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
