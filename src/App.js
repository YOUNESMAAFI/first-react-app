import React from "react";
import logo from "./person.svg";
import "./App.css";

import user from "./user.svg";
import password from "./password.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">Login</h2>
        <form className="Form">
          <div className="row">
            <img src={user} className="Mini" alt="user" />
            <input className="input" type="text" placeholder="Username"></input>
          </div>
          <div className="row">
            <img src={password} className="Mini" alt="password" />
            <input className="input" type="text" placeholder="Password"></input>
          </div>
          <div className="row1">
            <input className="Checkbox" type="checkbox"></input>
            <label>Remeber me</label>
            <a href="#">Forgot your password?</a>
          </div>

          <div className="row">
            <button className="button">Login</button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
