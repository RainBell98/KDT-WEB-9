import CartContext from './store/CartList';
import { useContext } from 'react';
import React, { createContext, useState } from 'react';
export const CartItem = ({ value }) => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const removeCart = (id) => {
    setCartItem(cartItem.filter((element) => element.id !== id));
  };
  return (
    <div>
      <span>
        {value.name}:{value.price}
      </span>
      <button onClick={() => removeCart(value.id)}>-</button>
    </div>
  );
};
