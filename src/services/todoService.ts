import Api from "./Api";
import { TodoModel } from "../models/redux-models";

const todoService = {
  async getAllTodos() {
    var res = await Api().get("todos");
    return res.data;
  },
  async getParticularTodo(todo_id: number) {
    var res = await Api().get("todos");
    return res.data.filter((todo: TodoModel) => todo.id === todo_id);
  },
};

export default todoService;
