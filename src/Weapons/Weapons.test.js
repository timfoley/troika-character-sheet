import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Weapons } from "./index.js";

import char from "../char";

it("renders Weapons without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(
		<Weapons updateCharacter={() => {}} weapons={char.weapons} />,
		div
	);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(
		<Weapons updateCharacter={() => {}} weapons={char.weapons} />
	);
	expect(container.firstChild).toMatchSnapshot();
});

// it("renders a heading called 'Weapons'", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Weapons />, div);
//     const { getByLabelText } = getQueriesForElement(div);
//     const input = getByLabelText(/name/i);
//     expect(input).toHaveAttribute("type", "text");
// })
