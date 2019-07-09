import React from "react";
import "./Sheet.css";

import { Basics } from "./Basics";

export function Sheet(props) {

    return(
        <div className="sheet">
            <div className="left-grid">
                <Basics char={props.char} />
            </div>
            <div className="right-grid">
            </div>
        </div>
    );
}