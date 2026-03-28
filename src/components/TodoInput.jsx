import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 bg-white/30 p-2 rounded-xl"
    >
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 bg-transparent text-white placeholder-gray-200 outline-none px-2"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-white text-purple-600 px-4 py-1 rounded-lg font-semibold hover:scale-105 transition">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
