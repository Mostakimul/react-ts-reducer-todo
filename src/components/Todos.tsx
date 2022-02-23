import { Box, List, Paper } from '@mui/material';
import Todo from './Todo';

type TodosProps = {
  todos: {
    id: number;
    task: string;
  }[];
};

const Todos = (props: TodosProps) => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '1rem',
      }}
    >
      <Paper>
        <List>
          {props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default Todos;
