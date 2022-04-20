import React from "react";

const Tasks = () => {
  const todos = ["Learn React", "Be Awesome !", "Do Something here or there"];
  return (
    <div className="tasks">
      <label>Tasks</label>
      <ul>
        {todos.map((todo) => (
          <li>
            <input type="checkbox" /> {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
