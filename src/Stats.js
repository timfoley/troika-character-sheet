import React from "react";

import "./Stats.css";

export function Stats(props) {
    return (
        <div className="stats">
            <label className="stat skill">
                Skill
                <input
                className="stat__input"
                type="number"
                value={props.skill}
                />
            </label>

            <div className="stat stamina">
                <label>
                Stamina
                <input
                    className="stat__input"
                    type="number"
                    max={props.stamina.max}
                    value={props.stamina.remaining}
                />
                </label>
                <label className="sub-label">
                <input
                    className="stat__input stat__input--sub"
                    type="number"
                    value={props.stamina.max}
                />
                Max
                </label>
            </div>
            <div className="stat luck">
                <label>
                Luck
                <input
                    className="stat__input"
                    type="number"
                    max={props.luck.max}
                    value={props.luck.remaining}
                />
                </label>
                <label className="sub-label">
                <input
                    type="number"
                    className="stat__input stat__input--sub"
                    value={props.luck.max}
                />
                Max
                </label>
            </div>
        </div>
    );
}