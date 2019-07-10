import React from "react";
import PropTypes from "prop-types";

import "./Inventory.css";

export function Inventory(props) {
	const items = [];

	const updateInventory = (index, value) => {
		const newInventory = props.inventory;
		newInventory[index] = {
			name: value,
			slots: 1,
			notes: "",
		};
		props.updateCharacter("inventory", newInventory);
	};

	for (let i = 0; i < 12; i++) {
		if (props.inventory[i]) {
			items.push(
				<React.Fragment key={"item" + i}>
					<li className="item">
						<input
							id={i}
							type="text"
							aria-label={`Slot ${i + 1}`}
							defaultValue={props.inventory[i].name}
							onChange={e => updateInventory(i, e.target.value)}
						/>
					</li>
				</React.Fragment>
			);
		} else {
			items.push(
				<React.Fragment key={"item" + i}>
					<li className="item blank">
						<input
							id={i}
							type="text"
							aria-label={`Empty slot ${i + 1}`}
							defaultValue=""
							onChange={e => updateInventory(i, e.target.value)}
						/>
					</li>
				</React.Fragment>
			);
		}
	}

	return (
		<div className="inventory">
			<h2>Inventory</h2>
			<ol className="inventory__grid">{items}</ol>
		</div>
	);
}

Inventory.propTypes = {
	inventory: PropTypes.array,
};

Inventory.defaultProps = {
	inventory: [{ name: "", notes: "", quantity: 1, slots: 1 }],
};
