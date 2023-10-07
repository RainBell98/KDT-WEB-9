import React, { createContext, useState } from 'react';
import { useContext } from 'react';
import CartContext from './store/CartList';
import { CartItem } from './CartItem';

export const ProductList = () => {
  const { cartItem } = useContext(CartContext);

  //reduce: 배열의 모든 요소를 더할때 사용, 하나의 결과를 반환
  const totalPrice = cartItem.reduce((acc, curr) => acc + curr.price, 0);
  return (
    <div>
      <h2>장바구니</h2>
      {cartItem.map((value) => {
        return (
          <div key={value.id}>
            <span>
              <CartItem key={value.id} value={value}></CartItem>
            </span>
          </div>
        );
      })}
      총액: {totalPrice}
    </div>
  );
};
