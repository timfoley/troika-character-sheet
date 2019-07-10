import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Skills } from "./Skills";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Skills />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Skills />);
	expect(container.firstChild).toMatchSnapshot();
});
