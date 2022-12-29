import { createContext, useContext, useState, useEffect, useRef } from 'react';

const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    // [productId]: {
    //   id: productId,
    //   name: product.name,
    //   price: product.price,
    //   quantity: 1,
    // },
  });
  const [products, setCartProducts] = useState([]);

  // setCart({...cart, [product.id]: {
  //   id: product.id,
  //   name: product.name,
  //   price: product.price,
  //   quantity: 1,
  //   // --- ILI
  //   product: product,
  // }})

  const productIsInCart = (product) => !!cart[product.id];
  
  const isFirstRender = useRef(true);

  useEffect(() => {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
