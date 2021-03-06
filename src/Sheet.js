import React from "react";
import PropTypes from "prop-types";

import "./Sheet.css";

import { Basics } from "./Basics";
import { Stats } from "./Stats";
import { Skills } from "./Skills";
import { Weapons } from "./Weapons";
import { Inventory } from "./Inventory";
import { OtherGear } from "./OtherGear";

export function Sheet(props) {
	const updateCharacter = (field, value) => {
		props.setCharacter({ ...props.character, [field]: value });
	};

	return (
		<div className="sheet">
			<div className="left-grid">
				<Basics
					name={props.character.name}
					background={props.character.background}
					special={props.character.special}
					updateCharacter={updateCharacter}
				/>
				<Stats
					stamina={props.character.stamina}
					skill={props.character.skill}
					luck={props.character.luck}
					updateCharacter={updateCharacter}
				/>
				<Skills
					skills={props.character.skills}
					skillStat={props.character.skill}
					updateCharacter={updateCharacter}
				/>
			</div>
			<div className="right-grid">
				<Weapons
					weapons={props.character.weapons}
					updateCharacter={updateCharacter}
				/>
				<Inventory
					inventory={props.character.inventory}
					updateCharacter={updateCharacter}
				/>
				<OtherGear
					wearing={props.character.wearing}
					money={props.character.money}
					provisions={props.character.provisions}
					updateCharacter={updateCharacter}
				/>
			</div>
		</div>
	);
}

Sheet.propTypes = {
	character: PropTypes.object,
	setCharacter: PropTypes.func
};

Sheet.defaultProps = {
	character: {}
};
