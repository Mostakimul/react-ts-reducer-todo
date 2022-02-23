import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';

const TodoForm = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Paper sx={{ padding: '2rem' }}>
        <Typography variant="h4" sx={{ fontSize: '1.6rem' }}>
          Todo Form
        </Typography>
        <TextField
          sx={{ width: '50%' }}
          id="todo"
          label="Enter your todo"
          variant="outlined"
          size="small"
        />
      </Paper>
    </Box>
  );
};

export default TodoForm;
