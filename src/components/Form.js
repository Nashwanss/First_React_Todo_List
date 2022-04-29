import React, { useRef } from "react";
// we call the hook 'useRef' and assign it to a variable in order to pass it to the input field as ref props.

export default function Form({ addNewTodo, saveLocalTodos }) {
  const inputRef = useRef();
  const addTodoHandler = (event) => {
    // Prevent the default behavior of the form
    // event.preventDefault();
    const inputElement = inputRef.current;
    const inputValue = inputElement.value;
    // update the new states , this function passed from the App.js
    addNewTodo(inputValue);
    // to save the todos in the local storage once we add new item , also passed from App.js
    saveLocalTodos();
    // Clear the input field
    inputElement.value = null;
    console.log(`${inputValue} has been added successfully`);
  };

  return (
    <div>
      <h1>React Todo List</h1>
      <input
        ref={inputRef}
        action="submit"
        className="input-field"
        type="text"
        placeholder="Type a new todo"
      />
      <br />
      <button onClick={addTodoHandler} className="btn-add">
        Add it !
      </button>
    </div>
  );
}
