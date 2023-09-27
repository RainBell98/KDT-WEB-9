import { useCallback, useState } from 'react';

const ChildComponent = ({ onClick }) => {
  // console.log('Child');
  return (
    <>
      <button onClick={onClick}>PLUS</button>
    </>
  );
};

export const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  //useCallback 미사용
  const plusCount = () => {
    console.log('plusCount', count);
    setCount((prev) => prev + 1);
  };

  //useCallback 사용
  //반복해서 생성되는 이벤트 핸들러 함수를 useCallback으로 감싸줘서 함수를 메모이제이션
  const plusCountCallback = useCallback(() => {
    console.log('call', count);
    setCount((prev) => prev + 1);
  }, []);
  const onChange = (e) => {
    setInputValue(e.target.value);
    plusCount();
  };

  return (
    <>
      <input value={inputValue} onChange={(e) => onChange(e)}></input>
      <ChildComponent onClick={plusCountCallback}></ChildComponent>
      <p>{count}</p>
    </>
  );
};
