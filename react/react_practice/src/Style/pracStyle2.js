import styled from 'styled-components';
import React, { useState } from 'react';

export const PracStyle2 = () => {
  const [color, setColor] = useState('blue');
  const [color2, setColor2] = useState('white');
  const onClick = () => {
    color === 'blue' ? setColor('red') : setColor('blue');
    color === 'blue' ? setColor2('black') : setColor2('white');
  };
  const _Btn = styled.button`
    background-color: ${color};
    p {
      color: ${color2};
    }
  `;
  return (
    <>
      <_Btn onClick={onClick}>
        <p>색상변경</p>
      </_Btn>
    </>
  );
};
