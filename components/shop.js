import { useContext, useEffect, useState } from 'react';
import {useShoppingCart} from './ShoppingCartContext';
import products from '../constants/products.json';
import cart from '../constants/cart.json';

const Shop = () => {
  const {setCart, setCartProducts, cart} = useShoppingCart()
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])


  // console.log({temp})

  useEffect(() => {
    // Load products from a local file
    const loadProducts =  () => {
      try {
        const products = require('../constants/products.json');
        setTimeout(() => {
          setProducts(products);
          setIsLoading(false);
          console.log(products);
        }, 1500)
      } catch (error) {
        console.error(error);
      }
    };

    loadProducts();
  }, [setProducts]);

  const addToCart = (productId, setCart) => {
    // Check if the product is already in the cart
    const product = cart.find((p) => p.id === productId);
    if (product) {
      // If the product is already in the cart, increase its quantity
      const updatedCart = cart.map((p) => {
        if (p.id === productId) {
          p.quantity++;
        }
        return p;
      });
      setCart(updatedCart);
    } else {
      // If the product is not in the cart, add it to the cart
      const productToAdd = products.find((p) => p.id === productId);
      productToAdd.quantity = 1;
      setCart([...cart, productToAdd]);
    }
  };
  if (isLoading) {
    return <p>Loading products...</p>;
  }
  
  console.log({cart});

  return (
    <div>
      <h1>Shop</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} />
          <p>${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product.id, setCart)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
