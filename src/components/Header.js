import logo from "./logo.svg";
import React from "react";

export default function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>First react app</h1>
      </header>
    </div>
  );
}
