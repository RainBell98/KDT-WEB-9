import styled from 'styled-components';
import React, { useState } from 'react';

const _Input = styled.input``;
const _Btn = styled.button`
  background-color: skyblue;
`;
const _Ul = styled.ul`
  height: 200px;
  overflow: scroll;
`;

const _Li = styled.li`
  list-style: none;
`;

export const PracStyle3 = () => {
  const [todos, setTodos] = useState([]); //할 일 목록
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = () => {
    if (inputTodo !== '') {
      const newTodo = {
        text: inputTodo,
      };
      setTodos([...todos, newTodo]);
      setInputTodo('');
    }
  };

  return (
    <>
      <_Input type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)}></_Input>
      <_Btn onClick={addTodo}>Add</_Btn>
      <_Ul>
        {todos.map((todo) => {
          return <_Li key={todo.id}>{todo.text}</_Li>;
        })}
      </_Ul>
    </>
  );
};
