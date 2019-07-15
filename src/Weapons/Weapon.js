import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { DamageBoxes } from "./DamageBoxes";

export const Weapon = props => {
	const weaponNameInput = useRef(null);

	useEffect(() => {
		props.shouldFocus && weaponNameInput.current.focus();
	}, [props.shouldFocus]);

	const setWeaponName = e => {
		const newWeapons = props.weapons;
		newWeapons[props.index] = {
			...newWeapons[props.index],
			name: e.target.value,
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
		<React.Fragment>
			<div className="weapon__name">
				<input
					className="weapon__name__input"
					aria-label="weapon name"
					type="text"
					value={props.weapon.name}
					onChange={setWeaponName}
					ref={weaponNameInput}
				/>
			</div>
			<DamageBoxes
				damage={props.weapon.damage}
				name={props.weapon.name}
				setWeaponDamage={setWeaponDamage}
				wpnIndex={props.index}
			/>
		</React.Fragment>
	);
};

Weapon.propTypes = {
	weapon: PropTypes.object.isRequired,
	updateCharacter: PropTypes.func.isRequired,
	weapons: PropTypes.array.isRequired,
	shouldFocus: PropTypes.bool,
};
