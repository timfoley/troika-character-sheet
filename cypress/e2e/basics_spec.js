/* global cy */

import char from "../../src/char";

describe("<Basics /> tests", () => {
	it("can enter name, background, and special", () => {
		cy.visit("/")
			.get(".basics__input--name")
			.type(char.name)
			.get(".basics__input--background")
			.type(char.background)
			.get(".basics__input--special")
			.type(char.special)
			.get(".basics__input--name")
			.should("have.value", char.name)
			.get(".basics__input--background")
			.should("have.value", char.background)
			.get(".basics__input--special")
			.should("have.value", char.special);
	});
});
