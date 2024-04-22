import { createReducer } from "@reduxjs/toolkit";

const todosReducer = createReducer([
  {value: "item 1", id:1},
  {value: "item 2", id:2},
  {value: "item 3", id:3},
  {value: "item 4", id:4}
], (builder) => {
    builder
      .addCase("ADD_TODO", (state, action) => {
        state.push(action.payload);
      })
      .addCase("TOGGLE_TODO", (state, action) => {
        const todo = state[action.payload.index];
        todo.completed = !todo.completed;
      })
      .addCase("REMOVE_TODO", (state, action) => {
        return state.filter((todo, i) => i !== action.payload.index);
      });
  });

  export default todosReducer;