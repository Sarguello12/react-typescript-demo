
import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => { return prevTodos.concat(newTodo)});
  }

  const removeClickHandler = (id: string) => {
    setTodos((prevTodos) => { return prevTodos.filter((todo) => todo.id !== id ) });
  }

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler}/>
      <Todos items={todos} onRemoveTodo={removeClickHandler}/>
    </div>
  );
}

export default App;

//   const [todos, setTodos] = useState<Todo[]>([]) : we can also declare the type within a useState hook