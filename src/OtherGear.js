import React from "react";

import "./OtherGear.css";

export function OtherGear(props) {
	const updateWearing = e => {
		props.updateCharacter("wearing", e.target.value);
	};

	const updateMoney = e => {
		props.updateCharacter("money", parseInt(e.target.value));
	};

	const updateProvisions = e => {
		props.updateCharacter("provisions", parseInt(e.target.value));
	};

	return (
		<React.Fragment>
			<label className="gear__label wearing">
				Wearing
				<textarea
					className="gear__input"
					value={props.wearing}
					onChange={updateWearing}
				/>
			</label>

			<label className="gear__label money box">
				Money
				<input
					type="number"
					className="gear__input"
					value={props.money}
					onChange={updateMoney}
				/>
			</label>

			<label className="gear__label provisions box">
				Provisions
				<input
					type="number"
					className="gear__input"
					value={props.provisions}
					onChange={updateProvisions}
				/>
			</label>
		</React.Fragment>
	);
}

OtherGear.defaultProps = {
	money: 0,
	provisions: 0,
	wearing: ""
};
