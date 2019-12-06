import React from "react";
import "./App.css";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <h1>List of Players</h1>
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
