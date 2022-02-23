import { Box, List, Paper } from '@mui/material';
import Todo from './Todo';

interface TodoTypes {
  id: number;
  todo: string;
}

const todos: TodoTypes[] = [
  { id: 1, todo: 'Learn Something' },
  { id: 2, todo: 'Learn Something' },
  { id: 3, todo: 'Learn Something' },
  { id: 4, todo: 'Learn Something' },
  { id: 5, todo: 'Learn Something' },
];

const Todos = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      <Paper>
        <List>
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo.todo} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Todos;
