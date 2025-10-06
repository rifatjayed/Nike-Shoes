// import React, { createContext, useState, useMemo, useEffect } from "react";
// import all_product from "../Data/all_products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   all_product.forEach((product) => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// const ShopContextProvider = (props) => {
//   const getInitialCart = () => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartItems");
//       return savedCart ? JSON.parse(savedCart) : getDefaultCart();
//     }
//     return getDefaultCart();
//   };

//   const [cartItems, setCartItems] = useState(getInitialCart);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   // ✅ Increase
//   const increaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   // ✅ Decrease
//   const decreaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));
//   };

//   // ✅ Delete
//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: 0,
//     }));
//   };

//   const clearCart = () => {
//     setCartItems(getDefaultCart());
//   };

//   const getTotalCartAmount = () => {
//     return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
//       if (quantity > 0) {
//         const itemInfo = all_product.find(
//           (product) => product.id === Number(itemId)
//         );
//         if (itemInfo) {
//           return total + quantity * itemInfo.new_price;
//         }
//       }
//       return total;
//     }, 0);
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce(
//       (total, quantity) => total + Math.max(quantity, 0),
//       0
//     );
//   };

//   const getCartItemsWithDetails = () => {
//     return Object.entries(cartItems)
//       .filter(([_, quantity]) => quantity > 0)
//       .map(([itemId, quantity]) => {
//         const product = all_product.find((p) => p.id === Number(itemId));
//         return product ? { ...product, quantity } : null;
//       })
//       .filter((item) => item !== null);
//   };

//   // ✅ এখানে আবার রাখলাম
//   const getProductById = (id) => {
//     return all_product.find((product) => product.id === Number(id));
//   };

//   const contextValue = useMemo(
//     () => ({
//       all_product,
//       cartItems,
//       increaseQuantity,
//       decreaseQuantity,
//       deleteFromCart,
//       clearCart,
//       getTotalCartAmount,
//       getTotalCartItems,
//       getCartItemsWithDetails,
//       getProductById, // ✅ আবার add করা হলো
//     }),
//     [cartItems]
//   );

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// aita orginal code
// import React, { createContext, useState, useMemo, useEffect } from "react";
// import all_product from "../Data/all_products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   all_product.forEach((product) => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// // New: Get default cart with options
// const getDefaultCartWithOptions = () => {
//   return {};
// };

// const ShopContextProvider = (props) => {
//   const getInitialCart = () => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartItems");
//       return savedCart ? JSON.parse(savedCart) : getDefaultCart();
//     }
//     return getDefaultCart();
//   };

//   // New: Get initial cart with options
//   const getInitialCartWithOptions = () => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartItemsWithOptions");
//       return savedCart ? JSON.parse(savedCart) : getDefaultCartWithOptions();
//     }
//     return getDefaultCartWithOptions();
//   };

//   const [cartItems, setCartItems] = useState(getInitialCart);
//   // New: State for cart items with options
//   const [cartItemsWithOptions, setCartItemsWithOptions] = useState(
//     getInitialCartWithOptions
//   );

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   // New: Save cart with options to localStorage
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(
//         "cartItemsWithOptions",
//         JSON.stringify(cartItemsWithOptions)
//       );
//     }
//   }, [cartItemsWithOptions]);

//   // ✅ Increase (existing - unchanged)
//   const increaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   // ✅ Decrease (existing - unchanged)
//   const decreaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));
//   };

//   // ✅ Delete (existing - unchanged)
//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: 0,
//     }));
//   };

//   // New: Add to cart with options (color, size, quantity)
//   const addToCartWithOptions = (productId, options) => {
//     const { color, size, quantity } = options;

//     // Create unique key for this combination
//     const itemKey = `${productId}-${color}-${size}`;

//     setCartItemsWithOptions((prev) => ({
//       ...prev,
//       [itemKey]: {
//         productId: Number(productId),
//         color,
//         size,
//         quantity: (prev[itemKey]?.quantity || 0) + quantity,
//         addedAt: new Date().toISOString(),
//       },
//     }));

//     // Also update the simple cart for backward compatibility
//     setCartItems((prev) => ({
//       ...prev,
//       [productId]: (prev[productId] || 0) + quantity,
//     }));
//   };

//   // New: Remove item with options from cart
//   const deleteFromCartWithOptions = (itemKey) => {
//     setCartItemsWithOptions((prev) => {
//       const newCart = { ...prev };
//       delete newCart[itemKey];
//       return newCart;
//     });
//   };

//   // New: Update quantity for item with options
//   const updateCartItemQuantity = (itemKey, newQuantity) => {
//     if (newQuantity <= 0) {
//       deleteFromCartWithOptions(itemKey);
//       return;
//     }

//     setCartItemsWithOptions((prev) => ({
//       ...prev,
//       [itemKey]: {
//         ...prev[itemKey],
//         quantity: newQuantity,
//       },
//     }));
//   };

//   const clearCart = () => {
//     setCartItems(getDefaultCart());
//     setCartItemsWithOptions(getDefaultCartWithOptions());
//   };

//   // ✅ Get total cart amount (existing - unchanged)
//   const getTotalCartAmount = () => {
//     return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
//       if (quantity > 0) {
//         const itemInfo = all_product.find(
//           (product) => product.id === Number(itemId)
//         );
//         if (itemInfo) {
//           return total + quantity * itemInfo.new_price;
//         }
//       }
//       return total;
//     }, 0);
//   };

//   // New: Get total cart amount including options
//   const getTotalCartAmountWithOptions = () => {
//     return Object.values(cartItemsWithOptions).reduce((total, item) => {
//       const product = all_product.find((p) => p.id === item.productId);
//       if (product) {
//         return total + item.quantity * product.new_price;
//       }
//       return total;
//     }, 0);
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce(
//       (total, quantity) => total + Math.max(quantity, 0),
//       0
//     );
//   };

//   const getTotalCartItemsAll = () => {
//     const simple = Object.values(cartItems).reduce(
//       (total, quantity) => total + Math.max(quantity, 0),
//       0
//     );
//     const withOptions = Object.values(cartItemsWithOptions).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     console.log("Simple:", simple, "WithOptions:", withOptions); // ✅ Debug
//     return simple + withOptions;
//   };
//   // New: Get total items including options
//   const getTotalCartItemsWithOptions = () => {
//     return Object.values(cartItemsWithOptions).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   };

//   const getCartItemsWithDetails = () => {
//     return Object.entries(cartItems)
//       .filter(([_, quantity]) => quantity > 0)
//       .map(([itemId, quantity]) => {
//         const product = all_product.find((p) => p.id === Number(itemId));
//         return product ? { ...product, quantity } : null;
//       })
//       .filter((item) => item !== null);
//   };

//   // New: Get cart items with options and details
//   const getCartItemsWithOptionsAndDetails = () => {
//     return Object.entries(cartItemsWithOptions)
//       .map(([itemKey, item]) => {
//         const product = all_product.find((p) => p.id === item.productId);
//         return product
//           ? {
//               ...product,
//               ...item,
//               itemKey, // Include the unique key
//               totalPrice: item.quantity * product.new_price,
//             }
//           : null;
//       })
//       .filter((item) => item !== null);
//   };

//   // ✅ Existing function - unchanged
//   const getProductById = (id) => {
//     return all_product.find((product) => product.id === Number(id));
//   };

//   const contextValue = useMemo(
//     () => ({
//       // Existing properties
//       all_product,
//       cartItems,
//       increaseQuantity,
//       decreaseQuantity,
//       deleteFromCart,
//       clearCart,
//       getTotalCartAmount,
//       getTotalCartItems,
//       getTotalCartItemsAll,
//       getCartItemsWithDetails,
//       getProductById,

//       // New properties for options
//       cartItemsWithOptions,
//       addToCartWithOptions,
//       deleteFromCartWithOptions,
//       updateCartItemQuantity,
//       getTotalCartAmountWithOptions,
//       getTotalCartItemsWithOptions,
//       getCartItemsWithOptionsAndDetails,
//     }),
//     [cartItems, cartItemsWithOptions]
//   );

//   return (
//     <ShopContext.Provider value={contextValue}>
//       {props.children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;

// aita 2nd code

// import React, { createContext, useState, useMemo, useEffect } from "react";
// import all_product from "../Data/all_products";

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//   let cart = {};
//   all_product.forEach((product) => {
//     cart[product.id] = 0;
//   });
//   return cart;
// };

// const getDefaultCartWithOptions = () => {
//   return {};
// };

// const ShopContextProvider = (props) => {
//   const getInitialCart = () => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartItems");
//       if (savedCart) {
//         try {
//           const parsedCart = JSON.parse(savedCart);
//           // Ensure all quantities are numbers and reset any that are not 0
//           const cleanedCart = {};
//           all_product.forEach((product) => {
//             const quantity = parsedCart[product.id];
//             // If quantity exists and is a valid number, use it. Otherwise set to 0.
//             cleanedCart[product.id] = quantity > 0 ? parseInt(quantity) : 0;
//           });
//           return cleanedCart;
//         } catch (error) {
//           console.error("Error parsing cart from localStorage:", error);
//           return getDefaultCart();
//         }
//       }
//       return getDefaultCart();
//     }
//     return getDefaultCart();
//   };

//   const getInitialCartWithOptions = () => {
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartItemsWithOptions");
//       return savedCart ? JSON.parse(savedCart) : getDefaultCartWithOptions();
//     }
//     return getDefaultCartWithOptions();
//   };

//   const [cartItems, setCartItems] = useState(getInitialCart);
//   const [cartItemsWithOptions, setCartItemsWithOptions] = useState(
//     getInitialCartWithOptions
//   );

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//     }
//   }, [cartItems]);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       localStorage.setItem(
//         "cartItemsWithOptions",
//         JSON.stringify(cartItemsWithOptions)
//       );
//     }
//   }, [cartItemsWithOptions]);

//   const increaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: (prev[itemId] || 0) + 1,
//     }));
//   };

//   const decreaseQuantity = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
//     }));
//   };

//   const deleteFromCart = (itemId) => {
//     setCartItems((prev) => ({
//       ...prev,
//       [itemId]: 0,
//     }));
//   };

//   const addToCartWithOptions = (productId, options) => {
//     const { color, size, quantity } = options;
//     const itemKey = `${productId}-${color}-${size}`;

//     setCartItemsWithOptions((prev) => ({
//       ...prev,
//       [itemKey]: {
//         productId: Number(productId),
//         color,
//         size,
//         quantity: (prev[itemKey]?.quantity || 0) + quantity,
//         addedAt: new Date().toISOString(),
//       },
//     }));
//   };

//   const deleteFromCartWithOptions = (itemKey) => {
//     setCartItemsWithOptions((prev) => {
//       const newCart = { ...prev };
//       delete newCart[itemKey];
//       return newCart;
//     });
//   };

//   const updateCartItemQuantity = (itemKey, newQuantity) => {
//     if (newQuantity <= 0) {
//       deleteFromCartWithOptions(itemKey);
//       return;
//     }

//     setCartItemsWithOptions((prev) => ({
//       ...prev,
//       [itemKey]: {
//         ...prev[itemKey],
//         quantity: newQuantity,
//       },
//     }));
//   };

//   const clearCart = () => {
//     setCartItems(getDefaultCart());
//     setCartItemsWithOptions(getDefaultCartWithOptions());
//   };

//   const getTotalCartAmount = () => {
//     return Object.entries(cartItems).reduce((total, [itemId, quantity]) => {
//       if (quantity > 0) {
//         const itemInfo = all_product.find(
//           (product) => product.id === Number(itemId)
//         );
//         if (itemInfo) {
//           return total + quantity * itemInfo.new_price;
//         }
//       }
//       return total;
//     }, 0);
//   };

//   const getTotalCartAmountWithOptions = () => {
//     return Object.values(cartItemsWithOptions).reduce((total, item) => {
//       const product = all_product.find((p) => p.id === item.productId);
//       if (product) {
//         return total + item.quantity * product.new_price;
//       }
//       return total;
//     }, 0);
//   };

//   const getTotalCartAmountAll = () => {
//     return getTotalCartAmount() + getTotalCartAmountWithOptions();
//   };

//   const getTotalCartItems = () => {
//     return Object.values(cartItems).reduce(
//       (total, quantity) => total + Math.max(quantity, 0),
//       0
//     );
//   };

//   const getTotalCartItemsAll = () => {
//     const simple = Object.values(cartItems).reduce(
//       (total, quantity) => total + Math.max(quantity, 0),
//       0
//     );
//     const withOptions = Object.values(cartItemsWithOptions).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//     return simple + withOptions;
//   };

//   const getTotalCartItemsWithOptions = () => {
//     return Object.values(cartItemsWithOptions).reduce(
//       (total, item) => total + item.quantity,
//       0
//     );
//   };

//   const getCartItemsWithDetails = () => {
//     return Object.entries(cartItems)
//       .filter(([_, quantity]) => quantity > 0)
//       .map(([itemId, quantity]) => {
//         const product = all_product.find((p) => p.id === Number(itemId));
//         return product ? { ...product, quantity } : null;
//       })
//       .filter((item) => item !== null);
//   };

//   const getCartItemsWithOptionsAndDetails = () => {
//     return Object.entries(cartItemsWithOptions)
//       .map(([itemKey, item]) => {
//         const product = all_product.find((p) => p.id === item.productId);
//         return product
//           ? {
//               ...product,
//               ...item,
//               itemKey,
//               totalPrice: item.quantity * product.new_price,
//             }
//           : null;
//       })
//       .filter((item) => item !== null);
//   };

//   const getAllCartItems = () => {
//     const simpleItems = getCartItemsWithDetails();
//     const optionItems = getCartItemsWithOptionsAndDetails();
//     return [...simpleItems, ...optionItems];
//   };

//   const getProductById = (id) => {
//     return all_product.find((product) => product.id === Number(id));
//   };

//   const contextValue = useMemo(
//     () => ({
//       all_product,
//       cartItems,
//       increaseQuantity,
//       decreaseQuantity,
//       deleteFromCart,
//       clearCart,
//       getTotalCartAmount,
//       getTotalCartItems,
//       getTotalCartItemsAll,
//       getCartItemsWithDetails,
//       getProductById,

//       cartItemsWithOptions,
//       addToCartWithOptions,
//       deleteFromCartWithOptions,
//       updateCartItemQuantity,
//       getTotalCartAmountWithOptions,
//       getTotalCartItemsWithOptions,
//       getCartItemsWithOptionsAndDetails,
//       getAllCartItems,
//       getTotalCartAmountAll,
//     }),
//     [cartItems, cartItemsWithOptions]
//   );

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

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach((product) => {
    cart[product.id] = 0; // সবগুলো product এর quantity 0
  });
  return cart;
};

const getDefaultCartWithOptions = () => {
  return {};
};

const ShopContextProvider = (props) => {
  // FIXED: Simplified getInitialCart - localStorage না থাকলে সবসময় default cart return করবে
  const getInitialCart = () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItems");
      if (savedCart) {
        try {
          return JSON.parse(savedCart);
        } catch (error) {
          console.error("Error parsing cart:", error);
          return getDefaultCart();
        }
      }
    }
    return getDefaultCart();
  };

  const getInitialCartWithOptions = () => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartItemsWithOptions");
      return savedCart ? JSON.parse(savedCart) : getDefaultCartWithOptions();
    }
    return getDefaultCartWithOptions();
  };

  const [cartItems, setCartItems] = useState(getInitialCart);
  const [cartItemsWithOptions, setCartItemsWithOptions] = useState(
    getInitialCartWithOptions
  );

  // Debug: Check what's in cart on component mount
  useEffect(() => {
    console.log("Initial Cart Items:", cartItems);
    const itemsWithQuantity = Object.entries(cartItems).filter(
      ([id, qty]) => qty > 0
    );
    if (itemsWithQuantity.length > 0) {
      console.log("Items with quantity > 0:", itemsWithQuantity);
    } else {
      console.log("Cart is empty - all quantities are 0");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(
        "cartItemsWithOptions",
        JSON.stringify(cartItemsWithOptions)
      );
    }
  }, [cartItemsWithOptions]);

  // ... rest of your functions remain the same
  const increaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const decreaseQuantity = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: 0,
    }));
  };

  const addToCartWithOptions = (productId, options) => {
    const { color, size, quantity } = options;
    const itemKey = `${productId}-${color}-${size}`;

    setCartItemsWithOptions((prev) => ({
      ...prev,
      [itemKey]: {
        productId: Number(productId),
        color,
        size,
        quantity: (prev[itemKey]?.quantity || 0) + quantity,
        addedAt: new Date().toISOString(),
      },
    }));
  };

  const deleteFromCartWithOptions = (itemKey) => {
    setCartItemsWithOptions((prev) => {
      const newCart = { ...prev };
      delete newCart[itemKey];
      return newCart;
    });
  };

  const updateCartItemQuantity = (itemKey, newQuantity) => {
    if (newQuantity <= 0) {
      deleteFromCartWithOptions(itemKey);
      return;
    }

    setCartItemsWithOptions((prev) => ({
      ...prev,
      [itemKey]: {
        ...prev[itemKey],
        quantity: newQuantity,
      },
    }));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setCartItemsWithOptions(getDefaultCartWithOptions());
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

  const getTotalCartAmountWithOptions = () => {
    return Object.values(cartItemsWithOptions).reduce((total, item) => {
      const product = all_product.find((p) => p.id === item.productId);
      if (product) {
        return total + item.quantity * product.new_price;
      }
      return total;
    }, 0);
  };

  const getTotalCartAmountAll = () => {
    return getTotalCartAmount() + getTotalCartAmountWithOptions();
  };

  const getTotalCartItems = () => {
    return Object.values(cartItems).reduce(
      (total, quantity) => total + Math.max(quantity, 0),
      0
    );
  };

  const getTotalCartItemsAll = () => {
    const simple = Object.values(cartItems).reduce(
      (total, quantity) => total + Math.max(quantity, 0),
      0
    );
    const withOptions = Object.values(cartItemsWithOptions).reduce(
      (total, item) => total + item.quantity,
      0
    );
    return simple + withOptions;
  };

  const getTotalCartItemsWithOptions = () => {
    return Object.values(cartItemsWithOptions).reduce(
      (total, item) => total + item.quantity,
      0
    );
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

  const getCartItemsWithOptionsAndDetails = () => {
    return Object.entries(cartItemsWithOptions)
      .map(([itemKey, item]) => {
        const product = all_product.find((p) => p.id === item.productId);
        return product
          ? {
              ...product,
              ...item,
              itemKey,
              totalPrice: item.quantity * product.new_price,
            }
          : null;
      })
      .filter((item) => item !== null);
  };

  const getAllCartItems = () => {
    const simpleItems = getCartItemsWithDetails();
    const optionItems = getCartItemsWithOptionsAndDetails();
    return [...simpleItems, ...optionItems];
  };

  const getProductById = (id) => {
    return all_product.find((product) => product.id === Number(id));
  };

  const contextValue = useMemo(
    () => ({
      all_product,
      cartItems,
      increaseQuantity,
      decreaseQuantity,
      deleteFromCart,
      clearCart,
      getTotalCartAmount,
      getTotalCartItems,
      getTotalCartItemsAll,
      getCartItemsWithDetails,
      getProductById,

      cartItemsWithOptions,
      addToCartWithOptions,
      deleteFromCartWithOptions,
      updateCartItemQuantity,
      getTotalCartAmountWithOptions,
      getTotalCartItemsWithOptions,
      getCartItemsWithOptionsAndDetails,
      getAllCartItems,
      getTotalCartAmountAll,
    }),
    [cartItems, cartItemsWithOptions]
  );

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
