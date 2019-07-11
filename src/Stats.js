import React from "react";

import "./Stats.css";

export function Stats(props) {
	const updateSkill = e =>
		props.updateCharacter("skill", parseInt(e.target.value));

	const updateMaxStamina = e =>
		props.updateCharacter("stamina", {
			...props.stamina,
			max: parseInt(e.target.value),
		});
	const updateRemainingStamina = e =>
		props.updateCharacter("stamina", {
			...props.stamina,
			remaining: parseInt(e.target.value),
		});

	const updateMaxLuck = e =>
		props.updateCharacter("luck", {
			...props.luck,
			max: parseInt(e.target.value),
		});
	const updateRemainingLuck = e =>
		props.updateCharacter("luck", {
			...props.luck,
			remaining: parseInt(e.target.value),
		});

	return (
		<div className="stats">
			<label className="stat skill">
				Skill
				<input
					className="stat__input stat__input--main"
					type="number"
					value={props.skill}
					onChange={updateSkill}
				/>
			</label>

			<div className="stat stamina">
				<label>
					Stamina
					<input
						className="stat__input stat__input--main"
						type="number"
						max={props.stamina.max}
						value={props.stamina.remaining}
						onChange={updateRemainingStamina}
					/>
				</label>
				<label className="sub-label">
					<input
						className="stat__input stat__input--sub"
						type="number"
						value={props.stamina.max}
						onChange={updateMaxStamina}
					/>
					Max
				</label>
			</div>
			<div className="stat luck">
				<label>
					Luck
					<input
						className="stat__input stat__input--main"
						type="number"
						max={props.luck.max}
						value={props.luck.remaining}
						onChange={updateRemainingLuck}
					/>
				</label>
				<label className="sub-label">
					<input
						type="number"
						className="stat__input stat__input--sub"
						value={props.luck.max}
						onChange={updateMaxLuck}
					/>
					Max
				</label>
			</div>
		</div>
	);
}

Stats.defaultProps = {
	skill: 0,
	stamina: { max: 0, remaining: 0 },
	luck: { max: 0, remaining: 0 },
};
