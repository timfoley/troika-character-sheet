import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Weapons.css";

import { Weapon } from "./Weapon";

export function Weapons(props) {
	const [indexToFocus, setIndexToFocus] = useState();

	const addWeapon = () => {
		setIndexToFocus(props.weapons.length);
		props.updateCharacter("weapons", [
			...props.weapons,
			{ name: "", damage: [0, 0, 0, 0, 0, 0, 0] },
		]);
	};

	const handleAddSkillKeyPress = e => {
		if (e.which === 32 || e.key === "enter") {
			addWeapon();
		}
	};

	return (
		<div className="weapons">
			<h2>Weapons</h2>
			<div className="weapons__grid">
				{props.weapons.map((weapon, index) => (
					<Weapon
						key={"weapon" + index}
						weapon={weapon}
						index={index}
						updateCharacter={props.updateCharacter}
						weapons={props.weapons}
						shouldFocus={indexToFocus === index}
					/>
				))}
			</div>
			<div
				onClick={addWeapon}
				onKeyPress={handleAddSkillKeyPress}
				tabIndex="0"
				className="weapons__add-button clickable"
			>
				Add Weapon
			</div>
		</div>
	);
}

Weapons.propTypes = {
	weapons: PropTypes.array,
	updateCharacter: PropTypes.func.isRequired,
};

Weapons.defaultProps = {
	weapons: [{ name: "", damage: [0, 0, 0, 0, 0, 0, 0] }],
};
