import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Mis Tareas y Metas</h1>
      <TodoList />
    </div>
  );
}

export default App;
