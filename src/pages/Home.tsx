import { Typography } from '@mui/material';
import { useEffect, useReducer } from 'react';
import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';
interface Todo {
  id: number;
  task: string;
}
type ActionType =
  | {
      type: 'ADD_TODO';
      task: string;
    }
  | { type: 'REMOVE_TODO'; id: number };

// reducer function
function reducer(state: Todo[], action: ActionType) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: state.length + 1,
          task: action.task,
        },
      ];
    case 'REMOVE_TODO':
      return state.filter(({ id }) => id !== action.id);
    default:
      throw new Error();
  }
}

const Home = () => {
  const [allTodos, dispatch] = useReducer(reducer, [], () => {
    const myTodos = localStorage.getItem('myAllTodos');
    return myTodos ? JSON.parse(myTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('myAllTodos', JSON.stringify(allTodos));
  }, [allTodos]);

  // add todo
  const handleClick = (taskValue: string) => {
    if (!taskValue) return;
    if (taskValue) {
      dispatch({
        type: 'ADD_TODO',
        task: taskValue,
      });
    }
  };

  // remove todo
  const handleDelete = (id: number) => {
    if (id) {
      dispatch({
        type: 'REMOVE_TODO',
        id: id,
      });
    }
  };

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: 'center', margin: '10px 0' }}>
        My Todo App
      </Typography>
      <TodoForm handleClick={handleClick} />
      {allTodos.length > 0 && (
        <Todos todos={allTodos} deleteHandle={handleDelete} />
      )}
    </div>
  );
};

export default Home;
