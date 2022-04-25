import React, { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./styles/header.css";
import "./styles/form.css";
import "./styles/todoList.css";

function App(todo) {
  const [inputText, setInputText] = useState(" ");
  return (
    <>
      <header className="header-container">
        <Header />
      </header>
      <section className="form-container">
        <Form setInputText={setInputText} />
      </section>
      <section className="todoList-container">
        <TodoList task={todo} />
      </section>
    </>
  );
}

export default App;
