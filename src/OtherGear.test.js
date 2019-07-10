import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";

import { OtherGear } from "./OtherGear";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<OtherGear />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", () => {
	const { container } = render(<OtherGear />);
	expect(container.firstChild).toMatchSnapshot();
});
