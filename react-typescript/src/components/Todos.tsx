import React from 'react';

interface TodoListProps {
  todos: { id: string; text: string }[];
}

const Todos: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div className='todos'>
      {todos.map((todo) => {
        return <li>{todo.text}</li>;
      })}
    </div>
  );
};

export default Todos;
