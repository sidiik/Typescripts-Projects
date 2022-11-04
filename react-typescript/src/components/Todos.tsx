import { FC } from 'react';
import Todo from './Todo';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

// INTERFACES
interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodoHandler: (todoId: string) => void;
}

const Todos: FC<TodoListProps> = ({ deleteTodoHandler }) => {
  const { todos } = useSelector((state: RootState) => state.todoSlice);

  return (
    <div className='todos'>
      {todos.map((todo, idx) => {
        return (
          <li key={idx}>
            <Todo todo={todo} deleteTodoHandler={deleteTodoHandler} />
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
