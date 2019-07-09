import React from "react";
import "./Sheet.css";

import { Basics } from "./Basics";
import { Stats } from "./Stats";

export function Sheet(props) {

    return(
        <div className="sheet">
            <div className="left-grid">
                <Basics
                    name={props.char.name}
                    background={props.char.background}
                    special={props.char.special}
                />
                <Stats
                    stamina={props.char.stamina}
                    skill={props.char.skill}
                    luck={props.char.luck}
                />
            </div>
            <div className="right-grid">
            </div>
        </div>
    );
}