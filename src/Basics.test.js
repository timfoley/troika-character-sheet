import "@testing-library/jest-dom/extend-expect";
import React from 'react';
import ReactDOM from 'react-dom';
import { getQueriesForElement } from "@testing-library/dom";

import char from "./char";
import { Basics } from "./Basics";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Basics  character={char} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it("renders a text input with a label 'Name'", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Basics  character={char} />, div);
    const { getByLabelText } = getQueriesForElement(div);
    const input = getByLabelText(/name/i);
    expect(input).toHaveAttribute("type", "text");
})