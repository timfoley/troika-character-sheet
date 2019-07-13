/* global cy */

import char from "../../src/char";

describe("fill out sheet", () => {
	it("can fill out a blank character sheet using tabs", () => {
		cy.visit("/")
			.clearLocalStorage()
			.get("body")
			.tab()
			.type(char.name)
			.tab()
			.type(char.background)
			.tab()
			.type(char.special)
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
				.get(".skill__name__input")
				.eq(i)
				.should("have.value", skill.name)
				.tab()
				.type(skill.rank)
				.get(".skill__box--rank")
				.eq(i + 1)
				.should("have.value", skill.rank.toString());
		}
		for (let i = 5; i < char.skills.length; i++) {
			const skill = char.skills[i];
			cy.tab()
				.type(" ")
				.tab({ shift: true })
				.tab({ shift: true })
				.type(skill.name)
				.get(".skill__name__input")
				.eq(i)
				.should("have.value", skill.name)
				.tab()
				.type(skill.rank)
				.get(".skill__box--rank")
				.eq(i + 1)
				.should("have.value", skill.rank.toString());
		}
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
