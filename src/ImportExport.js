import React, { useState } from "react";
import PropTypes from "prop-types";

import "./ImportExport.css";

export function ImportExport(props) {
	const charString = JSON.stringify(props.character);

	const [dataToImport, setDataToImport] = useState(charString);

	const handleDataChange = e => {
		setDataToImport(e.target.value);
	};

	const saveUpdate = () => {
		let newCharacter;

		try {
			newCharacter = JSON.parse(dataToImport);
		} catch {
			newCharacter = {};
		}
		props.setCharacter(newCharacter);
	};

	return (
		<div className="import-export">
			<label style={{ height: "100%" }}>
				Import data here
				<textarea
					style={{ height: "100%" }}
					value={dataToImport}
					onChange={handleDataChange}
					onBlur={saveUpdate}
				/>
			</label>
		</div>
	);
}

ImportExport.propTypes = {
	character: PropTypes.object,
	setCharacter: PropTypes.func,
};
