import { FC, FormEvent, useRef } from 'react';
import { addHandler } from '../ts/models/todo.model';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store/slices/TodoSlice';

const NewTodo: FC<addHandler> = () => {
  const todoText = useRef<HTMLInputElement>(null);

  const { randomId } = useParams();
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newTodo = {
      id: Math.floor(Math.random() * 2000).toString(),
      text: todoText.current!.value,
    };
    dispatch(addTodo(newTodo));
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
