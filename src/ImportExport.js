import React from "react";
import PropTypes from "prop-types";

import "./ImportExport.css";

export function ImportExport(props) {
    const charString = JSON.stringify(props.character);

	const loadCharacter = e => {
		const newCharacter = JSON.parse(e.target.value);

		props.setCharacter(newCharacter);
	};

	return (
		<div className="import-export">
			<label style={{height: "100%"}}>
				Import data here
                <textarea
                    style={{height: "100%"}}
                    value={charString}
                    onChange={loadCharacter}
                />
			</label>
		</div>
	);
}

ImportExport.propTypes = {
    character: PropTypes.object,
    setCharacter: PropTypes.func
}