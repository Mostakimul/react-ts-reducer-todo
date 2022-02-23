import TodoForm from '../components/TodoForm';
import Todos from '../components/Todos';

const todos = [
  { id: 1, task: 'Learn Something' },
  { id: 2, task: 'Learn Something' },
  { id: 3, task: 'Learn Something' },
  { id: 4, task: 'Learn Something' },
  { id: 5, task: 'Learn Something' },
];

const Home = () => {
  // const handleChange = (e) => {
  //   console.log("Event: ", e.target.value);

  // }

  return (
    <div>
      <h2>My Todo App</h2>
      <TodoForm />
      <Todos todos={todos} />
    </div>
  );
};

export default Home;
