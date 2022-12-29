import { useContext, useState, useEffect } from 'react';
import ShoppingCartContext from './ShoppingCartContext';
import products from '../constants/products.json';
import cart from '../constants/products.json';

const addToCart = (productId) => {
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

export default addToCart;