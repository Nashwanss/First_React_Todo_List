import React, { useRef } from "react";

export default function Form({ setInputText }) {
  // Here I can write js code and functions
  const inputRef = useRef();

  function clickHandler(event) {
    event.preventDefault();
    // console.log("Clicked");
    const inputElement = inputRef.current.value;
    // if (inputElement === "") return;
    console.log(inputElement);
    setInputText(inputElement);

    // setTodos(
    //   ...(prevtodos) => {
    //     return [...prevtodos, { id: 1, content: content, completed: false }];
    //   }
    // );

    inputRef.current.value = null;
  }
  return (
    <>
      <input
        action="submit"
        ref={inputRef}
        className="input-field"
        type="text"
        placeholder="Type a new todo"
      />
      <br />
      <br />
      <button onClick={clickHandler} className="btn-add">
        Add it !
      </button>
    </>
  );
}
