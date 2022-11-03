import { FC, FormEvent, useRef } from 'react';
import { addHandler } from '../ts/models/todo.model';

const NewTodo: FC<addHandler> = ({ addTodo }) => {
  const todoText = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(todoText.current!.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Todo text' ref={todoText} />
        <button>Add Todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
