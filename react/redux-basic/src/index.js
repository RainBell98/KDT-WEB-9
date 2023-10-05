//////////리덕스를 이용한 숫자증가, 감소코드
import { createStore } from 'redux';

const add = document.querySelector('#add');
const del = document.querySelector('#DEL');
const to = document.querySelector('#to');
const todoList = document.querySelector('#todo');

const ADD = 'ADD';
const DEL = 'DEL';
let todo = [];
const todoReducer = (state, action) => {
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case ADD:
      console.log(state);
      return [to.value, action.valueType];
    case DEL:
      return [to.value, action.valueType, action.id];
    default:
      break;
  }
};
const todoStore = createStore(todoReducer);

todoStore.subscribe(() => {
  const h = document.createElement('li');
  const btn = document.createElement('button');
  h.textContent = todoStore.getState()[0];
  btn.textContent = '제거';
  btn.id = Date.now();
  if (todoStore.getState()[1] == 'add') {
    btn.onclick = (e) => {
      todoStore.dispatch({ type: DEL, id: e.target.id, valueType: 'del' });
    };
    h.appendChild(btn);
    todoList.appendChild(h);
  } else {
    for (let i = 0; i < todoList.children.length; i++) {
      if (todoStore.getState()[2] === todoList.children[i].children[0].id) {
        todoList.children[i].remove();
      }
    }
  }
  //getState()는 저장소에서 최신 상태의 값을 반환할때 쓰는 메소드
  // todo.appendChild(todoList.innerText);
  console.log(todoList);

  console.log('a', todoStore.getState());
});
add.addEventListener('click', () => {
  todoStore.dispatch({ type: ADD, valueType: 'add' });
  console.log('a', todoStore);
  console.log('d', todo);
});

// const add = document.querySelector('#add');
// const minus = document.querySelector('#minus');
// const num = document.querySelector('#num');

// const ADD = 'ADD';
// const MINUS = 'MINUS';
// //reducer
// const countReducer = (state = 0, action) => {
//   console.log(state, action);
//   switch (action.type) {
//     case ADD:
//       return state + 1;
//     case MINUS:
//       return state - 1;
//     default:
//       return state;
//   }
// };
// //store는 데이터를 넣는 곳
// //createStore: store 생성, reducer 함수 필수
// const countStore = createStore(countReducer);
// // console.log(countStore);

// //subscribe()는 데이터와 저장소가 변경될 때마다 함수를 실행
// countStore.subscribe(() => {
//   //getState()는 저장소에서 최신 상태의 값을 반환할때 쓰는 메소드
//   num.textContent = countStore.getState();
// });

// add.addEventListener('click', () => {
//   countStore.dispatch({ type: ADD });
// });

// minus.addEventListener('click', () => {
//   countStore.dispatch({ type: MINUS });
// });

// console.log(countStore.getState());
/////////자바스크립트를 이용한 숫자 증가, 감소 코드

// let count = 0;

// add.addEventListener('click', () => {
//   count += 1;
//   num.textContent = count;
// });

// minus.addEventListener('click', () => {
//   count -= 1;
//   num.textContent = count;
// });
