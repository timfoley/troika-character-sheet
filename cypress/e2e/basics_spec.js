/* global cy */

import char from "../../src/char";

describe("<Basics /> tests", () => {
	it("can enter name, background, and special", () => {
		cy.visit("/")
			.get(".basics__input--name")
			.clear()
			.type(char.name)
			.get(".basics__input--background")
			.clear()
			.type(char.background)
			.get(".basics__input--special")
			.clear()
			.type(char.special)
			.assertBasics(char);
	});
});
