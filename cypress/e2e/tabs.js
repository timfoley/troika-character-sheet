/* global cy */

import getRandomChar from "../../src/lib/getRandomChar";

describe("fill out sheet", () => {
	const char = getRandomChar();
	char.name = "Geoffrey";
	it("can fill out a blank character sheet using tabs", () => {
		cy.visit("/")
			.clearLocalStorage()
			.get(".basics__name > .basics__input")
			.type(char.name)
			.tab()
			.type(char.background)
			.tab()
			.type(char.special, { delay: 1 })
			.assertBasics(char)
			.tab()
			.type(char.skill)
			.tab()
			.type(char.stamina.remaining)
			.tab()
			.type(char.stamina.max)
			.tab()
			.type(char.luck.remaining)
			.tab()
			.type(char.luck.max)
			.assertStats(char);

		for (let i = 0; i < 5; i++) {
			const skill = char.skills[i];
			cy.tab()
				.type(skill.name)
				.tab()
				.type(skill.rank);
		}
		for (let i = 5; i < char.skills.length; i++) {
			const skill = char.skills[i];
			cy.tab()
				.type(" ")
				.focused()
				.type(skill.name)
				.tab()
				.type(skill.rank);
		}
		cy.assertSkills(char.skills);
		cy.tab();

		// for (let i = 0; i < char.weapons.length; i++) {
		// 	const weapon = char.weapons[i];
		// 	cy.tab()
		// 		.type(weapon.name)
		// 		.get(".weapon__name__input")
		// 		.eq(i)
		// 		.should("have.value", weapon.name);

		// 	for (let j = 0; j < 7; j++) {
		// 		cy.tab()
		// 			.type(weapon.damage[j])
		// 			.get(`.weapon__damage__input--${j}`)
		// 			.eq(i)
		// 			.should("have.value", weapon.damage[j].toString());
		// 	}
		// }
	});
});
