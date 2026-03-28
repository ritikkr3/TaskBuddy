import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  

  // Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
    );
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: newText } : t)));
  };

  // Filter + Search
  const filteredTodos = todos
    .filter((t) => t.text.toLowerCase().includes(search.toLowerCase()))
    .filter((t) => {
      if (filter === "completed") return t.completed;
      if (filter === "pending") return !t.completed;
      return true;
    });

  return (
    <div >
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">
        <div className="w-full max-w-xl backdrop-blur-lg bg-white/20 dark:bg-gray-900/40 border border-white/30 rounded-3xl shadow-2xl p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-extrabold text-white tracking-wide">
              ✨ TaskBuddy
            </h1>

            
          </div>

          
          <TodoInput addTodo={addTodo} />

          
          <input
            type="text"
            placeholder="🔍 Search tasks..."
            className="w-full mt-3 p-3 rounded-xl bg-white/30 text-white placeholder-gray-200 outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />

          <TodoFilter setFilter={setFilter} />

         
          <TodoList
            todos={filteredTodos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
