/* global cy */

describe("skills", () => {
	it("can add a blank skill", () => {
		cy.visit("/")
			.clearLocalStorage()
			.get(".skill__name__input")
			.then($skills => {
				console.log($skills);
				const numSkills = $skills.length;

				cy.get(".skills__add-button")
					.click()
					.get(".skill__name__input")
					.should("have.lengthOf", numSkills + 1);
			});
	});
});
