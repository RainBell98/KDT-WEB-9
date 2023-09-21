import { useState } from 'react';

// export const UseStatePrac5 = () => {
//   const [todo, setTodo] = useState('');
//   const [check, setCheck] = useState(false);
//   const [list, setList] = useState([]);

//   const onChange = (event) => {
//     setTodo(event.target.value);
//   };
//   const add = () => {
//     console.log(todo);
//     const newTodo = {
//       todo: todo,
//       check,
//     };
//     setList([...list, newTodo]);
//     setTodo('');
//     setCheck(false);
//     if (list.length >= 10) {
//       alert('많아요');
//     }
//     console.log('li', list);
//   };

//   const Bcheck = (t, d) => {
//     console.log('sd', t);
//     for (let i = 0; i < list.length; i++) {
//       if (list[i].todo == d) {
//         console.log('ttt', list[i].todo);
//         // setList(...(list[i].check = !check));
//         if (list[i].check == false) {
//           list[i].check = true;
//         } else {
//           list[i].check = false;
//           setCheck(!check);
//         }
//         setList([...list]);
//         list[i].check = !check;
//       }
//     }
//     console.log('dssd', list);
//     console.log(check, d);
//     // setList(list);
//   };

//   const destroy = () => {
//     const d = list.filter((value) => {
//       console.log(value);
//       if (!check) {
//         list.remove(value);
//       }
//     });
//     console.log(d);
//     setList(d);
//   };

//   return (
//     <div>
//       <input placeholder="할 일 입력..." value={todo} onChange={(e) => onChange(e)}></input>
//       <button onClick={add}>추가</button>
//       <ul>
//         {list.map((value, index) => {
//           return (
//             <div key={index}>
//               <li>
//                 <input
//                   type="checkbox"
//                   value={value.todo}
//                   checked={check}
//                   onChange={(e) => Bcheck(e, value.todo)}
//                 ></input>
//                 {value.todo}
//               </li>
//             </div>
//           );
//         })}
//       </ul>
//       <button onClick={destroy}>완료된 할일 삭제</button>
//     </div>
//   );
// };

export const Pracice5 = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');

  const addTodo = () => {
    if (todos.length > 10) {
      alert('할 일이 너무 많아요');
    }
    if (inputTodo !== '') {
      const newTodo = {
        id: Date.now(),
        text: inputTodo,
        checked: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    // id.checked = !checked;
    setTodos(
      todos.map((todo) => {
        console.log(todo);
        return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
      })
    );
  };

  const destroy = () => {
    const d = todos.filter((value) => {
      console.log(value);
      //   if (!value.checked) {
      //     todos.remove(value);
      //   }
    });
    console.log('ㅇ', d);
    setTodos([...todos, d]);
  };

  return (
    <>
      <input
        type="text"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        placeholder="할 일 입력..."
      ></input>
      <button onClick={addTodo}>작성</button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input type="checkbox" onChange={() => toggleTodo(todo.id)}></input>
              {todo.text}
            </li>
          );
        })}
      </ul>
      <button onClick={destroy}>완료된 할 일 삭제</button>
    </>
  );
};
