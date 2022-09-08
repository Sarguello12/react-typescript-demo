import Todos from './components/Todos';
import Todo from './models/todo';

function App() {

  const tasks = [
    new Todo("Learn React"),
    new Todo("Learn TypeScrips")
  ]

  return (
    <div>
      <Todos items={tasks}/>
    </div>
  );
}

export default App;
