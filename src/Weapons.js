import React from "react";
import PropTypes from "prop-types";

import "./Weapons.css";

function DamageBoxes({damage, name}) {
	function getRollFromIndex(i) {
		if (i < 6) {
			return (i + 1).toString();
		}

		return "7+";
	}

	return damage.map((dmgValue, i) => (
		<div className="weapon__damage" key={name + "-dmg-" + i}>
			<input
				value={dmgValue}
				aria-label={`${getRollFromIndex(i)} damage value for ${name}`}
				type="text"
			/>
			<div className="weapon__damage__roll" aria-hidden="true">
				{getRollFromIndex(i)}
			</div>
		</div>
	));
}

export function Weapons(props) {
	return (
		<div className="weapons">
			<h2>Weapons</h2>
			<div className="weapons__grid">
				{props.weapons.map(weapon => (
					<React.Fragment key={weapon.name}>
						<div className="weapon__name">
							<input
								aria-label="weapon name"
								type="text"
								value={weapon.name}
							/>
						</div>
						<DamageBoxes damage={weapon.damage} name={weapon.name} />
					</React.Fragment>
				))}
			</div>
		</div>
	);
}

Weapons.propTypes = {
	weapons: PropTypes.array
};
