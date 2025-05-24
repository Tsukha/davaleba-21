import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      dispatch(addTodo(inputValue.trim()));
      setInputValue("");
    }
  };

  return (
    <div className="add-todo">
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your todo..."
          className="todo-input"
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
