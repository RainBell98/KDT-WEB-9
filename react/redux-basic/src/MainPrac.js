import { useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { ADD, DEL } from './store/todo';

export const MainPrac = () => {
  //useSelect(): reduxStore의 state를 조회
  //인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음.
  //자동으로 subscribe를 하고 있기 때무에 데이터가 변형되면 컴포넌트가 재실행
  const carts = useSelector((state) => state);
  const products = [
    { name: 'banana', price: 3000 },
    { name: 'apple', price: 2000 },
    { name: 'grape', price: 1000 },
  ];
  //dispatch는 우리가 호출할 수 있는 함수
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    console.log('e', e);
    dispatch({ type: ADD, text: e.name, price: e.price });
  };
  const onClick = (id) => {
    dispatch({ type: DEL, id: id });
  };
  const totalPrice = carts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div>
      <h2>상품 목록</h2>

      {products.map((value) => (
        <span key={value.id}>
          {value.name}: {value.price}원
          <button onClick={() => onSubmit({ name: value.name, price: value.price })}>+</button>
          <br />
        </span>
      ))}
      <h2>장바구니</h2>

      <ul>
        {carts.map((cart) => (
          <li key={cart.id} id={cart.id}>
            {cart.text} : {cart.price}원<button onClick={() => onClick(cart.id)}>삭제</button>
          </li>
        ))}
      </ul>
      <span>총액:{totalPrice}</span>
    </div>
  );
};
