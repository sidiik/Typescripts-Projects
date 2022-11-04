import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/slices/TodoSlice';

interface TodoProps {
  todo: {
    id: string;
    text: string;
  };
}

const Todo: FC<TodoProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <>
      {todo.text}
      <button onClick={deleteHandler}>Delete</button>
    </>
  );
};

export default Todo;
