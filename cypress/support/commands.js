/* global Cypress cy */

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";

Cypress.Commands.add("assertBasics", char => {
	cy.get(".basics__input--name")
		.should("have.value", char.name)
		.get(".basics__input--background")
		.should("have.value", char.background)
		.get(".basics__input--special")
		.should("have.value", char.special);
});

Cypress.Commands.add("assertStats", char => {
	cy.get(".skill-stat")
		.should("have.value", char.skill.toString())
		.get(".stamina-remaining")
		.should("have.value", char.stamina.remaining.toString())
		.get(".stamina-max")
		.should("have.value", char.stamina.max.toString())
		.get(".luck-remaining")
		.should("have.value", char.luck.remaining.toString())
		.get(".luck-max")
		.should("have.value", char.luck.max.toString());
});

Cypress.Commands.add("assertSkills", skills => {
	skills.forEach((skill, i) => {
		cy.get(".skill__name__input")
			.eq(i)
			.should("have.value", skill.name)
			.get(".skill__box--rank")
			.eq(i + 1)
			.should("have.value", skill.rank.toString());
	});
});

Cypress.Commands.add("assertWeapon", (weapon, weaponIndex) => {
	cy.get(".weapon__name__input")
		.eq(weaponIndex)
		.should("have.value", weapon.name);
	for (let i = 0; i < weapon.damage.length; i++) {
		cy.get(
			`:nth-child(${2 + weaponIndex * 8 + i}) > .weapon__damage__input`
		).should("have.value", weapon.damage[i].toString());
	}
});

Cypress.Commands.add("fillWeaponDamage", (weapon, weaponIndex) => {
	for (let i = 0; i < weapon.damage.length; i++) {
		cy.get(`.weapon__damage__input--${weaponIndex}`)
			.eq(i)
			.clear()
			.type(weapon.damage[i]);
	}
});
