import { createContext, useContext, useState } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ cart, products, setCart, setCartProducts }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

export { ShoppingCartProvider, useShoppingCart };
export default ShoppingCartContext;
