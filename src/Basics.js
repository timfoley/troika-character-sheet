import React from "react";

import "./Basics.css";

export function Basics(props) {
	return (
		<div className="basics">
			<label className="basics__name">
				Name
				<input type="text" value={props.name}/>
			</label>
			<label className="basics__background">
				Background
				<input type="text" value={props.background} />
			</label>
			<label className="basics__special">
				Special
				<textarea rows="4" value={props.special} />
			</label>
		</div>
	);
}
