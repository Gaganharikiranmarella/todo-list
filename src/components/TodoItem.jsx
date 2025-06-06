import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span onClick={() => onToggle(todo._id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>❌</button>
    </li>
  );
}