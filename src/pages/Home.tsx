import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const Home = () => {
  return (
    <div>
      <h2>My Todo App</h2>
      <TodoForm />
      <Todos />
    </div>
  );
};

export default Home;
