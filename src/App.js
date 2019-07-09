import React, { useState } from 'react';
import './App.css';

import char from "./char";
import { Sheet } from "./Sheet";
import { ImportExport } from "./ImportExport";

function App() {
  const [importOn, setImportOn] = useState(false);
  const [character, setCharacter] = useState(char);

  const toggleImport = () => setImportOn(!importOn)

  return (
    <div className="App">
      <header>
        <h1>Troika! Character Sheet</h1>
        <div
          onClick={toggleImport}
        >
          Import/Export Character Data
        </div>
      </header>
      {importOn &&
        <ImportExport
          character={character}
          setCharacter={setCharacter}
        />
      }
      {!importOn &&
        <Sheet
          setCharacter={setCharacter}
          character={character}
        />
      }
    </div>
  );
}

export default App;
