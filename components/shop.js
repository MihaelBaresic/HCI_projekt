import { useContext, useEffect, useState } from 'react';
import {useShoppingCart} from './ShoppingCartContext';
import products from '../constants/products.json';
import cart from '../constants/cart.json';
import styles from '../styles/shop.module.css';

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
    
    <div className={styles.container}>
      <h1 className={styles.shop_h1}>Shop</h1>
      <div className={styles.grid}>    
      {products.map((product) => (
        <div className={styles.shop_grid_holder}>
          <div className={styles.shop_element_holder}>
            <div key={product.id} className={styles.shop_box}>              
              <div className={styles.shop_img_holder}>
                <div className={styles.shop_img_picture}>
                  <img src={product.imageUrl} alt={product.name}  width='100%'/>
                </div>
              </div>
              <div className={styles.shop_element_txt}>
                <h3 className={styles.h3_shop}>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
              </div>
              <div className={styles.shop_element_btn}>
                <button className={styles.cta__full3} onClick={() => addToCart(product.id, setCart)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Shop;
