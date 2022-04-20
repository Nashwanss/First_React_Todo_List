import React from "react";

const Inputs = () => {
  return (
    <div>
      <input
        className="input-field"
        type="text"
        placeholder="Type a new todo"
      />
      <br />
      <br />

      <button className="add-btn">Add Todo</button>
    </div>
  );
};

export default Inputs;
