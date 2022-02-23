import { ListItem, ListItemText, Typography } from '@mui/material';

type SingleTodoProps = {
  todo: {
    id: number;
    task: string;
  };
};

const Todo = (props: SingleTodoProps) => {
  return (
    <ListItem>
      <ListItemText primary="Single-line item">
        <Typography variant="h6">{props.todo.task}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
