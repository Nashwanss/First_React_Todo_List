import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/title.css";
import "./styles/logo.css";
import "./styles/inputs.css";
import "./styles/tasks.css";

// FROM LIBRARY: ReactDOM =>  METHOD  : render (WHAT => RECALL OF THE FUNCTION CALLED App :  <App />, WHERE =>  document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
// In other way :
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
