import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import { Todo } from './ts/models/todo.model';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    setTodos((prev) => [{ id: Math.random().toString(), text }, ...prev]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  const randomIdGenerator = () => Math.floor(Math.random() * 10000);

  return (
    <Router>
      <div className='app'>
        <div>
          <Link className='link' to={`/add/${randomIdGenerator()}`}>
            Add new
          </Link>
          <Link className='link' to='/'>
            All Todos
          </Link>
        </div>
        <Routes>
          <Route
            path='/add/:randomId'
            element={<NewTodo addTodo={addTodoHandler} />}
          ></Route>
          <Route
            path='/'
            element={
              <Todos todos={todos} deleteTodoHandler={deleteTodoHandler} />
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
