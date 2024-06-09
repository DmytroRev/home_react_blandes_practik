import style from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'reduxTodo/todosSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = e => {
    const value = e.target.value;
    dispatch(changeFilter(value));
  };
  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      onChange={handleChange}
    />
  );
};
