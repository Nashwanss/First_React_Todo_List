import React from "react";
import "./styles/App.css";

import Title from "./components/Title";
import Logo from "./components/Logo";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App(todo) {
  return (
    <>
      <header className="App-header">
        <Title />
        <Logo />
      </header>
      <Form className="inputs" />

      <TodoList className="tasks" task={todo} />
    </>
  );
}

export default App;
