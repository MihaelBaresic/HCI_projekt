import { useContext } from "react";
import ShoppingCartContext from "./Cart/ShoppingCartContext";
import products from "../constants/products.json";
import styles from '../styles/shop.module.css'
import addToCart from './Cart/ShoppingCartContext'

function ProductList() {
const contextValue = useContext(ShoppingCartContext);
const cart = useContext(ShoppingCartContext);


  return (    
    <div className={styles.grid}>
    {products.map((product) => (
    <div className={styles.shop_grid_holder}>
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.imageUrl} alt={product.name} width='100%'/>
          <p>Price: €{product.price}</p>
          <button className={styles.cta__full3} onClick={() => addToCart(product)}>Add to cart</button>
        </div>
        </div>
))}
</div>
);
}

export default ProductList;


// import React, { useContext } from 'react';
// import { ShoppingCartContext } from './Cart/ShoppingCartContext';
// import mockProducts from "../constants/mockProducts";

// function ProductList() {
//   let {cart, addToCart} = useContext(ShoppingCartContext);

//   return (
//     <div>
//       {mockProducts.map(product => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <img src={product.imageUrl} alt={product.name} />
//           <p>{product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ProductList;
