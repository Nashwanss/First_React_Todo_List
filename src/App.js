import React from "react";
import "./styles/App.css";

import Title from "./components/Title";
import Logo from "./components/Logo";
import Inputs from "./components/Inputs";
import Tasks from "./components/Tasks";

function App() {
  return (
    <>
      <header className="App-header">
        <Title />
        <Logo />
      </header>
      <section className="inputs">
        <Inputs />
      </section>
      <section className="tasks">
        <Tasks />
      </section>
    </>
  );
}

export default App;
