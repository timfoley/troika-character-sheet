export default {
	name: "Dahddy",
	background: "Beef Steak",
	special: "",
	skill: 5,
	stamina: {
		max: 18,
		remaining: 18
	},
	luck: {
		max: 10,
		remaining: 10
	},
	skills: [
		{
			name: "Hammer Fighting",
			rank: 3
		},
		{
			name: "Fist Fighting",
			rank: 2
		},
		{
			name: "Wrestle",
			rank: 2
		},
		{
			name: "Swim",
			rank: 2
		},
		{
			name: "Climb",
			rank: 2
		},
		{
			name: "Run",
			rank: 2
		},
		{
			name: "Grill",
			rank: 2
		}
	],
	weapons: [
		{
			name: "Steak Knife",
			damage: [2, 2, 2, 2, 4, 8, 10],
			twoHanded: false,
			armorPiercing: false
		},
		{
			name: "Meat Tenderizer",
			damage: [1, 2, 4, 6, 8, 10, 12],
			twoHanded: false,
			armorPiercing: true
		}
	],
	inventory: [
		{
			name: "Hammer",
			notes: "",
			quantity: 1,
			slots: 1
		},
		{
			name: "Knife",
			notes: "",
			quantity: 1,
			slots: 1
		},
		{
			name: "Portable grill",
			notes: "",
			quantity: 1,
			slots: 1
		},
		{
			name: "Steaks",
			notes: "premium quality",
			quantity: 7,
			slots: 1
		},
		{
			name: "Flask of oil",
			notes: "",
			quantity: 1,
			slots: 1
		},
		{
			name: "Lantern",
			notes: "",
			quantity: 1,
			slots: 1
		}
	],
	wearing: "Waistcoat",
	money: 12,
	provisions: 6
};
