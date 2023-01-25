import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import "./index.css";
import CreateTodoField from "./components/CreateTodoField";
import ClearAllTodos from "./components/ClearAllTodos";

const data = [
  {
    id: 1,
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
  {
    id: 2,
    title: "Read next chapter on the book",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Send the finished assignment",
    isCompleted: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const todosCopy = [...todos];
    const currentID = todosCopy.find((t) => t.id === id);

    currentID.isCompleted = !currentID.isCompleted;
    setTodos(todosCopy);
  };

  const removeTodo = (id) => setTodos([...todos].filter((t) => t.id !== id));

  const clearAllTodo = () => {
    const todosCopy = [...todos];
    todosCopy.length = 0;
    setTodos(todosCopy);
  };

  const fieldData = { details: data, isEmpty: false };

  let [empty, setEmpty] = useState(fieldData.isEmpty);


  useEffect(() => {
    if (todos.length === 0) {
      console.log(1);
      setEmpty(!empty);
    }
  }, [todos]);

  return (
    <div className="bg-zinc-900 h-screen py-10">
      <div className="text-white w-4/5 mx-auto">
        <h1 className="text-2xl font-bold text-center mb-10">Todo list</h1>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeTodo={changeTodo}
            removeTodo={removeTodo}
          />
        ))}
        {empty && <ClearAllTodos />}
        <CreateTodoField setTodos={setTodos} />
        {console.log(fieldData.isEmpty)}
      </div>
      <button
        className="text-white text-center text-1xl"
        onClick={clearAllTodo}
      >
        Delete all
      </button>
    </div>
  );
};

export default App;
