import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Weapons } from "./Weapons";

it("renders Weapons without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Weapons />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Weapons />);
	expect(container.firstChild).toMatchSnapshot();
});

// it("renders a heading called 'Weapons'", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<Weapons />, div);
//     const { getByLabelText } = getQueriesForElement(div);
//     const input = getByLabelText(/name/i);
//     expect(input).toHaveAttribute("type", "text");
// })
