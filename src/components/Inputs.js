import React from "react";

export default function Inputs() {
  return (
    <>
      <input
        className="input-field"
        type="text"
        placeholder="Type a new todo"
      />
      <br />
      <br />

      <button className="add-btn">Add Todo</button>
    </>
  );
}
