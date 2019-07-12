import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Skills } from "./Skills";

const sampleSkills = [
	{
		name: "Hammer Fighting",
		rank: 3,
	},
	{
		name: "Fist Fighting",
		rank: 2,
	},
	{
		name: "Wrestle",
		rank: 2,
	},
	{
		name: "Swim",
		rank: 2,
	},
	{
		name: "Climb",
		rank: 2,
	},
	{
		name: "Run",
		rank: 2,
	},
	{
		name: "Grill",
		rank: 2,
	},
	{
		name: "",
		rank: 0,
	},
];

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Skills skills={sampleSkills} />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Skills skills={sampleSkills} />);
	expect(container.firstChild).toMatchSnapshot();
});

// it("adds new skill on clicking 'Add Skill'") {

// }
