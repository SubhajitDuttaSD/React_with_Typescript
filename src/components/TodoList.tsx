import React from "react";
import { Todo } from "../model";
import "./styles.css";
import SingleTodo from "./SingleTodo";

interface Props {
  todoContainer: Todo[];
  setTodoContainer: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todoContainer, setTodoContainer }) => {
  return (
    <div className="todos">
      {todoContainer.map((todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todoContainer={todoContainer}
          setTodoContainer={setTodoContainer}
        />
      ))}
    </div>
  );
};

export default TodoList;
