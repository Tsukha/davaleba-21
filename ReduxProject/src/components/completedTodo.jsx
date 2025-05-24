import React from "react";
import { useSelector } from "react-redux";

const CompletedTodos = () => {
  const completedTodos = useSelector((state) =>
    state.todos.todos.filter((todo) => todo.status === "done")
  );

  return (
    <div className="completed-todos">
      <h2>Completed Tasks</h2>
      {completedTodos.length === 0 ? (
        <p className="no-todos">No completed todos yet.</p>
      ) : (
        <ul className="todos">
          {completedTodos.map((todo) => (
            <li key={todo.id} className="todo-item completed">
              <span className="todo-text">{todo.text}</span>
              <span className="status-badge">✓ Done</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTodos;
