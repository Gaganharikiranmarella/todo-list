import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API_URL = "https://todo-apps-gcet-gagan.vercel.app/todos";

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const res = await axios.get(API_URL);
    setTodos(res.data);
  };

  const addTodo = async (text) => {
    const res = await axios.post(API_URL, { text });
    setTodos([...todos, res.data]);
  };

  const toggleComplete = async (id) => {
    const todo = todos.find((t) => t._id === id);
    const res = await axios.put(`${API_URL}/${id}`, {
      completed: !todo.completed,
    });
    setTodos(todos.map((t) => (t._id === id ? res.data : t)));
  };

  const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setTodos(todos.filter((t) => t._id !== id));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="App">
      <h1>📝 My TODOs</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}

export default App;
