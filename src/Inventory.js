import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./Inventory.scss";

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

	const getItemClassName = item => {
		const hasLongName = item.name && item.name.length > 32;

		return classnames("item__input", {
			"even-smaller-font": hasLongName,
		});
	};

	for (let i = 0; i < 12; i++) {
		if (props.inventory[i]) {
			items.push(
				<React.Fragment key={"item" + i}>
					<li className="item">
						<textarea
							id={i}
							type="text"
							aria-label={`Slot ${i + 1}`}
							value={props.inventory[i].name}
							onChange={e => updateInventory(i, e.target.value)}
							className={getItemClassName(props.inventory[i])}
						/>
					</li>
				</React.Fragment>
			);
		} else {
			items.push(
				<React.Fragment key={"item" + i}>
					<li className="item blank">
						<textarea
							id={i}
							className="item__input"
							type="text"
							aria-label={`Empty slot ${i + 1}`}
							value=""
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
