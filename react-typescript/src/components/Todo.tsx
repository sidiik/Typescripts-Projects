import { FC } from 'react';

interface TodoProps {
  todo: {
    id: string;
    text: string;
  };
  deleteTodoHandler: (todoId: string) => void;
}

const Todo: FC<TodoProps> = ({ todo, deleteTodoHandler }) => {
  return (
    <>
      {todo.text}
      <button
        onClick={() => {
          deleteTodoHandler(todo.id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Todo;
