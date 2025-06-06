import React from "react";

function TodoItem({ todo, onDelete }) {
  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>
      <button onClick={() => onDelete(todo._id)} className="delete-btn">
        ❌
      </button>
    </li>
  );
}

export default TodoItem;
