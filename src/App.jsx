import React, { useCallback, useState } from "react";

import "./App.css";
import TodoInput from "./components/todoinput";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    // {
    //   todo: "Reading",
    //   id: Date.now(),
    //   completed: false,
    // },
  ]);
  const handleAddTodo = useCallback(() => {
    const todosArr = [
      ...todos,
      {
        todo,
        id: Date.now(),
        completed: false,
      },
    ];
    setTodos([...todosArr]);
    setTodo("");
  }, [todo]);
  const handleOnDelete = useCallback(
    (id) => {
      // console.log("hi ther id=>",id);
      const filter = todos.filter((data) => data.id !== id);
      setTodos([...filter]);
    },
    [todos]
  );


  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onClick={handleAddTodo}
      />
      <TodoList
        todos={todos}
        onDelete={handleOnDelete}
      />
    </div>
  );
}

export default App;
