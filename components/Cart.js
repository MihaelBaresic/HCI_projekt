import { useContext, useState, useEffect } from 'react';
import {useShoppingCart} from './ShoppingCartContext';

const Cart = () => {
  const {setCart, cart} = useShoppingCart()
  // const {setCart, cart} = useContext(ShoppingCartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, p) => acc + p.price * p.quantity, 0);
    setTotal(total);
  }, [cart]);

  const removeProduct = (productId) => {
    const updatedCart = cart.filter((p) => p.id !== productId);
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    // Check if the product is already in the cart
    const product = cart.find((p) => p.id === productId);
    if (product) {
      // If the product is in the cart and has a quantity greater than 1, decrease its quantity
      if (product.quantity > 1) {
        const updatedCart = cart.map((p) => {
          if (p.id === productId) {
            p.quantity--;
          }
          return p;
        });
        setCart(updatedCart);
      } else {
        // If the product is in the cart and has a quantity of 1, remove it from the cart
        const updatedCart = cart.filter((p) => p.id !== productId);
        setCart(updatedCart);
      }
    }
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((p) => {
      if (p.id === productId) {
        p.quantity++;
      }
      return p;
    });
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <button onClick={() => increaseQuantity(product.id)}>+</button>
                {product.quantity}
                <button onClick={() => decreaseQuantity(product.id)}>-</button>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>${(product.price * product.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan="4">Total: ${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
