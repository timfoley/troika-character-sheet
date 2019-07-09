import React from "react";
import PropTypes from "prop-types";

import "./Inventory.css";

export function Inventory(props) {
    const items = [];

    for (let i = 0; i < 12; i++) {
        if (props.inventory[i]) {
            items.push(
                <React.Fragment key={"item" + i}>
                    <li className="item">
                    <input
                        id={i}
                        type="text"
                        aria-label={`Slot ${i + 1}`}
                        value={props.inventory[i].name}
                    />
                    </li>
                </React.Fragment>
            );
        }
        else {
            items.push(
                <React.Fragment key={"item" + i}>
                    <li className="item blank">
                    <input
                        id={i}
                        type="text"
                        aria-label={`Empty slot ${i + 1}`}
                        value=""
                    />
                    </li>
                </React.Fragment>
            )
        }

    }

    return (
        <div className="inventory">
        <h2>Inventory</h2>
        <ol className="inventory__grid">
            {items}
        </ol>
        </div>
    )
};

Inventory.propTypes = {
    inventory: PropTypes.array
}