import React from "react";

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span onClick={() => onToggle(todo._id)}>{todo.text}</span>
      <button onClick={() => onDelete(todo._id)}>❌</button>
    </div>
  );
}

export default TodoItem;
