import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import "./App.css";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todoContainer, setTodoContainer] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todo) {
      setTodoContainer((prev) => [
        ...prev,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo("");
    }
  };

  console.log(todoContainer);

  return (
    <div className="App">
      <span className="heading">To-do</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList
        todoContainer={todoContainer}
        setTodoContainer={setTodoContainer}
      />
    </div>
  );
};

export default App;
