import React from "react";
import PropTypes from "prop-types";

import "./Basics.css";

export function Basics(props) {
	const updateName = e => {
		props.updateCharacter("name", e.target.value);
	};

	const updateBackground = e => {
		props.updateCharacter("background", e.target.value);
	};

	const updateSpecial = e => {
		props.updateCharacter("special", e.target.value);
	};

	const getBackgroundClassName = () => {
		let bgClassName = "basics__input basics__input--background ";
		if (props.background && props.background.length > 40) {
			bgClassName += "smaller-font";
		}
		return bgClassName;
	};

	return (
		<div className="basics">
			<label className="basics__name">
				Name
				<input
					className="basics__input basics__input--name"
					type="text"
					value={props.name}
					onChange={updateName}
				/>
			</label>
			<label className="basics__background">
				Background
				<input
					className={getBackgroundClassName()}
					type="text"
					value={props.background}
					onChange={updateBackground}
				/>
			</label>
			<label className="basics__special">
				Special
				<textarea
					className="basics__input basics__input--special"
					rows="4"
					value={props.special}
					onChange={updateSpecial}
					spellCheck={false}
				/>
			</label>
		</div>
	);
}

Basics.propTypes = {
	name: PropTypes.string,
	background: PropTypes.string,
	special: PropTypes.string,
	updateCharacter: PropTypes.func,
};
