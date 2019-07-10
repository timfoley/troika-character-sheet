import React, { useState } from "react";
import PropTypes from "prop-types";

import "./Weapons.css";

function DamageBoxes(props) {
	function getRollFromIndex(i) {
		if (i < 6) {
			return (i + 1).toString();
		}

		return "7+";
	}

	return props.damage.map((dmgValue, i) => (
		<div className="weapon__damage" key={props.name + "-dmg-" + i}>
			<input
				className="hide-spinners"
				value={dmgValue}
				aria-label={`${getRollFromIndex(i)} damage value for ${
					props.name
				}`}
				type="number"
				onChange={e =>
					props.setWeaponDamage(i, parseInt(e.target.value))
				}
				onBlur={props.updateCharacter}
			/>
			<div className="weapon__damage__roll" aria-hidden="true">
				{getRollFromIndex(i)}
			</div>
		</div>
	));
}

function Weapon(props) {
	const [weapon, setWeapon] = useState(props.weapon);

	const setWeaponName = e => {
		setWeapon({ ...weapon, name: e.target.value });
	};

	const setWeaponDamage = (index, value) => {
		const newDamage = weapon.damage;
		newDamage[index] = isNaN(value) ? null : value;
		setWeapon({ ...weapon, damage: newDamage });
	};

	const updateCharacter = () => {
		const newWeapons = props.weapons;
		newWeapons[props.index] = weapon;
		props.updateCharacter("weapons", newWeapons);
	};

	return (
		<React.Fragment>
			<div className="weapon__name">
				<input
					aria-label="weapon name"
					type="text"
					value={weapon.name}
					onChange={setWeaponName}
					onBlur={updateCharacter}
				/>
			</div>
			<DamageBoxes
				damage={weapon.damage}
				name={weapon.name}
				setWeaponDamage={setWeaponDamage}
				updateCharacter={updateCharacter}
			/>
		</React.Fragment>
	);
}

export function Weapons(props) {
	const addWeapon = () => {
		props.updateCharacter("weapons", [
			...props.weapons,
			{ name: "", damage: [0, 0, 0, 0, 0, 0, 0] }
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
						weapon={weapon}
						index={index}
						key={weapon.name}
						weapons={props.weapons}
						updateCharacter={props.updateCharacter}
					/>
				))}
			</div>
			<div
				onClick={addWeapon}
				onKeyPress={handleAddSkillKeyPress}
				tabindex="0"
				class="weapons__add-button clickable"
			>
				Add Weapon
			</div>
		</div>
	);
}

Weapons.propTypes = {
	weapons: PropTypes.array,
	updateCharacter: PropTypes.func
};

Weapons.defaultProps = {
	weapons: [{ name: "", damage: [0, 0, 0, 0, 0, 0, 0] }]
};
