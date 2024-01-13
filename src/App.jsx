import { useState } from "react";
import ColorGenerator from "./components/ColorGenerator";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1> Any colour you like</h1>
        <ColorGenerator />
      </div>
    </>
  );
}

export default App;
