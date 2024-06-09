import { Grid, Todo, Text } from 'components';
import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from 'reduxTodo/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);
  const filteredTodos = todos.filter(todo => {
    return todo.text.toLowerCase().includes(filter.toLowerCase());
  });
  return (
    <>
      {filteredTodos.length > 0 ? (
        <Grid>
          {todos.map((todo, index) => {
            return (
              <>
                <Todo key={todo.id} todo={todo} index={index} />
              </>
            );
          })}
        </Grid>
      ) : (
        <Text textAlign="center">We did not find any todo😯</Text>
      )}
    </>
  );
};
