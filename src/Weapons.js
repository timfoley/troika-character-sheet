import React from "react";
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
					props.setWeaponDamage(
						i,
						parseInt(e.target.value),
						props.wpnIndex
					)
				}
				onBlur={props.updateCharacter}
			/>
			<div className="weapon__damage__roll" aria-hidden="true">
				{getRollFromIndex(i)}
			</div>
		</div>
	));
}

export function Weapons(props) {
	const addWeapon = () => {
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

	const setWeaponName = (index, value) => {
		const newWeapons = props.weapons;
		newWeapons[index] = {
			...newWeapons[index],
			name: value,
		};
		props.updateCharacter("weapons", newWeapons);
	};

	const setWeaponDamage = (dmgIndex, value, wpnIndex) => {
		const newWeapons = props.weapons;
		const newDamage = newWeapons[wpnIndex].damage;
		newDamage[dmgIndex] = isNaN(value) ? null : value;

		newWeapons[wpnIndex].damage = newDamage;
		props.updateCharacter("weapons", newWeapons);
	};

	return (
		<div className="weapons">
			<h2>Weapons</h2>
			<div className="weapons__grid">
				{props.weapons.map((weapon, index) => (
					<React.Fragment key={"weapon" + index}>
						<div className="weapon__name">
							<input
								aria-label="weapon name"
								type="text"
								defaultValue={weapon.name}
								onChange={e =>
									setWeaponName(index, e.target.value)
								}
							/>
						</div>
						<DamageBoxes
							damage={weapon.damage}
							name={weapon.name}
							setWeaponDamage={setWeaponDamage}
							wpnIndex={index}
						/>
					</React.Fragment>
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
	updateCharacter: PropTypes.func,
};

Weapons.defaultProps = {
	weapons: [{ name: "", damage: [0, 0, 0, 0, 0, 0, 0] }],
};
