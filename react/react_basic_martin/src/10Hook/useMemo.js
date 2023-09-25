import { useState, useMemo } from 'react';

export const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //count가 변경될때만 실행, inputValue가 변경되어도 컴포넌트는 리랜더링 되지만 , clac다시 계산되지 않는다.
  //제공된 함수의 반환값을 기억하며, 의존성 배열의 값이 (여기선 count )변경될 때만 해당함수를 재실행
  const calc = useMemo(() => {
    for (let i = 0; i < 10 ** 4; i++) {
      //i = i*2
    }
    return count * 2;
  }, [count]);
  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={() => setCount(() => count + 1)}>PLUS</button>
      <p>count : {count}</p>
      <p>calc : {calc}</p>
    </>
  );
};
