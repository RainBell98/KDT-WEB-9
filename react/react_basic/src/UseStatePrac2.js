import { useState } from 'react';

export const UseStatePrac2 = () => {
  const [bContent, setBContent] = useState('사라져라');
  const [content, setContent] = useState('안녕하세요');

  const change = () => {
    if (bContent == '사라져라') {
      setBContent('보여라');
      setContent('');
    } else {
      setBContent('사라져라');
      setContent('안녕하세요');
    }
  };

  return (
    <>
      <button onClick={change}>{bContent}</button>
      <h1>{content}</h1>
    </>
  );
};
