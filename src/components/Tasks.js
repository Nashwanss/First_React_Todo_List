import React from "react";

const Tasks = () => {
  const todos = ["Learn React", "Be Awesome !", "Do Something here or there"];
  return (
    <div className="tasks">
      <h3>Tasks</h3>
      <ul>
        {todos.map((todo) => (
          <li type="checkbox">
            <input type="checkbox" name="2do" id="2do" /> {todo}
            there
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
