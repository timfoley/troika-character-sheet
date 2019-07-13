import React, { useState, useEffect } from "react";
import "./App.css";
import "./print.scss";

import { Sheet } from "./Sheet";
import { ImportExport } from "./ImportExport";

import getRandomChar from "./lib/getRandomChar";

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
		if (typeof character === "object" || character === "") {
			localStorage.setItem("character", JSON.stringify(character));
		}
	}, [character]);

	const toggleImport = () => setImportOn(!importOn);

	const generateRandomCharacter = () => setCharacter(getRandomChar());

	const handleGeetCharacterKeyPress = e => {
		if (e.which === 32 || e.key === "enter") {
			generateRandomCharacter();
		}
	};

	return (
		<div className="App">
			<header>
				<h1>Troika! Character Sheet</h1>
				<div className="header__right">
					<div
						className="get-random-char clickable"
						aria-label="generate random character"
						onClick={generateRandomCharacter}
						onKeyPress={handleGeetCharacterKeyPress}
						tabIndex="0"
					>
						<span aria-hidden>🎲</span> Get Random Character
					</div>
					<div
						className="toggle-import clickable"
						onClick={toggleImport}
					>
						{importOn
							? "◀ Return to Character"
							: "🔃 Import/Export Data"}
					</div>
				</div>
			</header>
			{!importOn && (
				<Sheet setCharacter={setCharacter} character={character} />
			)}
			{importOn && (
				<ImportExport
					character={character}
					setCharacter={setCharacter}
				/>
			)}
			<footer>
				<div className="copyright">
					This character sheet generator for the{" "}
					<a href="http://troikarpg.com">Troika! RPG</a> is an
					independent production by <span aria-hidden>😺</span>
					<a
						aria-label="Tim Foley on GitHub"
						href="https://github.com/timfoley"
					>
						Tim Foley
					</a>{" "}
					and is not affiliated with the{" "}
					<a href="https://www.melsonia.com/">
						Melsonian Arts Council
					</a>
					.
				</div>
			</footer>
		</div>
	);
}

export default App;
