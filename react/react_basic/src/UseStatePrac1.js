import { useState } from 'react';

export const UseStatePrac1 = () => {
  const [color, setColor] = useState('black');
  const [content, setContent] = useState('검정색');
  const red = () => {
    setColor('red');
    setContent('빨간색');
  };
  const blue = () => {
    setColor('blue');
    setContent('파란색');
  };

  return (
    <>
      <h1 style={{ color }}>
        <span>{content}</span> 글씨
      </h1>
      <button onClick={red}>빨간색</button>
      <button onClick={blue}>파란색</button>
    </>
  );
};
