/* global cy */

import getRandomChar from "../../src/lib/getRandomChar";

describe("<Weapons /> tests", () => {
	const char = getRandomChar();
	it("can enter a weapon", () => {
		const weapon = char.weapons[0];
		cy.visit("/")
			// enter weapon name
			.get(".weapon__name__input")
			.eq(0)
			.clear()
			.type(weapon.name);
		cy.fillWeaponDamage(weapon, 0);
		cy.assertWeapon(weapon, 0);
	});

	it("can add and enter a weapon", () => {
		const weapon = {
			name: "Beautiful Sword",
			damage: [4, 6, 6, 6, 6, 8, 10],
			notes: "",
			twoHanded: false,
			armorPiercing: false,
		};

		cy.visit("/")
			.get(".weapons__add-button")
			.click()
			.focused()
			.type(weapon.name);
		cy.fillWeaponDamage(weapon, 1);
		cy.assertWeapon(weapon, 1);
	});
});
