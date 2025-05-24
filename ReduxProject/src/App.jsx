import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import AddTodo from "./components/addTodo";
import TodoList from "./components/todoList";
import CompletedTodos from "./components/completedTodo";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>Todo App with Redux</h1>
        </header>
        <main className="app-main">
          <div className="app-grid">
            <div className="section">
              <AddTodo />
            </div>
            <div className="section">
              <TodoList />
            </div>
            <div className="section">
              <CompletedTodos />
            </div>
          </div>
        </main>
      </div>
    </Provider>
  );
}

export default App;
