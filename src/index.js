import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// FROM LIBRARY: ReactDOM =>  METHOD  : render (WHAT => RECALL OF THE FUNCTION CALLED App :  <App />, WHERE =>  document.getElementById("root"));
// ReactDOM.render(<App />, document.getElementById("root"));
// In other way :
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
