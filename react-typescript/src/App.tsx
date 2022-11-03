import React from 'react';
import Todos from './components/Todos';

const App: React.FC = () => {
  const todos = [{ id: 1, text: 'Homework exercise' }];
  return (
    <div>
      <Todos todos={todos} />
    </div>
  );
};

export default App;
