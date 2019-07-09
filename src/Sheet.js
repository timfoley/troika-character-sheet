import React from "react";
import "./Sheet.css";

import { Basics } from "./Basics";
import { Stats } from "./Stats";

export function Sheet(props) {

    return(
        <div className="sheet">
            <div className="left-grid">
                <Basics char={props.char} />
                <Stats
                    stamina={props.stamina}
                    skill={props.skill}
                    luck={props.luck}
                />
            </div>
            <div className="right-grid">
            </div>
        </div>
    );
}