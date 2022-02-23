import { ListItem, ListItemText, Typography } from '@mui/material';

type TodoProps = {
  todo: string;
};

const Todo = ({ todo }: TodoProps) => {
  return (
    <ListItem>
      <ListItemText primary="Single-line item">
        <Typography variant="h6">{todo}</Typography>
      </ListItemText>
    </ListItem>
  );
};

export default Todo;
