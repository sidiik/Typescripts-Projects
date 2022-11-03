import React from 'react';

interface TodoListProps {
  todos: { id: number; text: string }[];
}

const Todos: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => {
        return <div>{todo.text}</div>;
      })}
    </div>
  );
};

export default Todos;
