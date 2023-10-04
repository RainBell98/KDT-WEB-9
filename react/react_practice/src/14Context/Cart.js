import { useContext } from 'react';
import CartContext from './store/CartList';
import ProductContext from './store/ProductList';

export const Cart = () => {
  const cart = useContext(CartContext);
  const Pro = useContext(ProductContext);

  console.log(Pro);
  return (
    <div>
      <h2> {Pro.productItem}</h2>
      {/* <select value={value.thema} onChange={(e) => value.setThema(e.target.value)}>
        <option value="light">라이트</option>
        <option value="dark">다크</option>
      </select> */}
    </div>
  );
};
