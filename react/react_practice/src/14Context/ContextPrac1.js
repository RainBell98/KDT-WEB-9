import MyContext from './store/ContextPrac1S';
import { useContext } from 'react';

export const ContextPrac1 = () => {
  //두번째 방법
  const value = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 테마 : {value.thema}</h2>
      <select value={value.thema} onChange={(e) => value.setThema(e.target.value)}>
        <option value="light">라이트</option>
        <option value="dark">다크</option>
      </select>
    </div>
  );
};

export const ContextPrac1_2 = () => {
  const value = useContext(MyContext);
  return (
    <div>
      <h2>현재 선택된 언어 : {value.language}</h2>
      <select value={value.language} onChange={(e) => value.setLanguage(e.target.value)}>
        <option value="ko">한국어</option>
        <option value="en">영어</option>
        <option value="jp">일본어</option>
      </select>
    </div>
  );
};
