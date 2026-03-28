import React from "react";

const TodoFilter = ({ setFilter }) => {
  return (
    <div className="flex justify-between mt-4 mb-2">
      {["all", "completed", "pending"].map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className="px-3 py-1 rounded-full bg-white/30 text-white capitalize hover:bg-white/50 transition"
        >
          {type}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
