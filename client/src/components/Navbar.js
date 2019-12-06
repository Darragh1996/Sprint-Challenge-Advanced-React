import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Navbar(props) {
  const [darkMode, setDarkMode] = useDarkMode("dark", true, ".App");
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="target">
      <nav>
        <button onClick={toggleMode}>Dark Mode</button>
      </nav>
    </div>
  );
}
