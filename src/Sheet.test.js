import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Sheet } from "./Sheet";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Sheet />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Sheet />);
	expect(container.firstChild).toMatchSnapshot();
});
