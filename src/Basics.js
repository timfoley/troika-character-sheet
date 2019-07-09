import React from "react";

import "./Basics.css";

export function Basics(props) {
	return (
		<div class="basics">
			<label class="basics__name">
				Name
				<input type="text" value={props.char.name}/>
			</label>
			<label class="basics__background">
				Background
				<input type="text" value={props.char.background} />
			</label>
			<label class="basics__special">
				Special
				<textarea rows="4" value={props.char.special} />
			</label>
		</div>
	);
}
