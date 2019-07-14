import React from "react";

export function DamageBoxes(props) {
	function getRollFromIndex(i) {
		if (i < 6) {
			return (i + 1).toString();
		}

		return "7+";
	}

	return props.damage.map((dmgValue, i) => (
		<div className="weapon__damage" key={props.name + "-dmg-" + i}>
			<input
				className={`weapon__damage__input weapon__damage__input--${props.wpnIndex} hide-spinners`}
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
