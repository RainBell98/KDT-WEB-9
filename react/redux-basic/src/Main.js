import { useState } from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { ADD, DEL } from './store/todo';
export const Main = () => {
  const [text, setText] = useState('');

  //useSelect(): reduxStore의 state를 조회
  //인자로 콜백함수, 콜백함수의 매개변수로 state를 받을 수 있음.
  //자동으로 subscribe를 하고 있기 때무에 데이터가 변형되면 컴포넌트가 재실행
  const todos = useSelector((state) => state);

  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD, text: text });
    setText('');
  };
  const onClick = (id) => {
    dispatch({ type: DEL, id: id });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>todo</h2>

        <input value={text} onChange={(e) => setText(e.target.value)}></input>
        <button></button>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} id={todo.id}>
              {todo.text}
              <button onClick={() => onClick(todo.id)}>삭제</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};
