import React from 'react';
import Todo from './Todo';

// INTERFACES
interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteTodoHandler: (todoId: string) => void;
}

const Todos: React.FC<TodoListProps> = ({ todos, deleteTodoHandler }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return (
          <li>
            <Todo todo={todo} deleteTodoHandler={deleteTodoHandler} />
          </li>
        );
      })}
    </div>
  );
};

export default Todos;
