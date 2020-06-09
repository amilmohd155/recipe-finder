import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="header">Recipe Finder</h1>
      <form>
        <input
          className="recipe-input"
          type="text"
          name="recipe"
          placeholder="Enter the name of the dish"
        />
        <input className="btn-submit" type="submit" value="Get Ingredients" />
      </form>
    </div>
  );
}

export default App;
