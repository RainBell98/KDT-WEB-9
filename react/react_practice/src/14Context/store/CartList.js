import React, { createContext, useState } from 'react';

const CartContext = createContext({
  cartItem: [],
  setCartItem: () => {},
});

export const CartProvider = (props) => {
  const [cartItem, setCartItem] = useState([]);
  return <CartContext.Provider value={{ cartItem, setCartItem }}>{props.children}</CartContext.Provider>;
};

export default CartContext;
