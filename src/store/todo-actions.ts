import todoSlice from "./todo-slice";
import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import { TodoModel } from "../models/redux-models";
import todoService from "../services/todoService";
export const todoActions = todoSlice.actions;

export const fetchTodo = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch, getState) => {
    if (getState().todo.all_todos.length === 0) {
      const res: TodoModel[] = await todoService.getAllTodos();
      dispatch(todoActions.setTodo(res));
    }
  };
};

export const fetchParticularTodo = (
  todo_id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const res: TodoModel = await todoService.getParticularTodo(todo_id);
    dispatch(todoActions.setParticularTodo(res));
  };
};
