import { useContext, useState, useEffect } from 'react';
import {useShoppingCart} from './ShoppingCartContext';
import styles from '../styles/shop.module.css';


// [
//   {
//     "id": 1,
//     "name": "Product 1",
//     "price": 9.99,
//     "quantity": 1
//   },
//   {
//     "id": 2,
//     "name": "Product 2",
//     "price": 19.99,
//     "quantity": 2
//   }
// ]


const Cart = () => {
  const {setCart, cart} = useShoppingCart()
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = Object.keys(cart).reduce((acc, p) => acc + cart[p].price * cart[p].quantity, 0);
    setTotal(total);
  }, [cart]);

  const removeProduct = (productId) => {
    setCart(previousState => {
      delete previousState[productId];

      return {
        ...previousState
      }
    });
  };

  const decreaseQuantity = (productId) => {
    // Check if the product is already in the cart
    const productCartEntry = cart[productId];
    if (!productCartEntry) {
      return;
    }

    // If the product is in the cart and has a quantity greater than 1, decrease its quantity
    if(productCartEntry.quantity > 1) {
      productCartEntry.quantity--;
      setCart(previousState => ({
        ...previousState,
        [productId]: productCartEntry,
      }));
    } else {
      removeProduct(productId);
    }
  };

  const increaseQuantity = (productId) => {
  // Check if the product is already in the cart
    const productCartEntry = cart[productId];
    if (!productCartEntry) {
      return;
    }
    // If the product is in the cart and has a quantity greater than 1, decrease its quantity
      productCartEntry.quantity++;
      setCart(previousState => ({
        ...previousState,
        [productId]: productCartEntry,
      }));
  };

  if(Object.keys(cart).length === 0) {
    return <p>Your cart is empty!</p>;
  }


  return (
    <div className={styles.container}>
      <h1 className={styles.shop_h1}>Cart</h1>
      <table className={styles.table}>
        {/* <thead align='left'> */}
        <thead>
          <tr className={styles.tr}>
            <th className={`${styles.th} ${styles.cart_prod_pos}`}>Product</th>
            <th className={styles.th}>Quantity</th>
            <th className={styles.th}>Price</th>
            <th className={styles.th}>Total</th>
          </tr>
        </thead>

        {/* <div className={styles.cart_bar}>
          <div className={styles.cart_bar_1}>
            <div>
              PRODUCTS
            </div>
          </div>
          <div className={styles.cart_bar_2}>
            <div className={styles.cart_bar_2_1}>UNIT PRICE</div>  
            <div className={styles.cart_bar_2_1}>QTY</div>
            <div className={styles.cart_bar_2_1}>PRICE</div>  
          </div>
        </div>

        <div className={styles.cart_bar}>
          <div className={styles.cart_bar_1}>
            <div>
            <img className={styles.svg_img} src="/jure.webp" height='160px' width='160px'/> 
            </div>
          </div>
          <div className={styles.cart_bar_2}>
            <div className={styles.cart_bar_2_1}>+      </div>  
            <div className={styles.cart_bar_2_1}>$      </div>
            <div className={styles.veliko}>-      NEDA MI SE VISE</div>  
          </div>
        </div> */}



        <tbody >
          {Object.keys(cart).map((productId) => {
            const product = cart[productId];
            
            return(
            <tr key={productId} className={styles.tr}>
              <td className={styles.td2} width='25%'><img src={product.imageUrl} alt={product.name}  width='150px' height='10%'/>{product.name} </td>
              <td>
                <button className={styles.btnssss} onClick={() => increaseQuantity(product.id)}>+</button>
                {product.quantity}
                <button className={styles.btnssss} onClick={() => decreaseQuantity(product.id)}>-</button>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </td>
            </tr>
          )})}
          <tr>
            <td colSpan="4" align='right'>Total: ${total.toFixed(2)}</td>
          </tr>
        </tbody> 
      </table>
    </div>
  );
};

export default Cart;
