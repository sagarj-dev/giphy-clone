export interface TodoModel {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoArrayModel {
  all_todos: TodoModel[];
  particular_todo: TodoModel;
}

///////////////

export interface authModel {
  username: string;
  api_key: string;
}
