import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { Stats } from "./Stats";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Stats />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<Stats />);
	expect(container.firstChild).toMatchSnapshot();
});
