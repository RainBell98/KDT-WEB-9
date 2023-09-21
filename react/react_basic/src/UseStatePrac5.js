// import { useState } from 'react';

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
