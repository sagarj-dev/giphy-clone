import { TodoArrayModel, TodoModel } from "../models/redux-models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: TodoArrayModel = {
  all_todos: [],
  particular_todo: {
    userId: 0,
    id: 0,
    title: "",
    completed: false,
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodo(state, action: PayloadAction<TodoModel[]>) {
      state.all_todos = action.payload;
    },
    setParticularTodo(state, action: PayloadAction<TodoModel>) {
      state.particular_todo = action.payload;
    },
  },
});

export default todoSlice;
