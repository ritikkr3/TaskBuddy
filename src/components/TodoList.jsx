import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className="space-y-2">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No tasks yet 😴</p>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;