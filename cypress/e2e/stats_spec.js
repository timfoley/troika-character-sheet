/* global cy */

import char from "../../src/char";

describe("<Stats /> tests", () => {
	it("can enter Skill, Stamina, and Luck", () => {
		cy.visit("/")
			.get(".skill-stat")
			.clear()
			.type(char.skill)
			.get(".stamina-remaining")
			.clear()
			.type(char.stamina.remaining)
			.get(".stamina-max")
			.clear()
			.type(char.stamina.max)
			.get(".luck-remaining")
			.clear()
			.type(char.luck.remaining)
			.get(".luck-max")
			.clear()
			.type(char.luck.max)
			//check values
			.assertStats(char);
	});

	it("editing Skill also updates in skills section", () => {
		cy.visit("/")
			.get(".skill-stat")
			.clear()
			.get(".skill__box--skill-stat")
			.each(($box, i) => {
				cy.wrap($box).should("have.text", "-");
			})
			.get(".skill-stat")
			.clear()
			.type(8)
			.should("have.value", "8")
			.get(".skill__box--skill-stat")
			.each(($box, i) => {
				cy.wrap($box).should("have.text", "8");
			})
			.get(".skill-stat")
			.clear()
			.type(10)
			.get(".skill__box--skill-stat")
			.each(($box, i) => {
				cy.wrap($box).should("have.text", "10");
			});
	});
});
