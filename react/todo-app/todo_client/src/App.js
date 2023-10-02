import { useEffect, useState } from 'react';
import axios from 'axios';
// const corsOption = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// };
// App.use(cors(corsOption));

function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(todos);
    const todoData = async () => {
      const res = await axios({
        method: 'GET',
        url: '/todos',
      });
      console.log('dd', res.data.data);
      setTodos(res.data.data);
      console.log(todos);
      // setLoading(false);
    };
    todoData();
  }, []);
  const onClick = () => {
    console.log('td', todos);
    try {
      const res = axios({
        method: 'POST',
        url: '/todo',
        data: { title: inputTodo, done: 0 },
      });
      console.log(res.data);
      setInputTodo('');
    } catch (error) {
      console.log(error);
    }
  };

  const destroy = async (id) => {
    try {
      const res = await axios({
        method: 'DELETE',
        url: '/todo',
        data: { id: id },
      });
      console.log('res', res);
      setTodos(todos);
    } catch (error) {}
  };
  const style = {
    width: '300px',
  };

  const toggleTodo = async (id, done) => {
    try {
      const res = await axios({
        method: 'PATCH',
        url: '/todos',
        data: { id: id, done: done },
      });
      console.log(todos);
      setTodos(todos);
    } catch (error) {}
    // setTodos(
    //   todos.map((todo) => {
    //     console.log(todo);
    //     if (todo.id == id) {
    //       return todo.done == 1 ? { ...todo, done: 0 } : { ...todo, done: 1 };
    //     } else {
    //       return todo.done == 1 ? { ...todo, done: 0 } : { ...todo, done: 1 };
    //     }
    //     // return todo.id === id ? { ...todo, {done == 1 ? done:0 : done:1} } : todo;
    //   })
    // );
    console.log(todos);
  };
  const handle = (e, id, title) => {
    console.log(e);
    if (e.key == 'Enter') {
      patchTodo(id, title);
    }
  };

  const patchTodo = async (id, title) => {
    try {
      const res = await axios({
        method: 'PATCH',
        url: '/todo',
        data: { id: id, title: title },
      });
      setTodos(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        style={style}
        defaultValue={inputTodo}
        type="text"
        onChange={(e) => {
          setInputTodo(e.target.value);
        }}
        placeholder="Add your new Todo"
      />
      <button onClick={onClick}>ADD</button>
      <ul>
        {todos.map((value) => {
          return (
            <li key={value.id}>
              <input type="checkbox" checked={value.done} onChange={() => toggleTodo(value.id, value.done)} />
              {value.done == 1 ? (
                <input
                  readOnly={false}
                  //   value={value.title}
                  type="text"
                  onChange={(e) => {
                    // setInputTodo(e.target.value);
                    handle(e, value.id, value.title);
                  }}
                  onKeyDown={(e) => handle(e, value.id, e.target.value)}
                  placeholder={value.title}
                ></input>
              ) : (
                <input readOnly={true} placeholder={value.title}></input>
              )}
              <button
                onClick={(e) => {
                  destroy(value.id);
                }}
              >
                DELETE
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
