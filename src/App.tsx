import Container from '@mui/material/Container';
import './App.css';
import Home from './pages/Home';
function App() {
  return (
    <Container
      sx={{
        background: '#d3d3d3cc',
        paddingBottom: '1rem',
        margin: '1rem auto',
        borderRadius: '0.5rem',
      }}
    >
      <Home />
    </Container>
  );
}

export default App;
