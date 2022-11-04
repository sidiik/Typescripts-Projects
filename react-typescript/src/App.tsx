import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './ts/models/todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [...prev, { id: Math.random().toString(), text }]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className='app'>
      <NewTodo addTodo={addTodoHandler} />
      <Todos todos={todos} deleteTodoHandler={deleteTodoHandler} />
    </div>
  );
};

export default App;
