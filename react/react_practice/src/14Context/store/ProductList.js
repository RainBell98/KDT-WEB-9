import React, { createContext, useState } from 'react';

const productItems = [
  { name: 'banana', price: 3000 },
  { name: 'apple', price: 2000 },
  { name: 'grape', price: 1000 },
];

const ProductContext = createContext({});
// const ProductItem = [{ banana: 3000 }, { apple: 2000 }, { grape: 1000 }],

export const ProductProvider = ({ children }) => {
  const { productItem, setProductItem } = useState(productItems);
  //   console.log(productItem);
  return <ProductContext.Provider value={{ productItem }}>{children}</ProductContext.Provider>;
};

export default ProductContext;
