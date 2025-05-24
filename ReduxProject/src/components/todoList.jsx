import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, toggleTodoStatus } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <div className="todo-list">
      <h2>All Tasks</h2>
      {todos.length === 0 ? (
        <p className="no-todos">No todos yet. Add some!</p>
      ) : (
        <ul className="todos">
          {todos.map((todo) => (
            <li key={todo.id} className={`todo-item ${todo.status}`}>
              <span className="todo-text">{todo.text}</span>
              <div className="todo-actions">
                <button
                  onClick={() => handleToggleStatus(todo.id)}
                  className={`status-btn ${todo.status}`}
                >
                  {todo.status === "pending" ? "Done" : "Undone"}
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
