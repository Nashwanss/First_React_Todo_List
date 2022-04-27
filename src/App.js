import React, { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./styles/header.css";
import "./styles/form.css";
import "./styles/todoList.css";

function App() {
  const [inputText, setInputText] = useState(" "); // This is the state of Form.js
  const [todos, setTodos] = useState([]); // This is the state of TodoList.js
  return (
    <>
      <header className="header-container">
        <Header />
      </header>
      <section className="form-container">
        <Form setInputText={setInputText} />
      </section>
      <section className="todoList-container">
        {/* <h3>Test {inputText}</h3> */}
        <TodoList
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
        />
      </section>
    </>
  );
}

export default App;
