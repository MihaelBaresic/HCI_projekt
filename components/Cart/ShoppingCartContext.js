import React, { useState } from "react";

const ShoppingCartContext = React.createContext();

function ShoppingCartContextProvider(props) {
  // Initialize state variables for the cart and total price
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Function to add a product to the cart
  function addToCart(product) {
    // Add the product to the cart
    setCart([...cart, product]);
    // Update the total price
    setTotal(total + product.price);
  }

  // Function to remove a product from the cart
  function removeFromCart(product) {
    // Filter the cart to remove the product
    setCart(cart.filter(p => p.id !== product.id));
    // Update the total price
    setTotal(total - product.price);
  }

  // Render the context provider with the cart and total price as the context value
  return (
    <ShoppingCartContext.Provider value={{ cart, total, addToCart, removeFromCart }}>
      {props.children}
    </ShoppingCartContext.Provider>
  );
}

export default ShoppingCartContextProvider;



// import React, { createContext, useState } from 'react';

// export const ShoppingCartContext = createContext();

// function ShoppingCartContextProvider(props) {
//   const [cart, setCart] = useState([]);
  
//   const addToCart = product => {
//     setCart([...cart, product]);
//   };
  
//   return (
//     <ShoppingCartContext.Provider value={{ cart, addToCart }}>
//       {props.children}
//     </ShoppingCartContext.Provider>
//   );
// }

// export default ShoppingCartContextProvider;
