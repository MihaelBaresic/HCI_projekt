import React, { useContext } from 'react';
import ShoppingCartContext from './Cart/ShoppingCartContext';
import styles from '../styles/shop.module.css'
import carts from '../constants/cart.json';

function ShoppingCart() {
  const contextValue = useContext(ShoppingCartContext);
  const cart  = useContext(ShoppingCartContext);

  return (
    <div>
      {carts.map((product) => (
    <div className={styles.shop_grid_holder}>
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} width='100%'/>
          <p>Price: €{product.price}</p>
        </div>
        </div>
))}
    </div>
  );
}

export default ShoppingCart;

