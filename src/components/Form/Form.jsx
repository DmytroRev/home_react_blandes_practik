import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from 'reduxTodo/todosSlice';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubbmit = e => {
    e.preventDefault();
    const value = {
      id: nanoid(),
      text: e.target.search.value,
    };
    dispatch(addTodo(value));
  };

  return (
    <form className={style.form} onSubmit={handleSubbmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
