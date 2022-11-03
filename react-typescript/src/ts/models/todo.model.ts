export interface Todo {
  id: string;
  text: string;
}

export interface addHandler {
  addTodo: (text: string) => void;
}
