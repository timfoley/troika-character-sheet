import React, { useState, useEffect } from "react";
import "./App.css";

import { Sheet } from "./Sheet";
import { ImportExport } from "./ImportExport";

function App() {
	const [importOn, setImportOn] = useState(false);
	const [character, setCharacter] = useState();

	// check if character data exists in localStorage
	useEffect(() => {
		const savedCharacterString = localStorage.getItem("character");
		if (savedCharacterString) {
			setCharacter(JSON.parse(savedCharacterString));
		}
	}, []);

	// save character to localstorage on update
	useEffect(() => {
		localStorage.setItem("character", JSON.stringify(character));
	}, [character]);

	const toggleImport = () => setImportOn(!importOn);

	return (
		<div className="App">
			<header>
				<h1>Troika! Character Sheet</h1>
			</header>
			{!importOn && (
				<Sheet setCharacter={setCharacter} character={character} />
			)}
			<div className="toggle-import clickable" onClick={toggleImport}>
				{importOn
					? "Return to Character"
					: "Import/Export Character Data"}
			</div>
			{importOn && (
				<ImportExport
					character={character}
					setCharacter={setCharacter}
				/>
			)}
		</div>
	);
}

export default App;
