import { Button, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';

interface TodoFormProps {
  handleClick: (taskValue: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ handleClick }) => {
  const [taskValue, setTaskValue] = useState('');

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Paper sx={{ padding: '2rem' }}>
        <Typography variant="h4" sx={{ fontSize: '1.6rem' }}>
          Todo Form
        </Typography>
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={5}>
            <TextField
              sx={{ width: '100%' }}
              id="todo"
              label="Enter your todo"
              variant="outlined"
              size="small"
              onChange={(e) => setTaskValue(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} sx={{ alignItems: 'center' }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleClick(taskValue)}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default TodoForm;
