import { useContext } from 'react';
import CartContext from './store/CartList';

const products = [
  { id: 1, name: 'banana', price: 3000 },
  { id: 2, name: 'apple', price: 2000 },
  { id: 3, name: 'grape', price: 1000 },
];
let sum = 0;

const m = () => {};

export const Cart = () => {
  const { cartItem, setCartItem } = useContext(CartContext);
  const addProduct = (product) => {
    setCartItem([...cartItem, product]);
  };

  return (
    <div>
      <h2>상품목록</h2>

      {products.map((value) => {
        return (
          <div kwy={value.id}>
            <span>
              {value.name}: {value.price}
              <button onClick={() => addProduct(value)}>+</button>
            </span>
          </div>
        );
      })}
    </div>
  );
};
