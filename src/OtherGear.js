import React from "react";

import "./OtherGear.css";

export function OtherGear(props) {
	return (
		<React.Fragment>
			<label className="gear__label wearing">
				Wearing
				<textarea className="gear__input" value={props.wearing} />
			</label>

			<label className="gear__label money box">
				Money
				<input
					type="number"
					className="gear__input"
					value={props.money}
				/>
			</label>

			<label className="gear__label provisions box">
				Provisions
				<input
					type="number"
					className="gear__input"
					value={props.provisions}
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
