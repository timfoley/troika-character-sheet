import React from "react";
import PropTypes from "prop-types";

import "./Sheet.css";

import { Basics } from "./Basics";
import { Stats } from "./Stats";

export function Sheet(props) {
    const updateCharacter = (field, value) => {
        props.setCharacter({...props.character, [field]: value})
    }

    return(
        <div className="sheet">
            <div className="left-grid">
                <Basics
                    name={props.character.name}
                    background={props.character.background}
                    special={props.character.special}
                    updateCharacter={updateCharacter}
                />
                <Stats
                    stamina={props.character.stamina}
                    skill={props.character.skill}
                    luck={props.character.luck}
                    updateCharacter={updateCharacter}
                />
            </div>
            <div className="right-grid">
            </div>
        </div>
    );
}

Sheet.propTypes = {
    character: PropTypes.object,
    setCharacter: PropTypes.func
}