// importing hooks
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Importing components
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
// Importing styles
import "./styles/header.css";
import "./styles/form.css";
import "./styles/todoList.css";
import "./styles/todo.css";
/*
  useState returns two values inside an array
  const myState = useState(...); It's called destructuring assignment
  The first value is always the current state - In our case, the current list of todos
  The second value is always a function that let's me update the current state
*/
/*
useEffect accepts two parameters:
The first one is a function with the code that you want to execute. This function by default will run on every update. 
The second one is an array of variables and it can contain 0 or more items. For example, if we want to run our effect only when todos change, we simply add todos to that array,
*/

const LSKEY = "MyTodoApp";

function App() {
  // Initialize the state
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  // Update the todo state
  const addNewTodo = (inputValue) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: uuidv4(),
          content: inputValue,
          completed: false,
        },
      ];
    });
  };

  // Toggle the checkbox
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };
  /*
   **************************************************************************************************
   */
  // Use EFFECT to run a function on a given condition

  // RUN ONCE WHEN THE APP STATRS
  useEffect(() => {
    getLocalTodos();
    console.log("useEffect runs here");
  }, []);

  useEffect(() => {
    // we use it to update the state everytime the inputText changes (or any other state)
    saveLocalTodos();
    // delelteHandler();
  }, [todos]);

  // **************************

  // Save todos to Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem(LSKEY, JSON.stringify(todos));
    console.log(todos);
    // pass this function to the Form then call it in the addTodoHandler function.
  };

  // Load todos from Local Storage
  const getLocalTodos = () => {
    if (localStorage.getItem(LSKEY) === null) {
      localStorage.setItem(LSKEY, JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem(LSKEY));
      // console.log(todoFromLocal);
      setTodos(todoFromLocal);
    }
  };

  /*
   **************************************************************************************************
   */
  return (
    <>
      <Header />
      <Form 
      addNewTodo={addNewTodo} 
      saveLocalTodos={saveLocalTodos}
      />
      <TodoList
        name={"Nashwan"}
        todos={todos}
        setTodos={setTodos}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;