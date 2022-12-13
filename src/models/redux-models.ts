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
/////
export interface settingModel {
  drawer: boolean;
  theme: string;
}

/////

export interface ApiDataModel {
  id: string;
  username: string;
  title: string;
  images: {
    original: {
      height: string;
      width: string;
      webp: string;
    };
    fixed_height: {
      height: string;
      width: string;
      webp: string;
    };
  };
}

export interface FilterModel {
  category?: string;
  offset: number;
  rating?: string;
  q?: string;
}

export interface DataModel {
  data: ApiDataModel[];
  filters: FilterModel;
}
