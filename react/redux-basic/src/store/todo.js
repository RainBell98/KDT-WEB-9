import { createStore } from 'redux';

export const ADD = 'ADD';
export const DEL = 'DEL';

// const todoReducer = (state = [], action) => {
//   console.log(state);
//   console.log(action.type);
//   switch (action.type) {
//     case ADD:
//       const newTodo = { text: action.text, id: Date.now() };
//       return [newTodo, ...state];
//     //   return [to.value, action.valueType];
//     case DEL:
//       const remove = state.filter((el) => el.id != action.id);
//       return remove;
//     //   return [to.value, action.valueType, action.id];
//     default:
//       return state;
//   }
// };
// const store = createStore(todoReducer);
const cartReducer = (state = [], action) => {
  console.log(state);
  console.log(action.type);
  switch (action.type) {
    case ADD:
      const newCart = { text: action.text, id: Date.now(), price: action.price };
      return [...state, newCart];
    //   return [to.value, action.valueType];
    case DEL:
      const remove = state.filter((el) => el.id != action.id);
      return remove;
    //   return [to.value, action.valueType, action.id];
    default:
      return state;
  }
};
const store = createStore(cartReducer);

export default store;
