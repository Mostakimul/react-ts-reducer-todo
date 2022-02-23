import { Button, Grid, ListItem, ListItemText } from '@mui/material';

interface SingleTodoProps {
  todo: {
    id: number;
    task: string;
  };
  todoDelete: (id: number) => void;
}

const Todo: React.FC<SingleTodoProps> = ({ todo, todoDelete }) => {
  return (
    <Grid container>
      <Grid item xs={3} />
      <Grid item xs={5}>
        <ListItem>
          <ListItemText
            sx={{ margin: '5px 0' }}
            primary={todo.task}
          ></ListItemText>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => todoDelete(todo.id)}
          >
            Delete Todo
          </Button>
        </ListItem>
      </Grid>
    </Grid>
  );
};

export default Todo;
