import { useCallback, useState } from 'react';

const ChildComponent = ({ onclick }) => {
  console.log('Child');
  return (
    <>
      <button onClick={onclick}>PLUS</button>
    </>
  );
};

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //useCallback 미사용
  const plusCount = () => {
    setCount(() => count + 1);
  };

  //useCallback 사용
  const plusCountCallback = useCallback(() => {
    setCount(() => count + 1);
  }, [count]);

  return (
    <>
      <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
      <ChildComponent onClick={plusCountCallback}></ChildComponent>
      <p>{count}</p>
    </>
  );
};
