import React, { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex justify-between items-center bg-white/30 p-3 rounded-xl backdrop-blur-md hover:scale-[1.02] transition">

  <div className="flex items-center gap-3 flex-1">
    <input
      type="checkbox"
      checked={todo.completed}
      onChange={() => toggleTodo(todo.id)}
      className="w-5 h-5 accent-purple-500"
    />

    {isEditing ? (
      <input
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        className="flex-1 p-1 rounded text-black"
      />
    ) : (
      <span
        className={`text-white ${
          todo.completed ? "line-through opacity-50" : ""
        }`}
      >
        {todo.text}
      </span>
    )}
  </div>

  <div className="flex gap-2 ml-2">
    {isEditing ? (
      <button onClick={handleEdit} className="text-green-300">✔</button>
    ) : (
      <button onClick={() => setIsEditing(true)} className="text-blue-300">✏️</button>
    )}

    <button
      onClick={() => deleteTodo(todo.id)}
      className="text-red-300"
    >
      🗑️
    </button>
  </div>
</div>
  );
};

export default TodoItem;