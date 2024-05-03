import { createSlice, createAction } from "@reduxjs/toolkit";

// Define action types as strings
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initialState = [
  { value: "item 1", id: 1 },
  { value: "item 2", id: 2 },
  { value: "item 3", id: 3 },
  { value: "item 4", id: 4 },
];

// interface AddTodoPayload {
//   value: string;
//   id: number;
// }

// interface ToggleTodoPayload {
//   id: number;
//   completed:boolean;
// }

// interface RemoveTodoPayload {
//   id: number;
// }

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ADD_TODO, (state, action: any) => {
      state.push(action.payload);
    });
    builder.addCase(TOGGLE_TODO, (state, action: any) => {
      const nextItem = { ...action.payload };
        nextItem.completed = !nextItem.completed;
        return state.map((el) => {
          if (el.id === action.payload.id) {
            return nextItem;
          }
          return { ...el };
        });
    });
    builder.addCase(REMOVE_TODO, (state, action: any) => {
      const payload = action.payload;
      return state.filter((todo) => todo.id !== payload.id);
    });
  },
});

export const addTodo = createAction(ADD_TODO);
export const toggleTodo = createAction(TOGGLE_TODO);
export const removeTodo = createAction(REMOVE_TODO);

const todosReducer = todosSlice.reducer;
export default todosReducer;
