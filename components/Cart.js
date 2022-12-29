import { useContext, useState, useEffect } from 'react';
import {useShoppingCart} from './ShoppingCartContext';

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
          {Object.keys(cart).map((productId) => {
            const product = cart[productId];
            
            return(
            <tr key={productId}>
              <td>{product.name} <img src={product.imageUrl} alt={product.name}  width='10%' height='10%'/></td>
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
          )})}
          <tr>
            <td colSpan="4">Total: ${total.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
