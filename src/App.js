import React from 'react';
import './App.css';

import char from "./char";
import { Sheet } from "./Sheet";

function App() {
  return (
    <div className="App">
      <Sheet
        char={char}
      />
    </div>
  );
}

export default App;
