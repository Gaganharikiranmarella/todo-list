import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./index.css";

const API_URL = "https://todo-apps-gcet-gagan.vercel.app/todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then(res => setTodos(res.data));
  }, []);

  const addTodo = async (text) => {
    const res = await axios.post(API_URL, { text });
    setTodos([...todos, res.data]);
  };

  const toggleTodo = async (id) => {
    const todo = todos.find(t => t._id === id);
    const res = await axios.put(`${API_URL}/${id}`, {
      completed: !todo.completed,
    });
    setTodos(todos.map(t => (t._id === id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter(t => t._id !== id));
  };

  return (
    <div className="app">
      <h1>📝 My TODOs</h1>
      <div className="container">
        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
