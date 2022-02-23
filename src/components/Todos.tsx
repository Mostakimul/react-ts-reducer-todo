import { Box, List, Paper } from '@mui/material';
import Todo from './Todo';

interface TodosProps {
  todos: {
    id: number;
    task: string;
  }[];
  deleteHandle: (id: number) => void;
}

const Todos: React.FC<TodosProps> = ({ todos, deleteHandle }) => {
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
            <Todo key={todo.id} todo={todo} todoDelete={deleteHandle} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Todos;
