import { backgrounds } from "./backgrounds";
import { spells } from "./spells";

function dieRoll(max) {
	max = Math.floor(max);
	if (max < 1) {
		return 0;
	}
	return Math.floor(Math.random() * max) + 1;
}

function d6(multiplier) {
	let roll = 0;
	if (multiplier) {
		for (let i = 0; i < multiplier; i++) {
			roll += dieRoll(6);
		}
		return roll;
	}
	return dieRoll(6);
}

const getRandomSpell = () => spells[dieRoll(36) - 1];

const item = {
	name: "",
	quantity: 1,
	slots: 1,
	notes: "",
};

export default function(justStats = false) {
	const character = { name: "", provisions: 6, money: d6(2), weapons: [] };

	// generate main STATS
	character.skill = dieRoll(3) + 3;
	const stamina = d6(2) + 12;
	character.stamina = { max: stamina, remaining: stamina };
	const luck = d6() + 6;
	character.luck = { max: luck, remaining: luck };

	if (justStats) return character;

	// get background
	const background = backgrounds[dieRoll(36 - 1)];
	character.background = background.name;

	if (background.special) {
		character.special = background.text + "\n~~~\n" + backgrounds.special;
	} else {
		character.special = background.text;
	}
	character.special = background.text;

	// now for skills
	character.skills = [];
	background.skills.forEach(skill => {
		const rank = parseInt(skill[0]);
		let name = skill.slice(2);
		if (name.includes("Spell - Random")) {
			name = name.replace("Random", getRandomSpell());
		}
		character.skills.push({ name, rank });
	});

	// inventory and weapons
	character.inventory = [
		{ name: "Knife", quantity: 1, notes: "", slots: 1 },
		{ name: "Lantern & Oil", quantity: 1, notes: "", slots: 1 },
	];

	background.posessions.forEach(posession => {
		if (posession.includes("(DMG ")) {
			const re = /([A-Za-z \-']+)\(DMG(( [0-9]+,?)+)(\. [A-Za-z0-9+\-.'" ]+)?\)([A-Za-z0-9+\-.'" ]+)?/g;
			const result = re.exec(posession);
			if (result === null) {
				console.log("null", posession);
				character.inventory.push({
					...item,
					name: posession,
				});
				return;
			}
			const name = result[1];
			const moreName = result[4] ? result[4] : "";
			const damage = result[2]
				.split(",")
				.map(digit => parseInt(digit.trim()));

			const armorPiercing = posession.includes(
				"Ignores 1 point of Armor"
			);
			character.weapons.push({
				name,
				damage,
				notes: moreName,
				twoHanded: false,
				armorPiercing,
			});

			character.inventory.push({
				...item,
				name: name + moreName,
			});
		} else {
			character.inventory.push({
				...item,
				name: posession,
			});
		}
	});

	character.weapons.push({
		name: "Knife",
		quantity: 1,
		slots: 1,
		damage: [2, 2, 2, 2, 4, 8, 10],
	});

	return character;
}
