import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Login</h2>
        <form className="Form">
          <input className="input" type="text" placeholder="User Names"></input>
          <input className="input" type="text" placeholder="Password"></input>
          <button className="button">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
