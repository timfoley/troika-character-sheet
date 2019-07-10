import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Inventory } from "./Inventory";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Inventory />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Inventory />);
	expect(container.firstChild).toMatchSnapshot();
});
