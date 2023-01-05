import { useContext, useState, useEffect } from 'react';
import {useShoppingCart} from './ShoppingCartContext';
import styles from '../styles/shop.module.css';



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
      <h1 className={styles.shop_h1}>Shopping Cart</h1>



      <div className={styles.line}></div>
      <div className={styles.table_holder}>
      <table className={styles.table}> 
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={`${styles.th} ${styles.cart_prod_pos}`}>PRODUCTS</th>
            <th className={styles.th}>PRICE</th>
            <th className={styles.th}>QUANTITY</th>
            <th className={styles.th}>TOTAL</th>
          </tr>
        </thead>

        <tbody >
          {Object.keys(cart).map((productId) => {
            const product = cart[productId];
     
            return(
              
              
            <tr key={productId} className={styles.tr}>
              <td className={styles.td2} width='25%'><img src={product.imageUrl} alt={product.name}  width='150px' height='10%'/><div className={styles.td3}>{product.name}</div></td>      
              <td className={styles.td}>${product.price.toFixed(2)}</td>
              <td className={styles.td}>
                <div className={styles.qty_holder}>
                  <button className={`${styles.btnssss} ${styles.btn_plus}`} onClick={() => increaseQuantity(product.id)}>+</button>
                  <div className={styles.qty_holder2}>{product.quantity}</div>
                  <button className={`${styles.btnssss} ${styles.btn_minus}`} onClick={() => decreaseQuantity(product.id)}>-</button>
                </div>
              </td>
              <td className={styles.td}>${(product.price * product.quantity).toFixed(2)}</td>
              <td className={styles.td}>
                <button className={styles.remove_btn} onClick={() => removeProduct(product.id)}>✖</button>
              </td>
            </tr>
          )})}
          {/* <tr>
            <td colSpan="4" align='right' className={styles.td3}>TOTAL: ${total.toFixed(2)}</td>
          </tr> */}
        </tbody> 
      </table>


      
      </div>
      <div className={`${styles.td4} ${styles.td4_2}`}>
        <div className={styles.total_finish}>TOTAL:</div>
        <div className={styles.total_finish}>${total.toFixed(2)}</div>
      </div>
      <div className={styles.td4}>
        <div className={styles.cta__full4}>CHECK OUT</div>
      </div>

{/* Start for mobile vesrsion */}
{Object.keys(cart).map((productId) => {
  const product = cart[productId];
    return(
      <div key={productId} className={styles.mobile_cart}>
       
      <div className={styles.mobile_cart_holder_element_flex}>
        
        <div className={styles.mobile_cart_piece}>
        <div className={styles.x_btn}>
            <button className={styles.remove_btn} onClick={() => removeProduct(product.id)}>✖</button>
          </div>
          <div className={styles.mobile_cart_img}>
          <img src={product.imageUrl} alt={product.name}  width='200px' height='10%'/><div className={styles.td3_mobile}>{product.name}</div>
          </div>
          <div className={styles.mobile_cart_price}>
            <div className={styles.mobile_cart_pricesss}>
              <div className={styles.total_mobile_1}>
                <div className={styles.th_mobile}>Unit price:</div>
                <div className={styles.td_mobile}>${product.price.toFixed(2)}</div>
              </div>
              <div className={styles.total_mobile_2}>
                <div className={styles.th_mobile}>Total price:</div>
                <div className={styles.td_mobile}>${(product.price * product.quantity).toFixed(2)}</div>
              </div>
          </div>
          </div>
          <div className={styles.mobile_cart_qty}>
            <div className={styles.qty_holder_mobile}>
              <button className={`${styles.btnssss} ${styles.btn_plus}`} onClick={() => increaseQuantity(product.id)}>+</button>
              <div className={styles.qty_holder2}>{product.quantity}</div>
              <button className={`${styles.btnssss} ${styles.btn_minus}`} onClick={() => decreaseQuantity(product.id)}>-</button>
            </div>
          </div>
        </div>
       
      </div>
   
    </div>
    
)})}
<div className={styles.mobile_cart_btn_checkout}>
  <div className={`${styles.td4_mobile} ${styles.td4_mobile} `}>
    <div className={styles.total_finish_mobile}>TOTAL:</div>
    <div className={styles.total_finish}>${total.toFixed(2)}</div>
  </div>
  <div className={styles.td4_mobile}>
    <div className={styles.cta__full4}>CHECK OUT</div>
  </div>
</div>
{/* End for mobile vesrsion */}
    </div>
  );  
};

export default Cart;
