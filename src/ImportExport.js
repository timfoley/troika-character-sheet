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
		setDataToImport(
			JSON.stringify(
				JSON.parse(dataToImport),
				undefined,
				prettyPrint ? 4 : 0
			)
		);
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
			<div className="import-export__controls">
				<label for="import-export">Enter data here: </label>
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
