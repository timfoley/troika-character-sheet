import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ImportExport.css";

export function ImportExport(props) {
	const [prettyPrint, setPrettyPrint] = useState(false);

	const charString = JSON.stringify(props.character, undefined, 4);

	const [dataToImport, setDataToImport] = useState(charString);

	const handleDataChange = e => {
		setDataToImport(e.target.value);
	};

	const togglePrettyPrint = e => {
		setPrettyPrint(e.target.checked);
		if (dataToImport) {
			let prettyData;
			try {
				prettyData = JSON.stringify(
					JSON.parse(dataToImport),
					undefined,
					prettyPrint ? 4 : 0
				);
			} catch {
				prettyData = JSON.stringify(
					props.character,
					undefined,
					prettyPrint ? 4 : 0
				);
			}
			setDataToImport(prettyData);
		}
	};

	const saveUpdate = () => {
		let newCharacter;

		if (dataToImport === "") {
			newCharacter = {};
		} else {
			try {
				newCharacter = JSON.parse(dataToImport);
			} catch {
				newCharacter = props.character;
			}
		}
		props.setCharacter(newCharacter);
	};

	return (
		<div className="import-export">
			<div>
				<p>
					If you would like to share or save your character, you can
					use the text from the field below.
				</p>
				<p>
					To load a character, just paste in your data. If it is in
					the correct format, everything will load into the character
					sheet.
				</p>
				<p>
					If you want to start over, delete all the data, and you will
					have a fresh sheet to work with.
				</p>
			</div>
			<div className="import-export__controls">
				<label htmlFor="import-export">Enter data here: </label>
				<label className="import-export__toggle">
					<input
						type="checkbox"
						checked={prettyPrint}
						onChange={togglePrettyPrint}
					/>
					Compact Mode
				</label>
			</div>
			<textarea
				spellCheck={false}
				className="import-export__textarea"
				id="import-export"
				style={{ gridArea: "text-input", height: "100%" }}
				value={dataToImport}
				onChange={handleDataChange}
				onBlur={saveUpdate}
			/>
		</div>
	);
}

ImportExport.propTypes = {
	character: PropTypes.object,
	setCharacter: PropTypes.func,
};
