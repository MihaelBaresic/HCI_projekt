import { useContext, useEffect, useState } from 'react';
import {useShoppingCart} from './ShoppingCartContext';
import Spinner from './Spinner';
import styles from '../styles/shop.module.css';

const Shop = () => {
  const {setCart, cart} = useShoppingCart()
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])
  const [selectedType, setSelectedType] = useState(null);

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

  const handleTypeSelection = (type) => {
    setSelectedType(type);
  };

  const addToCart = (productId) => {
    // Check if the product is already in the cart
    // const { cart } = useShoppingCart();
    const productIsInCart = !!cart[productId]
    if (productIsInCart) {
      // If the product is already in the cart, increase its quantity
      return;
      const productCartEntry = cart[productId];
      productCartEntry.quantity += 1;
      // Update the cart in the context
      setCart(previousCart => ({
        ...previousCart,
        [productId]: productCartEntry
      }));
    } else {
      // If the product is not in the cart, add it to the cart
      const productToAdd = products.find((p) => p.id === productId);
      productToAdd.quantity = 1;
      // Update the cart in the context
      setCart(previousCart => ({
        ...previousCart,
        [productId]: productToAdd
      }));
    }
  };
  

  if (isLoading) {
    return <p className={styles.loader_spinic}><div className={styles.loader_txt}></div> <Spinner /></p>;
  }
  
  console.log({cart});

  const filteredProducts = selectedType
    ? products.filter((p) => p.type === selectedType)
    : products;


  return (
    
    <div className={styles.container}>
      <h1 className={styles.shop_h1}>Shop</h1>
      <div className={styles.shop_bar_holder_holder}>
        <div className={styles.shop_bar_holder}>
          <div className={styles.shop_bar_element}>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection(null)}>Show all</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('oliveOil')}>Olive Oil</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('wine')}>Wine</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('liquer')}>Liquers</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('cheese')}>Cheese</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('driedMeat')}>Dried meat</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('honey')}>Honey</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('cake')}>Cakes</button>
            <button className={styles.shop_bar_btn} onClick={() => handleTypeSelection('other')}>Other</button>
          </div>
        </div>
      </div>
      <div className={styles.grid}>    
      {filteredProducts.map((product) => (
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
                <button className={styles.cta__full3} onClick={() => addToCart(product.id)}>Add to Cart</button>
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
