window.data = {};
//This file is huge, try ctrl+Fing these:
//HEROES TABLE
//SKILLS TABLE
//SKILL PREREQS TABLE
//HERO SKILLS TABLE

//HEROES TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Bases are for 5* rarity
//Max stats can be calculated from base stats and growth values
//minrarity not used for anything at the moment (2017-07-23)
window.data.heroes = [
	{
		"hero_id": 1,
		"name": "Alfonse",
		"basehp": 19,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 2
	},
	{
		"hero_id": 2,
		"name": "Caeda",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 5,
		"baseres": 10,
		"hpgrowth": 5,
		"atkgrowth": 5,
		"spdgrowth": 9,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "sword",
		"movetype": "flying",
		"minrarity": 4
	},
	{
		"hero_id": 3,
		"name": "Cain",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 4
	},
	{
		"hero_id": 4,
		"name": "Chrom",
		"basehp": 21,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 7,
		"baseres": 4,
		"hpgrowth": 8,
		"atkgrowth": 9,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 5,
		"name": "Corrin(M)",
		"basehp": 20,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 6,
		"name": "Draug",
		"basehp": 24,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 13,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 8,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "armored",
		"minrarity": 2
	},
	{
		"hero_id": 7,
		"name": "Eirika",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 7,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 8,
		"name": "Eldigan",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 5,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 2,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 9,
		"name": "Eliwood",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 4,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 10,
		"name": "Fir",
		"basehp": 19,
		"baseatk": 6,
		"basespd": 10,
		"basedef": 5,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 11,
		"name": "Hana",
		"basehp": 18,
		"baseatk": 9,
		"basespd": 10,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 12,
		"name": "Henry",
		"basehp": 19,
		"baseatk": 6,
		"basespd": 5,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 8,
		"atkgrowth": 4,
		"spdgrowth": 4,
		"defgrowth": 7,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 13,
		"name": "Hinata",
		"basehp": 21,
		"baseatk": 8,
		"basespd": 5,
		"basedef": 10,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 14,
		"name": "Karel",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 9,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 15,
		"name": "Laslow",
		"basehp": 20,
		"baseatk": 9,
		"basespd": 7,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 16,
		"name": "Leo",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 5,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 4,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 17,
		"name": "Lilina",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 4,
		"baseres": 9,
		"hpgrowth": 5,
		"atkgrowth": 9,
		"spdgrowth": 5,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 18,
		"name": "Lonqu",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 11,
		"basedef": 5,
		"baseres": 5,
		"hpgrowth": 8,
		"atkgrowth": 6,
		"spdgrowth": 9,
		"defgrowth": 4,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 19,
		"name": "Lucina",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 10,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 20,
		"name": "Lyn",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 11,
		"basedef": 7,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 21,
		"name": "Marth",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 7,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 22,
		"name": "Ogma",
		"basehp": 21,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 6,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 9,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 1,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 23,
		"name": "Olivia",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 7,
		"basedef": 5,
		"baseres": 4,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 6,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 24,
		"name": "Palla",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "sword",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 25,
		"name": "Raigh",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 5,
		"baseres": 7,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 26,
		"name": "Roy",
		"basehp": 20,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 27,
		"name": "Ryoma",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 11,
		"basedef": 5,
		"baseres": 4,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 28,
		"name": "Sanaki",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 7,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 4,
		"atkgrowth": 9,
		"spdgrowth": 5,
		"defgrowth": 2,
		"resgrowth": 8,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 29,
		"name": "Selena",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 5,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 7,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 30,
		"name": "Seliph",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 9,
		"atkgrowth": 8,
		"spdgrowth": 4,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 31,
		"name": "Sophia",
		"basehp": 18,
		"baseatk": 9,
		"basespd": 4,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 3,
		"defgrowth": 6,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 32,
		"name": "Stahl",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 33,
		"name": "Tharja",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 34,
		"name": "Tiki(A)",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 6,
		"basedef": 9,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 9,
		"spdgrowth": 4,
		"defgrowth": 8,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 35,
		"name": "Tiki(Y)",
		"basehp": 15,
		"baseatk": 5,
		"basespd": 4,
		"basedef": 8,
		"baseres": 7,
		"hpgrowth": 8,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 7,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 36,
		"name": "Anna",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 9,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 2
	},
	{
		"hero_id": 37,
		"name": "Arthur",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 5,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 38,
		"name": "Barst",
		"basehp": 20,
		"baseatk": 9,
		"basespd": 8,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 39,
		"name": "Bartre",
		"basehp": 21,
		"baseatk": 10,
		"basespd": 6,
		"basedef": 7,
		"baseres": 3,
		"hpgrowth": 9,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 1,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 40,
		"name": "Beruka",
		"basehp": 20,
		"baseatk": 7,
		"basespd": 6,
		"basedef": 9,
		"baseres": 5,
		"hpgrowth": 8,
		"atkgrowth": 6,
		"spdgrowth": 4,
		"defgrowth": 9,
		"resgrowth": 4,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 41,
		"name": "Camilla",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 7,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 4
	},
	{
		"hero_id": 42,
		"name": "Cecilia",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 5,
		"baseres": 7,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 43,
		"name": "Cherche",
		"basehp": 20,
		"baseatk": 10,
		"basespd": 6,
		"basedef": 8,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 9,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 44,
		"name": "Fae",
		"basehp": 16,
		"baseatk": 5,
		"basespd": 4,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 10,
		"atkgrowth": 9,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "green",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 45,
		"name": "Frederick",
		"basehp": 19,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 8,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 9,
		"resgrowth": 1,
		"color": "green",
		"weapontype": "axe",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 46,
		"name": "Gunter",
		"basehp": 21,
		"baseatk": 10,
		"basespd": 7,
		"basedef": 11,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 4,
		"defgrowth": 6,
		"resgrowth": 2,
		"color": "green",
		"weapontype": "axe",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 47,
		"name": "Hawkeye",
		"basehp": 21,
		"baseatk": 9,
		"basespd": 5,
		"basedef": 6,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 4,
		"defgrowth": 6,
		"resgrowth": 7,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 48,
		"name": "Hector",
		"basehp": 24,
		"baseatk": 10,
		"basespd": 5,
		"basedef": 11,
		"baseres": 4,
		"hpgrowth": 9,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "axe",
		"movetype": "armored",
		"minrarity": 5
	},
	{
		"hero_id": 49,
		"name": "Julia",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 7,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 2,
		"resgrowth": 7,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 50,
		"name": "Merric",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 51,
		"name": "Minerva",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 7,
		"resgrowth": 4,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 5
	},
	{
		"hero_id": 52,
		"name": "Narcian",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 8,
		"baseres": 7,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 7,
		"resgrowth": 5,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 2
	},
	{
		"hero_id": 53,
		"name": "Nino",
		"basehp": 16,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 4,
		"baseres": 7,
		"hpgrowth": 4,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 5,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 54,
		"name": "Raven",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 4,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 55,
		"name": "Robin(F)",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 7,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 2
	},
	{
		"hero_id": 56,
		"name": "Sheena",
		"basehp": 21,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 12,
		"baseres": 7,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 8,
		"color": "green",
		"weapontype": "axe",
		"movetype": "armored",
		"minrarity": 4
	},
	{
		"hero_id": 57,
		"name": "Abel",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 4,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 4
	},
	{
		"hero_id": 58,
		"name": "Azura",
		"basehp": 17,
		"baseatk": 5,
		"basespd": 7,
		"basedef": 4,
		"baseres": 6,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 59,
		"name": "Catria",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 7,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 4
	},
	{
		"hero_id": 60,
		"name": "Cordelia",
		"basehp": 18,
		"baseatk": 9,
		"basespd": 9,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 4
	},
	{
		"hero_id": 61,
		"name": "Corrin(F)",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 9,
		"defgrowth": 8,
		"resgrowth": 3,
		"color": "blue",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 62,
		"name": "Donnel",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 5,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 8,
		"atkgrowth": 9,
		"spdgrowth": 7,
		"defgrowth": 8,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 63,
		"name": "Effie",
		"basehp": 22,
		"baseatk": 12,
		"basespd": 5,
		"basedef": 11,
		"baseres": 4,
		"hpgrowth": 9,
		"atkgrowth": 9,
		"spdgrowth": 4,
		"defgrowth": 6,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "armored",
		"minrarity": 4
	},
	{
		"hero_id": 64,
		"name": "Ephraim",
		"basehp": 19,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 8,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 3,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 65,
		"name": "Est",
		"basehp": 17,
		"baseatk": 9,
		"basespd": 8,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 6,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 66,
		"name": "Florina",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 5,
		"defgrowth": 5,
		"resgrowth": 8,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 67,
		"name": "Gwendolyn",
		"basehp": 23,
		"baseatk": 8,
		"basespd": 5,
		"basedef": 12,
		"baseres": 6,
		"hpgrowth": 8,
		"atkgrowth": 6,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "armored",
		"minrarity": 3
	},
	{
		"hero_id": 68,
		"name": "Hinoka",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 9,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 5
	},
	{
		"hero_id": 69,
		"name": "Jagen",
		"basehp": 20,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 8,
		"baseres": 11,
		"hpgrowth": 4,
		"atkgrowth": 5,
		"spdgrowth": 4,
		"defgrowth": 4,
		"resgrowth": 7,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 70,
		"name": "Linde",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 10,
		"basedef": 4,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 1,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 71,
		"name": "Ninian",
		"basehp": 16,
		"baseatk": 5,
		"basespd": 7,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 8,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 72,
		"name": "Nowi",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 5,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 9,
		"atkgrowth": 9,
		"spdgrowth": 6,
		"defgrowth": 7,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "dragon",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 73,
		"name": "Oboro",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 9,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 74,
		"name": "Odin",
		"basehp": 19,
		"baseatk": 5,
		"basespd": 8,
		"basedef": 6,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 4,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 75,
		"name": "Olwen",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 4,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 7,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 76,
		"name": "Peri",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 9,
		"basedef": 6,
		"baseres": 6,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 4,
		"resgrowth": 7,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 4
	},
	{
		"hero_id": 77,
		"name": "Reinhardt",
		"basehp": 16,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 4,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "cavalry",
		"minrarity": 4
	},
	{
		"hero_id": 78,
		"name": "Robin(M)",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 7,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 79,
		"name": "Shanna",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 80,
		"name": "Sharena",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 7,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 2
	},
	{
		"hero_id": 81,
		"name": "Subaki",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 9,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 8,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 82,
		"name": "Sully",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 7,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 83,
		"name": "Ursula",
		"basehp": 16,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 7,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 84,
		"name": "Azama",
		"basehp": 19,
		"baseatk": 4,
		"basespd": 7,
		"basedef": 8,
		"baseres": 6,
		"hpgrowth": 7,
		"atkgrowth": 4,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 5,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 85,
		"name": "Clarine",
		"basehp": 16,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 5,
		"baseres": 7,
		"hpgrowth": 5,
		"atkgrowth": 5,
		"spdgrowth": 7,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 86,
		"name": "Elise",
		"basehp": 15,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 3,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 3,
		"resgrowth": 7,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 87,
		"name": "Felicia",
		"basehp": 15,
		"baseatk": 6,
		"basespd": 11,
		"basedef": 3,
		"baseres": 9,
		"hpgrowth": 5,
		"atkgrowth": 4,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 88,
		"name": "Gaius",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 5,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 3,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 89,
		"name": "Gordin",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 6,
		"basedef": 8,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 90,
		"name": "Jaffar",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 4,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 91,
		"name": "Jakob",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 5,
		"resgrowth": 5,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 92,
		"name": "Jeorge",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 5,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 4,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 93,
		"name": "Kagero",
		"basehp": 16,
		"baseatk": 9,
		"basespd": 8,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 3,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 94,
		"name": "Klein",
		"basehp": 18,
		"baseatk": 9,
		"basespd": 7,
		"basedef": 5,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 5,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 95,
		"name": "Lachesis",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 4,
		"defgrowth": 4,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 96,
		"name": "Lissa",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 6,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 5,
		"defgrowth": 6,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 97,
		"name": "Lucius",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 3,
		"baseres": 9,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 6,
		"defgrowth": 1,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 98,
		"name": "Maria",
		"basehp": 17,
		"baseatk": 5,
		"basespd": 8,
		"basedef": 4,
		"baseres": 10,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 99,
		"name": "Matthew",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 10,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 7,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 100,
		"name": "Niles",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 5,
		"spdgrowth": 8,
		"defgrowth": 2,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 101,
		"name": "Priscilla",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 3,
		"resgrowth": 7,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "cavalry",
		"minrarity": 4
	},
	{
		"hero_id": 102,
		"name": "Rebecca",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 103,
		"name": "Saizo",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 9,
		"baseres": 3,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 104,
		"name": "Sakura",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 105,
		"name": "Serra",
		"basehp": 16,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 4,
		"baseres": 9,
		"hpgrowth": 4,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 4,
		"resgrowth": 7,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 106,
		"name": "Setsuna",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 9,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 9,
		"defgrowth": 4,
		"resgrowth": 4,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 107,
		"name": "Takumi",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 2,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 108,
		"name": "Virion",
		"basehp": 20,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 7,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 1,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 109,
		"name": "Wrys",
		"basehp": 18,
		"baseatk": 5,
		"basespd": 6,
		"basedef": 5,
		"baseres": 10,
		"hpgrowth": 7,
		"atkgrowth": 5,
		"spdgrowth": 4,
		"defgrowth": 4,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 111,
		"name": "Michalis",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 9,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 8,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "axe",
		"movetype": "flying",
		"minrarity": 3
	},
	{
		"hero_id": 112,
		"name": "Lucina (Spring)",
		"basehp": 16,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 5,
		"baseres": 6,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 113,
		"name": "Camilla (Spring)",
		"basehp": 17,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 8,
		"baseres": 4,
		"hpgrowth": 6,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 6,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "flying",
		"minrarity": 5
	},
	{
		"hero_id": 114,
		"name": "Xander (Spring)",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 6,
		"basedef": 9,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 6,
		"defgrowth": 8,
		"resgrowth": 5,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 115,
		"name": "Chrom (Spring)",
		"basehp": 19,
		"baseatk": 9,
		"basespd": 8,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 116,
		"name": "Navarre",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 11,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 117,
		"name": "Alm",
		"basehp": 21,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 4,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 118,
		"name": "Clair",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 5,
		"baseres": 9,
		"hpgrowth": 5,
		"atkgrowth": 5,
		"spdgrowth": 9,
		"defgrowth": 5,
		"resgrowth": 7,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "flying",
		"minrarity": 5
	},
	{
		"hero_id": 119,
		"name": "Lukas",
		"basehp": 19,
		"baseatk": 9,
		"basespd": 5,
		"basedef": 10,
		"baseres": 4,
		"hpgrowth": 8,
		"atkgrowth": 8,
		"spdgrowth": 4,
		"defgrowth": 9,
		"resgrowth": 2,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 120,
		"name": "Faye",
		"basehp": 16,
		"baseatk": 6,
		"basespd": 3,
		"basedef": 4,
		"baseres": 7,
		"hpgrowth": 8,
		"atkgrowth": 7,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 7,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 121,
		"name": "Zephiel",
		"basehp": 25,
		"baseatk": 9,
		"basespd": 3,
		"basedef": 12,
		"baseres": 5,
		"hpgrowth": 10,
		"atkgrowth": 8,
		"spdgrowth": 2,
		"defgrowth": 8,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "sword",
		"movetype": "armored",
		"minrarity": 3
	},
	{
		"hero_id": 123,
		"name": "Ike",
		"basehp": 18,
		"baseatk": 9,
		"basespd": 7,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 124,
		"name": "Mist",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 6,
		"atkgrowth": 5,
		"spdgrowth": 6,
		"defgrowth": 3,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 125,
		"name": "Soren",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 4,
		"baseres": 7,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 2,
		"resgrowth": 6,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 126,
		"name": "Titania",
		"basehp": 18,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 6,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 6,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 6,
		"color": "green",
		"weapontype": "axe",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 127,
		"name": "Xander",
		"basehp": 20,
		"baseatk": 8,
		"basespd": 5,
		"basedef": 9,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 5,
		"defgrowth": 9,
		"resgrowth": 2,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 128,
		"name": "Boey",
		"basehp": 19,
		"baseatk": 7,
		"basespd": 5,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 6,
		"spdgrowth": 6,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "green",
		"weapontype": "greentome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 129,
		"name": "Celica",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 5,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 130,
		"name": "Genny",
		"basehp": 17,
		"baseatk": 9,
		"basespd": 6,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 3,
		"atkgrowth": 8,
		"spdgrowth": 5,
		"defgrowth": 4,
		"resgrowth": 8,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 131,
		"name": "Mae",
		"basehp": 16,
		"baseatk": 10,
		"basespd": 7,
		"basedef": 3,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 2,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 132,
		"name": "Lloyd",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 7,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 133,
		"name": "Caeda (Bride)",
		"basehp": 16,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 4,
		"baseres": 8,
		"hpgrowth": 4,
		"atkgrowth": 6,
		"spdgrowth": 9,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "bluetome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 134,
		"name": "Camus",
		"basehp": 20,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 7,
		"baseres": 4,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 7,
		"resgrowth": 2,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 3
	},
	{
		"hero_id": 135,
		"name": "Charlotte (Bride)",
		"basehp": 20,
		"baseatk": 10,
		"basespd": 8,
		"basedef": 5,
		"baseres": 4,
		"hpgrowth": 8,
		"atkgrowth": 8,
		"spdgrowth": 7,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 136,
		"name": "Cordelia (Bride)",
		"basehp": 17,
		"baseatk": 9,
		"basespd": 9,
		"basedef": 4,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 3,
		"resgrowth": 4,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 137,
		"name": "Lyn (Bride)",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 10,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 6,
		"spdgrowth": 7,
		"defgrowth": 4,
		"resgrowth": 5,
		"color": "gray",
		"weapontype": "staff",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 138,
		"name": "Marth (Masked)",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 10,
		"basedef": 6,
		"baseres": 4,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 4
	},
	{
		"hero_id": 139,
		"name": "Katarina",
		"basehp": 17,
		"baseatk": 6,
		"basespd": 8,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 4,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 1,
		"resgrowth": 7,
		"color": "red",
		"weapontype": "redtome",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 140,
		"name": "Athena",
		"basehp": 17,
		"baseatk": 7,
		"basespd": 10,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 9,
		"defgrowth": 5,
		"resgrowth": 5,
		"color": "red",
		"weapontype": "sword",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 141,
		"name": "Roderick",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 4,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 142,
		"name": "Luke",
		"basehp": 19,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 7,
		"atkgrowth": 8,
		"spdgrowth": 6,
		"defgrowth": 6,
		"resgrowth": 3,
		"color": "red",
		"weapontype": "sword",
		"movetype": "cavalry",
		"minrarity": 5
	},
	{
		"hero_id": 143,
		"name": "Legion",
		"basehp": 20,
		"baseatk": 10,
		"basespd": 9,
		"basedef": 5,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 4,
		"resgrowth": 3,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 3
	},
	{
		"hero_id": 144,
		"name": "Clarisse",
		"basehp": 18,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 5,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 5,
		"resgrowth": 3,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 145,
		"name": "Frederick (Summer)",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 7,
		"basedef": 6,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7,
		"spdgrowth": 7,
		"defgrowth": 6,
		"resgrowth": 2,
		"color": "gray",
		"weapontype": "dagger",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 146,
		"name": "Gaius (Summer)",
		"basehp": 17,
		"baseatk": 8,
		"basespd": 9,
		"basedef": 4,
		"baseres": 6,
		"hpgrowth": 4,
		"atkgrowth": 6,
		"spdgrowth": 9,
		"defgrowth": 3,
		"resgrowth": 6,
		"color": "gray",
		"weapontype": "bow",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 147,
		"name": "Robin(F) (Summer)",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 8,
		"basedef": 6,
		"baseres": 7,
		"hpgrowth": 4,
		"atkgrowth": 7,
		"spdgrowth": 8,
		"defgrowth": 6,
		"resgrowth": 6,
		"color": "blue",
		"weapontype": "lance",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 148,
		"name": "Tiki(A) (Summer)",
		"basehp": 18,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 8,
		"baseres": 7,
		"hpgrowth": 4,
		"atkgrowth": 9,
		"spdgrowth": 7,
		"defgrowth": 7,
		"resgrowth": 4,
		"color": "green",
		"weapontype": "axe",
		"movetype": "infantry",
		"minrarity": 5
	},
	{
		"hero_id": 149, 
		"name": "Tobin", 
		"basehp": 18,
		"baseatk": 7,
		"basespd": 5,
		"basedef": 5,
		"baseres": 4,
		"hpgrowth": 9,
		"atkgrowth": 7, 
		"spdgrowth": 6, 
		"defgrowth": 9, 
		"resgrowth": 6, 
		"color": "red", 
		"weapontype": "sword", 
		"movetype": "infantry", 
		"minrarity": 4
	},
	{
		"hero_id": 150,
		"name": "Delthea", 
		"basehp": 16,
		"baseatk": 10,
		"basespd": 8,
		"basedef": 3,
		"baseres": 7,
		"hpgrowth": 4,
		"atkgrowth": 8,
		"spdgrowth": 8,
		"defgrowth": 1,
		"resgrowth": 7, 
		"color": "blue", 
		"weapontype": "bluetome", 
		"movetype": "infantry", 
		"minrarity": 5
	},
	{
		"hero_id": 151,
		"name": "Sonya", 
		"basehp": 17,
		"baseatk": 7,
		"basespd": 7,
		"basedef": 5,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 8, 
		"spdgrowth": 7, 
		"defgrowth": 1, 
		"resgrowth": 7, 
		"color": "green", 
		"weapontype": "greentome", 
		"movetype": "infantry", 
		"minrarity": 5
	},
	{
		"hero_id": 152,
		"name": "Gray", 
		"basehp": 17,
		"baseatk": 7,
		"basespd": 6,
		"basedef": 6,
		"baseres": 3,
		"hpgrowth": 8,
		"atkgrowth": 9, 
		"spdgrowth": 8, 
		"defgrowth": 7, 
		"resgrowth": 5, 
		"color": "red", 
		"weapontype": "sword", 
		"movetype": "infantry", 
		"minrarity": 5
	},
	{
		"hero_id": 153,
		"name": "Leon", 
		"basehp": 17,
		"baseatk": 8,
		"basespd": 6,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 8, 
		"spdgrowth": 7, 
		"defgrowth": 6, 
		"resgrowth": 1, 
		"color": "gray", 
		"weapontype": "bow", 
		"movetype": "infantry", 
		"minrarity": 5
	},
	{
		"hero_id": 154,
		"name": "Saber", 
		"basehp": 18,
		"baseatk": 7,
		"basespd": 9,
		"basedef": 8,
		"baseres": 5,
		"hpgrowth": 6,
		"atkgrowth": 7, 
		"spdgrowth": 7, 
		"defgrowth": 7, 
		"resgrowth": 4, 
		"color": "red", 
		"weapontype": "sword", 
		"movetype": "infantry", 
		"minrarity": 5
	},
	{
		"hero_id": 155,
		"name": "Mathilda", 
		"basehp": 16,
		"baseatk": 7,
		"basespd": 8,
		"basedef": 7,
		"baseres": 8,
		"hpgrowth": 5,
		"atkgrowth": 6, 
		"spdgrowth": 7, 
		"defgrowth": 4, 
		"resgrowth": 8, 
		"color": "blue", 
		"weapontype": "lance", 
		"movetype": "cavalry", 
		"minrarity": 5
	},
	{
		"hero_id": 156,
		"name": "Berkut", 
		"basehp": 19,
		"baseatk": 8,
		"basespd": 5,
		"basedef": 7,
		"baseres": 7,
		"hpgrowth": 7,
		"atkgrowth": 8, 
		"spdgrowth": 4, 
		"defgrowth": 7, 
		"resgrowth": 4, 
		"color": "blue", 
		"weapontype": "lance", 
		"movetype": "cavalry", 
		"minrarity": 3
	}
]

//SKILLS TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Many descriptions are missing because I stopped giving them because I wasn't using them
//Inheritrule can be multiple traits separated by commas
//ex: melee,physical (for Galeforce)
//affectsduel determines whether a skill is shown if "show only skills that affect duel" is selected
window.data.skills = [
	{
		"skill_id": 1,
		"name": "Iron Sword",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 2,
		"name": "Steel Sword",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 3,
		"name": "Silver Sword",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 4,
		"name": "Silver Sword+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 15,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 5,
		"name": "Armorslayer",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 6,
		"name": "Armorslayer+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 7,
		"name": "Brave Sword",
		"slot": "weapon",
		"sp": 200,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 5,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 8,
		"name": "Brave Sword+",
		"slot": "weapon",
		"sp": 300,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 8,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 9,
		"name": "Killing Edge",
		"slot": "weapon",
		"sp": 200,
		"description": "Accelerates special trigger (cooldown count -1)",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 10,
		"name": "Killing Edge+",
		"slot": "weapon",
		"sp": 300,
		"description": "Accelerates special trigger (cooldown count -1)",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 11,
		"name": "Ruby Sword",
		"slot": "weapon",
		"sp": 200,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 12,
		"name": "Ruby Sword+",
		"slot": "weapon",
		"sp": 300,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 13,
		"name": "Wo Dao",
		"slot": "weapon",
		"sp": 200,
		"description": "Grants +10 damage when special triggers",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 14,
		"name": "Wo Dao+",
		"slot": "weapon",
		"sp": 300,
		"description": "Grants +10 damage when special triggers",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 1
	},
	{
		"skill_id": 15,
		"name": "Binding Blade",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants Def/Res+2 when this unit is attacked",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 16,
		"name": "Durandal",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants Atk+4 during combat if unit initiates attack",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 17,
		"name": "Falchion",
		"slot": "weapon",
		"sp": 400,
		"description": "Effective against dragons. At the start of every third turn, unit recovers 10HP",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 18,
		"name": "Folkvangr",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants Atk+5 at start of turn if unit's HP<50%",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 19,
		"name": "Mystletainn",
		"slot": "weapon",
		"sp": 400,
		"description": "Accelerates special trigger (cooldown count -1)",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 20,
		"name": "Raijinto",
		"slot": "weapon",
		"sp": 400,
		"description": "Enables unit to counterattack regardless of distance to attacker",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 21,
		"name": "Sieglinde",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants adjacent allies Atk+3 through their next actions at start of each turn",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 22,
		"name": "Sol Katti",
		"slot": "weapon",
		"sp": 400,
		"description": "If wielder initiates attack at HP <=50% any follow-up occurs immediately",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 23,
		"name": "Tyrfing",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants Def+4 in battle if unit's HP<=50%",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 24,
		"name": "Yato",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants Spd+4 during combat if unit initiates attack",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 25,
		"name": "Fire",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 26,
		"name": "Elfire",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 27,
		"name": "Bolganone",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 28,
		"name": "Bolganone+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 29,
		"name": "Flux",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 30,
		"name": "Ruin",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 31,
		"name": "Fenrir",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 32,
		"name": "Fenrir+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 33,
		"name": "Raudrblade",
		"slot": "weapon",
		"sp": 200,
		"description": "Slows special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 34,
		"name": "Raudrblade+",
		"slot": "weapon",
		"sp": 300,
		"description": "Slows special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 35,
		"name": "Raudrraven",
		"slot": "weapon",
		"sp": 200,
		"description": "Grants weapon advantage vs. colorless foes",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 36,
		"name": "Raudrraven+",
		"slot": "weapon",
		"sp": 300,
		"description": "Grants weapon advantage vs. colorless foes",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 37,
		"name": "Raudrwolf",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against cavalry",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 38,
		"name": "Raudrwolf+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against cavalry",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 39,
		"name": "Brynhildr",
		"slot": "weapon",
		"sp": 400,
		"description": "If user initiates attack, foe cannot move more than 1 space next turn",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 40,
		"name": "Cymbeline",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants adjacent allies Atk+4 through their next action after any combat this unit initiates",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 41,
		"name": "Iron Axe",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 42,
		"name": "Steel Axe",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 43,
		"name": "Silver Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 44,
		"name": "Silver Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 15,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 45,
		"name": "Brave Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 5,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 46,
		"name": "Brave Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 8,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 47,
		"name": "Emerald Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 48,
		"name": "Emerald Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 49,
		"name": "Hammer",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 50,
		"name": "Hammer+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 51,
		"name": "Killer Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 52,
		"name": "Killer Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 53,
		"name": "Armads",
		"slot": "weapon",
		"sp": 400,
		"description": "Unit makes a guaranteed follow-up attack when attacked at HP > 80%",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 54,
		"name": "Hauteclere",
		"slot": "weapon",
		"sp": 400,
		"description": "Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 55,
		"name": "Noatun",
		"slot": "weapon",
		"sp": 400,
		"description": "Unit may move adjacent to any ally when HP <= 40%",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 56,
		"name": "Wind",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 57,
		"name": "Elwind",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 58,
		"name": "Rexcalibur",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 59,
		"name": "Gronnblade",
		"slot": "weapon",
		"sp": 200,
		"description": "Slows Special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 60,
		"name": "Gronnblade+",
		"slot": "weapon",
		"sp": 300,
		"description": "Slows Special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 61,
		"name": "Gronnraven",
		"slot": "weapon",
		"sp": 200,
		"description": "Grants advantage vs Colorless",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 62,
		"name": "Gronnraven+",
		"slot": "weapon",
		"sp": 300,
		"description": "Grants advantage vs Colorless",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 63,
		"name": "Gronnwolf",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against Cavalry (Atk+50%)",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 64,
		"name": "Gronnwolf+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against Cavalry (Atk+50%)",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 65,
		"name": "Excalibur",
		"slot": "weapon",
		"sp": 400,
		"description": "Effective against Flying units",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 66,
		"name": "Naga",
		"slot": "weapon",
		"sp": 400,
		"description": "Effective against Dragons (Atk+50%). Grants Def/Res+2 when this unit is attacked",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 67,
		"name": "Iron Lance",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 68,
		"name": "Steel Lance",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 69,
		"name": "Silver Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 70,
		"name": "Silver Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 15,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 71,
		"name": "Brave Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 5,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 72,
		"name": "Brave Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 8,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 73,
		"name": "Heavy Spear",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 74,
		"name": "Heavy Spear+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against armored units",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 75,
		"name": "Killer Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 76,
		"name": "Killer Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 77,
		"name": "Sapphire Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 78,
		"name": "Sapphire Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 79,
		"name": "Fensalir",
		"slot": "weapon",
		"sp": 400,
		"description": "Inflicts Atk-4 on foes within 2 spaces through their next actions at the start of each turn",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 80,
		"name": "Siegmund",
		"slot": "weapon",
		"sp": 400,
		"description": "Grants adjacent allies _3 attack through their next actions at start of each turn",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 81,
		"name": "Thunder",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 82,
		"name": "Elthunder",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 83,
		"name": "Thoron",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 84,
		"name": "Blarblade",
		"slot": "weapon",
		"sp": 200,
		"description": "Slows Special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 85,
		"name": "Blarblade+",
		"slot": "weapon",
		"sp": 300,
		"description": "Slows Special trigger (cooldown count+1). Adds total bonus on unit to damage dealt",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 86,
		"name": "Blarwolf",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against cavalry",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 87,
		"name": "Blarwolf+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against cavalry",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 88,
		"name": "Blarraven",
		"slot": "weapon",
		"sp": 200,
		"description": "Grants weapon advantage vs colorless foes",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 89,
		"name": "Blarraven+",
		"slot": "weapon",
		"sp": 300,
		"description": "Grants weapon advantage vs colorless foes",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 90,
		"name": "Dire Thunder",
		"slot": "weapon",
		"sp": 400,
		"description": "Spd-5. Attack twice when initiating combat",
		"hp": 0,
		"atk": 9,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 91,
		"name": "Aura",
		"slot": "weapon",
		"sp": 400,
		"description": "Restores 5 HP to adjacent allies after any combat this unit initiates",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 92,
		"name": "Fire Breath",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 93,
		"name": "Fire Breath+",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 94,
		"name": "Flametongue",
		"slot": "weapon",
		"sp": 200,
		"description": "-",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 95,
		"name": "Flametongue+",
		"slot": "weapon",
		"sp": 300,
		"description": "-",
		"hp": 0,
		"atk": 15,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 96,
		"name": "Lightning Breath",
		"slot": "weapon",
		"sp": 200,
		"description": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count +1)",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 97,
		"name": "Lightning Breath+",
		"slot": "weapon",
		"sp": 300,
		"description": "Enables counterattack regardless of attacker's range. Slows Special trigger (cooldown count +1)",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 98,
		"name": "Light Breath",
		"slot": "weapon",
		"sp": 200,
		"description": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 99,
		"name": "Light Breath+",
		"slot": "weapon",
		"sp": 300,
		"description": "Grants adjacent allies Def/Res+4 through their next actions after any combat this unit initiates",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 100,
		"name": "Dark Breath",
		"slot": "weapon",
		"sp": 200,
		"description": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 101,
		"name": "Dark Breath+",
		"slot": "weapon",
		"sp": 300,
		"description": "After this unit attacks, foes within 2 spaces of target suffer Atk/Spd-5 through their next actions",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 1
	},
	{
		"skill_id": 102,
		"name": "Iron Bow",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 103,
		"name": "Steel Bow",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 104,
		"name": "Silver Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against flying units",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 105,
		"name": "Silver Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against flying units",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 106,
		"name": "Assassin's Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against fliers. If target has a dagger, it can't make a follow-up attack and this unit will",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 107,
		"name": "Assassin's Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against fliers. If target has a dagger, it can't make a follow-up attack and this unit will",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 108,
		"name": "Brave Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "Spd-5. Effective against flying units. Attacks twice if unit initiates combat",
		"hp": 0,
		"atk": 4,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 109,
		"name": "Brave Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "Spd-5. Effective against flying units. Attacks twice if unit initiates combat",
		"hp": 0,
		"atk": 7,
		"spd": -5,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 110,
		"name": "Killer Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against flying units. Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 5,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 111,
		"name": "Killer Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against flying units. Accelerates Special trigger (cooldown count-1)",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 112,
		"name": "Fujin Yumi",
		"slot": "weapon",
		"sp": 400,
		"description": "Effective against flying units. Unit can pass through foes if own HP>=50%",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 113,
		"name": "Parthia",
		"slot": "weapon",
		"sp": 400,
		"description": "Effective against flying units. Grants Res+4 during combat if initiating an attack",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 114,
		"name": "Iron Dagger",
		"slot": "weapon",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 3,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 115,
		"name": "Steel Dagger",
		"slot": "weapon",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 5,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 116,
		"name": "Silver Dagger",
		"slot": "weapon",
		"sp": 200,
		"description": "After combat, inflicts Def/Res-7 on foe through its next action",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 117,
		"name": "Silver Dagger+",
		"slot": "weapon",
		"sp": 300,
		"description": "After combat, inflicts Def/Res-7 on foe through its next action",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 118,
		"name": "Poison Dagger",
		"slot": "weapon",
		"sp": 200,
		"description": "Effective against infantry units. Infantry foes suffer Def/Res-6 after combat through their next actions",
		"hp": 0,
		"atk": 2,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 119,
		"name": "Poison Dagger+",
		"slot": "weapon",
		"sp": 300,
		"description": "Effective against infantry units. Infantry foes suffer Def/Res-6 after combat through their next actions",
		"hp": 0,
		"atk": 5,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 120,
		"name": "Rogue Dagger",
		"slot": "weapon",
		"sp": 200,
		"description": "After combat, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 121,
		"name": "Rogue Dagger+",
		"slot": "weapon",
		"sp": 300,
		"description": "After combat, inflicts Def/Res-5 on foe through its next action. Grants unit Def/Res+5 for 1 turn",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 122,
		"name": "Smoke Dagger",
		"slot": "weapon",
		"sp": 200,
		"description": "After combat, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 123,
		"name": "Smoke Dagger+",
		"slot": "weapon",
		"sp": 300,
		"description": "After combat, inflicts Def/Res-6 on foes within 2 spaces of target through their next actions",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 124,
		"name": "Deathly Dagger",
		"slot": "weapon",
		"sp": 400,
		"description": "After combat, inflicts Def/Res-7 on foe through its next action. If unit initiated combat, 7 damage to foe after battle",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 125,
		"name": "Assault",
		"slot": "weapon",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 126,
		"name": "Absorb",
		"slot": "weapon",
		"sp": 150,
		"description": "Recovers 50% of damage dealt",
		"hp": 0,
		"atk": 4,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 127,
		"name": "Fear",
		"slot": "weapon",
		"sp": 150,
		"description": "Inflicts Atk - 6",
		"hp": 0,
		"atk": 5,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 128,
		"name": "Gravity",
		"slot": "weapon",
		"sp": 150,
		"description": "After any combat, prevents foe from moving more than 1 space through its next action",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 129,
		"name": "Pain",
		"slot": "weapon",
		"sp": 150,
		"description": "Inflicts 10 damage on Foe after combat",
		"hp": 0,
		"atk": 3,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 130,
		"name": "Panic",
		"slot": "weapon",
		"sp": 150,
		"description": "After combat, bonuses on targeted foe become penalties through its next action",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 131,
		"name": "Slow",
		"slot": "weapon",
		"sp": 150,
		"description": "After any combat, inflicts Spd-6 on foe through its next action",
		"hp": 0,
		"atk": 5,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 132,
		"name": "Rally Attack",
		"slot": "assist",
		"sp": 150,
		"description": "Grants Atk+4 to an adjacent ally until the end of the turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 133,
		"name": "Rally Speed",
		"slot": "assist",
		"sp": 150,
		"description": "Grant Spd+4 to an adjacent ally until the end of the turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 134,
		"name": "Rally Defense",
		"slot": "assist",
		"sp": 150,
		"description": "Grants Def+4 to an adjacent ally until end of turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 135,
		"name": "Rally Resistance",
		"slot": "assist",
		"sp": 150,
		"description": "Grants Res +4 to an adjacent ally until end of turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 136,
		"name": "Harsh Command",
		"slot": "assist",
		"sp": 150,
		"description": "Converts Penalties on Target into Bonuses",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 137,
		"name": "Ardent Sacrifice",
		"slot": "assist",
		"sp": 150,
		"description": "Heals adjacent ally 10 HP. Unit loses 10HP (but cannot reach 0 this way)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 138,
		"name": "Reciprocal Aid",
		"slot": "assist",
		"sp": 150,
		"description": "Swap Hp with adjacent ally (neither unit can go above their max HP)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 139,
		"name": "Draw Back",
		"slot": "assist",
		"sp": 150,
		"description": "Unit moves 1 space away from target ally, who moves to unit's former position",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 140,
		"name": "Pivot",
		"slot": "assist",
		"sp": 150,
		"description": "Unit moves to opposite side of adjacent ally",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 141,
		"name": "Reposition",
		"slot": "assist",
		"sp": 150,
		"description": "Moves adjacent ally to opposite side of unit",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 142,
		"name": "Shove",
		"slot": "assist",
		"sp": 150,
		"description": "Push adjacent ally 1 space farther away",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 143,
		"name": "Smite",
		"slot": "assist",
		"sp": 150,
		"description": "Push adjacent ally 2 space farther away",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 144,
		"name": "Swap",
		"slot": "assist",
		"sp": 150,
		"description": "Swap places with an adjacent ally",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 145,
		"name": "Heal",
		"slot": "assist",
		"sp": 0,
		"description": "Restore 5 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 146,
		"name": "Mend",
		"slot": "assist",
		"sp": 100,
		"description": "Restores 10 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 147,
		"name": "Reconcile",
		"slot": "assist",
		"sp": 100,
		"description": "Restores 7 HP to target unit and this unit",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 148,
		"name": "Recover",
		"slot": "assist",
		"sp": 200,
		"description": "Restores 15 HP. Slows Special trigger (cooldown count+1)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 149,
		"name": "Physic",
		"slot": "assist",
		"sp": 200,
		"description": "Restores 8 HP to target and all allies within 2 spaces of target",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 150,
		"name": "Martyr",
		"slot": "assist",
		"sp": 200,
		"description": "Restores 7 + (caster's suffered damage) HP, Caster heals half of their suffered damage, increases caster's special cooldown by 1",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 151,
		"name": "Rehabilitate",
		"slot": "assist",
		"sp": 200,
		"description": "Restores 7 HP or more the further below 50% the target's Hp is. Slows Special trigger (cooldown count+1)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 152,
		"name": "Dance",
		"slot": "assist",
		"sp": 150,
		"description": "Enables target to take another action. Cannot be used on units with Sing or Dance",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 0
	},
	{
		"skill_id": 153,
		"name": "Sing",
		"slot": "assist",
		"sp": 150,
		"description": "Enables target to take another action. Cannot be used on units with Sing or Dance",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 0
	},
	{
		"skill_id": 154,
		"name": "Night Sky",
		"slot": "special",
		"sp": 100,
		"description": "Grants +50% to damage dealt",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 155,
		"name": "Dragon Gaze",
		"slot": "special",
		"sp": 100,
		"description": "Grants +30% to Atk",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 156,
		"name": "Glowing Ember",
		"slot": "special",
		"sp": 100,
		"description": "Boosts damage dealt by 50% of unit's Def",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 157,
		"name": "Daylight",
		"slot": "special",
		"sp": 100,
		"description": "Heals 30% of damage dealt",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 158,
		"name": "New Moon",
		"slot": "special",
		"sp": 100,
		"description": "Resolve combat as if foe suffered Def/Res -30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 159,
		"name": "Chilling Wind",
		"slot": "special",
		"sp": 100,
		"description": "Boosts damage dealt by 50% of unit's Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 160,
		"name": "Retribution",
		"slot": "special",
		"sp": 100,
		"description": "Grants bonus damage equal to 30% of damage suffered",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 161,
		"name": "Glimmer",
		"slot": "special",
		"sp": 200,
		"description": "Deal +50% Damage",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 162,
		"name": "Astra",
		"slot": "special",
		"sp": 200,
		"description": "Deal +150% Damage",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 163,
		"name": "Draconic Aura",
		"slot": "special",
		"sp": 200,
		"description": "Grants +30% to Atk",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 164,
		"name": "Dragon Fang",
		"slot": "special",
		"sp": 200,
		"description": "Grant +50% to Atk",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 165,
		"name": "Bonfire",
		"slot": "special",
		"sp": 200,
		"description": "Boosts damage dealth by 50% of unit's Def.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 166,
		"name": "Ignis",
		"slot": "special",
		"sp": 200,
		"description": "Boosts damage dealt by 80% of the unit's Def.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 167,
		"name": "Noontime",
		"slot": "special",
		"sp": 200,
		"description": "Heals 30% of damage dealt",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 168,
		"name": "Sol",
		"slot": "special",
		"sp": 200,
		"description": "Heal 50% of damage dealt",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 169,
		"name": "Moonbow",
		"slot": "special",
		"sp": 200,
		"description": "Resolve combat as if foe suffered Def/Res-30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 2,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 170,
		"name": "Luna",
		"slot": "special",
		"sp": 200,
		"description": "Resolve combat as if foe suffered Def/Res-50%.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 171,
		"name": "Iceberg",
		"slot": "special",
		"sp": 200,
		"description": "Boosts damage dealt by 50% of the targets Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 172,
		"name": "Glacies",
		"slot": "special",
		"sp": 200,
		"description": "Boosts damage dealt by 80% of the unit's Res.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 4,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 173,
		"name": "Reprisal",
		"slot": "special",
		"sp": 200,
		"description": "Grants Bonus damage equal to 30% of suffered damage",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 2,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 174,
		"name": "Vengeance",
		"slot": "special",
		"sp": 200,
		"description": "Grants Bonus damage equal to 50% of suffered damage",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 175,
		"name": "Galeforce",
		"slot": "special",
		"sp": 500,
		"description": "If this unit initiates an attack, it can take another action after combat. (Once per turn only).",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 176,
		"name": "Aether",
		"slot": "special",
		"sp": 500,
		"description": "Resolve combat as if foe suffered Def/Res-50%. Unit recovers HP=half damage dealt.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 177,
		"name": "Rising Thunder",
		"slot": "special",
		"sp": 150,
		"description": "Before combat unit initiates, foes in an area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 178,
		"name": "Rising Wind",
		"slot": "special",
		"sp": 150,
		"description": "Before combat unit initiates, foes in an area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 179,
		"name": "Rising Light",
		"slot": "special",
		"sp": 150,
		"description": "Before combat unit initiates, foes in an area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 180,
		"name": "Rising Flame",
		"slot": "special",
		"sp": 150,
		"description": "Before combat unit initiates, foes in an area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 181,
		"name": "Growing Thunder",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in wide area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 182,
		"name": "Blazing Thunder",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in area near target take damage=1.5x unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 183,
		"name": "Growing Wind",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in wide area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 184,
		"name": "Blazing Wind",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in area near target take damage=1.5x unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 185,
		"name": "Growing Light",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in a wide area near target take damage equal to unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 186,
		"name": "Blazing Light",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit intiates, foes in area near target take damage equal to 1.5x unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 187,
		"name": "Growing Flame",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in wide area near target take damage=unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 188,
		"name": "Blazing Flame",
		"slot": "special",
		"sp": 300,
		"description": "Before combat unit initiates, foes in area near target take damage=1.5x unit's Atk minus foe's Def or Res",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 189,
		"name": "Buckler",
		"slot": "special",
		"sp": 100,
		"description": "Reduces damage inflicted by attacks from adjacent foes by 30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 190,
		"name": "Holy Vestments",
		"slot": "special",
		"sp": 100,
		"description": "Reduces Damage inflicted by attacks from foes 2 spaces away by 30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 191,
		"name": "Escutcheon",
		"slot": "special",
		"sp": 200,
		"description": "Reduces damage inflicted by attacks from adjacent foes by 30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 2,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 192,
		"name": "Pavise",
		"slot": "special",
		"sp": 200,
		"description": "Reduce damage inflicted by attacks from adjacent foes by 50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 193,
		"name": "Sacred Cowl",
		"slot": "special",
		"sp": 200,
		"description": "Reduces Damage inflicted by attacks from foes 2 spaces away by 30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 2,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 194,
		"name": "Aegis",
		"slot": "special",
		"sp": 200,
		"description": "Reduces damage inflicted by attacks from foes 2 spaces away by 50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 3,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 195,
		"name": "Imbue",
		"slot": "special",
		"sp": 50,
		"description": "When healing an ally with a staff, increases recovered HP by 10.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 1,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 196,
		"name": "Heavenly Light",
		"slot": "special",
		"sp": 150,
		"description": "When healing an ally with a staff, all other allies recover 10 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 2,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 197,
		"name": "Kindled-Fire Balm",
		"slot": "special",
		"sp": 150,
		"description": "When healing an ally with a staff, grants all allies Atk+4 for 1 turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 1,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 198,
		"name": "Swift-Winds Balm",
		"slot": "special",
		"sp": 150,
		"description": "When healing an ally w/ staff, grants all allies +4 Spd for 1 turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 1,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 199,
		"name": "Solid-Earth Balm",
		"slot": "special",
		"sp": 150,
		"description": "When healing an aly w/ staff, grants all allies +4 Def for 1 turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 1,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 200,
		"name": "Still-Water Balm",
		"slot": "special",
		"sp": 150,
		"description": "When healing an ally with a staff, grants all allies Res+4 for 1 turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 1,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 201,
		"name": "Miracle",
		"slot": "special",
		"sp": 200,
		"description": "If HP>1, survive a lethal attack at 1HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 5,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 202,
		"name": "HP 3",
		"slot": "a",
		"sp": 30,
		"description": "Grants +3 max HP",
		"hp": 3,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 203,
		"name": "HP 4",
		"slot": "a",
		"sp": 60,
		"description": "Grants +4 max HP",
		"hp": 4,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 204,
		"name": "HP 5",
		"slot": "a",
		"sp": 120,
		"description": "Grants +5 max HP",
		"hp": 5,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 205,
		"name": "Attack 1",
		"slot": "a",
		"sp": 30,
		"description": "Grants Atk +1",
		"hp": 0,
		"atk": 1,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 206,
		"name": "Attack 2",
		"slot": "a",
		"sp": 60,
		"description": "Grants Atk +2",
		"hp": 0,
		"atk": 2,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 207,
		"name": "Attack 3",
		"slot": "a",
		"sp": 120,
		"description": "Grants Atk +3",
		"hp": 0,
		"atk": 3,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 208,
		"name": "Speed 1",
		"slot": "a",
		"sp": 30,
		"description": "Grants Spd+1",
		"hp": 0,
		"atk": 0,
		"spd": 1,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 209,
		"name": "Speed 2",
		"slot": "a",
		"sp": 60,
		"description": "Grants Spd+2",
		"hp": 0,
		"atk": 0,
		"spd": 2,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 210,
		"name": "Speed 3",
		"slot": "a",
		"sp": 120,
		"description": "Grants Spd+3",
		"hp": 0,
		"atk": 0,
		"spd": 3,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 211,
		"name": "Defense 1",
		"slot": "a",
		"sp": 30,
		"description": "Grants Def+1",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 1,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 212,
		"name": "Defense 2",
		"slot": "a",
		"sp": 60,
		"description": "Grants Def+2",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 2,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 213,
		"name": "Defense 3",
		"slot": "a",
		"sp": 120,
		"description": "Grants Def+3",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 3,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 214,
		"name": "Resistance 1",
		"slot": "a",
		"sp": 30,
		"description": "Grants Res +1",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 1,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 215,
		"name": "Resistance 2",
		"slot": "a",
		"sp": 60,
		"description": "Grants Res +2",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 2,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 216,
		"name": "Resistance 3",
		"slot": "a",
		"sp": 120,
		"description": "Grants Res +3",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 3,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 217,
		"name": "Fury 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Atk/Spd/Def/Res+1. Take 2 damage after combat.",
		"hp": 0,
		"atk": 1,
		"spd": 1,
		"def": 1,
		"res": 1,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 218,
		"name": "Fury 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Atk/Spd/Def/Res+2. Take 4 damage after combat.",
		"hp": 0,
		"atk": 2,
		"spd": 2,
		"def": 2,
		"res": 2,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 219,
		"name": "Fury 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Atk/Spd/Def/Res+3. Take 6 damage after combat.",
		"hp": 0,
		"atk": 3,
		"spd": 3,
		"def": 3,
		"res": 3,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 220,
		"name": "Life and Death 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Atk/Spd+3. Inflicts Def/Res-3",
		"hp": 0,
		"atk": 3,
		"spd": 3,
		"def": -3,
		"res": -3,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 221,
		"name": "Life and Death 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Atk/Spd+4. Inflicts Def/Res-4",
		"hp": 0,
		"atk": 4,
		"spd": 4,
		"def": -4,
		"res": -4,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 222,
		"name": "Life and Death 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Atk/Spd+5. Inflicts Def/Res-5",
		"hp": 0,
		"atk": 5,
		"spd": 5,
		"def": -5,
		"res": -5,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 223,
		"name": "Armored Blow 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Def +2 during combat if initiate attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 224,
		"name": "Armored Blow 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Def +4 during combat if initiate attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 225,
		"name": "Armored Blow 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Def +6 during combat if initiate attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 226,
		"name": "Darting Blow 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Spd+2 during combat if unit initiates the attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 227,
		"name": "Darting Blow 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Spd+4 during combat if unit initiates the attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 228,
		"name": "Darting Blow 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Spd+6 during combat if unit initiates the attack",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 229,
		"name": "Death Blow 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Atk+2 if unit initiates combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 230,
		"name": "Death Blow 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Atk+4 if unit initiates combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 231,
		"name": "Death Blow 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Atk+6 if unit initiates combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 232,
		"name": "Warding Blow 1",
		"slot": "a",
		"sp": 50,
		"description": "Grants Res+2 during combat if unit initiates the attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 233,
		"name": "Warding Blow 2",
		"slot": "a",
		"sp": 100,
		"description": "Grants Res+4 during combat if unit initiates the attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 234,
		"name": "Warding Blow 3",
		"slot": "a",
		"sp": 200,
		"description": "Grants Res+6 during combat if unit initiates the attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 235,
		"name": "Defiant Atk 1",
		"slot": "a",
		"sp": 40,
		"description": "Grants Atk+3 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 236,
		"name": "Defiant Atk 2",
		"slot": "a",
		"sp": 80,
		"description": "Grants Atk+5 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 237,
		"name": "Defiant Atk 3",
		"slot": "a",
		"sp": 160,
		"description": "Grants Atk+7 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 238,
		"name": "Defiant Spd 1",
		"slot": "a",
		"sp": 40,
		"description": "Grants Spd+3 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 239,
		"name": "Defiant Spd 2",
		"slot": "a",
		"sp": 80,
		"description": "Grants Spd+5 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 240,
		"name": "Defiant Spd 3",
		"slot": "a",
		"sp": 160,
		"description": "Grants Spd+7 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 241,
		"name": "Defiant Def 1",
		"slot": "a",
		"sp": 40,
		"description": "Grants Def+3 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 242,
		"name": "Defiant Def 2",
		"slot": "a",
		"sp": 80,
		"description": "Grants Def+5 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 243,
		"name": "Defiant Def 3",
		"slot": "a",
		"sp": 160,
		"description": "Grants Def+7 at start of turn if unit's HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 244,
		"name": "Defiant Res 1",
		"slot": "a",
		"sp": 40,
		"description": "Grants Res+3 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 245,
		"name": "Defiant Res 2",
		"slot": "a",
		"sp": 80,
		"description": "Grants Res+5 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 246,
		"name": "Defiant Res 3",
		"slot": "a",
		"sp": 160,
		"description": "Grants Res+7 at start of turn if unit's HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 247,
		"name": "Triangle Adept 1",
		"slot": "a",
		"sp": 50,
		"description": "Gives Atk+10% if weapon-triangle advantage, Atk-10% if disadvantage.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 248,
		"name": "Triangle Adept 2",
		"slot": "a",
		"sp": 100,
		"description": "Gives Atk+15% if weapon-triangle advantage, Atk-15% if disadvantage.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 249,
		"name": "Triangle Adept 3",
		"slot": "a",
		"sp": 200,
		"description": "Gives Atk+20% if weapon-triangle advantage, Atk-20% if disadvantage.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 250,
		"name": "Close Counter",
		"slot": "a",
		"sp": 300,
		"description": "Allows unit to counter attack at all ranges",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "ranged",
		"affectsduel": 1
	},
	{
		"skill_id": 251,
		"name": "Distant Counter",
		"slot": "a",
		"sp": 300,
		"description": "Enables unit to counterattack regardless of distance to attacker.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "melee",
		"affectsduel": 1
	},
	{
		"skill_id": 252,
		"name": "Svalinn Shield",
		"slot": "a",
		"sp": 200,
		"description": "Neutralizes \"effective against\" bonuses.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 1
	},
	{
		"skill_id": 253,
		"name": "Seal Atk 1",
		"slot": "b",
		"sp": 40,
		"description": "After combat, foe suffers Atk-3 through its next action.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 254,
		"name": "Seal Atk 2",
		"slot": "b",
		"sp": 80,
		"description": "After combat, foe suffers Atk-5 through its next action.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 255,
		"name": "Seal Atk 3",
		"slot": "b",
		"sp": 160,
		"description": "After combat, foe suffers Atk-7 through its next action.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 256,
		"name": "Seal Spd 1",
		"slot": "b",
		"sp": 40,
		"description": "After combat, foe suffers Spd-3 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 257,
		"name": "Seal Spd 2",
		"slot": "b",
		"sp": 80,
		"description": "After combat, foe suffers Spd-5 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 258,
		"name": "Seal Spd 3",
		"slot": "b",
		"sp": 160,
		"description": "After combat, foe suffers Spd-7 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 259,
		"name": "Seal Def 1",
		"slot": "b",
		"sp": 40,
		"description": "After combat, foe suffers Def-3 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 260,
		"name": "Seal Def 2",
		"slot": "b",
		"sp": 80,
		"description": "After combat, foe suffers Def-5 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 261,
		"name": "Seal Def 3",
		"slot": "b",
		"sp": 160,
		"description": "After combat, foe suffers Def-7 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 262,
		"name": "Seal Res 1",
		"slot": "b",
		"sp": 40,
		"description": "After combat, foe suffers Res-3 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 263,
		"name": "Seal Res 2",
		"slot": "b",
		"sp": 80,
		"description": "After combat, foe suffers Res-5 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 264,
		"name": "Seal Res 3",
		"slot": "b",
		"sp": 160,
		"description": "After combat, foe suffers Res-7 through its next action",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 265,
		"name": "Escape Route 1",
		"slot": "b",
		"sp": 60,
		"description": "If under 30% HP, can warp to any ally",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 266,
		"name": "Escape Route 2",
		"slot": "b",
		"sp": 120,
		"description": "If under 40% HP, can warp to any ally",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 267,
		"name": "Escape Route 3",
		"slot": "b",
		"sp": 240,
		"description": "If under 50% HP, can warp to any ally",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 268,
		"name": "Wings of Mercy 1",
		"slot": "b",
		"sp": 60,
		"description": "Enables unit to warp adjacent to any ally with HP <=30%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 269,
		"name": "Wings of Mercy 2",
		"slot": "b",
		"sp": 120,
		"description": "Enables unit to warp adjacent to any ally with HP <=40%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 270,
		"name": "Wings of Mercy 3",
		"slot": "b",
		"sp": 240,
		"description": "Enables unit to warp adjacent to any ally with HP <=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 271,
		"name": "Pass 1",
		"slot": "b",
		"sp": 50,
		"description": "Unit can pass through foes if its own HP>=75%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 272,
		"name": "Pass 2",
		"slot": "b",
		"sp": 100,
		"description": "Unit can pass through foes if its own HP>=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 273,
		"name": "Pass 3",
		"slot": "b",
		"sp": 200,
		"description": "Unit can pass through foes if its own HP>=25%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 274,
		"name": "Obstruct 1",
		"slot": "b",
		"sp": 50,
		"description": "Prevents foes from moving through adjacent spaces while this unit's HP >=90% (No effect on foes with a Pass skill.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 275,
		"name": "Obstruct 2",
		"slot": "b",
		"sp": 100,
		"description": "Prevents foes from moving through adjacent spaces while this unit's HP >=70% (No effect on foes with a Pass skill.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 276,
		"name": "Obstruct 3",
		"slot": "b",
		"sp": 200,
		"description": "Prevents foes from moving through adjacent spaces while this unit's HP >=50% (No effect on foes with a Pass skill.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 277,
		"name": "Wary Fighter 1",
		"slot": "b",
		"sp": 60,
		"description": "Prevents follow-up attacks in combat from unit and foes if unit's HP>=90%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 1
	},
	{
		"skill_id": 278,
		"name": "Wary Fighter 2",
		"slot": "b",
		"sp": 120,
		"description": "Prevents follow-up attacks in combat from unit and foes if unit's HP>=70%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 1
	},
	{
		"skill_id": 279,
		"name": "Wary Fighter 3",
		"slot": "b",
		"sp": 240,
		"description": "Prevents follow-up attacks in combat from unit and foes if unit's HP>=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 1
	},
	{
		"skill_id": 280,
		"name": "Vantage 1",
		"slot": "b",
		"sp": 50,
		"description": "Unit Counterattacks first when attacked at HP<=25%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 281,
		"name": "Vantage 2",
		"slot": "b",
		"sp": 100,
		"description": "Unit Counterattacks first when attacked at HP<=50%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 282,
		"name": "Vantage 3",
		"slot": "b",
		"sp": 200,
		"description": "Unit Counterattacks first when attacked at HP<=75%",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 283,
		"name": "Quick Riposte 1",
		"slot": "b",
		"sp": 60,
		"description": "Unit automatically makes a follow-up attack if attacked at >90% HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 284,
		"name": "Quick Riposte 2",
		"slot": "b",
		"sp": 120,
		"description": "Unit automatically makes a follow-up attack if attacked at >80% HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 285,
		"name": "Quick Riposte 3",
		"slot": "b",
		"sp": 240,
		"description": "Unit automatically makes a follow-up attack if attacked at >70% HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 286,
		"name": "Desperation 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit initiates combat with HP<=25%, follow up attacks occur immediately after unit's attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 287,
		"name": "Desperation 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit initiates combat with HP<=50%, follow up attacks occur immediately after unit's attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 288,
		"name": "Desperation 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit initiates combat with HP<=75%, follow up attacks occur immediately after unit's attack.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 289,
		"name": "Brash Assault 1",
		"slot": "b",
		"sp": 50,
		"description": "Unit automatically makes a follow-up attack when at HP<=30% and attacking a foe that can counter.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 290,
		"name": "Brash Assault 2",
		"slot": "b",
		"sp": 100,
		"description": "Unit automatically makes a follow-up attack when at HP<=40% and attacking a foe that can counter.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 291,
		"name": "Brash Assault 3",
		"slot": "b",
		"sp": 200,
		"description": "Unit automatically makes a follow-up attack when at HP<=50% and attacking a foe that can counter.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 292,
		"name": "Poison Strike 1",
		"slot": "b",
		"sp": 60,
		"description": "Inflicts 4 damage to foe after any combat this unit initiates",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 293,
		"name": "Poison Strike 2",
		"slot": "b",
		"sp": 120,
		"description": "Inflicts 7 damage to foe after any combat this unit initiates",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 294,
		"name": "Poison Strike 3",
		"slot": "b",
		"sp": 240,
		"description": "Inflicts 10 damage to foe after any combat this unit initiates",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 295,
		"name": "Renewal 1",
		"slot": "b",
		"sp": 60,
		"description": "At the start of every 4th turn, restores 10 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 296,
		"name": "Renewal 2",
		"slot": "b",
		"sp": 120,
		"description": "At the start of every 3rd turn, restores 10 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 297,
		"name": "Renewal 3",
		"slot": "b",
		"sp": 240,
		"description": "At the start of every other turn, restores 10 HP",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 298,
		"name": "Live to Serve 1",
		"slot": "b",
		"sp": 40,
		"description": "When healing allies with a staff, unit also recovers 50% of the amount healed",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 299,
		"name": "Live to Serve 2",
		"slot": "b",
		"sp": 80,
		"description": "When healing allies with a staff, unit also recovers 75% of the amount healed",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 300,
		"name": "Live to Serve 3",
		"slot": "b",
		"sp": 160,
		"description": "When healing allies with a staff, unit also recovers the same amount.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 0
	},
	{
		"skill_id": 301,
		"name": "Swordbreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If >90% HP and in combat against a sword user, unit will double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 302,
		"name": "Swordbreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If >70% HP and in combat against a sword user, unit will double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 303,
		"name": "Swordbreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If >50% HP and in combat against a sword user, unit will double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 304,
		"name": "Axebreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If >90% HP and in combat against an axe user, unit wil double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 305,
		"name": "Axebreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If >70% HP and in combat against an axe user, unit wil double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 306,
		"name": "Axebreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If >50% HP and in combat against an axe user, unit wil double attack and foe cannot",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 307,
		"name": "Lancebreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a lance user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 308,
		"name": "Lancebreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a lance user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 309,
		"name": "Lancebreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a lance user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 310,
		"name": "B Tomebreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a blue tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 311,
		"name": "B Tomebreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a blue tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 312,
		"name": "B Tomebreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a blue tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonred",
		"affectsduel": 1
	},
	{
		"skill_id": 313,
		"name": "G Tomebreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a green tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 314,
		"name": "G Tomebreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a green tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 315,
		"name": "G Tomebreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a green tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonblue",
		"affectsduel": 1
	},
	{
		"skill_id": 316,
		"name": "R Tomebreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a red tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 317,
		"name": "R Tomebreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a red tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 318,
		"name": "R Tomebreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a red tome user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nongreen",
		"affectsduel": 1
	},
	{
		"skill_id": 319,
		"name": "Bowbreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a bow user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonflying",
		"affectsduel": 1
	},
	{
		"skill_id": 320,
		"name": "Bowbreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a bow user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonflying",
		"affectsduel": 1
	},
	{
		"skill_id": 321,
		"name": "Bowbreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a bow user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonflying",
		"affectsduel": 1
	},
	{
		"skill_id": 322,
		"name": "Daggerbreaker 1",
		"slot": "b",
		"sp": 50,
		"description": "If unit's HP >=90% in combat against a dagger user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 323,
		"name": "Daggerbreaker 2",
		"slot": "b",
		"sp": 100,
		"description": "If unit's HP >=70% in combat against a dagger user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 324,
		"name": "Daggerbreaker 3",
		"slot": "b",
		"sp": 200,
		"description": "If unit's HP >=50% in combat against a dagger user, unit makes a follow up attack and foe cannot.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 325,
		"name": "Lunge",
		"slot": "b",
		"sp": 150,
		"description": "If unit initiates attack, after combat, unit and targeted foe swap places.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "melee",
		"affectsduel": 0
	},
	{
		"skill_id": 326,
		"name": "Knock Back",
		"slot": "b",
		"sp": 150,
		"description": "If unit initates, foe is moved back 1 space after combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "melee",
		"affectsduel": 0
	},
	{
		"skill_id": 327,
		"name": "Drag Back",
		"slot": "b",
		"sp": 150,
		"description": "If unit initiates attack, the unit moves 1 space away after combat. Foe moves into unit's previous space.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "melee",
		"affectsduel": 0
	},
	{
		"skill_id": 328,
		"name": "Hone Atk 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Atk+2 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 329,
		"name": "Hone Atk 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Atk+3 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 330,
		"name": "Hone Atk 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Atk+4 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 331,
		"name": "Hone Spd 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Spd+2 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 332,
		"name": "Hone Spd 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Spd+3 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 333,
		"name": "Hone Spd 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Spd+4 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 334,
		"name": "Fortify Def 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Def+2 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 335,
		"name": "Fortify Def 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Def+3 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 336,
		"name": "Fortify Def 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Def+4 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 337,
		"name": "Fortify Res 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Res+2 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 338,
		"name": "Fortify Res 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Res+3 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 339,
		"name": "Fortify Res 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Res+4 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 340,
		"name": "Spur Atk 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Atk+2 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 341,
		"name": "Spur Atk 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Atk+3 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 342,
		"name": "Spur Atk 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Atk+4 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 343,
		"name": "Spur Spd 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Spd+2 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 344,
		"name": "Spur Spd 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Spd+3 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 345,
		"name": "Spur Spd 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Spd+4 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 346,
		"name": "Spur Def 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Def+2 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 347,
		"name": "Spur Def 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Def+3 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 348,
		"name": "Spur Def 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Def+4 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 349,
		"name": "Spur Res 1",
		"slot": "c",
		"sp": 50,
		"description": "Grants adjacent allies Res+2 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 350,
		"name": "Spur Res 2",
		"slot": "c",
		"sp": 100,
		"description": "Grants adjacent allies Res+3 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 351,
		"name": "Spur Res 3",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent allies Res+4 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 352,
		"name": "Threaten Atk 1",
		"slot": "c",
		"sp": 50,
		"description": "Inflicts Atk-3 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 353,
		"name": "Threaten Atk 2",
		"slot": "c",
		"sp": 100,
		"description": "Inflicts Atk-4 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 354,
		"name": "Threaten Atk 3",
		"slot": "c",
		"sp": 200,
		"description": "Inflicts Atk-5 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 355,
		"name": "Threaten Spd 1",
		"slot": "c",
		"sp": 50,
		"description": "Inflicts Spd-3 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 356,
		"name": "Threaten Spd 2",
		"slot": "c",
		"sp": 100,
		"description": "Inflicts Spd-4 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 357,
		"name": "Threaten Spd 3",
		"slot": "c",
		"sp": 200,
		"description": "Inflicts Spd-5 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 358,
		"name": "Threaten Def 1",
		"slot": "c",
		"sp": 50,
		"description": "Inflicts Def-3 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 359,
		"name": "Threaten Def 2",
		"slot": "c",
		"sp": 100,
		"description": "Inflicts Def-4 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 360,
		"name": "Threaten Def 3",
		"slot": "c",
		"sp": 200,
		"description": "Inflicts Def-5 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 361,
		"name": "Threaten Res 1",
		"slot": "c",
		"sp": 50,
		"description": "Inflicts Res-3 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 362,
		"name": "Threaten Res 2",
		"slot": "c",
		"sp": 100,
		"description": "Inflicts Res-4 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 363,
		"name": "Threaten Res 3",
		"slot": "c",
		"sp": 200,
		"description": "Inflicts Res-5 on foes within 2 spaces at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 364,
		"name": "Savage Blow 1",
		"slot": "c",
		"sp": 50,
		"description": "If unit initiates attack, foes within 2 spaces take 3 damage after combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 365,
		"name": "Savage Blow 2",
		"slot": "c",
		"sp": 100,
		"description": "If unit initiates attack, foes within 2 spaces take 5 damage after combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 366,
		"name": "Savage Blow 3",
		"slot": "c",
		"sp": 200,
		"description": "If unit initiates attack, foes within 2 spaces take 7 damage after combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 367,
		"name": "Breath of Life 1",
		"slot": "c",
		"sp": 50,
		"description": "If unit initates attack, adjacent allies recover 3 Hp after combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 368,
		"name": "Breath of Life 2",
		"slot": "c",
		"sp": 100,
		"description": "If unit initates attack, adjacent allies recover 5 Hp after combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 369,
		"name": "Breath of Life 3",
		"slot": "c",
		"sp": 200,
		"description": "If unit initates attack, adjacent allies recover 7 Hp after combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 370,
		"name": "Hone Armor",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent armored allies Atk/Spd+6 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 0
	},
	{
		"skill_id": 371,
		"name": "Fortify Armor",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent armored allies Def/Res+6 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 0
	},
	{
		"skill_id": 372,
		"name": "Goad Armor",
		"slot": "c",
		"sp": 200,
		"description": "Grants armored allies within 2 spaces Spd/Atk+4 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 0
	},
	{
		"skill_id": 373,
		"name": "Ward Armor",
		"slot": "c",
		"sp": 200,
		"description": "Grants armored allies within 2 spaces Def/Res+4 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "armored",
		"affectsduel": 0
	},
	{
		"skill_id": 374,
		"name": "Hone Fliers",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent flying allies Atk/Spd+6 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "flying",
		"affectsduel": 0
	},
	{
		"skill_id": 375,
		"name": "Fortify Fliers",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent flying allies Def/Res+6 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "flying",
		"affectsduel": 0
	},
	{
		"skill_id": 376,
		"name": "Goad Fliers",
		"slot": "c",
		"sp": 200,
		"description": "Grants flying allies within 2 spaces Spd/Atk+4 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "flying",
		"affectsduel": 0
	},
	{
		"skill_id": 377,
		"name": "Ward Fliers",
		"slot": "c",
		"sp": 200,
		"description": "Grants flying allies within 2 spaces Def/Res+4 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "flying",
		"affectsduel": 0
	},
	{
		"skill_id": 378,
		"name": "Hone Cavalry",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent cavalry allies Atk/Spd+6 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "cavalry",
		"affectsduel": 0
	},
	{
		"skill_id": 379,
		"name": "Fortify Cavalry",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent cavalry allies Def/Res+6 through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "cavalry",
		"affectsduel": 0
	},
	{
		"skill_id": 380,
		"name": "Goad Cavalry",
		"slot": "c",
		"sp": 200,
		"description": "Grants cavalry allies within 2 spaces Spd/Atk+4 during combat.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "cavalry",
		"affectsduel": 0
	},
	{
		"skill_id": 381,
		"name": "Ward Cavalry",
		"slot": "c",
		"sp": 200,
		"description": "Grants cavalry allies within 2 spaces Def/Res+4 during combat",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "cavalry",
		"affectsduel": 0
	},
	{
		"skill_id": 382,
		"name": "Fortify Dragons",
		"slot": "c",
		"sp": 200,
		"description": "Grants adjacent dragon allies Def/Res+6 through their next actions at the start of each turn",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dragon",
		"affectsduel": 0
	},
	{
		"skill_id": 383,
		"name": "Iote's Shield",
		"slot": "a",
		"sp": 200,
		"description": "Negates effective against bonuses.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "flying",
		"affectsduel": 1
	},
	{
		"skill_id": 384,
		"name": "Swift Sparrow 1",
		"slot": "a",
		"sp": 120,
		"description": "If unit initiates combat, unit granted Atk/Spd+2 during battle.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 385,
		"name": "Swift Sparrow 2",
		"slot": "a",
		"sp": 240,
		"description": "If unit initiates combat, unit granted Atk/Spd+4 during battle.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 386,
		"name": "Carrot Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 387,
		"name": "Carrot Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 388,
		"name": "Carrot Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 389,
		"name": "Carrot Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 390,
		"name": "Blue Egg",
		"slot": "weapon",
		"sp": 200,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 391,
		"name": "Blue Egg+",
		"slot": "weapon",
		"sp": 300,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 392,
		"name": "Green Egg",
		"slot": "weapon",
		"sp": 200,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 393,
		"name": "Green Egg+",
		"slot": "weapon",
		"sp": 300,
		"description": "If unit initiates attack, unit recovers 4 HP after the battle.",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 394,
		"name": "Attack Def 1",
		"slot": "a",
		"sp": 30,
		"description": "Grants atk/def +1.",
		"hp": 0,
		"atk": 1,
		"spd": 0,
		"def": 1,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 395,
		"name": "Attack Def 2",
		"slot": "a",
		"sp": 60,
		"description": "Grants atk/def +2.",
		"hp": 0,
		"atk": 2,
		"spd": 0,
		"def": 2,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 396,
		"name": "Axe Experience 1",
		"slot": "c",
		"sp": 50,
		"description": "If unit survives, unit gets 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 0
	},
	{
		"skill_id": 397,
		"name": "Axe Experience 2",
		"slot": "c",
		"sp": 100,
		"description": "If unit survives, all axe users on team get 1.5x EXP. (If similar skill effects also used, only highest multipler applied.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 0
	},
	{
		"skill_id": 398,
		"name": "Axe Experience 3",
		"slot": "c",
		"sp": 200,
		"description": "If unit survives, all axe users on team get 2x EXP. (If similar skill effects also used, only highest multipler applied.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 0
	},
	{
		"skill_id": 399,
		"name": "Live for Honor",
		"slot": "b",
		"sp": 100,
		"description": "If unit survives, get 1.5x normal badges from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 400,
		"name": "Live for Bounty",
		"slot": "b",
		"sp": 100,
		"description": "If unit survives, get 1.5x normal crystals from a Training Tower map. (If similar skill effects also used, only highest multiplier applied.)",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 401,
		"name": "Attack 1",
		"slot": "s",
		"sp": 0,
		"description": "Atk +1",
		"hp": 0,
		"atk": 1,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 403,
		"name": "Speed 1",
		"slot": "s",
		"sp": 0,
		"description": "Spd +1",
		"hp": 0,
		"atk": 0,
		"spd": 1,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 404,
		"name": "HP 3",
		"slot": "s",
		"sp": 0,
		"description": "HP +3",
		"hp": 3,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 405,
		"name": "Windsweep 1",
		"slot": "b",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 406,
		"name": "Windsweep 2",
		"slot": "b",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 407,
		"name": "Windsweep 3",
		"slot": "b",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 408,
		"name": "Hit and Run",
		"slot": "b",
		"sp": 150,
		"description": "If unit initiates attack, unit moves back 1 space after battle.",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "melee",
		"affectsduel": 0
	},
	{
		"skill_id": 409,
		"name": "Fortress Def 1",
		"slot": "a",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": -3,
		"spd": 0,
		"def": 3,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 410,
		"name": "Fortress Def 2",
		"slot": "a",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": -3,
		"spd": 0,
		"def": 4,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 411,
		"name": "Fortress Def 3",
		"slot": "a",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": -3,
		"spd": 0,
		"def": 5,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 412,
		"name": "Firesweep Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "Unit and enemies cannot use counterattacks.",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 413,
		"name": "Firesweep Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "Unit and enemies cannot use counterattacks.",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 414,
		"name": "Bow Experience 1",
		"slot": "c",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 0
	},
	{
		"skill_id": 415,
		"name": "Bow Experience 2",
		"slot": "c",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 0
	},
	{
		"skill_id": 416,
		"name": "Bow Experience 3",
		"slot": "c",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 0
	},
	{
		"skill_id": 417,
		"name": "Eckesachs",
		"slot": "weapon",
		"sp": 300,
		"description": "Inflicts Def-4 on foes within 2 spaces through their next actions at the start of each turn.",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 418,
		"name": "Ragnell",
		"slot": "weapon",
		"sp": 400,
		"description": "Enables counterattack regardless of distance if this unit is attacked",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 419,
		"name": "Heavy Blade 1",
		"slot": "a",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 420,
		"name": "Heavy Blade 2",
		"slot": "a",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 421,
		"name": "Heavy Blade 3",
		"slot": "a",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 422,
		"name": "Spur Def Res 1",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 423,
		"name": "Spur Def Res 2",
		"slot": "c",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 424,
		"name": "Rexcalibur+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 13,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 425,
		"name": "Guard 1",
		"slot": "b",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 426,
		"name": "Guard 2",
		"slot": "b",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 427,
		"name": "Guard 3",
		"slot": "b",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 428,
		"name": "Watersweep 1",
		"slot": "b",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 429,
		"name": "Watersweep 2",
		"slot": "b",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 430,
		"name": "Watersweep 3",
		"slot": "b",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 431,
		"name": "Siegfried",
		"slot": "weapon",
		"sp": 400,
		"description": "",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 432,
		"name": "Gronnowl",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 433,
		"name": "Gronnowl+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "greentome",
		"affectsduel": 1
	},
	{
		"skill_id": 434,
		"name": "Earth Boost 1",
		"slot": "a",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 435,
		"name": "Earth Boost 2",
		"slot": "a",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 436,
		"name": "Earth Boost 3",
		"slot": "a",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 437,
		"name": "Ragnarok",
		"slot": "weapon",
		"sp": 400,
		"description": "",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 438,
		"name": "Distant Def 1",
		"slot": "a",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 439,
		"name": "Distant Def 2",
		"slot": "a",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 440,
		"name": "Distant Def 3",
		"slot": "a",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 441,
		"name": "Wrathful Staff 1",
		"slot": "b",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 442,
		"name": "Wrathful Staff 2",
		"slot": "b",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 443,
		"name": "Wrathful Staff 3",
		"slot": "b",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 444,
		"name": "Blarowl",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 445,
		"name": "Blarowl+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 446,
		"name": "B Tome Exp. 1",
		"slot": "c",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 0
	},
	{
		"skill_id": 447,
		"name": "B Tome Exp. 2",
		"slot": "c",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 0
	},
	{
		"skill_id": 448,
		"name": "B Tome Exp. 3",
		"slot": "c",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 0
	},
	{
		"skill_id": 449,
		"name": "Regal Blade",
		"slot": "weapon",
		"sp": 400,
		"description": "",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 450,
		"name": "Blessed Bouquet",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 9,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 451,
		"name": "Blessed Bouquet+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bluetome",
		"affectsduel": 1
	},
	{
		"skill_id": 452,
		"name": "Attack Res 1",
		"slot": "a",
		"sp": 80,
		"description": "",
		"hp": 0,
		"atk": 1,
		"spd": 0,
		"def": 0,
		"res": 1,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 453,
		"name": "Attack Res 2",
		"slot": "a",
		"sp": 160,
		"description": "",
		"hp": 0,
		"atk": 2,
		"spd": 0,
		"def": 0,
		"res": 2,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 454,
		"name": "Gradivus",
		"slot": "weapon",
		"sp": 400,
		"description": "",
		"hp": 0,
		"atk": 16,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "unique",
		"affectsduel": 1
	},
	{
		"skill_id": 455,
		"name": "Grani's Shield",
		"slot": "a",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "cavalry",
		"affectsduel": 1
	},
	{
		"skill_id": 456,
		"name": "First Bite",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 457,
		"name": "First Bite+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 458,
		"name": "Wind Boost 1",
		"slot": "a",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 459,
		"name": "Wind Boost 2",
		"slot": "a",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 460,
		"name": "Wind Boost 3",
		"slot": "a",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 461,
		"name": "Cupid Arrow",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 462,
		"name": "Cupid Arrow+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 463,
		"name": "Rally Attack Speed",
		"slot": "assist",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 464,
		"name": "Candlelight",
		"slot": "weapon",
		"sp": 150,
		"description": "",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 465,
		"name": "Dazzling Staff 1",
		"slot": "b",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 466,
		"name": "Dazzling Staff 2",
		"slot": "b",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 467,
		"name": "Dazzling Staff 3",
		"slot": "b",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "staff",
		"affectsduel": 1
	},
	{
		"skill_id": 468,
		"name": "Fortify Res 1",
		"slot": "s",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 469,
		"name": "Spur Def 1",
		"slot": "s",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 470,
		"name": "Quickened Pulse",
		"slot": "s",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 471,
		"name": "Breath of Life 1",
		"slot": "s",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 472,
		"name": "Embla's Ward",
		"slot": "s",
		"sp": 0,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 473,
		"name": "Raudrowl",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 6,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 474,
		"name": "Raudrowl+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "redtome",
		"affectsduel": 1
	},
	{
		"skill_id": 475,
		"name": "Atk Ploy 1",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 476,
		"name": "Atk Ploy 2",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 477,
		"name": "Atk Ploy 3",
		"slot": "c",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 478,
		"name": "Sturdy Blow 1",
		"slot": "a",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 479,
		"name": "Sturdy Blow 2",
		"slot": "a",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 1
	},
	{
		"skill_id": 480,
		"name": "Sword Exp. 1",
		"slot": "c",
		"sp": 30,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 0
	},
	{
		"skill_id": 481,
		"name": "Sword Exp. 2",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 0
	},
	{
		"skill_id": 482,
		"name": "Sword Exp. 3",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "sword",
		"affectsduel": 0
	},
	{
		"skill_id": 483,
		"name": "Firesweep Lance",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 484,
		"name": "Firesweep Lance+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 15,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 485,
		"name": "Rally Defense Resistance",
		"slot": "assist",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 486,
		"name": "Drive Def 1",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 487,
		"name": "Drive Def 2",
		"slot": "c",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "nonstaff",
		"affectsduel": 0
	},
	{
		"skill_id": 488,
		"name": "Fire Boost 1",
		"slot": "a",
		"sp": 50,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 489,
		"name": "Fire Boost 2",
		"slot": "a",
		"sp": 100,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 490,
		"name": "Fire Boost 3",
		"slot": "a",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 491,
		"name": "Panic Ploy 1",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 492,
		"name": "Panic Ploy 2",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 493,
		"name": "Panic Ploy 3",
		"slot": "c",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 494,
		"name": "Legion's Axe",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 495,
		"name": "Legion's Axe+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 496,
		"name": "Clarisse's Bow",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 497,
		"name": "Clarisse's Bow+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 11,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 498,
		"name": "Seashell",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 7,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 499,
		"name": "Seashell+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "dagger",
		"affectsduel": 1
	},
	{
		"skill_id": 500,
		"name": "Seal Atk Spd 1",
		"slot": "b",
		"sp": 80,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 501,
		"name": "Seal Atk Spd 2",
		"slot": "b",
		"sp": 160,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 502,
		"name": "Refreshing Bolt",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 8,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 503,
		"name": "Refreshing Bolt+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 12,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "bow",
		"affectsduel": 1
	},
	{
		"skill_id": 504,
		"name": "Def Ploy 1",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 505,
		"name": "Def Ploy 2",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 506,
		"name": "Def Ploy 3",
		"slot": "c",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 507,
		"name": "Deft Harpoon",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 508,
		"name": "Deft Harpoon+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 1
	},
	{
		"skill_id": 509,
		"name": "Lance Valor 1",
		"slot": "c",
		"sp": 30,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 0
	},
	{
		"skill_id": 510,
		"name": "Lance Valor 2",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 0
	},
	{
		"skill_id": 511,
		"name": "Lance Valor 3",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "lance",
		"affectsduel": 0
	},
	{
		"skill_id": 512,
		"name": "Melon Crusher",
		"slot": "weapon",
		"sp": 200,
		"description": "",
		"hp": 0,
		"atk": 10,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 513,
		"name": "Melon Crusher+",
		"slot": "weapon",
		"sp": 300,
		"description": "",
		"hp": 0,
		"atk": 14,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "axe",
		"affectsduel": 1
	},
	{
		"skill_id": 514,
		"name": "HP Def 1",
		"slot": "a",
		"sp": 80,
		"description": "",
		"hp": 3,
		"atk": 0,
		"spd": 0,
		"def": 1,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 515,
		"name": "HP Def 2",
		"slot": "a",
		"sp": 160,
		"description": "",
		"hp": 4,
		"atk": 0,
		"spd": 0,
		"def": 2,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 516,
		"name": "Close Def 1",
		"slot": "a",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 517,
		"name": "Close Def 2",
		"slot": "a",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 518,
		"name": "Close Def 3",
		"slot": "a",
		"sp": 240,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 1
	},
	{
		"skill_id": 519,
		"name": "Axe Valor 1",
		"slot": "c",
		"sp": 30,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 520,
		"name": "Axe Valor 2",
		"slot": "c",
		"sp": 60,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 521,
		"name": "Axe Valor 3",
		"slot": "c",
		"sp": 120,
		"description": "",
		"hp": 0,
		"atk": 0,
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": "",
		"affectsduel": 0
	},
	{
		"skill_id": 522,
		"name": 'Dark Aura', 
		"slot": 'weapon',
		"sp": 400, 
		"description": 'Grants adjacent allies who use swords, axes, lances, or dragonstones Atk+6 through their next actions at the start of each turn.', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'unique', 
		"affectsduel": 1
	},
	{
		"skill_id": 523,
		"name": 'Drive Atk 1', 
		"slot": 'c',
		"sp": 120, 
		"description": 'Grants allies within 2 spaces Atk+2 during combat.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 0
	},
	{
		"skill_id": 524,
		"name": 'Drive Atk 2', 
		"slot": 'c',
		"sp": 240, 
		"description": 'Grants allies within 2 spaces Atk+3 during combat.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 0
	},
	{
		"skill_id": 525,
		"name": 'Dark Excalibur', 
		"slot": 'weapon',
		"sp": 400, 
		"description": 'Grants +10 to damage when special triggers.', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'unique', 
		"affectsduel": 1
	},
	{
		"skill_id": 526,
		"name": 'Mirror Strike 1', 
		"slot": 'a',
		"sp": 120, 
		"description": 'Grants Atk/Res+2 during combat if unit initiates combat.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'nonstaff', 
		"affectsduel": 1
	},
	{
		"skill_id": 527,
		"name": 'Mirror Strike 2', 
		"slot": 'a',
		"sp": 240, 
		"description": 'Grants Atk/Res+4 during combat if unit initiates combat.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'nonstaff', 
		"affectsduel": 1
	},
	{
		"skill_id": 528,
		"name": 'Res Ploy 1', 
		"slot": 'c',
		"sp": 60, 
		"description": 'At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-3 until the end of foe\'s next action.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 529,
		"name": 'Res Ploy 2', 
		"slot": 'c',
		"sp": 120, 
		"description": 'At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-4 until the end of foe\'s next action.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 530,
		"name": 'Res Ploy 3', 
		"slot": 'c',
		"sp": 240, 
		"description": 'At start of turn, all foes in cardinal directions with Res 1 or more lower than unit suffer Res-5 until the end of foe\'s next action.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 531,
		"name": 'Zanbato', 
		"slot": 'weapon',
		"sp": 200, 
		"description": 'Effective against cavalry units.', 
		"hp": 0,
		"atk": 10, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 1
	},
	{
		"skill_id": 532,
		"name": 'Zanbato+', 
		"slot": 'weapon',
		"sp": 300, 
		"description": 'Effective against cavalry units.', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 1
	},
	{
		"skill_id": 533,
		"name": 'Sword Valor 1', 
		"slot": 'c',
		"sp": 30, 
		"description": 'If unit survives and uses a sword, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 0
	},
	{
		"skill_id": 534,
		"name": 'Sword Valor 2', 
		"slot": 'c',
		"sp": 60, 
		"description": 'If unit survives and uses a sword, unit gets 1.5x SP. (If similar skill effects also used, only highest multiplier applied.)', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 0
	},
	{
		"skill_id": 535,
		"name": 'Sword Valor 3', 
		"slot": 'c',
		"sp": 120, 
		"description": 'If unit survives and uses a sword, unit gets 2x SP. (If similar skill effects also used, only highest multiplier applied.)', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 0
	},
	{
		"skill_id": 536,
		"name": 'Slaying Bow', 
		"slot": 'weapon',
		"sp": 200, 
		"description": 'Effective against flying units. Accelerates Special trigger (cooldown count-1).', 
		"hp": 0,
		"atk": 8, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'bow', 
		"affectsduel": 1
	},
	{
		"skill_id": 537,
		"name": 'Slaying Bow+', 
		"slot": 'weapon',
		"sp": 300, 
		"description": 'Effective against flying units. Accelerates Special trigger (cooldown count-1).', 
		"hp": 0,
		"atk": 12, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'bow', 
		"affectsduel": 1
	},
	{
		"skill_id": 538,
		"name": 'Slaying Edge', 
		"slot": 'weapon',
		"sp": 200, 
		"description": 'Accelerates Special trigger (cooldown count-1).', 
		"hp": 0,
		"atk": 10, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 1
	},
	{
		"skill_id": 539,
		"name": 'Slaying Edge+', 
		"slot": 'weapon',
		"sp": 300, 
		"description": 'Accelerates Special trigger (cooldown count-1).', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'sword', 
		"affectsduel": 1
	},
	{
		"skill_id": 540,
		"name": 'HP Spd 1', 
		"slot": 'a',
		"sp": 100, 
		"description": 'Grants HP+3, Spd+1.', 
		"hp": 3,
		"atk": 0, 
		"spd": 1,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 541,
		"name": 'HP Spd 2', 
		"slot": 'a',
		"sp": 200, 
		"description": 'Grants HP+4, Spd+2.', 
		"hp": 4,
		"atk": 0, 
		"spd": 2,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 542,
		"name": 'Shield Pulse 1', 
		"slot": 'b',
		"sp": 60, 
		"description": 'If unit\'s Special triggers based on a foe\'s attack, Special cooldown count-1 at start of turn 1.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'melee,noncavalry,nonflying', 
		"affectsduel": 1
	},
	{
		"skill_id": 543,
		"name": 'Shield Pulse 2', 
		"slot": 'b',
		"sp": 120, 
		"description": 'If unit\'s Special triggers based on a foe\'s attack, Special cooldown count-1 at start of turn 1. Unit takes 5 less damage when Special triggers.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'melee,noncavalry,nonflying', 
		"affectsduel": 1
	},
	{
		"skill_id": 544,
		"name": 'Shield Pulse 3', 
		"slot": 'b',
		"sp": 240, 
		"description": 'If unit\'s Special triggers based on a foe\'s attack, Special cooldown count-2 at start of turn 1. Unit takes 5 less damage when Special triggers.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'melee,noncavalry,nonflying', 
		"affectsduel": 1
	},
	{
		"skill_id": 545,
		"name": 'Ridersbane', 
		"slot": 'weapon',
		"sp": 200, 
		"description": 'Effective against cavalry units.', 
		"hp": 0,
		"atk": 10, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'lance', 
		"affectsduel": 1
	},
	{
		"skill_id": 546,
		"name": 'Ridersbane+', 
		"slot": 'weapon',
		"sp": 300, 
		"description": 'Effective against cavalry units.', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'lance', 
		"affectsduel": 1
	},
	{
		"skill_id": 547,
		"name": 'Cancel Affinity 1', 
		"slot": 'b',
		"sp": 50, 
		"description": 'Any weapon triangle affinity granted by unit\'s skills is negated. Also negates any weapon triangle affinity granted by foe\'s skills.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'nonstaff,nonredtome,nonbluetome,nongreentome', 
		"affectsduel": 1
	},
	{
		"skill_id": 548,
		"name": 'Cancel Affinity 2', 
		"slot": 'b',
		"sp": 100, 
		"description": 'Any weapon triangle affinity granted by unit\'s skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe\'s skills is negated.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'nonstaff,nonredtome,nonbluetome,nongreentome', 
		"affectsduel": 1
	},
	{
		"skill_id": 549,
		"name": 'Cancel Affinity 3', 
		"slot": 'b',
		"sp": 200, 
		"description": 'Any weapon triangle affinity granted by unit\'s skills is negated. If affinity disadvantage exists, weapon triangle affinity granted by foe\'s skills is reversed', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'nonstaff,nonredtome,nonbluetome,nongreentome', 
		"affectsduel": 1
	},
	{
		"skill_id": 550,
		"name": 'Berkut\'s Lance', 
		"slot": 'weapon',
		"sp": 200, 
		"description": 'Grants Res+4 when the unit is under attack.', 
		"hp": 0,
		"atk": 10, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'lance', 
		"affectsduel": 1
	},
	{
		"skill_id": 551,
		"name": 'Berkut\'s Lance+', 
		"slot": 'weapon',
		"sp": 300, 
		"description": 'Grants Res+4 when the unit is under attack.', 
		"hp": 0,
		"atk": 14, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": 'lance', 
		"affectsduel": 1
	},
	{
		"skill_id": 552,
		"name": 'Water Boost 1', 
		"slot": 'a',
		"sp": 50, 
		"description": 'If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+2 during combat', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 553,
		"name": 'Water Boost 2', 
		"slot": 'a',
		"sp": 100, 
		"description": 'If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+4 during combat', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 554,
		"name": 'Water Boost 3', 
		"slot": 'a',
		"sp": 200, 
		"description": 'If unit has at least 3 more HP than enemy at the start of combat, unit receives Res+6 during combat', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	},
	{
		"skill_id": 555,
		"name": 'Phantom Spd 1', 
		"slot": 's',
		"sp": 0, 
		"description": 'When any skill compares this unit\'s Spd stat to another unit\'s, this unit\'s Spd stat is counted as +5 over actual value.', 
		"hp": 0,
		"atk": 0, 
		"spd": 0,
		"def": 0,
		"res": 0,
		"charge": 0,
		"inheritrule": '', 
		"affectsduel": 1
	}
]

//SKILL PREREQS TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Joins many-to-many relationship between skills and prerequisites
//Good luck manually updating this shit
//I (Andy) had created a database updater for my own personal use to handle this
window.data.prereqs = [
	{
		"skill_id": 2,
		"required_id": 1
	},
	{
		"skill_id": 3,
		"required_id": 2
	},
	{
		"skill_id": 4,
		"required_id": 3
	},
	{
		"skill_id": 5,
		"required_id": 2
	},
	{
		"skill_id": 6,
		"required_id": 5
	},
	{
		"skill_id": 7,
		"required_id": 2
	},
	{
		"skill_id": 8,
		"required_id": 7
	},
	{
		"skill_id": 9,
		"required_id": 2
	},
	{
		"skill_id": 10,
		"required_id": 9
	},
	{
		"skill_id": 11,
		"required_id": 2
	},
	{
		"skill_id": 12,
		"required_id": 11
	},
	{
		"skill_id": 13,
		"required_id": 2
	},
	{
		"skill_id": 14,
		"required_id": 13
	},
	{
		"skill_id": 15,
		"required_id": 3
	},
	{
		"skill_id": 16,
		"required_id": 3
	},
	{
		"skill_id": 17,
		"required_id": 3
	},
	{
		"skill_id": 18,
		"required_id": 3
	},
	{
		"skill_id": 19,
		"required_id": 3
	},
	{
		"skill_id": 20,
		"required_id": 3
	},
	{
		"skill_id": 21,
		"required_id": 3
	},
	{
		"skill_id": 22,
		"required_id": 3
	},
	{
		"skill_id": 23,
		"required_id": 3
	},
	{
		"skill_id": 24,
		"required_id": 3
	},
	{
		"skill_id": 26,
		"required_id": 25
	},
	{
		"skill_id": 27,
		"required_id": 26
	},
	{
		"skill_id": 28,
		"required_id": 27
	},
	{
		"skill_id": 30,
		"required_id": 29
	},
	{
		"skill_id": 31,
		"required_id": 30
	},
	{
		"skill_id": 32,
		"required_id": 31
	},
	{
		"skill_id": 33,
		"required_id": 26
	},
	{
		"skill_id": 33,
		"required_id": 30
	},
	{
		"skill_id": 34,
		"required_id": 33
	},
	{
		"skill_id": 35,
		"required_id": 26
	},
	{
		"skill_id": 35,
		"required_id": 30
	},
	{
		"skill_id": 36,
		"required_id": 35
	},
	{
		"skill_id": 37,
		"required_id": 26
	},
	{
		"skill_id": 37,
		"required_id": 30
	},
	{
		"skill_id": 38,
		"required_id": 37
	},
	{
		"skill_id": 39,
		"required_id": 31
	},
	{
		"skill_id": 40,
		"required_id": 27
	},
	{
		"skill_id": 42,
		"required_id": 41
	},
	{
		"skill_id": 43,
		"required_id": 42
	},
	{
		"skill_id": 44,
		"required_id": 43
	},
	{
		"skill_id": 45,
		"required_id": 42
	},
	{
		"skill_id": 46,
		"required_id": 45
	},
	{
		"skill_id": 47,
		"required_id": 42
	},
	{
		"skill_id": 48,
		"required_id": 47
	},
	{
		"skill_id": 49,
		"required_id": 42
	},
	{
		"skill_id": 50,
		"required_id": 49
	},
	{
		"skill_id": 51,
		"required_id": 42
	},
	{
		"skill_id": 52,
		"required_id": 51
	},
	{
		"skill_id": 53,
		"required_id": 43
	},
	{
		"skill_id": 54,
		"required_id": 43
	},
	{
		"skill_id": 55,
		"required_id": 43
	},
	{
		"skill_id": 57,
		"required_id": 56
	},
	{
		"skill_id": 58,
		"required_id": 57
	},
	{
		"skill_id": 59,
		"required_id": 57
	},
	{
		"skill_id": 60,
		"required_id": 59
	},
	{
		"skill_id": 61,
		"required_id": 57
	},
	{
		"skill_id": 62,
		"required_id": 61
	},
	{
		"skill_id": 63,
		"required_id": 57
	},
	{
		"skill_id": 64,
		"required_id": 63
	},
	{
		"skill_id": 65,
		"required_id": 58
	},
	{
		"skill_id": 66,
		"required_id": 58
	},
	{
		"skill_id": 68,
		"required_id": 67
	},
	{
		"skill_id": 69,
		"required_id": 68
	},
	{
		"skill_id": 70,
		"required_id": 69
	},
	{
		"skill_id": 71,
		"required_id": 68
	},
	{
		"skill_id": 72,
		"required_id": 71
	},
	{
		"skill_id": 73,
		"required_id": 68
	},
	{
		"skill_id": 74,
		"required_id": 73
	},
	{
		"skill_id": 75,
		"required_id": 68
	},
	{
		"skill_id": 76,
		"required_id": 75
	},
	{
		"skill_id": 77,
		"required_id": 68
	},
	{
		"skill_id": 78,
		"required_id": 77
	},
	{
		"skill_id": 79,
		"required_id": 69
	},
	{
		"skill_id": 80,
		"required_id": 69
	},
	{
		"skill_id": 82,
		"required_id": 81
	},
	{
		"skill_id": 83,
		"required_id": 82
	},
	{
		"skill_id": 84,
		"required_id": 82
	},
	{
		"skill_id": 85,
		"required_id": 84
	},
	{
		"skill_id": 86,
		"required_id": 82
	},
	{
		"skill_id": 87,
		"required_id": 86
	},
	{
		"skill_id": 88,
		"required_id": 82
	},
	{
		"skill_id": 89,
		"required_id": 88
	},
	{
		"skill_id": 90,
		"required_id": 83
	},
	{
		"skill_id": 91,
		"required_id": 83
	},
	{
		"skill_id": 93,
		"required_id": 92
	},
	{
		"skill_id": 94,
		"required_id": 93
	},
	{
		"skill_id": 95,
		"required_id": 94
	},
	{
		"skill_id": 96,
		"required_id": 93
	},
	{
		"skill_id": 97,
		"required_id": 96
	},
	{
		"skill_id": 98,
		"required_id": 93
	},
	{
		"skill_id": 99,
		"required_id": 98
	},
	{
		"skill_id": 100,
		"required_id": 93
	},
	{
		"skill_id": 101,
		"required_id": 100
	},
	{
		"skill_id": 103,
		"required_id": 102
	},
	{
		"skill_id": 104,
		"required_id": 103
	},
	{
		"skill_id": 105,
		"required_id": 104
	},
	{
		"skill_id": 106,
		"required_id": 103
	},
	{
		"skill_id": 107,
		"required_id": 106
	},
	{
		"skill_id": 108,
		"required_id": 103
	},
	{
		"skill_id": 109,
		"required_id": 108
	},
	{
		"skill_id": 110,
		"required_id": 103
	},
	{
		"skill_id": 111,
		"required_id": 110
	},
	{
		"skill_id": 112,
		"required_id": 104
	},
	{
		"skill_id": 113,
		"required_id": 104
	},
	{
		"skill_id": 115,
		"required_id": 114
	},
	{
		"skill_id": 116,
		"required_id": 115
	},
	{
		"skill_id": 117,
		"required_id": 116
	},
	{
		"skill_id": 118,
		"required_id": 115
	},
	{
		"skill_id": 119,
		"required_id": 118
	},
	{
		"skill_id": 120,
		"required_id": 115
	},
	{
		"skill_id": 121,
		"required_id": 120
	},
	{
		"skill_id": 122,
		"required_id": 115
	},
	{
		"skill_id": 123,
		"required_id": 122
	},
	{
		"skill_id": 124,
		"required_id": 116
	},
	{
		"skill_id": 126,
		"required_id": 125
	},
	{
		"skill_id": 127,
		"required_id": 125
	},
	{
		"skill_id": 128,
		"required_id": 125
	},
	{
		"skill_id": 129,
		"required_id": 125
	},
	{
		"skill_id": 130,
		"required_id": 125
	},
	{
		"skill_id": 131,
		"required_id": 125
	},
	{
		"skill_id": 146,
		"required_id": 145
	},
	{
		"skill_id": 147,
		"required_id": 145
	},
	{
		"skill_id": 148,
		"required_id": 146
	},
	{
		"skill_id": 149,
		"required_id": 146
	},
	{
		"skill_id": 150,
		"required_id": 147
	},
	{
		"skill_id": 151,
		"required_id": 147
	},
	{
		"skill_id": 161,
		"required_id": 154
	},
	{
		"skill_id": 162,
		"required_id": 154
	},
	{
		"skill_id": 163,
		"required_id": 155
	},
	{
		"skill_id": 164,
		"required_id": 155
	},
	{
		"skill_id": 165,
		"required_id": 156
	},
	{
		"skill_id": 166,
		"required_id": 156
	},
	{
		"skill_id": 167,
		"required_id": 157
	},
	{
		"skill_id": 168,
		"required_id": 157
	},
	{
		"skill_id": 169,
		"required_id": 158
	},
	{
		"skill_id": 170,
		"required_id": 158
	},
	{
		"skill_id": 171,
		"required_id": 159
	},
	{
		"skill_id": 172,
		"required_id": 159
	},
	{
		"skill_id": 173,
		"required_id": 160
	},
	{
		"skill_id": 174,
		"required_id": 160
	},
	{
		"skill_id": 175,
		"required_id": 162
	},
	{
		"skill_id": 176,
		"required_id": 168
	},
	{
		"skill_id": 176,
		"required_id": 170
	},
	{
		"skill_id": 181,
		"required_id": 177
	},
	{
		"skill_id": 182,
		"required_id": 177
	},
	{
		"skill_id": 183,
		"required_id": 178
	},
	{
		"skill_id": 184,
		"required_id": 178
	},
	{
		"skill_id": 185,
		"required_id": 179
	},
	{
		"skill_id": 186,
		"required_id": 179
	},
	{
		"skill_id": 187,
		"required_id": 180
	},
	{
		"skill_id": 188,
		"required_id": 180
	},
	{
		"skill_id": 191,
		"required_id": 189
	},
	{
		"skill_id": 192,
		"required_id": 189
	},
	{
		"skill_id": 193,
		"required_id": 190
	},
	{
		"skill_id": 194,
		"required_id": 190
	},
	{
		"skill_id": 203,
		"required_id": 202
	},
	{
		"skill_id": 204,
		"required_id": 203
	},
	{
		"skill_id": 206,
		"required_id": 205
	},
	{
		"skill_id": 207,
		"required_id": 206
	},
	{
		"skill_id": 209,
		"required_id": 208
	},
	{
		"skill_id": 210,
		"required_id": 209
	},
	{
		"skill_id": 212,
		"required_id": 211
	},
	{
		"skill_id": 213,
		"required_id": 212
	},
	{
		"skill_id": 215,
		"required_id": 214
	},
	{
		"skill_id": 216,
		"required_id": 215
	},
	{
		"skill_id": 218,
		"required_id": 217
	},
	{
		"skill_id": 219,
		"required_id": 218
	},
	{
		"skill_id": 221,
		"required_id": 220
	},
	{
		"skill_id": 222,
		"required_id": 221
	},
	{
		"skill_id": 224,
		"required_id": 223
	},
	{
		"skill_id": 225,
		"required_id": 224
	},
	{
		"skill_id": 227,
		"required_id": 226
	},
	{
		"skill_id": 228,
		"required_id": 227
	},
	{
		"skill_id": 230,
		"required_id": 229
	},
	{
		"skill_id": 231,
		"required_id": 230
	},
	{
		"skill_id": 233,
		"required_id": 232
	},
	{
		"skill_id": 234,
		"required_id": 233
	},
	{
		"skill_id": 236,
		"required_id": 235
	},
	{
		"skill_id": 237,
		"required_id": 236
	},
	{
		"skill_id": 239,
		"required_id": 238
	},
	{
		"skill_id": 240,
		"required_id": 239
	},
	{
		"skill_id": 242,
		"required_id": 241
	},
	{
		"skill_id": 243,
		"required_id": 242
	},
	{
		"skill_id": 245,
		"required_id": 244
	},
	{
		"skill_id": 246,
		"required_id": 245
	},
	{
		"skill_id": 248,
		"required_id": 247
	},
	{
		"skill_id": 249,
		"required_id": 248
	},
	{
		"skill_id": 254,
		"required_id": 253
	},
	{
		"skill_id": 255,
		"required_id": 254
	},
	{
		"skill_id": 257,
		"required_id": 256
	},
	{
		"skill_id": 258,
		"required_id": 257
	},
	{
		"skill_id": 260,
		"required_id": 259
	},
	{
		"skill_id": 261,
		"required_id": 260
	},
	{
		"skill_id": 263,
		"required_id": 262
	},
	{
		"skill_id": 264,
		"required_id": 263
	},
	{
		"skill_id": 266,
		"required_id": 265
	},
	{
		"skill_id": 267,
		"required_id": 266
	},
	{
		"skill_id": 269,
		"required_id": 268
	},
	{
		"skill_id": 270,
		"required_id": 269
	},
	{
		"skill_id": 272,
		"required_id": 271
	},
	{
		"skill_id": 273,
		"required_id": 272
	},
	{
		"skill_id": 275,
		"required_id": 274
	},
	{
		"skill_id": 276,
		"required_id": 275
	},
	{
		"skill_id": 278,
		"required_id": 277
	},
	{
		"skill_id": 279,
		"required_id": 278
	},
	{
		"skill_id": 281,
		"required_id": 280
	},
	{
		"skill_id": 282,
		"required_id": 281
	},
	{
		"skill_id": 284,
		"required_id": 283
	},
	{
		"skill_id": 285,
		"required_id": 284
	},
	{
		"skill_id": 287,
		"required_id": 286
	},
	{
		"skill_id": 288,
		"required_id": 287
	},
	{
		"skill_id": 290,
		"required_id": 289
	},
	{
		"skill_id": 291,
		"required_id": 290
	},
	{
		"skill_id": 293,
		"required_id": 292
	},
	{
		"skill_id": 294,
		"required_id": 293
	},
	{
		"skill_id": 296,
		"required_id": 295
	},
	{
		"skill_id": 297,
		"required_id": 296
	},
	{
		"skill_id": 299,
		"required_id": 298
	},
	{
		"skill_id": 300,
		"required_id": 299
	},
	{
		"skill_id": 302,
		"required_id": 301
	},
	{
		"skill_id": 303,
		"required_id": 302
	},
	{
		"skill_id": 305,
		"required_id": 304
	},
	{
		"skill_id": 306,
		"required_id": 305
	},
	{
		"skill_id": 308,
		"required_id": 307
	},
	{
		"skill_id": 309,
		"required_id": 308
	},
	{
		"skill_id": 311,
		"required_id": 310
	},
	{
		"skill_id": 312,
		"required_id": 311
	},
	{
		"skill_id": 314,
		"required_id": 313
	},
	{
		"skill_id": 315,
		"required_id": 314
	},
	{
		"skill_id": 317,
		"required_id": 316
	},
	{
		"skill_id": 318,
		"required_id": 317
	},
	{
		"skill_id": 320,
		"required_id": 319
	},
	{
		"skill_id": 321,
		"required_id": 320
	},
	{
		"skill_id": 323,
		"required_id": 322
	},
	{
		"skill_id": 324,
		"required_id": 323
	},
	{
		"skill_id": 329,
		"required_id": 328
	},
	{
		"skill_id": 330,
		"required_id": 329
	},
	{
		"skill_id": 332,
		"required_id": 331
	},
	{
		"skill_id": 333,
		"required_id": 332
	},
	{
		"skill_id": 335,
		"required_id": 334
	},
	{
		"skill_id": 336,
		"required_id": 335
	},
	{
		"skill_id": 338,
		"required_id": 337
	},
	{
		"skill_id": 339,
		"required_id": 338
	},
	{
		"skill_id": 341,
		"required_id": 340
	},
	{
		"skill_id": 342,
		"required_id": 341
	},
	{
		"skill_id": 344,
		"required_id": 343
	},
	{
		"skill_id": 345,
		"required_id": 344
	},
	{
		"skill_id": 347,
		"required_id": 346
	},
	{
		"skill_id": 348,
		"required_id": 347
	},
	{
		"skill_id": 350,
		"required_id": 349
	},
	{
		"skill_id": 351,
		"required_id": 350
	},
	{
		"skill_id": 353,
		"required_id": 352
	},
	{
		"skill_id": 354,
		"required_id": 353
	},
	{
		"skill_id": 356,
		"required_id": 355
	},
	{
		"skill_id": 357,
		"required_id": 356
	},
	{
		"skill_id": 359,
		"required_id": 358
	},
	{
		"skill_id": 360,
		"required_id": 359
	},
	{
		"skill_id": 362,
		"required_id": 361
	},
	{
		"skill_id": 363,
		"required_id": 362
	},
	{
		"skill_id": 365,
		"required_id": 364
	},
	{
		"skill_id": 366,
		"required_id": 365
	},
	{
		"skill_id": 368,
		"required_id": 367
	},
	{
		"skill_id": 369,
		"required_id": 368
	},
	{
		"skill_id": 370,
		"required_id": 329
	},
	{
		"skill_id": 370,
		"required_id": 332
	},
	{
		"skill_id": 371,
		"required_id": 335
	},
	{
		"skill_id": 371,
		"required_id": 338
	},
	{
		"skill_id": 372,
		"required_id": 341
	},
	{
		"skill_id": 372,
		"required_id": 344
	},
	{
		"skill_id": 373,
		"required_id": 347
	},
	{
		"skill_id": 373,
		"required_id": 350
	},
	{
		"skill_id": 374,
		"required_id": 329
	},
	{
		"skill_id": 374,
		"required_id": 332
	},
	{
		"skill_id": 375,
		"required_id": 335
	},
	{
		"skill_id": 375,
		"required_id": 338
	},
	{
		"skill_id": 376,
		"required_id": 341
	},
	{
		"skill_id": 376,
		"required_id": 344
	},
	{
		"skill_id": 377,
		"required_id": 347
	},
	{
		"skill_id": 377,
		"required_id": 350
	},
	{
		"skill_id": 378,
		"required_id": 329
	},
	{
		"skill_id": 378,
		"required_id": 332
	},
	{
		"skill_id": 379,
		"required_id": 335
	},
	{
		"skill_id": 379,
		"required_id": 338
	},
	{
		"skill_id": 380,
		"required_id": 341
	},
	{
		"skill_id": 380,
		"required_id": 344
	},
	{
		"skill_id": 381,
		"required_id": 347
	},
	{
		"skill_id": 381,
		"required_id": 350
	},
	{
		"skill_id": 382,
		"required_id": 335
	},
	{
		"skill_id": 382,
		"required_id": 338
	},
	{
		"skill_id": 384,
		"required_id": 226
	},
	{
		"skill_id": 384,
		"required_id": 229
	},
	{
		"skill_id": 385,
		"required_id": 384
	},
	{
		"skill_id": 386,
		"required_id": 68
	},
	{
		"skill_id": 387,
		"required_id": 386
	},
	{
		"skill_id": 388,
		"required_id": 42
	},
	{
		"skill_id": 389,
		"required_id": 388
	},
	{
		"skill_id": 390,
		"required_id": 82
	},
	{
		"skill_id": 391,
		"required_id": 390
	},
	{
		"skill_id": 392,
		"required_id": 57
	},
	{
		"skill_id": 393,
		"required_id": 392
	},
	{
		"skill_id": 394,
		"required_id": 205
	},
	{
		"skill_id": 394,
		"required_id": 211
	},
	{
		"skill_id": 395,
		"required_id": 394
	},
	{
		"skill_id": 397,
		"required_id": 396
	},
	{
		"skill_id": 398,
		"required_id": 397
	},
	{
		"skill_id": 406,
		"required_id": 405
	},
	{
		"skill_id": 407,
		"required_id": 406
	},
	{
		"skill_id": 410,
		"required_id": 409
	},
	{
		"skill_id": 411,
		"required_id": 410
	},
	{
		"skill_id": 412,
		"required_id": 103
	},
	{
		"skill_id": 413,
		"required_id": 412
	},
	{
		"skill_id": 415,
		"required_id": 414
	},
	{
		"skill_id": 416,
		"required_id": 415
	},
	{
		"skill_id": 417,
		"required_id": 3
	},
	{
		"skill_id": 418,
		"required_id": 3
	},
	{
		"skill_id": 420,
		"required_id": 419
	},
	{
		"skill_id": 421,
		"required_id": 420
	},
	{
		"skill_id": 422,
		"required_id": 346
	},
	{
		"skill_id": 422,
		"required_id": 349
	},
	{
		"skill_id": 423,
		"required_id": 422
	},
	{
		"skill_id": 424,
		"required_id": 58
	},
	{
		"skill_id": 426,
		"required_id": 425
	},
	{
		"skill_id": 427,
		"required_id": 426
	},
	{
		"skill_id": 429,
		"required_id": 428
	},
	{
		"skill_id": 430,
		"required_id": 429
	},
	{
		"skill_id": 431,
		"required_id": 3
	},
	{
		"skill_id": 432,
		"required_id": 57
	},
	{
		"skill_id": 433,
		"required_id": 432
	},
	{
		"skill_id": 435,
		"required_id": 434
	},
	{
		"skill_id": 436,
		"required_id": 435
	},
	{
		"skill_id": 437,
		"required_id": 27
	},
	{
		"skill_id": 439,
		"required_id": 438
	},
	{
		"skill_id": 440,
		"required_id": 439
	},
	{
		"skill_id": 442,
		"required_id": 441
	},
	{
		"skill_id": 443,
		"required_id": 442
	},
	{
		"skill_id": 444,
		"required_id": 82
	},
	{
		"skill_id": 445,
		"required_id": 444
	},
	{
		"skill_id": 447,
		"required_id": 446
	},
	{
		"skill_id": 448,
		"required_id": 447
	},
	{
		"skill_id": 449,
		"required_id": 3
	},
	{
		"skill_id": 450,
		"required_id": 82
	},
	{
		"skill_id": 451,
		"required_id": 450
	},
	{
		"skill_id": 452,
		"required_id": 205
	},
	{
		"skill_id": 452,
		"required_id": 214
	},
	{
		"skill_id": 453,
		"required_id": 452
	},
	{
		"skill_id": 454,
		"required_id": 69
	},
	{
		"skill_id": 456,
		"required_id": 68
	},
	{
		"skill_id": 457,
		"required_id": 456
	},
	{
		"skill_id": 459,
		"required_id": 458
	},
	{
		"skill_id": 460,
		"required_id": 459
	},
	{
		"skill_id": 461,
		"required_id": 103
	},
	{
		"skill_id": 462,
		"required_id": 461
	},
	{
		"skill_id": 463,
		"required_id": 132
	},
	{
		"skill_id": 463,
		"required_id": 133
	},
	{
		"skill_id": 464,
		"required_id": 125
	},
	{
		"skill_id": 466,
		"required_id": 465
	},
	{
		"skill_id": 467,
		"required_id": 466
	},
	{
		"skill_id": 473,
		"required_id": 26
	},
	{
		"skill_id": 473,
		"required_id": 30
	},
	{
		"skill_id": 474,
		"required_id": 473
	},
	{
		"skill_id": 476,
		"required_id": 475
	},
	{
		"skill_id": 477,
		"required_id": 476
	},
	{
		"skill_id": 478,
		"required_id": 223
	},
	{
		"skill_id": 478,
		"required_id": 229
	},
	{
		"skill_id": 479,
		"required_id": 478
	},
	{
		"skill_id": 481,
		"required_id": 480
	},
	{
		"skill_id": 482,
		"required_id": 481
	},
	{
		"skill_id": 483,
		"required_id": 68
	},
	{
		"skill_id": 484,
		"required_id": 483
	},
	{
		"skill_id": 485,
		"required_id": 134
	},
	{
		"skill_id": 485,
		"required_id": 135
	},
	{
		"skill_id": 486,
		"required_id": 346
	},
	{
		"skill_id": 487,
		"required_id": 486
	},
	{
		"skill_id": 489,
		"required_id": 488
	},
	{
		"skill_id": 490,
		"required_id": 489
	},
	{
		"skill_id": 492,
		"required_id": 491
	},
	{
		"skill_id": 493,
		"required_id": 492
	},
	{
		"skill_id": 494,
		"required_id": 42
	},
	{
		"skill_id": 495,
		"required_id": 494
	},
	{
		"skill_id": 496,
		"required_id": 103
	},
	{
		"skill_id": 497,
		"required_id": 496
	},
	{
		"skill_id": 498,
		"required_id": 115
	},
	{
		"skill_id": 499,
		"required_id": 498
	},
	{
		"skill_id": 500,
		"required_id": 253
	},
	{
		"skill_id": 500,
		"required_id": 256
	},
	{
		"skill_id": 501,
		"required_id": 500
	},
	{
		"skill_id": 502,
		"required_id": 103
	},
	{
		"skill_id": 503,
		"required_id": 502
	},
	{
		"skill_id": 505,
		"required_id": 504
	},
	{
		"skill_id": 506,
		"required_id": 505
	},
	{
		"skill_id": 507,
		"required_id": 68
	},
	{
		"skill_id": 508,
		"required_id": 507
	},
	{
		"skill_id": 510,
		"required_id": 509
	},
	{
		"skill_id": 511,
		"required_id": 510
	},
	{
		"skill_id": 512,
		"required_id": 42
	},
	{
		"skill_id": 513,
		"required_id": 512
	},
	{
		"skill_id": 514,
		"required_id": 202
	},
	{
		"skill_id": 514,
		"required_id": 211
	},
	{
		"skill_id": 515,
		"required_id": 514
	},
	{
		"skill_id": 517,
		"required_id": 516
	},
	{
		"skill_id": 518,
		"required_id": 517
	},
	{
		"skill_id": 520,
		"required_id": 519
	},
	{
		"skill_id": 521,
		"required_id": 520
	},
	{
		"skill_id": 522,
		"required_id": 83
	},
	{
		"skill_id": 523,
		"required_id": 340
	},
	{
		"skill_id": 524,
		"required_id": 523
	},
	{
		"skill_id": 525,
		"required_id": 58
	},
	{
		"skill_id": 526,
		"required_id": 232
	},
	{
		"skill_id": 527,
		"required_id": 526
	},
	{
		"skill_id": 529,
		"required_id": 528
	},
	{
		"skill_id": 530,
		"required_id": 529
	},
	{
		"skill_id": 531,
		"required_id": 2
	},
	{
		"skill_id": 532,
		"required_id": 531
	},
	{
		"skill_id": 534,
		"required_id": 533
	},
	{
		"skill_id": 535,
		"required_id": 534
	},
	{
		"skill_id": 536,
		"required_id": 103
	},
	{
		"skill_id": 537,
		"required_id": 536
	},
	{
		"skill_id": 538,
		"required_id": 2
	},
	{
		"skill_id": 539,
		"required_id": 538
	},
	{
		"skill_id": 540,
		"required_id": 202
	},
	{
		"skill_id": 541,
		"required_id": 540
	},
	{
		"skill_id": 543,
		"required_id": 542
	},
	{
		"skill_id": 544,
		"required_id": 543
	},
	{
		"skill_id": 545,
		"required_id": 68
	},
	{
		"skill_id": 546,
		"required_id": 545
	},
	{
		"skill_id": 548,
		"required_id": 547
	},
	{
		"skill_id": 549,
		"required_id": 548
	},
	{
		"skill_id": 550,
		"required_id": 68
	},
	{
		"skill_id": 551,
		"required_id": 550
	},
	{
		"skill_id": 553,
		"required_id": 552
	},
	{
		"skill_id": 554,
		"required_id": 553
	}
]

//HERO SKILLS TABLE
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Joins many-to-many relationship between heroes and their natural skills
//Rarity for many is guessed
//Make sure to include all skills and prerequisites for each hero
//I (Andy) had created a database updating tool for my own personal use that took care of this
window.data.heroSkills = [
	{
		"hero_id": 1,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 1,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 1,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 1,
		"skill_id": 18,
		"rarity": 5
	},
	{
		"hero_id": 1,
		"skill_id": 157,
		"rarity": 2
	},
	{
		"hero_id": 1,
		"skill_id": 168,
		"rarity": 4
	},
	{
		"hero_id": 1,
		"skill_id": 229,
		"rarity": 1
	},
	{
		"hero_id": 1,
		"skill_id": 230,
		"rarity": 2
	},
	{
		"hero_id": 1,
		"skill_id": 231,
		"rarity": 4
	},
	{
		"hero_id": 1,
		"skill_id": 340,
		"rarity": 3
	},
	{
		"hero_id": 1,
		"skill_id": 341,
		"rarity": 4
	},
	{
		"hero_id": 1,
		"skill_id": 342,
		"rarity": 5
	},
	{
		"hero_id": 2,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 2,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 2,
		"skill_id": 5,
		"rarity": 3
	},
	{
		"hero_id": 2,
		"skill_id": 6,
		"rarity": 5
	},
	{
		"hero_id": 2,
		"skill_id": 133,
		"rarity": 3
	},
	{
		"hero_id": 2,
		"skill_id": 226,
		"rarity": 3
	},
	{
		"hero_id": 2,
		"skill_id": 227,
		"rarity": 4
	},
	{
		"hero_id": 2,
		"skill_id": 228,
		"rarity": 5
	},
	{
		"hero_id": 2,
		"skill_id": 337,
		"rarity": 1
	},
	{
		"hero_id": 2,
		"skill_id": 338,
		"rarity": 2
	},
	{
		"hero_id": 2,
		"skill_id": 375,
		"rarity": 4
	},
	{
		"hero_id": 3,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 3,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 3,
		"skill_id": 7,
		"rarity": 3
	},
	{
		"hero_id": 3,
		"skill_id": 8,
		"rarity": 5
	},
	{
		"hero_id": 3,
		"skill_id": 189,
		"rarity": 2
	},
	{
		"hero_id": 3,
		"skill_id": 191,
		"rarity": 4
	},
	{
		"hero_id": 3,
		"skill_id": 268,
		"rarity": 1
	},
	{
		"hero_id": 3,
		"skill_id": 269,
		"rarity": 2
	},
	{
		"hero_id": 3,
		"skill_id": 270,
		"rarity": 4
	},
	{
		"hero_id": 3,
		"skill_id": 352,
		"rarity": 3
	},
	{
		"hero_id": 3,
		"skill_id": 353,
		"rarity": 4
	},
	{
		"hero_id": 3,
		"skill_id": 354,
		"rarity": 5
	},
	{
		"hero_id": 4,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 4,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 4,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 4,
		"skill_id": 17,
		"rarity": 5
	},
	{
		"hero_id": 4,
		"skill_id": 157,
		"rarity": 2
	},
	{
		"hero_id": 4,
		"skill_id": 168,
		"rarity": 4
	},
	{
		"hero_id": 4,
		"skill_id": 176,
		"rarity": 5
	},
	{
		"hero_id": 4,
		"skill_id": 241,
		"rarity": 1
	},
	{
		"hero_id": 4,
		"skill_id": 242,
		"rarity": 2
	},
	{
		"hero_id": 4,
		"skill_id": 243,
		"rarity": 4
	},
	{
		"hero_id": 4,
		"skill_id": 346,
		"rarity": 3
	},
	{
		"hero_id": 4,
		"skill_id": 347,
		"rarity": 4
	},
	{
		"hero_id": 4,
		"skill_id": 348,
		"rarity": 5
	},
	{
		"hero_id": 5,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 5,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 5,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 5,
		"skill_id": 24,
		"rarity": 5
	},
	{
		"hero_id": 5,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 5,
		"skill_id": 164,
		"rarity": 4
	},
	{
		"hero_id": 5,
		"skill_id": 211,
		"rarity": 1
	},
	{
		"hero_id": 5,
		"skill_id": 212,
		"rarity": 2
	},
	{
		"hero_id": 5,
		"skill_id": 213,
		"rarity": 4
	},
	{
		"hero_id": 5,
		"skill_id": 274,
		"rarity": 3
	},
	{
		"hero_id": 5,
		"skill_id": 275,
		"rarity": 4
	},
	{
		"hero_id": 5,
		"skill_id": 276,
		"rarity": 5
	},
	{
		"hero_id": 6,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 6,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 6,
		"skill_id": 7,
		"rarity": 3
	},
	{
		"hero_id": 6,
		"skill_id": 8,
		"rarity": 5
	},
	{
		"hero_id": 6,
		"skill_id": 189,
		"rarity": 3
	},
	{
		"hero_id": 6,
		"skill_id": 192,
		"rarity": 4
	},
	{
		"hero_id": 6,
		"skill_id": 325,
		"rarity": 3
	},
	{
		"hero_id": 6,
		"skill_id": 346,
		"rarity": 1
	},
	{
		"hero_id": 6,
		"skill_id": 347,
		"rarity": 2
	},
	{
		"hero_id": 6,
		"skill_id": 373,
		"rarity": 4
	},
	{
		"hero_id": 7,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 7,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 7,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 7,
		"skill_id": 21,
		"rarity": 5
	},
	{
		"hero_id": 7,
		"skill_id": 140,
		"rarity": 3
	},
	{
		"hero_id": 7,
		"skill_id": 327,
		"rarity": 3
	},
	{
		"hero_id": 7,
		"skill_id": 331,
		"rarity": 1
	},
	{
		"hero_id": 7,
		"skill_id": 332,
		"rarity": 2
	},
	{
		"hero_id": 7,
		"skill_id": 333,
		"rarity": 4
	},
	{
		"hero_id": 8,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 8,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 8,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 8,
		"skill_id": 19,
		"rarity": 5
	},
	{
		"hero_id": 8,
		"skill_id": 179,
		"rarity": 2
	},
	{
		"hero_id": 8,
		"skill_id": 185,
		"rarity": 4
	},
	{
		"hero_id": 8,
		"skill_id": 217,
		"rarity": 3
	},
	{
		"hero_id": 8,
		"skill_id": 218,
		"rarity": 4
	},
	{
		"hero_id": 8,
		"skill_id": 219,
		"rarity": 5
	},
	{
		"hero_id": 8,
		"skill_id": 325,
		"rarity": 3
	},
	{
		"hero_id": 9,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 9,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 9,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 9,
		"skill_id": 16,
		"rarity": 5
	},
	{
		"hero_id": 9,
		"skill_id": 190,
		"rarity": 2
	},
	{
		"hero_id": 9,
		"skill_id": 193,
		"rarity": 4
	},
	{
		"hero_id": 9,
		"skill_id": 304,
		"rarity": 3
	},
	{
		"hero_id": 9,
		"skill_id": 305,
		"rarity": 4
	},
	{
		"hero_id": 9,
		"skill_id": 306,
		"rarity": 5
	},
	{
		"hero_id": 9,
		"skill_id": 349,
		"rarity": 1
	},
	{
		"hero_id": 9,
		"skill_id": 350,
		"rarity": 2
	},
	{
		"hero_id": 9,
		"skill_id": 381,
		"rarity": 4
	},
	{
		"hero_id": 10,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 10,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 10,
		"skill_id": 9,
		"rarity": 3
	},
	{
		"hero_id": 10,
		"skill_id": 10,
		"rarity": 5
	},
	{
		"hero_id": 10,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 10,
		"skill_id": 172,
		"rarity": 4
	},
	{
		"hero_id": 10,
		"skill_id": 208,
		"rarity": 1
	},
	{
		"hero_id": 10,
		"skill_id": 209,
		"rarity": 2
	},
	{
		"hero_id": 10,
		"skill_id": 210,
		"rarity": 4
	},
	{
		"hero_id": 10,
		"skill_id": 271,
		"rarity": 3
	},
	{
		"hero_id": 10,
		"skill_id": 272,
		"rarity": 4
	},
	{
		"hero_id": 10,
		"skill_id": 273,
		"rarity": 5
	},
	{
		"hero_id": 11,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 11,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 11,
		"skill_id": 5,
		"rarity": 3
	},
	{
		"hero_id": 11,
		"skill_id": 6,
		"rarity": 5
	},
	{
		"hero_id": 11,
		"skill_id": 132,
		"rarity": 3
	},
	{
		"hero_id": 11,
		"skill_id": 220,
		"rarity": 3
	},
	{
		"hero_id": 11,
		"skill_id": 221,
		"rarity": 4
	},
	{
		"hero_id": 11,
		"skill_id": 222,
		"rarity": 5
	},
	{
		"hero_id": 11,
		"skill_id": 274,
		"rarity": 1
	},
	{
		"hero_id": 11,
		"skill_id": 275,
		"rarity": 2
	},
	{
		"hero_id": 11,
		"skill_id": 276,
		"rarity": 4
	},
	{
		"hero_id": 12,
		"skill_id": 29,
		"rarity": 1
	},
	{
		"hero_id": 12,
		"skill_id": 30,
		"rarity": 2
	},
	{
		"hero_id": 12,
		"skill_id": 35,
		"rarity": 3
	},
	{
		"hero_id": 12,
		"skill_id": 36,
		"rarity": 5
	},
	{
		"hero_id": 12,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 12,
		"skill_id": 166,
		"rarity": 4
	},
	{
		"hero_id": 12,
		"skill_id": 241,
		"rarity": 3
	},
	{
		"hero_id": 12,
		"skill_id": 242,
		"rarity": 4
	},
	{
		"hero_id": 12,
		"skill_id": 243,
		"rarity": 5
	},
	{
		"hero_id": 12,
		"skill_id": 313,
		"rarity": 1
	},
	{
		"hero_id": 12,
		"skill_id": 314,
		"rarity": 2
	},
	{
		"hero_id": 12,
		"skill_id": 315,
		"rarity": 4
	},
	{
		"hero_id": 13,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 13,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 13,
		"skill_id": 11,
		"rarity": 3
	},
	{
		"hero_id": 13,
		"skill_id": 12,
		"rarity": 5
	},
	{
		"hero_id": 13,
		"skill_id": 189,
		"rarity": 2
	},
	{
		"hero_id": 13,
		"skill_id": 192,
		"rarity": 4
	},
	{
		"hero_id": 13,
		"skill_id": 217,
		"rarity": 1
	},
	{
		"hero_id": 13,
		"skill_id": 218,
		"rarity": 2
	},
	{
		"hero_id": 13,
		"skill_id": 219,
		"rarity": 4
	},
	{
		"hero_id": 13,
		"skill_id": 289,
		"rarity": 3
	},
	{
		"hero_id": 13,
		"skill_id": 290,
		"rarity": 4
	},
	{
		"hero_id": 13,
		"skill_id": 291,
		"rarity": 5
	},
	{
		"hero_id": 14,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 14,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 14,
		"skill_id": 13,
		"rarity": 3
	},
	{
		"hero_id": 14,
		"skill_id": 14,
		"rarity": 5
	},
	{
		"hero_id": 14,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 14,
		"skill_id": 173,
		"rarity": 4
	},
	{
		"hero_id": 14,
		"skill_id": 235,
		"rarity": 3
	},
	{
		"hero_id": 14,
		"skill_id": 236,
		"rarity": 4
	},
	{
		"hero_id": 14,
		"skill_id": 237,
		"rarity": 5
	},
	{
		"hero_id": 14,
		"skill_id": 286,
		"rarity": 3
	},
	{
		"hero_id": 14,
		"skill_id": 287,
		"rarity": 4
	},
	{
		"hero_id": 14,
		"skill_id": 288,
		"rarity": 5
	},
	{
		"hero_id": 15,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 15,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 15,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 15,
		"skill_id": 4,
		"rarity": 5
	},
	{
		"hero_id": 15,
		"skill_id": 157,
		"rarity": 3
	},
	{
		"hero_id": 15,
		"skill_id": 167,
		"rarity": 4
	},
	{
		"hero_id": 15,
		"skill_id": 304,
		"rarity": 1
	},
	{
		"hero_id": 15,
		"skill_id": 305,
		"rarity": 2
	},
	{
		"hero_id": 15,
		"skill_id": 306,
		"rarity": 4
	},
	{
		"hero_id": 15,
		"skill_id": 331,
		"rarity": 3
	},
	{
		"hero_id": 15,
		"skill_id": 332,
		"rarity": 4
	},
	{
		"hero_id": 15,
		"skill_id": 333,
		"rarity": 5
	},
	{
		"hero_id": 16,
		"skill_id": 29,
		"rarity": 1
	},
	{
		"hero_id": 16,
		"skill_id": 30,
		"rarity": 2
	},
	{
		"hero_id": 16,
		"skill_id": 31,
		"rarity": 3
	},
	{
		"hero_id": 16,
		"skill_id": 39,
		"rarity": 5
	},
	{
		"hero_id": 16,
		"skill_id": 179,
		"rarity": 2
	},
	{
		"hero_id": 16,
		"skill_id": 186,
		"rarity": 4
	},
	{
		"hero_id": 16,
		"skill_id": 283,
		"rarity": 3
	},
	{
		"hero_id": 16,
		"skill_id": 284,
		"rarity": 4
	},
	{
		"hero_id": 16,
		"skill_id": 285,
		"rarity": 5
	},
	{
		"hero_id": 16,
		"skill_id": 364,
		"rarity": 3
	},
	{
		"hero_id": 16,
		"skill_id": 365,
		"rarity": 4
	},
	{
		"hero_id": 16,
		"skill_id": 366,
		"rarity": 5
	},
	{
		"hero_id": 17,
		"skill_id": 25,
		"rarity": 1
	},
	{
		"hero_id": 17,
		"skill_id": 26,
		"rarity": 2
	},
	{
		"hero_id": 17,
		"skill_id": 27,
		"rarity": 3
	},
	{
		"hero_id": 17,
		"skill_id": 28,
		"rarity": 5
	},
	{
		"hero_id": 17,
		"skill_id": 180,
		"rarity": 2
	},
	{
		"hero_id": 17,
		"skill_id": 187,
		"rarity": 4
	},
	{
		"hero_id": 17,
		"skill_id": 205,
		"rarity": 3
	},
	{
		"hero_id": 17,
		"skill_id": 206,
		"rarity": 4
	},
	{
		"hero_id": 17,
		"skill_id": 207,
		"rarity": 5
	},
	{
		"hero_id": 17,
		"skill_id": 340,
		"rarity": 1
	},
	{
		"hero_id": 17,
		"skill_id": 341,
		"rarity": 2
	},
	{
		"hero_id": 17,
		"skill_id": 342,
		"rarity": 4
	},
	{
		"hero_id": 18,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 18,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 18,
		"skill_id": 9,
		"rarity": 3
	},
	{
		"hero_id": 18,
		"skill_id": 10,
		"rarity": 5
	},
	{
		"hero_id": 18,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 18,
		"skill_id": 161,
		"rarity": 4
	},
	{
		"hero_id": 18,
		"skill_id": 208,
		"rarity": 3
	},
	{
		"hero_id": 18,
		"skill_id": 209,
		"rarity": 4
	},
	{
		"hero_id": 18,
		"skill_id": 210,
		"rarity": 5
	},
	{
		"hero_id": 18,
		"skill_id": 280,
		"rarity": 1
	},
	{
		"hero_id": 18,
		"skill_id": 281,
		"rarity": 2
	},
	{
		"hero_id": 18,
		"skill_id": 282,
		"rarity": 4
	},
	{
		"hero_id": 19,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 19,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 19,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 19,
		"skill_id": 17,
		"rarity": 5
	},
	{
		"hero_id": 19,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 19,
		"skill_id": 170,
		"rarity": 4
	},
	{
		"hero_id": 19,
		"skill_id": 176,
		"rarity": 5
	},
	{
		"hero_id": 19,
		"skill_id": 238,
		"rarity": 3
	},
	{
		"hero_id": 19,
		"skill_id": 239,
		"rarity": 4
	},
	{
		"hero_id": 19,
		"skill_id": 240,
		"rarity": 5
	},
	{
		"hero_id": 19,
		"skill_id": 340,
		"rarity": 3
	},
	{
		"hero_id": 19,
		"skill_id": 341,
		"rarity": 4
	},
	{
		"hero_id": 19,
		"skill_id": 342,
		"rarity": 5
	},
	{
		"hero_id": 20,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 20,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 20,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 20,
		"skill_id": 22,
		"rarity": 5
	},
	{
		"hero_id": 20,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 20,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 20,
		"skill_id": 175,
		"rarity": 5
	},
	{
		"hero_id": 20,
		"skill_id": 235,
		"rarity": 3
	},
	{
		"hero_id": 20,
		"skill_id": 236,
		"rarity": 4
	},
	{
		"hero_id": 20,
		"skill_id": 237,
		"rarity": 5
	},
	{
		"hero_id": 20,
		"skill_id": 343,
		"rarity": 3
	},
	{
		"hero_id": 20,
		"skill_id": 344,
		"rarity": 4
	},
	{
		"hero_id": 20,
		"skill_id": 345,
		"rarity": 5
	},
	{
		"hero_id": 21,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 21,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 21,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 21,
		"skill_id": 17,
		"rarity": 5
	},
	{
		"hero_id": 21,
		"skill_id": 140,
		"rarity": 3
	},
	{
		"hero_id": 21,
		"skill_id": 265,
		"rarity": 3
	},
	{
		"hero_id": 21,
		"skill_id": 266,
		"rarity": 4
	},
	{
		"hero_id": 21,
		"skill_id": 267,
		"rarity": 5
	},
	{
		"hero_id": 21,
		"skill_id": 343,
		"rarity": 1
	},
	{
		"hero_id": 21,
		"skill_id": 344,
		"rarity": 2
	},
	{
		"hero_id": 21,
		"skill_id": 345,
		"rarity": 4
	},
	{
		"hero_id": 22,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 22,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 22,
		"skill_id": 7,
		"rarity": 3
	},
	{
		"hero_id": 22,
		"skill_id": 8,
		"rarity": 5
	},
	{
		"hero_id": 22,
		"skill_id": 157,
		"rarity": 3
	},
	{
		"hero_id": 22,
		"skill_id": 167,
		"rarity": 4
	},
	{
		"hero_id": 22,
		"skill_id": 235,
		"rarity": 1
	},
	{
		"hero_id": 22,
		"skill_id": 236,
		"rarity": 2
	},
	{
		"hero_id": 22,
		"skill_id": 237,
		"rarity": 4
	},
	{
		"hero_id": 22,
		"skill_id": 340,
		"rarity": 3
	},
	{
		"hero_id": 22,
		"skill_id": 341,
		"rarity": 4
	},
	{
		"hero_id": 22,
		"skill_id": 342,
		"rarity": 5
	},
	{
		"hero_id": 23,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 23,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 23,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 23,
		"skill_id": 4,
		"rarity": 5
	},
	{
		"hero_id": 23,
		"skill_id": 152,
		"rarity": 3
	},
	{
		"hero_id": 23,
		"skill_id": 326,
		"rarity": 3
	},
	{
		"hero_id": 23,
		"skill_id": 328,
		"rarity": 1
	},
	{
		"hero_id": 23,
		"skill_id": 329,
		"rarity": 2
	},
	{
		"hero_id": 23,
		"skill_id": 330,
		"rarity": 4
	},
	{
		"hero_id": 24,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 24,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 24,
		"skill_id": 11,
		"rarity": 3
	},
	{
		"hero_id": 24,
		"skill_id": 12,
		"rarity": 5
	},
	{
		"hero_id": 24,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 24,
		"skill_id": 169,
		"rarity": 4
	},
	{
		"hero_id": 24,
		"skill_id": 268,
		"rarity": 3
	},
	{
		"hero_id": 24,
		"skill_id": 269,
		"rarity": 4
	},
	{
		"hero_id": 24,
		"skill_id": 270,
		"rarity": 5
	},
	{
		"hero_id": 24,
		"skill_id": 343,
		"rarity": 1
	},
	{
		"hero_id": 24,
		"skill_id": 344,
		"rarity": 2
	},
	{
		"hero_id": 24,
		"skill_id": 376,
		"rarity": 4
	},
	{
		"hero_id": 25,
		"skill_id": 29,
		"rarity": 1
	},
	{
		"hero_id": 25,
		"skill_id": 30,
		"rarity": 2
	},
	{
		"hero_id": 25,
		"skill_id": 37,
		"rarity": 3
	},
	{
		"hero_id": 25,
		"skill_id": 38,
		"rarity": 5
	},
	{
		"hero_id": 25,
		"skill_id": 132,
		"rarity": 3
	},
	{
		"hero_id": 25,
		"skill_id": 202,
		"rarity": 3
	},
	{
		"hero_id": 25,
		"skill_id": 203,
		"rarity": 4
	},
	{
		"hero_id": 25,
		"skill_id": 204,
		"rarity": 5
	},
	{
		"hero_id": 25,
		"skill_id": 262,
		"rarity": 1
	},
	{
		"hero_id": 25,
		"skill_id": 263,
		"rarity": 2
	},
	{
		"hero_id": 25,
		"skill_id": 264,
		"rarity": 4
	},
	{
		"hero_id": 26,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 26,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 26,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 26,
		"skill_id": 15,
		"rarity": 5
	},
	{
		"hero_id": 26,
		"skill_id": 142,
		"rarity": 3
	},
	{
		"hero_id": 26,
		"skill_id": 247,
		"rarity": 1
	},
	{
		"hero_id": 26,
		"skill_id": 248,
		"rarity": 2
	},
	{
		"hero_id": 26,
		"skill_id": 249,
		"rarity": 4
	},
	{
		"hero_id": 26,
		"skill_id": 259,
		"rarity": 3
	},
	{
		"hero_id": 26,
		"skill_id": 260,
		"rarity": 4
	},
	{
		"hero_id": 26,
		"skill_id": 261,
		"rarity": 5
	},
	{
		"hero_id": 27,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 27,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 27,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 27,
		"skill_id": 20,
		"rarity": 5
	},
	{
		"hero_id": 27,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 27,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 27,
		"skill_id": 235,
		"rarity": 3
	},
	{
		"hero_id": 27,
		"skill_id": 236,
		"rarity": 4
	},
	{
		"hero_id": 27,
		"skill_id": 237,
		"rarity": 5
	},
	{
		"hero_id": 27,
		"skill_id": 331,
		"rarity": 3
	},
	{
		"hero_id": 27,
		"skill_id": 332,
		"rarity": 4
	},
	{
		"hero_id": 27,
		"skill_id": 333,
		"rarity": 5
	},
	{
		"hero_id": 28,
		"skill_id": 25,
		"rarity": 1
	},
	{
		"hero_id": 28,
		"skill_id": 26,
		"rarity": 2
	},
	{
		"hero_id": 28,
		"skill_id": 27,
		"rarity": 3
	},
	{
		"hero_id": 28,
		"skill_id": 40,
		"rarity": 5
	},
	{
		"hero_id": 28,
		"skill_id": 136,
		"rarity": 3
	},
	{
		"hero_id": 28,
		"skill_id": 247,
		"rarity": 3
	},
	{
		"hero_id": 28,
		"skill_id": 248,
		"rarity": 4
	},
	{
		"hero_id": 28,
		"skill_id": 249,
		"rarity": 5
	},
	{
		"hero_id": 28,
		"skill_id": 328,
		"rarity": 3
	},
	{
		"hero_id": 28,
		"skill_id": 329,
		"rarity": 4
	},
	{
		"hero_id": 28,
		"skill_id": 330,
		"rarity": 5
	},
	{
		"hero_id": 29,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 29,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 29,
		"skill_id": 5,
		"rarity": 3
	},
	{
		"hero_id": 29,
		"skill_id": 6,
		"rarity": 5
	},
	{
		"hero_id": 29,
		"skill_id": 141,
		"rarity": 3
	},
	{
		"hero_id": 29,
		"skill_id": 247,
		"rarity": 3
	},
	{
		"hero_id": 29,
		"skill_id": 248,
		"rarity": 4
	},
	{
		"hero_id": 29,
		"skill_id": 249,
		"rarity": 5
	},
	{
		"hero_id": 29,
		"skill_id": 355,
		"rarity": 1
	},
	{
		"hero_id": 29,
		"skill_id": 356,
		"rarity": 2
	},
	{
		"hero_id": 29,
		"skill_id": 357,
		"rarity": 4
	},
	{
		"hero_id": 30,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 30,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 30,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 30,
		"skill_id": 23,
		"rarity": 5
	},
	{
		"hero_id": 30,
		"skill_id": 133,
		"rarity": 3
	},
	{
		"hero_id": 30,
		"skill_id": 202,
		"rarity": 1
	},
	{
		"hero_id": 30,
		"skill_id": 203,
		"rarity": 2
	},
	{
		"hero_id": 30,
		"skill_id": 204,
		"rarity": 4
	},
	{
		"hero_id": 30,
		"skill_id": 289,
		"rarity": 3
	},
	{
		"hero_id": 30,
		"skill_id": 290,
		"rarity": 4
	},
	{
		"hero_id": 30,
		"skill_id": 291,
		"rarity": 5
	},
	{
		"hero_id": 31,
		"skill_id": 29,
		"rarity": 1
	},
	{
		"hero_id": 31,
		"skill_id": 30,
		"rarity": 2
	},
	{
		"hero_id": 31,
		"skill_id": 31,
		"rarity": 3
	},
	{
		"hero_id": 31,
		"skill_id": 32,
		"rarity": 5
	},
	{
		"hero_id": 31,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 31,
		"skill_id": 164,
		"rarity": 4
	},
	{
		"hero_id": 31,
		"skill_id": 232,
		"rarity": 3
	},
	{
		"hero_id": 31,
		"skill_id": 233,
		"rarity": 4
	},
	{
		"hero_id": 31,
		"skill_id": 234,
		"rarity": 5
	},
	{
		"hero_id": 31,
		"skill_id": 337,
		"rarity": 1
	},
	{
		"hero_id": 31,
		"skill_id": 338,
		"rarity": 2
	},
	{
		"hero_id": 31,
		"skill_id": 339,
		"rarity": 4
	},
	{
		"hero_id": 32,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 32,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 32,
		"skill_id": 11,
		"rarity": 3
	},
	{
		"hero_id": 32,
		"skill_id": 12,
		"rarity": 5
	},
	{
		"hero_id": 32,
		"skill_id": 144,
		"rarity": 3
	},
	{
		"hero_id": 32,
		"skill_id": 211,
		"rarity": 1
	},
	{
		"hero_id": 32,
		"skill_id": 212,
		"rarity": 2
	},
	{
		"hero_id": 32,
		"skill_id": 213,
		"rarity": 4
	},
	{
		"hero_id": 32,
		"skill_id": 274,
		"rarity": 3
	},
	{
		"hero_id": 32,
		"skill_id": 275,
		"rarity": 4
	},
	{
		"hero_id": 32,
		"skill_id": 276,
		"rarity": 5
	},
	{
		"hero_id": 33,
		"skill_id": 29,
		"rarity": 1
	},
	{
		"hero_id": 33,
		"skill_id": 30,
		"rarity": 2
	},
	{
		"hero_id": 33,
		"skill_id": 33,
		"rarity": 3
	},
	{
		"hero_id": 33,
		"skill_id": 34,
		"rarity": 5
	},
	{
		"hero_id": 33,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 33,
		"skill_id": 174,
		"rarity": 4
	},
	{
		"hero_id": 33,
		"skill_id": 226,
		"rarity": 1
	},
	{
		"hero_id": 33,
		"skill_id": 227,
		"rarity": 2
	},
	{
		"hero_id": 33,
		"skill_id": 228,
		"rarity": 4
	},
	{
		"hero_id": 33,
		"skill_id": 349,
		"rarity": 3
	},
	{
		"hero_id": 33,
		"skill_id": 350,
		"rarity": 4
	},
	{
		"hero_id": 33,
		"skill_id": 351,
		"rarity": 5
	},
	{
		"hero_id": 34,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 34,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 34,
		"skill_id": 96,
		"rarity": 3
	},
	{
		"hero_id": 34,
		"skill_id": 97,
		"rarity": 5
	},
	{
		"hero_id": 34,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 34,
		"skill_id": 165,
		"rarity": 4
	},
	{
		"hero_id": 34,
		"skill_id": 235,
		"rarity": 1
	},
	{
		"hero_id": 34,
		"skill_id": 236,
		"rarity": 2
	},
	{
		"hero_id": 34,
		"skill_id": 237,
		"rarity": 4
	},
	{
		"hero_id": 34,
		"skill_id": 349,
		"rarity": 3
	},
	{
		"hero_id": 34,
		"skill_id": 350,
		"rarity": 4
	},
	{
		"hero_id": 34,
		"skill_id": 351,
		"rarity": 5
	},
	{
		"hero_id": 35,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 35,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 35,
		"skill_id": 94,
		"rarity": 3
	},
	{
		"hero_id": 35,
		"skill_id": 95,
		"rarity": 5
	},
	{
		"hero_id": 35,
		"skill_id": 180,
		"rarity": 2
	},
	{
		"hero_id": 35,
		"skill_id": 187,
		"rarity": 4
	},
	{
		"hero_id": 35,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 35,
		"skill_id": 224,
		"rarity": 4
	},
	{
		"hero_id": 35,
		"skill_id": 225,
		"rarity": 5
	},
	{
		"hero_id": 35,
		"skill_id": 367,
		"rarity": 3
	},
	{
		"hero_id": 35,
		"skill_id": 368,
		"rarity": 4
	},
	{
		"hero_id": 35,
		"skill_id": 369,
		"rarity": 5
	},
	{
		"hero_id": 36,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 36,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 36,
		"skill_id": 43,
		"rarity": 3
	},
	{
		"hero_id": 36,
		"skill_id": 55,
		"rarity": 5
	},
	{
		"hero_id": 36,
		"skill_id": 154,
		"rarity": 1
	},
	{
		"hero_id": 36,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 36,
		"skill_id": 280,
		"rarity": 3
	},
	{
		"hero_id": 36,
		"skill_id": 281,
		"rarity": 4
	},
	{
		"hero_id": 36,
		"skill_id": 282,
		"rarity": 5
	},
	{
		"hero_id": 36,
		"skill_id": 349,
		"rarity": 1
	},
	{
		"hero_id": 36,
		"skill_id": 350,
		"rarity": 2
	},
	{
		"hero_id": 36,
		"skill_id": 351,
		"rarity": 4
	},
	{
		"hero_id": 37,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 37,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 37,
		"skill_id": 47,
		"rarity": 3
	},
	{
		"hero_id": 37,
		"skill_id": 48,
		"rarity": 5
	},
	{
		"hero_id": 37,
		"skill_id": 144,
		"rarity": 3
	},
	{
		"hero_id": 37,
		"skill_id": 202,
		"rarity": 1
	},
	{
		"hero_id": 37,
		"skill_id": 203,
		"rarity": 2
	},
	{
		"hero_id": 37,
		"skill_id": 204,
		"rarity": 4
	},
	{
		"hero_id": 37,
		"skill_id": 307,
		"rarity": 3
	},
	{
		"hero_id": 37,
		"skill_id": 308,
		"rarity": 4
	},
	{
		"hero_id": 37,
		"skill_id": 309,
		"rarity": 5
	},
	{
		"hero_id": 38,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 38,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 38,
		"skill_id": 45,
		"rarity": 3
	},
	{
		"hero_id": 38,
		"skill_id": 46,
		"rarity": 5
	},
	{
		"hero_id": 38,
		"skill_id": 141,
		"rarity": 3
	},
	{
		"hero_id": 38,
		"skill_id": 326,
		"rarity": 3
	},
	{
		"hero_id": 38,
		"skill_id": 340,
		"rarity": 1
	},
	{
		"hero_id": 38,
		"skill_id": 341,
		"rarity": 2
	},
	{
		"hero_id": 38,
		"skill_id": 342,
		"rarity": 4
	},
	{
		"hero_id": 39,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 39,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 39,
		"skill_id": 49,
		"rarity": 3
	},
	{
		"hero_id": 39,
		"skill_id": 50,
		"rarity": 5
	},
	{
		"hero_id": 39,
		"skill_id": 143,
		"rarity": 3
	},
	{
		"hero_id": 39,
		"skill_id": 217,
		"rarity": 3
	},
	{
		"hero_id": 39,
		"skill_id": 218,
		"rarity": 4
	},
	{
		"hero_id": 39,
		"skill_id": 219,
		"rarity": 5
	},
	{
		"hero_id": 39,
		"skill_id": 289,
		"rarity": 1
	},
	{
		"hero_id": 39,
		"skill_id": 290,
		"rarity": 2
	},
	{
		"hero_id": 39,
		"skill_id": 291,
		"rarity": 4
	},
	{
		"hero_id": 40,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 40,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 40,
		"skill_id": 51,
		"rarity": 3
	},
	{
		"hero_id": 40,
		"skill_id": 52,
		"rarity": 5
	},
	{
		"hero_id": 40,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 40,
		"skill_id": 161,
		"rarity": 4
	},
	{
		"hero_id": 40,
		"skill_id": 241,
		"rarity": 1
	},
	{
		"hero_id": 40,
		"skill_id": 242,
		"rarity": 2
	},
	{
		"hero_id": 40,
		"skill_id": 243,
		"rarity": 4
	},
	{
		"hero_id": 40,
		"skill_id": 325,
		"rarity": 3
	},
	{
		"hero_id": 41,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 41,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 41,
		"skill_id": 45,
		"rarity": 3
	},
	{
		"hero_id": 41,
		"skill_id": 46,
		"rarity": 5
	},
	{
		"hero_id": 41,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 41,
		"skill_id": 163,
		"rarity": 4
	},
	{
		"hero_id": 41,
		"skill_id": 226,
		"rarity": 3
	},
	{
		"hero_id": 41,
		"skill_id": 227,
		"rarity": 4
	},
	{
		"hero_id": 41,
		"skill_id": 228,
		"rarity": 5
	},
	{
		"hero_id": 41,
		"skill_id": 364,
		"rarity": 1
	},
	{
		"hero_id": 41,
		"skill_id": 365,
		"rarity": 2
	},
	{
		"hero_id": 41,
		"skill_id": 366,
		"rarity": 4
	},
	{
		"hero_id": 42,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 42,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 42,
		"skill_id": 61,
		"rarity": 3
	},
	{
		"hero_id": 42,
		"skill_id": 62,
		"rarity": 5
	},
	{
		"hero_id": 42,
		"skill_id": 135,
		"rarity": 3
	},
	{
		"hero_id": 42,
		"skill_id": 205,
		"rarity": 3
	},
	{
		"hero_id": 42,
		"skill_id": 206,
		"rarity": 4
	},
	{
		"hero_id": 42,
		"skill_id": 207,
		"rarity": 5
	},
	{
		"hero_id": 42,
		"skill_id": 265,
		"rarity": 1
	},
	{
		"hero_id": 42,
		"skill_id": 266,
		"rarity": 2
	},
	{
		"hero_id": 42,
		"skill_id": 267,
		"rarity": 4
	},
	{
		"hero_id": 43,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 43,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 43,
		"skill_id": 49,
		"rarity": 3
	},
	{
		"hero_id": 43,
		"skill_id": 50,
		"rarity": 5
	},
	{
		"hero_id": 43,
		"skill_id": 140,
		"rarity": 3
	},
	{
		"hero_id": 43,
		"skill_id": 205,
		"rarity": 1
	},
	{
		"hero_id": 43,
		"skill_id": 206,
		"rarity": 2
	},
	{
		"hero_id": 43,
		"skill_id": 207,
		"rarity": 4
	},
	{
		"hero_id": 43,
		"skill_id": 334,
		"rarity": 3
	},
	{
		"hero_id": 43,
		"skill_id": 335,
		"rarity": 4
	},
	{
		"hero_id": 43,
		"skill_id": 336,
		"rarity": 5
	},
	{
		"hero_id": 44,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 44,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 44,
		"skill_id": 98,
		"rarity": 3
	},
	{
		"hero_id": 44,
		"skill_id": 99,
		"rarity": 5
	},
	{
		"hero_id": 44,
		"skill_id": 139,
		"rarity": 3
	},
	{
		"hero_id": 44,
		"skill_id": 295,
		"rarity": 1
	},
	{
		"hero_id": 44,
		"skill_id": 296,
		"rarity": 2
	},
	{
		"hero_id": 44,
		"skill_id": 297,
		"rarity": 4
	},
	{
		"hero_id": 44,
		"skill_id": 352,
		"rarity": 3
	},
	{
		"hero_id": 44,
		"skill_id": 353,
		"rarity": 4
	},
	{
		"hero_id": 44,
		"skill_id": 354,
		"rarity": 5
	},
	{
		"hero_id": 45,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 45,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 45,
		"skill_id": 49,
		"rarity": 3
	},
	{
		"hero_id": 45,
		"skill_id": 50,
		"rarity": 5
	},
	{
		"hero_id": 45,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 45,
		"skill_id": 170,
		"rarity": 4
	},
	{
		"hero_id": 45,
		"skill_id": 268,
		"rarity": 3
	},
	{
		"hero_id": 45,
		"skill_id": 269,
		"rarity": 4
	},
	{
		"hero_id": 45,
		"skill_id": 270,
		"rarity": 5
	},
	{
		"hero_id": 45,
		"skill_id": 334,
		"rarity": 1
	},
	{
		"hero_id": 45,
		"skill_id": 335,
		"rarity": 2
	},
	{
		"hero_id": 45,
		"skill_id": 336,
		"rarity": 4
	},
	{
		"hero_id": 46,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 46,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 46,
		"skill_id": 43,
		"rarity": 3
	},
	{
		"hero_id": 46,
		"skill_id": 44,
		"rarity": 5
	},
	{
		"hero_id": 46,
		"skill_id": 136,
		"rarity": 3
	},
	{
		"hero_id": 46,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 46,
		"skill_id": 224,
		"rarity": 4
	},
	{
		"hero_id": 46,
		"skill_id": 225,
		"rarity": 5
	},
	{
		"hero_id": 46,
		"skill_id": 328,
		"rarity": 1
	},
	{
		"hero_id": 46,
		"skill_id": 329,
		"rarity": 2
	},
	{
		"hero_id": 46,
		"skill_id": 378,
		"rarity": 4
	},
	{
		"hero_id": 47,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 47,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 47,
		"skill_id": 51,
		"rarity": 3
	},
	{
		"hero_id": 47,
		"skill_id": 52,
		"rarity": 5
	},
	{
		"hero_id": 47,
		"skill_id": 179,
		"rarity": 2
	},
	{
		"hero_id": 47,
		"skill_id": 185,
		"rarity": 4
	},
	{
		"hero_id": 47,
		"skill_id": 229,
		"rarity": 3
	},
	{
		"hero_id": 47,
		"skill_id": 230,
		"rarity": 4
	},
	{
		"hero_id": 47,
		"skill_id": 231,
		"rarity": 5
	},
	{
		"hero_id": 47,
		"skill_id": 352,
		"rarity": 1
	},
	{
		"hero_id": 47,
		"skill_id": 353,
		"rarity": 2
	},
	{
		"hero_id": 47,
		"skill_id": 354,
		"rarity": 4
	},
	{
		"hero_id": 48,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 48,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 48,
		"skill_id": 43,
		"rarity": 3
	},
	{
		"hero_id": 48,
		"skill_id": 53,
		"rarity": 5
	},
	{
		"hero_id": 48,
		"skill_id": 189,
		"rarity": 2
	},
	{
		"hero_id": 48,
		"skill_id": 192,
		"rarity": 4
	},
	{
		"hero_id": 48,
		"skill_id": 251,
		"rarity": 3
	},
	{
		"hero_id": 48,
		"skill_id": 340,
		"rarity": 1
	},
	{
		"hero_id": 48,
		"skill_id": 341,
		"rarity": 2
	},
	{
		"hero_id": 48,
		"skill_id": 372,
		"rarity": 4
	},
	{
		"hero_id": 49,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 49,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 49,
		"skill_id": 58,
		"rarity": 3
	},
	{
		"hero_id": 49,
		"skill_id": 66,
		"rarity": 5
	},
	{
		"hero_id": 49,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 49,
		"skill_id": 164,
		"rarity": 4
	},
	{
		"hero_id": 49,
		"skill_id": 214,
		"rarity": 3
	},
	{
		"hero_id": 49,
		"skill_id": 215,
		"rarity": 4
	},
	{
		"hero_id": 49,
		"skill_id": 216,
		"rarity": 5
	},
	{
		"hero_id": 49,
		"skill_id": 367,
		"rarity": 3
	},
	{
		"hero_id": 49,
		"skill_id": 368,
		"rarity": 4
	},
	{
		"hero_id": 49,
		"skill_id": 369,
		"rarity": 5
	},
	{
		"hero_id": 50,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 50,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 50,
		"skill_id": 58,
		"rarity": 3
	},
	{
		"hero_id": 50,
		"skill_id": 65,
		"rarity": 5
	},
	{
		"hero_id": 50,
		"skill_id": 178,
		"rarity": 2
	},
	{
		"hero_id": 50,
		"skill_id": 183,
		"rarity": 4
	},
	{
		"hero_id": 50,
		"skill_id": 202,
		"rarity": 3
	},
	{
		"hero_id": 50,
		"skill_id": 203,
		"rarity": 4
	},
	{
		"hero_id": 50,
		"skill_id": 204,
		"rarity": 5
	},
	{
		"hero_id": 50,
		"skill_id": 349,
		"rarity": 1
	},
	{
		"hero_id": 50,
		"skill_id": 350,
		"rarity": 2
	},
	{
		"hero_id": 50,
		"skill_id": 351,
		"rarity": 4
	},
	{
		"hero_id": 51,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 51,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 51,
		"skill_id": 43,
		"rarity": 3
	},
	{
		"hero_id": 51,
		"skill_id": 54,
		"rarity": 5
	},
	{
		"hero_id": 51,
		"skill_id": 190,
		"rarity": 2
	},
	{
		"hero_id": 51,
		"skill_id": 193,
		"rarity": 4
	},
	{
		"hero_id": 51,
		"skill_id": 220,
		"rarity": 3
	},
	{
		"hero_id": 51,
		"skill_id": 221,
		"rarity": 4
	},
	{
		"hero_id": 51,
		"skill_id": 222,
		"rarity": 5
	},
	{
		"hero_id": 51,
		"skill_id": 346,
		"rarity": 1
	},
	{
		"hero_id": 51,
		"skill_id": 347,
		"rarity": 2
	},
	{
		"hero_id": 51,
		"skill_id": 377,
		"rarity": 4
	},
	{
		"hero_id": 52,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 52,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 52,
		"skill_id": 47,
		"rarity": 3
	},
	{
		"hero_id": 52,
		"skill_id": 48,
		"rarity": 5
	},
	{
		"hero_id": 52,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 52,
		"skill_id": 174,
		"rarity": 4
	},
	{
		"hero_id": 52,
		"skill_id": 307,
		"rarity": 1
	},
	{
		"hero_id": 52,
		"skill_id": 308,
		"rarity": 2
	},
	{
		"hero_id": 52,
		"skill_id": 309,
		"rarity": 4
	},
	{
		"hero_id": 52,
		"skill_id": 364,
		"rarity": 3
	},
	{
		"hero_id": 52,
		"skill_id": 365,
		"rarity": 4
	},
	{
		"hero_id": 52,
		"skill_id": 366,
		"rarity": 5
	},
	{
		"hero_id": 53,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 53,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 53,
		"skill_id": 59,
		"rarity": 3
	},
	{
		"hero_id": 53,
		"skill_id": 60,
		"rarity": 5
	},
	{
		"hero_id": 53,
		"skill_id": 139,
		"rarity": 3
	},
	{
		"hero_id": 53,
		"skill_id": 214,
		"rarity": 1
	},
	{
		"hero_id": 53,
		"skill_id": 215,
		"rarity": 2
	},
	{
		"hero_id": 53,
		"skill_id": 216,
		"rarity": 4
	},
	{
		"hero_id": 53,
		"skill_id": 328,
		"rarity": 3
	},
	{
		"hero_id": 53,
		"skill_id": 329,
		"rarity": 4
	},
	{
		"hero_id": 53,
		"skill_id": 330,
		"rarity": 5
	},
	{
		"hero_id": 54,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 54,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 54,
		"skill_id": 45,
		"rarity": 3
	},
	{
		"hero_id": 54,
		"skill_id": 46,
		"rarity": 5
	},
	{
		"hero_id": 54,
		"skill_id": 157,
		"rarity": 3
	},
	{
		"hero_id": 54,
		"skill_id": 168,
		"rarity": 4
	},
	{
		"hero_id": 54,
		"skill_id": 238,
		"rarity": 1
	},
	{
		"hero_id": 54,
		"skill_id": 239,
		"rarity": 2
	},
	{
		"hero_id": 54,
		"skill_id": 240,
		"rarity": 4
	},
	{
		"hero_id": 54,
		"skill_id": 358,
		"rarity": 3
	},
	{
		"hero_id": 54,
		"skill_id": 359,
		"rarity": 4
	},
	{
		"hero_id": 54,
		"skill_id": 360,
		"rarity": 5
	},
	{
		"hero_id": 55,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 55,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 55,
		"skill_id": 63,
		"rarity": 3
	},
	{
		"hero_id": 55,
		"skill_id": 64,
		"rarity": 5
	},
	{
		"hero_id": 55,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 55,
		"skill_id": 166,
		"rarity": 4
	},
	{
		"hero_id": 55,
		"skill_id": 244,
		"rarity": 3
	},
	{
		"hero_id": 55,
		"skill_id": 245,
		"rarity": 4
	},
	{
		"hero_id": 55,
		"skill_id": 246,
		"rarity": 5
	},
	{
		"hero_id": 55,
		"skill_id": 310,
		"rarity": 1
	},
	{
		"hero_id": 55,
		"skill_id": 311,
		"rarity": 2
	},
	{
		"hero_id": 55,
		"skill_id": 312,
		"rarity": 4
	},
	{
		"hero_id": 56,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 56,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 56,
		"skill_id": 51,
		"rarity": 3
	},
	{
		"hero_id": 56,
		"skill_id": 52,
		"rarity": 5
	},
	{
		"hero_id": 56,
		"skill_id": 189,
		"rarity": 2
	},
	{
		"hero_id": 56,
		"skill_id": 191,
		"rarity": 4
	},
	{
		"hero_id": 56,
		"skill_id": 252,
		"rarity": 3
	},
	{
		"hero_id": 56,
		"skill_id": 334,
		"rarity": 1
	},
	{
		"hero_id": 56,
		"skill_id": 335,
		"rarity": 2
	},
	{
		"hero_id": 56,
		"skill_id": 371,
		"rarity": 4
	},
	{
		"hero_id": 57,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 57,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 57,
		"skill_id": 71,
		"rarity": 3
	},
	{
		"hero_id": 57,
		"skill_id": 72,
		"rarity": 5
	},
	{
		"hero_id": 57,
		"skill_id": 190,
		"rarity": 3
	},
	{
		"hero_id": 57,
		"skill_id": 194,
		"rarity": 4
	},
	{
		"hero_id": 57,
		"skill_id": 202,
		"rarity": 3
	},
	{
		"hero_id": 57,
		"skill_id": 203,
		"rarity": 4
	},
	{
		"hero_id": 57,
		"skill_id": 204,
		"rarity": 5
	},
	{
		"hero_id": 57,
		"skill_id": 301,
		"rarity": 1
	},
	{
		"hero_id": 57,
		"skill_id": 302,
		"rarity": 2
	},
	{
		"hero_id": 57,
		"skill_id": 303,
		"rarity": 4
	},
	{
		"hero_id": 58,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 58,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 58,
		"skill_id": 77,
		"rarity": 3
	},
	{
		"hero_id": 58,
		"skill_id": 78,
		"rarity": 5
	},
	{
		"hero_id": 58,
		"skill_id": 153,
		"rarity": 3
	},
	{
		"hero_id": 58,
		"skill_id": 208,
		"rarity": 3
	},
	{
		"hero_id": 58,
		"skill_id": 209,
		"rarity": 4
	},
	{
		"hero_id": 58,
		"skill_id": 210,
		"rarity": 5
	},
	{
		"hero_id": 58,
		"skill_id": 337,
		"rarity": 3
	},
	{
		"hero_id": 58,
		"skill_id": 338,
		"rarity": 4
	},
	{
		"hero_id": 58,
		"skill_id": 339,
		"rarity": 5
	},
	{
		"hero_id": 59,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 59,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 59,
		"skill_id": 75,
		"rarity": 3
	},
	{
		"hero_id": 59,
		"skill_id": 76,
		"rarity": 5
	},
	{
		"hero_id": 59,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 59,
		"skill_id": 170,
		"rarity": 4
	},
	{
		"hero_id": 59,
		"skill_id": 223,
		"rarity": 1
	},
	{
		"hero_id": 59,
		"skill_id": 224,
		"rarity": 2
	},
	{
		"hero_id": 59,
		"skill_id": 225,
		"rarity": 4
	},
	{
		"hero_id": 59,
		"skill_id": 253,
		"rarity": 3
	},
	{
		"hero_id": 59,
		"skill_id": 254,
		"rarity": 4
	},
	{
		"hero_id": 59,
		"skill_id": 255,
		"rarity": 5
	},
	{
		"hero_id": 60,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 60,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 60,
		"skill_id": 71,
		"rarity": 3
	},
	{
		"hero_id": 60,
		"skill_id": 72,
		"rarity": 5
	},
	{
		"hero_id": 60,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 60,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 60,
		"skill_id": 175,
		"rarity": 5
	},
	{
		"hero_id": 60,
		"skill_id": 247,
		"rarity": 3
	},
	{
		"hero_id": 60,
		"skill_id": 248,
		"rarity": 4
	},
	{
		"hero_id": 60,
		"skill_id": 249,
		"rarity": 5
	},
	{
		"hero_id": 60,
		"skill_id": 271,
		"rarity": 1
	},
	{
		"hero_id": 60,
		"skill_id": 272,
		"rarity": 2
	},
	{
		"hero_id": 60,
		"skill_id": 273,
		"rarity": 4
	},
	{
		"hero_id": 61,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 61,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 61,
		"skill_id": 100,
		"rarity": 3
	},
	{
		"hero_id": 61,
		"skill_id": 101,
		"rarity": 5
	},
	{
		"hero_id": 61,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 61,
		"skill_id": 163,
		"rarity": 4
	},
	{
		"hero_id": 61,
		"skill_id": 262,
		"rarity": 3
	},
	{
		"hero_id": 61,
		"skill_id": 263,
		"rarity": 4
	},
	{
		"hero_id": 61,
		"skill_id": 264,
		"rarity": 5
	},
	{
		"hero_id": 61,
		"skill_id": 328,
		"rarity": 1
	},
	{
		"hero_id": 61,
		"skill_id": 329,
		"rarity": 2
	},
	{
		"hero_id": 61,
		"skill_id": 330,
		"rarity": 4
	},
	{
		"hero_id": 62,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 62,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 62,
		"skill_id": 71,
		"rarity": 3
	},
	{
		"hero_id": 62,
		"skill_id": 72,
		"rarity": 5
	},
	{
		"hero_id": 62,
		"skill_id": 138,
		"rarity": 3
	},
	{
		"hero_id": 62,
		"skill_id": 202,
		"rarity": 1
	},
	{
		"hero_id": 62,
		"skill_id": 203,
		"rarity": 2
	},
	{
		"hero_id": 62,
		"skill_id": 204,
		"rarity": 4
	},
	{
		"hero_id": 62,
		"skill_id": 327,
		"rarity": 3
	},
	{
		"hero_id": 63,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 63,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 63,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 63,
		"skill_id": 70,
		"rarity": 5
	},
	{
		"hero_id": 63,
		"skill_id": 143,
		"rarity": 3
	},
	{
		"hero_id": 63,
		"skill_id": 229,
		"rarity": 3
	},
	{
		"hero_id": 63,
		"skill_id": 230,
		"rarity": 4
	},
	{
		"hero_id": 63,
		"skill_id": 231,
		"rarity": 5
	},
	{
		"hero_id": 63,
		"skill_id": 277,
		"rarity": 1
	},
	{
		"hero_id": 63,
		"skill_id": 278,
		"rarity": 2
	},
	{
		"hero_id": 63,
		"skill_id": 279,
		"rarity": 4
	},
	{
		"hero_id": 64,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 64,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 64,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 64,
		"skill_id": 80,
		"rarity": 5
	},
	{
		"hero_id": 64,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 64,
		"skill_id": 169,
		"rarity": 4
	},
	{
		"hero_id": 64,
		"skill_id": 259,
		"rarity": 3
	},
	{
		"hero_id": 64,
		"skill_id": 260,
		"rarity": 4
	},
	{
		"hero_id": 64,
		"skill_id": 261,
		"rarity": 5
	},
	{
		"hero_id": 64,
		"skill_id": 358,
		"rarity": 3
	},
	{
		"hero_id": 64,
		"skill_id": 359,
		"rarity": 4
	},
	{
		"hero_id": 64,
		"skill_id": 360,
		"rarity": 5
	},
	{
		"hero_id": 65,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 65,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 65,
		"skill_id": 73,
		"rarity": 3
	},
	{
		"hero_id": 65,
		"skill_id": 74,
		"rarity": 5
	},
	{
		"hero_id": 65,
		"skill_id": 142,
		"rarity": 3
	},
	{
		"hero_id": 65,
		"skill_id": 244,
		"rarity": 1
	},
	{
		"hero_id": 65,
		"skill_id": 245,
		"rarity": 2
	},
	{
		"hero_id": 65,
		"skill_id": 246,
		"rarity": 4
	},
	{
		"hero_id": 65,
		"skill_id": 256,
		"rarity": 3
	},
	{
		"hero_id": 65,
		"skill_id": 257,
		"rarity": 4
	},
	{
		"hero_id": 65,
		"skill_id": 258,
		"rarity": 5
	},
	{
		"hero_id": 66,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 66,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 66,
		"skill_id": 73,
		"rarity": 3
	},
	{
		"hero_id": 66,
		"skill_id": 74,
		"rarity": 5
	},
	{
		"hero_id": 66,
		"skill_id": 137,
		"rarity": 3
	},
	{
		"hero_id": 66,
		"skill_id": 226,
		"rarity": 3
	},
	{
		"hero_id": 66,
		"skill_id": 227,
		"rarity": 4
	},
	{
		"hero_id": 66,
		"skill_id": 228,
		"rarity": 5
	},
	{
		"hero_id": 66,
		"skill_id": 367,
		"rarity": 1
	},
	{
		"hero_id": 66,
		"skill_id": 368,
		"rarity": 2
	},
	{
		"hero_id": 66,
		"skill_id": 369,
		"rarity": 4
	},
	{
		"hero_id": 67,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 67,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 67,
		"skill_id": 75,
		"rarity": 3
	},
	{
		"hero_id": 67,
		"skill_id": 76,
		"rarity": 5
	},
	{
		"hero_id": 67,
		"skill_id": 189,
		"rarity": 2
	},
	{
		"hero_id": 67,
		"skill_id": 191,
		"rarity": 4
	},
	{
		"hero_id": 67,
		"skill_id": 327,
		"rarity": 3
	},
	{
		"hero_id": 67,
		"skill_id": 328,
		"rarity": 1
	},
	{
		"hero_id": 67,
		"skill_id": 329,
		"rarity": 2
	},
	{
		"hero_id": 67,
		"skill_id": 370,
		"rarity": 4
	},
	{
		"hero_id": 68,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 68,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 68,
		"skill_id": 71,
		"rarity": 3
	},
	{
		"hero_id": 68,
		"skill_id": 72,
		"rarity": 5
	},
	{
		"hero_id": 68,
		"skill_id": 178,
		"rarity": 2
	},
	{
		"hero_id": 68,
		"skill_id": 184,
		"rarity": 4
	},
	{
		"hero_id": 68,
		"skill_id": 241,
		"rarity": 3
	},
	{
		"hero_id": 68,
		"skill_id": 242,
		"rarity": 4
	},
	{
		"hero_id": 68,
		"skill_id": 243,
		"rarity": 5
	},
	{
		"hero_id": 68,
		"skill_id": 331,
		"rarity": 1
	},
	{
		"hero_id": 68,
		"skill_id": 332,
		"rarity": 2
	},
	{
		"hero_id": 68,
		"skill_id": 374,
		"rarity": 4
	},
	{
		"hero_id": 69,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 69,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 69,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 69,
		"skill_id": 70,
		"rarity": 5
	},
	{
		"hero_id": 69,
		"skill_id": 190,
		"rarity": 2
	},
	{
		"hero_id": 69,
		"skill_id": 194,
		"rarity": 3
	},
	{
		"hero_id": 69,
		"skill_id": 217,
		"rarity": 3
	},
	{
		"hero_id": 69,
		"skill_id": 218,
		"rarity": 4
	},
	{
		"hero_id": 69,
		"skill_id": 219,
		"rarity": 5
	},
	{
		"hero_id": 69,
		"skill_id": 337,
		"rarity": 1
	},
	{
		"hero_id": 69,
		"skill_id": 338,
		"rarity": 2
	},
	{
		"hero_id": 69,
		"skill_id": 379,
		"rarity": 4
	},
	{
		"hero_id": 70,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 70,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 70,
		"skill_id": 83,
		"rarity": 3
	},
	{
		"hero_id": 70,
		"skill_id": 91,
		"rarity": 5
	},
	{
		"hero_id": 70,
		"skill_id": 137,
		"rarity": 3
	},
	{
		"hero_id": 70,
		"skill_id": 208,
		"rarity": 3
	},
	{
		"hero_id": 70,
		"skill_id": 209,
		"rarity": 4
	},
	{
		"hero_id": 70,
		"skill_id": 210,
		"rarity": 5
	},
	{
		"hero_id": 70,
		"skill_id": 337,
		"rarity": 3
	},
	{
		"hero_id": 70,
		"skill_id": 338,
		"rarity": 4
	},
	{
		"hero_id": 70,
		"skill_id": 339,
		"rarity": 5
	},
	{
		"hero_id": 71,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 71,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 71,
		"skill_id": 98,
		"rarity": 3
	},
	{
		"hero_id": 71,
		"skill_id": 99,
		"rarity": 5
	},
	{
		"hero_id": 71,
		"skill_id": 152,
		"rarity": 3
	},
	{
		"hero_id": 71,
		"skill_id": 265,
		"rarity": 3
	},
	{
		"hero_id": 71,
		"skill_id": 266,
		"rarity": 4
	},
	{
		"hero_id": 71,
		"skill_id": 267,
		"rarity": 5
	},
	{
		"hero_id": 71,
		"skill_id": 334,
		"rarity": 1
	},
	{
		"hero_id": 71,
		"skill_id": 335,
		"rarity": 2
	},
	{
		"hero_id": 71,
		"skill_id": 382,
		"rarity": 4
	},
	{
		"hero_id": 72,
		"skill_id": 92,
		"rarity": 1
	},
	{
		"hero_id": 72,
		"skill_id": 93,
		"rarity": 2
	},
	{
		"hero_id": 72,
		"skill_id": 96,
		"rarity": 3
	},
	{
		"hero_id": 72,
		"skill_id": 97,
		"rarity": 5
	},
	{
		"hero_id": 72,
		"skill_id": 134,
		"rarity": 3
	},
	{
		"hero_id": 72,
		"skill_id": 211,
		"rarity": 3
	},
	{
		"hero_id": 72,
		"skill_id": 212,
		"rarity": 4
	},
	{
		"hero_id": 72,
		"skill_id": 213,
		"rarity": 5
	},
	{
		"hero_id": 72,
		"skill_id": 361,
		"rarity": 1
	},
	{
		"hero_id": 72,
		"skill_id": 362,
		"rarity": 2
	},
	{
		"hero_id": 72,
		"skill_id": 363,
		"rarity": 4
	},
	{
		"hero_id": 73,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 73,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 73,
		"skill_id": 73,
		"rarity": 3
	},
	{
		"hero_id": 73,
		"skill_id": 74,
		"rarity": 5
	},
	{
		"hero_id": 73,
		"skill_id": 134,
		"rarity": 3
	},
	{
		"hero_id": 73,
		"skill_id": 259,
		"rarity": 1
	},
	{
		"hero_id": 73,
		"skill_id": 260,
		"rarity": 2
	},
	{
		"hero_id": 73,
		"skill_id": 261,
		"rarity": 4
	},
	{
		"hero_id": 73,
		"skill_id": 361,
		"rarity": 3
	},
	{
		"hero_id": 73,
		"skill_id": 362,
		"rarity": 4
	},
	{
		"hero_id": 73,
		"skill_id": 363,
		"rarity": 5
	},
	{
		"hero_id": 74,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 74,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 74,
		"skill_id": 84,
		"rarity": 3
	},
	{
		"hero_id": 74,
		"skill_id": 85,
		"rarity": 5
	},
	{
		"hero_id": 74,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 74,
		"skill_id": 169,
		"rarity": 4
	},
	{
		"hero_id": 74,
		"skill_id": 235,
		"rarity": 3
	},
	{
		"hero_id": 74,
		"skill_id": 236,
		"rarity": 4
	},
	{
		"hero_id": 74,
		"skill_id": 237,
		"rarity": 5
	},
	{
		"hero_id": 74,
		"skill_id": 316,
		"rarity": 1
	},
	{
		"hero_id": 74,
		"skill_id": 317,
		"rarity": 2
	},
	{
		"hero_id": 74,
		"skill_id": 318,
		"rarity": 4
	},
	{
		"hero_id": 75,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 75,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 75,
		"skill_id": 83,
		"rarity": 3
	},
	{
		"hero_id": 75,
		"skill_id": 90,
		"rarity": 5
	},
	{
		"hero_id": 75,
		"skill_id": 141,
		"rarity": 3
	},
	{
		"hero_id": 75,
		"skill_id": 232,
		"rarity": 3
	},
	{
		"hero_id": 75,
		"skill_id": 233,
		"rarity": 4
	},
	{
		"hero_id": 75,
		"skill_id": 234,
		"rarity": 5
	},
	{
		"hero_id": 75,
		"skill_id": 349,
		"rarity": 1
	},
	{
		"hero_id": 75,
		"skill_id": 350,
		"rarity": 2
	},
	{
		"hero_id": 75,
		"skill_id": 381,
		"rarity": 4
	},
	{
		"hero_id": 76,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 76,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 76,
		"skill_id": 75,
		"rarity": 3
	},
	{
		"hero_id": 76,
		"skill_id": 76,
		"rarity": 5
	},
	{
		"hero_id": 76,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 76,
		"skill_id": 161,
		"rarity": 4
	},
	{
		"hero_id": 76,
		"skill_id": 214,
		"rarity": 3
	},
	{
		"hero_id": 76,
		"skill_id": 215,
		"rarity": 4
	},
	{
		"hero_id": 76,
		"skill_id": 216,
		"rarity": 5
	},
	{
		"hero_id": 76,
		"skill_id": 358,
		"rarity": 1
	},
	{
		"hero_id": 76,
		"skill_id": 359,
		"rarity": 2
	},
	{
		"hero_id": 76,
		"skill_id": 360,
		"rarity": 4
	},
	{
		"hero_id": 77,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 77,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 77,
		"skill_id": 83,
		"rarity": 3
	},
	{
		"hero_id": 77,
		"skill_id": 90,
		"rarity": 5
	},
	{
		"hero_id": 77,
		"skill_id": 177,
		"rarity": 2
	},
	{
		"hero_id": 77,
		"skill_id": 182,
		"rarity": 4
	},
	{
		"hero_id": 77,
		"skill_id": 280,
		"rarity": 3
	},
	{
		"hero_id": 77,
		"skill_id": 281,
		"rarity": 4
	},
	{
		"hero_id": 77,
		"skill_id": 282,
		"rarity": 5
	},
	{
		"hero_id": 77,
		"skill_id": 340,
		"rarity": 1
	},
	{
		"hero_id": 77,
		"skill_id": 341,
		"rarity": 2
	},
	{
		"hero_id": 77,
		"skill_id": 380,
		"rarity": 4
	},
	{
		"hero_id": 78,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 78,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 78,
		"skill_id": 88,
		"rarity": 3
	},
	{
		"hero_id": 78,
		"skill_id": 89,
		"rarity": 5
	},
	{
		"hero_id": 78,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 78,
		"skill_id": 165,
		"rarity": 4
	},
	{
		"hero_id": 78,
		"skill_id": 238,
		"rarity": 3
	},
	{
		"hero_id": 78,
		"skill_id": 239,
		"rarity": 4
	},
	{
		"hero_id": 78,
		"skill_id": 240,
		"rarity": 5
	},
	{
		"hero_id": 78,
		"skill_id": 346,
		"rarity": 1
	},
	{
		"hero_id": 78,
		"skill_id": 347,
		"rarity": 2
	},
	{
		"hero_id": 78,
		"skill_id": 348,
		"rarity": 4
	},
	{
		"hero_id": 79,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 79,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 79,
		"skill_id": 75,
		"rarity": 3
	},
	{
		"hero_id": 79,
		"skill_id": 76,
		"rarity": 5
	},
	{
		"hero_id": 79,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 79,
		"skill_id": 171,
		"rarity": 4
	},
	{
		"hero_id": 79,
		"skill_id": 286,
		"rarity": 1
	},
	{
		"hero_id": 79,
		"skill_id": 287,
		"rarity": 2
	},
	{
		"hero_id": 79,
		"skill_id": 288,
		"rarity": 4
	},
	{
		"hero_id": 79,
		"skill_id": 355,
		"rarity": 3
	},
	{
		"hero_id": 79,
		"skill_id": 356,
		"rarity": 4
	},
	{
		"hero_id": 79,
		"skill_id": 357,
		"rarity": 5
	},
	{
		"hero_id": 80,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 80,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 80,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 80,
		"skill_id": 79,
		"rarity": 5
	},
	{
		"hero_id": 80,
		"skill_id": 132,
		"rarity": 3
	},
	{
		"hero_id": 80,
		"skill_id": 208,
		"rarity": 1
	},
	{
		"hero_id": 80,
		"skill_id": 209,
		"rarity": 2
	},
	{
		"hero_id": 80,
		"skill_id": 210,
		"rarity": 4
	},
	{
		"hero_id": 80,
		"skill_id": 334,
		"rarity": 3
	},
	{
		"hero_id": 80,
		"skill_id": 335,
		"rarity": 4
	},
	{
		"hero_id": 80,
		"skill_id": 336,
		"rarity": 5
	},
	{
		"hero_id": 81,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 81,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 81,
		"skill_id": 77,
		"rarity": 3
	},
	{
		"hero_id": 81,
		"skill_id": 78,
		"rarity": 5
	},
	{
		"hero_id": 81,
		"skill_id": 144,
		"rarity": 3
	},
	{
		"hero_id": 81,
		"skill_id": 214,
		"rarity": 1
	},
	{
		"hero_id": 81,
		"skill_id": 215,
		"rarity": 2
	},
	{
		"hero_id": 81,
		"skill_id": 216,
		"rarity": 4
	},
	{
		"hero_id": 81,
		"skill_id": 283,
		"rarity": 3
	},
	{
		"hero_id": 81,
		"skill_id": 284,
		"rarity": 4
	},
	{
		"hero_id": 81,
		"skill_id": 285,
		"rarity": 5
	},
	{
		"hero_id": 82,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 82,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 82,
		"skill_id": 77,
		"rarity": 3
	},
	{
		"hero_id": 82,
		"skill_id": 78,
		"rarity": 5
	},
	{
		"hero_id": 82,
		"skill_id": 139,
		"rarity": 3
	},
	{
		"hero_id": 82,
		"skill_id": 301,
		"rarity": 3
	},
	{
		"hero_id": 82,
		"skill_id": 302,
		"rarity": 4
	},
	{
		"hero_id": 82,
		"skill_id": 303,
		"rarity": 5
	},
	{
		"hero_id": 82,
		"skill_id": 346,
		"rarity": 1
	},
	{
		"hero_id": 82,
		"skill_id": 347,
		"rarity": 2
	},
	{
		"hero_id": 82,
		"skill_id": 348,
		"rarity": 4
	},
	{
		"hero_id": 83,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 83,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 83,
		"skill_id": 86,
		"rarity": 3
	},
	{
		"hero_id": 83,
		"skill_id": 87,
		"rarity": 5
	},
	{
		"hero_id": 83,
		"skill_id": 177,
		"rarity": 2
	},
	{
		"hero_id": 83,
		"skill_id": 181,
		"rarity": 4
	},
	{
		"hero_id": 83,
		"skill_id": 229,
		"rarity": 3
	},
	{
		"hero_id": 83,
		"skill_id": 230,
		"rarity": 4
	},
	{
		"hero_id": 83,
		"skill_id": 231,
		"rarity": 5
	},
	{
		"hero_id": 83,
		"skill_id": 361,
		"rarity": 1
	},
	{
		"hero_id": 83,
		"skill_id": 362,
		"rarity": 2
	},
	{
		"hero_id": 83,
		"skill_id": 363,
		"rarity": 4
	},
	{
		"hero_id": 84,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 84,
		"skill_id": 129,
		"rarity": 3
	},
	{
		"hero_id": 84,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 84,
		"skill_id": 147,
		"rarity": 3
	},
	{
		"hero_id": 84,
		"skill_id": 150,
		"rarity": 4
	},
	{
		"hero_id": 84,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 84,
		"skill_id": 199,
		"rarity": 3
	},
	{
		"hero_id": 84,
		"skill_id": 352,
		"rarity": 3
	},
	{
		"hero_id": 84,
		"skill_id": 353,
		"rarity": 4
	},
	{
		"hero_id": 84,
		"skill_id": 354,
		"rarity": 5
	},
	{
		"hero_id": 85,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 85,
		"skill_id": 127,
		"rarity": 3
	},
	{
		"hero_id": 85,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 85,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 85,
		"skill_id": 150,
		"rarity": 4
	},
	{
		"hero_id": 85,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 85,
		"skill_id": 198,
		"rarity": 3
	},
	{
		"hero_id": 85,
		"skill_id": 214,
		"rarity": 3
	},
	{
		"hero_id": 85,
		"skill_id": 215,
		"rarity": 4
	},
	{
		"hero_id": 85,
		"skill_id": 216,
		"rarity": 5
	},
	{
		"hero_id": 86,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 86,
		"skill_id": 128,
		"rarity": 3
	},
	{
		"hero_id": 86,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 86,
		"skill_id": 146,
		"rarity": 2
	},
	{
		"hero_id": 86,
		"skill_id": 148,
		"rarity": 4
	},
	{
		"hero_id": 86,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 86,
		"skill_id": 197,
		"rarity": 3
	},
	{
		"hero_id": 86,
		"skill_id": 298,
		"rarity": 3
	},
	{
		"hero_id": 86,
		"skill_id": 299,
		"rarity": 4
	},
	{
		"hero_id": 86,
		"skill_id": 300,
		"rarity": 5
	},
	{
		"hero_id": 87,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 87,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 87,
		"skill_id": 116,
		"rarity": 3
	},
	{
		"hero_id": 87,
		"skill_id": 117,
		"rarity": 5
	},
	{
		"hero_id": 87,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 87,
		"skill_id": 172,
		"rarity": 4
	},
	{
		"hero_id": 87,
		"skill_id": 214,
		"rarity": 1
	},
	{
		"hero_id": 87,
		"skill_id": 215,
		"rarity": 2
	},
	{
		"hero_id": 87,
		"skill_id": 216,
		"rarity": 4
	},
	{
		"hero_id": 87,
		"skill_id": 367,
		"rarity": 3
	},
	{
		"hero_id": 87,
		"skill_id": 368,
		"rarity": 4
	},
	{
		"hero_id": 87,
		"skill_id": 369,
		"rarity": 5
	},
	{
		"hero_id": 88,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 88,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 88,
		"skill_id": 120,
		"rarity": 3
	},
	{
		"hero_id": 88,
		"skill_id": 121,
		"rarity": 5
	},
	{
		"hero_id": 88,
		"skill_id": 133,
		"rarity": 3
	},
	{
		"hero_id": 88,
		"skill_id": 235,
		"rarity": 3
	},
	{
		"hero_id": 88,
		"skill_id": 236,
		"rarity": 4
	},
	{
		"hero_id": 88,
		"skill_id": 237,
		"rarity": 5
	},
	{
		"hero_id": 88,
		"skill_id": 271,
		"rarity": 1
	},
	{
		"hero_id": 88,
		"skill_id": 272,
		"rarity": 2
	},
	{
		"hero_id": 88,
		"skill_id": 273,
		"rarity": 4
	},
	{
		"hero_id": 89,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 89,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 89,
		"skill_id": 108,
		"rarity": 3
	},
	{
		"hero_id": 89,
		"skill_id": 109,
		"rarity": 5
	},
	{
		"hero_id": 89,
		"skill_id": 142,
		"rarity": 3
	},
	{
		"hero_id": 89,
		"skill_id": 205,
		"rarity": 1
	},
	{
		"hero_id": 89,
		"skill_id": 206,
		"rarity": 2
	},
	{
		"hero_id": 89,
		"skill_id": 207,
		"rarity": 4
	},
	{
		"hero_id": 89,
		"skill_id": 280,
		"rarity": 3
	},
	{
		"hero_id": 89,
		"skill_id": 281,
		"rarity": 4
	},
	{
		"hero_id": 89,
		"skill_id": 282,
		"rarity": 5
	},
	{
		"hero_id": 90,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 90,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 90,
		"skill_id": 116,
		"rarity": 3
	},
	{
		"hero_id": 90,
		"skill_id": 124,
		"rarity": 5
	},
	{
		"hero_id": 90,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 90,
		"skill_id": 161,
		"rarity": 4
	},
	{
		"hero_id": 90,
		"skill_id": 220,
		"rarity": 3
	},
	{
		"hero_id": 90,
		"skill_id": 221,
		"rarity": 4
	},
	{
		"hero_id": 90,
		"skill_id": 222,
		"rarity": 5
	},
	{
		"hero_id": 90,
		"skill_id": 355,
		"rarity": 3
	},
	{
		"hero_id": 90,
		"skill_id": 356,
		"rarity": 4
	},
	{
		"hero_id": 90,
		"skill_id": 357,
		"rarity": 5
	},
	{
		"hero_id": 91,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 91,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 91,
		"skill_id": 116,
		"rarity": 3
	},
	{
		"hero_id": 91,
		"skill_id": 117,
		"rarity": 5
	},
	{
		"hero_id": 91,
		"skill_id": 135,
		"rarity": 3
	},
	{
		"hero_id": 91,
		"skill_id": 211,
		"rarity": 1
	},
	{
		"hero_id": 91,
		"skill_id": 212,
		"rarity": 2
	},
	{
		"hero_id": 91,
		"skill_id": 213,
		"rarity": 4
	},
	{
		"hero_id": 91,
		"skill_id": 295,
		"rarity": 3
	},
	{
		"hero_id": 91,
		"skill_id": 296,
		"rarity": 4
	},
	{
		"hero_id": 91,
		"skill_id": 297,
		"rarity": 5
	},
	{
		"hero_id": 92,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 92,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 92,
		"skill_id": 104,
		"rarity": 3
	},
	{
		"hero_id": 92,
		"skill_id": 113,
		"rarity": 5
	},
	{
		"hero_id": 92,
		"skill_id": 180,
		"rarity": 2
	},
	{
		"hero_id": 92,
		"skill_id": 188,
		"rarity": 4
	},
	{
		"hero_id": 92,
		"skill_id": 253,
		"rarity": 1
	},
	{
		"hero_id": 92,
		"skill_id": 254,
		"rarity": 2
	},
	{
		"hero_id": 92,
		"skill_id": 255,
		"rarity": 4
	},
	{
		"hero_id": 92,
		"skill_id": 343,
		"rarity": 3
	},
	{
		"hero_id": 92,
		"skill_id": 344,
		"rarity": 4
	},
	{
		"hero_id": 92,
		"skill_id": 345,
		"rarity": 5
	},
	{
		"hero_id": 93,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 93,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 93,
		"skill_id": 118,
		"rarity": 3
	},
	{
		"hero_id": 93,
		"skill_id": 119,
		"rarity": 5
	},
	{
		"hero_id": 93,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 93,
		"skill_id": 173,
		"rarity": 4
	},
	{
		"hero_id": 93,
		"skill_id": 232,
		"rarity": 3
	},
	{
		"hero_id": 93,
		"skill_id": 233,
		"rarity": 4
	},
	{
		"hero_id": 93,
		"skill_id": 234,
		"rarity": 5
	},
	{
		"hero_id": 93,
		"skill_id": 322,
		"rarity": 1
	},
	{
		"hero_id": 93,
		"skill_id": 323,
		"rarity": 2
	},
	{
		"hero_id": 93,
		"skill_id": 324,
		"rarity": 4
	},
	{
		"hero_id": 94,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 94,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 94,
		"skill_id": 108,
		"rarity": 3
	},
	{
		"hero_id": 94,
		"skill_id": 109,
		"rarity": 5
	},
	{
		"hero_id": 94,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 94,
		"skill_id": 172,
		"rarity": 4
	},
	{
		"hero_id": 94,
		"skill_id": 229,
		"rarity": 1
	},
	{
		"hero_id": 94,
		"skill_id": 230,
		"rarity": 2
	},
	{
		"hero_id": 94,
		"skill_id": 231,
		"rarity": 4
	},
	{
		"hero_id": 94,
		"skill_id": 283,
		"rarity": 3
	},
	{
		"hero_id": 94,
		"skill_id": 284,
		"rarity": 4
	},
	{
		"hero_id": 94,
		"skill_id": 285,
		"rarity": 5
	},
	{
		"hero_id": 95,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 95,
		"skill_id": 126,
		"rarity": 3
	},
	{
		"hero_id": 95,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 95,
		"skill_id": 146,
		"rarity": 2
	},
	{
		"hero_id": 95,
		"skill_id": 149,
		"rarity": 4
	},
	{
		"hero_id": 95,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 95,
		"skill_id": 199,
		"rarity": 3
	},
	{
		"hero_id": 95,
		"skill_id": 349,
		"rarity": 3
	},
	{
		"hero_id": 95,
		"skill_id": 350,
		"rarity": 4
	},
	{
		"hero_id": 95,
		"skill_id": 351,
		"rarity": 5
	},
	{
		"hero_id": 96,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 96,
		"skill_id": 128,
		"rarity": 3
	},
	{
		"hero_id": 96,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 96,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 96,
		"skill_id": 151,
		"rarity": 4
	},
	{
		"hero_id": 96,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 96,
		"skill_id": 197,
		"rarity": 3
	},
	{
		"hero_id": 96,
		"skill_id": 295,
		"rarity": 3
	},
	{
		"hero_id": 96,
		"skill_id": 296,
		"rarity": 4
	},
	{
		"hero_id": 96,
		"skill_id": 297,
		"rarity": 5
	},
	{
		"hero_id": 97,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 97,
		"skill_id": 129,
		"rarity": 3
	},
	{
		"hero_id": 97,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 97,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 97,
		"skill_id": 150,
		"rarity": 4
	},
	{
		"hero_id": 97,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 97,
		"skill_id": 201,
		"rarity": 3
	},
	{
		"hero_id": 97,
		"skill_id": 202,
		"rarity": 3
	},
	{
		"hero_id": 97,
		"skill_id": 203,
		"rarity": 4
	},
	{
		"hero_id": 97,
		"skill_id": 204,
		"rarity": 5
	},
	{
		"hero_id": 98,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 98,
		"skill_id": 130,
		"rarity": 3
	},
	{
		"hero_id": 98,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 98,
		"skill_id": 146,
		"rarity": 2
	},
	{
		"hero_id": 98,
		"skill_id": 149,
		"rarity": 4
	},
	{
		"hero_id": 98,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 98,
		"skill_id": 201,
		"rarity": 3
	},
	{
		"hero_id": 98,
		"skill_id": 337,
		"rarity": 3
	},
	{
		"hero_id": 98,
		"skill_id": 338,
		"rarity": 4
	},
	{
		"hero_id": 98,
		"skill_id": 339,
		"rarity": 5
	},
	{
		"hero_id": 99,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 99,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 99,
		"skill_id": 120,
		"rarity": 3
	},
	{
		"hero_id": 99,
		"skill_id": 121,
		"rarity": 5
	},
	{
		"hero_id": 99,
		"skill_id": 138,
		"rarity": 3
	},
	{
		"hero_id": 99,
		"skill_id": 292,
		"rarity": 3
	},
	{
		"hero_id": 99,
		"skill_id": 293,
		"rarity": 4
	},
	{
		"hero_id": 99,
		"skill_id": 294,
		"rarity": 5
	},
	{
		"hero_id": 99,
		"skill_id": 331,
		"rarity": 1
	},
	{
		"hero_id": 99,
		"skill_id": 332,
		"rarity": 2
	},
	{
		"hero_id": 99,
		"skill_id": 333,
		"rarity": 4
	},
	{
		"hero_id": 100,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 100,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 100,
		"skill_id": 110,
		"rarity": 3
	},
	{
		"hero_id": 100,
		"skill_id": 111,
		"rarity": 5
	},
	{
		"hero_id": 100,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 100,
		"skill_id": 171,
		"rarity": 4
	},
	{
		"hero_id": 100,
		"skill_id": 232,
		"rarity": 1
	},
	{
		"hero_id": 100,
		"skill_id": 233,
		"rarity": 2
	},
	{
		"hero_id": 100,
		"skill_id": 234,
		"rarity": 4
	},
	{
		"hero_id": 100,
		"skill_id": 349,
		"rarity": 3
	},
	{
		"hero_id": 100,
		"skill_id": 350,
		"rarity": 4
	},
	{
		"hero_id": 100,
		"skill_id": 351,
		"rarity": 5
	},
	{
		"hero_id": 101,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 101,
		"skill_id": 130,
		"rarity": 3
	},
	{
		"hero_id": 101,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 101,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 101,
		"skill_id": 151,
		"rarity": 4
	},
	{
		"hero_id": 101,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 101,
		"skill_id": 200,
		"rarity": 3
	},
	{
		"hero_id": 101,
		"skill_id": 346,
		"rarity": 3
	},
	{
		"hero_id": 101,
		"skill_id": 347,
		"rarity": 4
	},
	{
		"hero_id": 101,
		"skill_id": 348,
		"rarity": 5
	},
	{
		"hero_id": 102,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 102,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 102,
		"skill_id": 104,
		"rarity": 3
	},
	{
		"hero_id": 102,
		"skill_id": 105,
		"rarity": 5
	},
	{
		"hero_id": 102,
		"skill_id": 137,
		"rarity": 3
	},
	{
		"hero_id": 102,
		"skill_id": 226,
		"rarity": 1
	},
	{
		"hero_id": 102,
		"skill_id": 227,
		"rarity": 2
	},
	{
		"hero_id": 102,
		"skill_id": 228,
		"rarity": 4
	},
	{
		"hero_id": 102,
		"skill_id": 253,
		"rarity": 3
	},
	{
		"hero_id": 102,
		"skill_id": 254,
		"rarity": 4
	},
	{
		"hero_id": 102,
		"skill_id": 255,
		"rarity": 5
	},
	{
		"hero_id": 103,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 103,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 103,
		"skill_id": 122,
		"rarity": 3
	},
	{
		"hero_id": 103,
		"skill_id": 123,
		"rarity": 5
	},
	{
		"hero_id": 103,
		"skill_id": 136,
		"rarity": 3
	},
	{
		"hero_id": 103,
		"skill_id": 292,
		"rarity": 1
	},
	{
		"hero_id": 103,
		"skill_id": 293,
		"rarity": 2
	},
	{
		"hero_id": 103,
		"skill_id": 294,
		"rarity": 4
	},
	{
		"hero_id": 103,
		"skill_id": 343,
		"rarity": 3
	},
	{
		"hero_id": 103,
		"skill_id": 344,
		"rarity": 4
	},
	{
		"hero_id": 103,
		"skill_id": 345,
		"rarity": 5
	},
	{
		"hero_id": 104,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 104,
		"skill_id": 127,
		"rarity": 3
	},
	{
		"hero_id": 104,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 104,
		"skill_id": 146,
		"rarity": 2
	},
	{
		"hero_id": 104,
		"skill_id": 149,
		"rarity": 4
	},
	{
		"hero_id": 104,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 104,
		"skill_id": 200,
		"rarity": 3
	},
	{
		"hero_id": 104,
		"skill_id": 334,
		"rarity": 3
	},
	{
		"hero_id": 104,
		"skill_id": 335,
		"rarity": 4
	},
	{
		"hero_id": 104,
		"skill_id": 336,
		"rarity": 5
	},
	{
		"hero_id": 105,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 105,
		"skill_id": 126,
		"rarity": 3
	},
	{
		"hero_id": 105,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 105,
		"skill_id": 146,
		"rarity": 2
	},
	{
		"hero_id": 105,
		"skill_id": 148,
		"rarity": 4
	},
	{
		"hero_id": 105,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 105,
		"skill_id": 198,
		"rarity": 3
	},
	{
		"hero_id": 105,
		"skill_id": 328,
		"rarity": 3
	},
	{
		"hero_id": 105,
		"skill_id": 329,
		"rarity": 4
	},
	{
		"hero_id": 105,
		"skill_id": 330,
		"rarity": 5
	},
	{
		"hero_id": 106,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 106,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 106,
		"skill_id": 106,
		"rarity": 3
	},
	{
		"hero_id": 106,
		"skill_id": 107,
		"rarity": 5
	},
	{
		"hero_id": 106,
		"skill_id": 138,
		"rarity": 3
	},
	{
		"hero_id": 106,
		"skill_id": 202,
		"rarity": 3
	},
	{
		"hero_id": 106,
		"skill_id": 203,
		"rarity": 4
	},
	{
		"hero_id": 106,
		"skill_id": 204,
		"rarity": 5
	},
	{
		"hero_id": 106,
		"skill_id": 319,
		"rarity": 1
	},
	{
		"hero_id": 106,
		"skill_id": 320,
		"rarity": 2
	},
	{
		"hero_id": 106,
		"skill_id": 321,
		"rarity": 4
	},
	{
		"hero_id": 107,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 107,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 107,
		"skill_id": 104,
		"rarity": 3
	},
	{
		"hero_id": 107,
		"skill_id": 112,
		"rarity": 5
	},
	{
		"hero_id": 107,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 107,
		"skill_id": 174,
		"rarity": 4
	},
	{
		"hero_id": 107,
		"skill_id": 250,
		"rarity": 3
	},
	{
		"hero_id": 107,
		"skill_id": 355,
		"rarity": 1
	},
	{
		"hero_id": 107,
		"skill_id": 356,
		"rarity": 2
	},
	{
		"hero_id": 107,
		"skill_id": 357,
		"rarity": 4
	},
	{
		"hero_id": 108,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 108,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 108,
		"skill_id": 104,
		"rarity": 3
	},
	{
		"hero_id": 108,
		"skill_id": 105,
		"rarity": 5
	},
	{
		"hero_id": 108,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 108,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 108,
		"skill_id": 244,
		"rarity": 3
	},
	{
		"hero_id": 108,
		"skill_id": 245,
		"rarity": 4
	},
	{
		"hero_id": 108,
		"skill_id": 246,
		"rarity": 5
	},
	{
		"hero_id": 108,
		"skill_id": 256,
		"rarity": 1
	},
	{
		"hero_id": 108,
		"skill_id": 257,
		"rarity": 2
	},
	{
		"hero_id": 108,
		"skill_id": 258,
		"rarity": 4
	},
	{
		"hero_id": 109,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 109,
		"skill_id": 131,
		"rarity": 3
	},
	{
		"hero_id": 109,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 109,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 109,
		"skill_id": 151,
		"rarity": 4
	},
	{
		"hero_id": 109,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 109,
		"skill_id": 196,
		"rarity": 3
	},
	{
		"hero_id": 109,
		"skill_id": 298,
		"rarity": 3
	},
	{
		"hero_id": 109,
		"skill_id": 299,
		"rarity": 4
	},
	{
		"hero_id": 109,
		"skill_id": 300,
		"rarity": 5
	},
	{
		"hero_id": 111,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 111,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 111,
		"skill_id": 43,
		"rarity": 3
	},
	{
		"hero_id": 111,
		"skill_id": 54,
		"rarity": 5
	},
	{
		"hero_id": 111,
		"skill_id": 177,
		"rarity": 2
	},
	{
		"hero_id": 111,
		"skill_id": 182,
		"rarity": 4
	},
	{
		"hero_id": 111,
		"skill_id": 358,
		"rarity": 1
	},
	{
		"hero_id": 111,
		"skill_id": 359,
		"rarity": 2
	},
	{
		"hero_id": 111,
		"skill_id": 360,
		"rarity": 4
	},
	{
		"hero_id": 111,
		"skill_id": 383,
		"rarity": 3
	},
	{
		"hero_id": 112,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 112,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 112,
		"skill_id": 133,
		"rarity": 3
	},
	{
		"hero_id": 112,
		"skill_id": 226,
		"rarity": 1
	},
	{
		"hero_id": 112,
		"skill_id": 262,
		"rarity": 3
	},
	{
		"hero_id": 112,
		"skill_id": 263,
		"rarity": 4
	},
	{
		"hero_id": 112,
		"skill_id": 264,
		"rarity": 5
	},
	{
		"hero_id": 112,
		"skill_id": 384,
		"rarity": 2
	},
	{
		"hero_id": 112,
		"skill_id": 385,
		"rarity": 4
	},
	{
		"hero_id": 112,
		"skill_id": 390,
		"rarity": 3
	},
	{
		"hero_id": 112,
		"skill_id": 391,
		"rarity": 5
	},
	{
		"hero_id": 113,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 113,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 113,
		"skill_id": 132,
		"rarity": 3
	},
	{
		"hero_id": 113,
		"skill_id": 238,
		"rarity": 1
	},
	{
		"hero_id": 113,
		"skill_id": 239,
		"rarity": 2
	},
	{
		"hero_id": 113,
		"skill_id": 240,
		"rarity": 4
	},
	{
		"hero_id": 113,
		"skill_id": 392,
		"rarity": 3
	},
	{
		"hero_id": 113,
		"skill_id": 393,
		"rarity": 5
	},
	{
		"hero_id": 113,
		"skill_id": 400,
		"rarity": 3
	},
	{
		"hero_id": 114,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 114,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 114,
		"skill_id": 144,
		"rarity": 3
	},
	{
		"hero_id": 114,
		"skill_id": 334,
		"rarity": 1
	},
	{
		"hero_id": 114,
		"skill_id": 335,
		"rarity": 2
	},
	{
		"hero_id": 114,
		"skill_id": 336,
		"rarity": 4
	},
	{
		"hero_id": 114,
		"skill_id": 386,
		"rarity": 3
	},
	{
		"hero_id": 114,
		"skill_id": 387,
		"rarity": 5
	},
	{
		"hero_id": 114,
		"skill_id": 399,
		"rarity": 3
	},
	{
		"hero_id": 115,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 115,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 115,
		"skill_id": 142,
		"rarity": 3
	},
	{
		"hero_id": 115,
		"skill_id": 211,
		"rarity": 3
	},
	{
		"hero_id": 115,
		"skill_id": 388,
		"rarity": 3
	},
	{
		"hero_id": 115,
		"skill_id": 389,
		"rarity": 5
	},
	{
		"hero_id": 115,
		"skill_id": 394,
		"rarity": 4
	},
	{
		"hero_id": 115,
		"skill_id": 395,
		"rarity": 5
	},
	{
		"hero_id": 115,
		"skill_id": 396,
		"rarity": 3
	},
	{
		"hero_id": 115,
		"skill_id": 397,
		"rarity": 4
	},
	{
		"hero_id": 115,
		"skill_id": 398,
		"rarity": 5
	},
	{
		"hero_id": 116,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 116,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 116,
		"skill_id": 9,
		"rarity": 3
	},
	{
		"hero_id": 116,
		"skill_id": 10,
		"rarity": 5
	},
	{
		"hero_id": 116,
		"skill_id": 178,
		"rarity": 2
	},
	{
		"hero_id": 116,
		"skill_id": 184,
		"rarity": 4
	},
	{
		"hero_id": 116,
		"skill_id": 286,
		"rarity": 3
	},
	{
		"hero_id": 116,
		"skill_id": 287,
		"rarity": 4
	},
	{
		"hero_id": 116,
		"skill_id": 288,
		"rarity": 5
	},
	{
		"hero_id": 116,
		"skill_id": 355,
		"rarity": 1
	},
	{
		"hero_id": 116,
		"skill_id": 356,
		"rarity": 2
	},
	{
		"hero_id": 116,
		"skill_id": 357,
		"rarity": 4
	},
	{
		"hero_id": 117,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 117,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 117,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 117,
		"skill_id": 17,
		"rarity": 5
	},
	{
		"hero_id": 117,
		"skill_id": 155,
		"rarity": 2
	},
	{
		"hero_id": 117,
		"skill_id": 163,
		"rarity": 4
	},
	{
		"hero_id": 117,
		"skill_id": 205,
		"rarity": 3
	},
	{
		"hero_id": 117,
		"skill_id": 206,
		"rarity": 4
	},
	{
		"hero_id": 117,
		"skill_id": 207,
		"rarity": 5
	},
	{
		"hero_id": 117,
		"skill_id": 405,
		"rarity": 1
	},
	{
		"hero_id": 117,
		"skill_id": 406,
		"rarity": 2
	},
	{
		"hero_id": 117,
		"skill_id": 407,
		"rarity": 4
	},
	{
		"hero_id": 118,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 118,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 118,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 118,
		"skill_id": 70,
		"rarity": 5
	},
	{
		"hero_id": 118,
		"skill_id": 136,
		"rarity": 3
	},
	{
		"hero_id": 118,
		"skill_id": 343,
		"rarity": 1
	},
	{
		"hero_id": 118,
		"skill_id": 344,
		"rarity": 2
	},
	{
		"hero_id": 118,
		"skill_id": 345,
		"rarity": 4
	},
	{
		"hero_id": 118,
		"skill_id": 408,
		"rarity": 3
	},
	{
		"hero_id": 119,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 119,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 119,
		"skill_id": 75,
		"rarity": 3
	},
	{
		"hero_id": 119,
		"skill_id": 76,
		"rarity": 5
	},
	{
		"hero_id": 119,
		"skill_id": 190,
		"rarity": 2
	},
	{
		"hero_id": 119,
		"skill_id": 193,
		"rarity": 4
	},
	{
		"hero_id": 119,
		"skill_id": 274,
		"rarity": 3
	},
	{
		"hero_id": 119,
		"skill_id": 275,
		"rarity": 4
	},
	{
		"hero_id": 119,
		"skill_id": 276,
		"rarity": 5
	},
	{
		"hero_id": 119,
		"skill_id": 409,
		"rarity": 1
	},
	{
		"hero_id": 119,
		"skill_id": 410,
		"rarity": 2
	},
	{
		"hero_id": 119,
		"skill_id": 411,
		"rarity": 4
	},
	{
		"hero_id": 120,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 120,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 120,
		"skill_id": 157,
		"rarity": 3
	},
	{
		"hero_id": 120,
		"skill_id": 167,
		"rarity": 4
	},
	{
		"hero_id": 120,
		"skill_id": 268,
		"rarity": 3
	},
	{
		"hero_id": 120,
		"skill_id": 269,
		"rarity": 4
	},
	{
		"hero_id": 120,
		"skill_id": 270,
		"rarity": 5
	},
	{
		"hero_id": 120,
		"skill_id": 412,
		"rarity": 3
	},
	{
		"hero_id": 120,
		"skill_id": 413,
		"rarity": 5
	},
	{
		"hero_id": 120,
		"skill_id": 414,
		"rarity": 1
	},
	{
		"hero_id": 120,
		"skill_id": 415,
		"rarity": 2
	},
	{
		"hero_id": 120,
		"skill_id": 416,
		"rarity": 4
	},
	{
		"hero_id": 121,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 121,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 121,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 121,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 121,
		"skill_id": 173,
		"rarity": 4
	},
	{
		"hero_id": 121,
		"skill_id": 220,
		"rarity": 3
	},
	{
		"hero_id": 121,
		"skill_id": 221,
		"rarity": 4
	},
	{
		"hero_id": 121,
		"skill_id": 222,
		"rarity": 5
	},
	{
		"hero_id": 121,
		"skill_id": 277,
		"rarity": 1
	},
	{
		"hero_id": 121,
		"skill_id": 278,
		"rarity": 2
	},
	{
		"hero_id": 121,
		"skill_id": 279,
		"rarity": 4
	},
	{
		"hero_id": 121,
		"skill_id": 417,
		"rarity": 5
	},
	{
		"hero_id": 123,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 123,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 123,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 123,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 123,
		"skill_id": 170,
		"rarity": 4
	},
	{
		"hero_id": 123,
		"skill_id": 176,
		"rarity": 5
	},
	{
		"hero_id": 123,
		"skill_id": 301,
		"rarity": 3
	},
	{
		"hero_id": 123,
		"skill_id": 302,
		"rarity": 4
	},
	{
		"hero_id": 123,
		"skill_id": 303,
		"rarity": 5
	},
	{
		"hero_id": 123,
		"skill_id": 418,
		"rarity": 5
	},
	{
		"hero_id": 123,
		"skill_id": 419,
		"rarity": 1
	},
	{
		"hero_id": 123,
		"skill_id": 420,
		"rarity": 2
	},
	{
		"hero_id": 123,
		"skill_id": 421,
		"rarity": 4
	},
	{
		"hero_id": 124,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 124,
		"skill_id": 131,
		"rarity": 3
	},
	{
		"hero_id": 124,
		"skill_id": 145,
		"rarity": 3
	},
	{
		"hero_id": 124,
		"skill_id": 146,
		"rarity": 3
	},
	{
		"hero_id": 124,
		"skill_id": 148,
		"rarity": 3
	},
	{
		"hero_id": 124,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 124,
		"skill_id": 201,
		"rarity": 4
	},
	{
		"hero_id": 124,
		"skill_id": 349,
		"rarity": 3
	},
	{
		"hero_id": 124,
		"skill_id": 422,
		"rarity": 4
	},
	{
		"hero_id": 124,
		"skill_id": 423,
		"rarity": 5
	},
	{
		"hero_id": 125,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 125,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 125,
		"skill_id": 58,
		"rarity": 3
	},
	{
		"hero_id": 125,
		"skill_id": 178,
		"rarity": 2
	},
	{
		"hero_id": 125,
		"skill_id": 183,
		"rarity": 4
	},
	{
		"hero_id": 125,
		"skill_id": 337,
		"rarity": 3
	},
	{
		"hero_id": 125,
		"skill_id": 338,
		"rarity": 4
	},
	{
		"hero_id": 125,
		"skill_id": 339,
		"rarity": 5
	},
	{
		"hero_id": 125,
		"skill_id": 424,
		"rarity": 5
	},
	{
		"hero_id": 125,
		"skill_id": 428,
		"rarity": 1
	},
	{
		"hero_id": 125,
		"skill_id": 429,
		"rarity": 2
	},
	{
		"hero_id": 125,
		"skill_id": 430,
		"rarity": 4
	},
	{
		"hero_id": 126,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 126,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 126,
		"skill_id": 47,
		"rarity": 3
	},
	{
		"hero_id": 126,
		"skill_id": 48,
		"rarity": 5
	},
	{
		"hero_id": 126,
		"skill_id": 138,
		"rarity": 3
	},
	{
		"hero_id": 126,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 126,
		"skill_id": 224,
		"rarity": 4
	},
	{
		"hero_id": 126,
		"skill_id": 225,
		"rarity": 5
	},
	{
		"hero_id": 126,
		"skill_id": 425,
		"rarity": 1
	},
	{
		"hero_id": 126,
		"skill_id": 426,
		"rarity": 2
	},
	{
		"hero_id": 126,
		"skill_id": 427,
		"rarity": 4
	},
	{
		"hero_id": 127,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 127,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 127,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 127,
		"skill_id": 179,
		"rarity": 2
	},
	{
		"hero_id": 127,
		"skill_id": 186,
		"rarity": 4
	},
	{
		"hero_id": 127,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 127,
		"skill_id": 224,
		"rarity": 4
	},
	{
		"hero_id": 127,
		"skill_id": 225,
		"rarity": 5
	},
	{
		"hero_id": 127,
		"skill_id": 346,
		"rarity": 3
	},
	{
		"hero_id": 127,
		"skill_id": 347,
		"rarity": 4
	},
	{
		"hero_id": 127,
		"skill_id": 348,
		"rarity": 5
	},
	{
		"hero_id": 127,
		"skill_id": 431,
		"rarity": 5
	},
	{
		"hero_id": 128,
		"skill_id": 56,
		"rarity": 1
	},
	{
		"hero_id": 128,
		"skill_id": 57,
		"rarity": 2
	},
	{
		"hero_id": 128,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 128,
		"skill_id": 166,
		"rarity": 4
	},
	{
		"hero_id": 128,
		"skill_id": 295,
		"rarity": 3
	},
	{
		"hero_id": 128,
		"skill_id": 296,
		"rarity": 4
	},
	{
		"hero_id": 128,
		"skill_id": 297,
		"rarity": 5
	},
	{
		"hero_id": 128,
		"skill_id": 432,
		"rarity": 3
	},
	{
		"hero_id": 128,
		"skill_id": 433,
		"rarity": 5
	},
	{
		"hero_id": 128,
		"skill_id": 434,
		"rarity": 1
	},
	{
		"hero_id": 128,
		"skill_id": 435,
		"rarity": 2
	},
	{
		"hero_id": 128,
		"skill_id": 436,
		"rarity": 4
	},
	{
		"hero_id": 129,
		"skill_id": 25,
		"rarity": 1
	},
	{
		"hero_id": 129,
		"skill_id": 26,
		"rarity": 2
	},
	{
		"hero_id": 129,
		"skill_id": 27,
		"rarity": 3
	},
	{
		"hero_id": 129,
		"skill_id": 179,
		"rarity": 2
	},
	{
		"hero_id": 129,
		"skill_id": 186,
		"rarity": 4
	},
	{
		"hero_id": 129,
		"skill_id": 346,
		"rarity": 3
	},
	{
		"hero_id": 129,
		"skill_id": 347,
		"rarity": 4
	},
	{
		"hero_id": 129,
		"skill_id": 348,
		"rarity": 5
	},
	{
		"hero_id": 129,
		"skill_id": 437,
		"rarity": 5
	},
	{
		"hero_id": 129,
		"skill_id": 438,
		"rarity": 1
	},
	{
		"hero_id": 129,
		"skill_id": 439,
		"rarity": 2
	},
	{
		"hero_id": 129,
		"skill_id": 440,
		"rarity": 4
	},
	{
		"hero_id": 130,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 130,
		"skill_id": 128,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 145,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 146,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 149,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 196,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 441,
		"rarity": 3
	},
	{
		"hero_id": 130,
		"skill_id": 442,
		"rarity": 4
	},
	{
		"hero_id": 130,
		"skill_id": 443,
		"rarity": 5
	},
	{
		"hero_id": 131,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 131,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 131,
		"skill_id": 139,
		"rarity": 3
	},
	{
		"hero_id": 131,
		"skill_id": 286,
		"rarity": 3
	},
	{
		"hero_id": 131,
		"skill_id": 287,
		"rarity": 4
	},
	{
		"hero_id": 131,
		"skill_id": 288,
		"rarity": 5
	},
	{
		"hero_id": 131,
		"skill_id": 444,
		"rarity": 3
	},
	{
		"hero_id": 131,
		"skill_id": 445,
		"rarity": 5
	},
	{
		"hero_id": 131,
		"skill_id": 446,
		"rarity": 1
	},
	{
		"hero_id": 131,
		"skill_id": 447,
		"rarity": 2
	},
	{
		"hero_id": 131,
		"skill_id": 448,
		"rarity": 4
	},
	{
		"hero_id": 132,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 132,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 132,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 132,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 132,
		"skill_id": 171,
		"rarity": 4
	},
	{
		"hero_id": 132,
		"skill_id": 271,
		"rarity": 1
	},
	{
		"hero_id": 132,
		"skill_id": 272,
		"rarity": 2
	},
	{
		"hero_id": 132,
		"skill_id": 273,
		"rarity": 4
	},
	{
		"hero_id": 132,
		"skill_id": 352,
		"rarity": 3
	},
	{
		"hero_id": 132,
		"skill_id": 353,
		"rarity": 4
	},
	{
		"hero_id": 132,
		"skill_id": 354,
		"rarity": 5
	},
	{
		"hero_id": 132,
		"skill_id": 449,
		"rarity": 5
	},
	{
		"hero_id": 133,
		"skill_id": 81,
		"rarity": 1
	},
	{
		"hero_id": 133,
		"skill_id": 82,
		"rarity": 2
	},
	{
		"hero_id": 133,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 133,
		"skill_id": 171,
		"rarity": 4
	},
	{
		"hero_id": 133,
		"skill_id": 214,
		"rarity": 3
	},
	{
		"hero_id": 133,
		"skill_id": 331,
		"rarity": 3
	},
	{
		"hero_id": 133,
		"skill_id": 332,
		"rarity": 4
	},
	{
		"hero_id": 133,
		"skill_id": 333,
		"rarity": 5
	},
	{
		"hero_id": 133,
		"skill_id": 450,
		"rarity": 3
	},
	{
		"hero_id": 133,
		"skill_id": 451,
		"rarity": 5
	},
	{
		"hero_id": 133,
		"skill_id": 452,
		"rarity": 4
	},
	{
		"hero_id": 133,
		"skill_id": 453,
		"rarity": 5
	},
	{
		"hero_id": 134,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 134,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 134,
		"skill_id": 69,
		"rarity": 3
	},
	{
		"hero_id": 134,
		"skill_id": 177,
		"rarity": 2
	},
	{
		"hero_id": 134,
		"skill_id": 181,
		"rarity": 4
	},
	{
		"hero_id": 134,
		"skill_id": 340,
		"rarity": 3
	},
	{
		"hero_id": 134,
		"skill_id": 341,
		"rarity": 4
	},
	{
		"hero_id": 134,
		"skill_id": 342,
		"rarity": 5
	},
	{
		"hero_id": 134,
		"skill_id": 454,
		"rarity": 5
	},
	{
		"hero_id": 134,
		"skill_id": 455,
		"rarity": 3
	},
	{
		"hero_id": 135,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 135,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 135,
		"skill_id": 143,
		"rarity": 3
	},
	{
		"hero_id": 135,
		"skill_id": 352,
		"rarity": 3
	},
	{
		"hero_id": 135,
		"skill_id": 353,
		"rarity": 4
	},
	{
		"hero_id": 135,
		"skill_id": 354,
		"rarity": 5
	},
	{
		"hero_id": 135,
		"skill_id": 456,
		"rarity": 3
	},
	{
		"hero_id": 135,
		"skill_id": 457,
		"rarity": 5
	},
	{
		"hero_id": 135,
		"skill_id": 458,
		"rarity": 3
	},
	{
		"hero_id": 135,
		"skill_id": 459,
		"rarity": 4
	},
	{
		"hero_id": 135,
		"skill_id": 460,
		"rarity": 5
	},
	{
		"hero_id": 136,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 136,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 136,
		"skill_id": 132,
		"rarity": 3
	},
	{
		"hero_id": 136,
		"skill_id": 265,
		"rarity": 3
	},
	{
		"hero_id": 136,
		"skill_id": 266,
		"rarity": 4
	},
	{
		"hero_id": 136,
		"skill_id": 267,
		"rarity": 5
	},
	{
		"hero_id": 136,
		"skill_id": 367,
		"rarity": 3
	},
	{
		"hero_id": 136,
		"skill_id": 368,
		"rarity": 4
	},
	{
		"hero_id": 136,
		"skill_id": 369,
		"rarity": 5
	},
	{
		"hero_id": 136,
		"skill_id": 461,
		"rarity": 3
	},
	{
		"hero_id": 136,
		"skill_id": 462,
		"rarity": 5
	},
	{
		"hero_id": 136,
		"skill_id": 463,
		"rarity": 3
	},
	{
		"hero_id": 137,
		"skill_id": 125,
		"rarity": 1
	},
	{
		"hero_id": 137,
		"skill_id": 145,
		"rarity": 1
	},
	{
		"hero_id": 137,
		"skill_id": 147,
		"rarity": 2
	},
	{
		"hero_id": 137,
		"skill_id": 151,
		"rarity": 4
	},
	{
		"hero_id": 137,
		"skill_id": 195,
		"rarity": 2
	},
	{
		"hero_id": 137,
		"skill_id": 198,
		"rarity": 3
	},
	{
		"hero_id": 137,
		"skill_id": 464,
		"rarity": 3
	},
	{
		"hero_id": 137,
		"skill_id": 465,
		"rarity": 3
	},
	{
		"hero_id": 137,
		"skill_id": 466,
		"rarity": 4
	},
	{
		"hero_id": 137,
		"skill_id": 467,
		"rarity": 5
	},
	{
		"hero_id": 138,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 138,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 138,
		"skill_id": 3,
		"rarity": 3
	},
	{
		"hero_id": 138,
		"skill_id": 17,
		"rarity": 5
	},
	{
		"hero_id": 139,
		"skill_id": 25,
		"rarity": 1
	},
	{
		"hero_id": 139,
		"skill_id": 26,
		"rarity": 2
	},
	{
		"hero_id": 139,
		"skill_id": 159,
		"rarity": 2
	},
	{
		"hero_id": 139,
		"skill_id": 172,
		"rarity": 4
	},
	{
		"hero_id": 139,
		"skill_id": 229,
		"rarity": 3
	},
	{
		"hero_id": 139,
		"skill_id": 384,
		"rarity": 4
	},
	{
		"hero_id": 139,
		"skill_id": 385,
		"rarity": 5
	},
	{
		"hero_id": 139,
		"skill_id": 473,
		"rarity": 3
	},
	{
		"hero_id": 139,
		"skill_id": 474,
		"rarity": 5
	},
	{
		"hero_id": 139,
		"skill_id": 475,
		"rarity": 3
	},
	{
		"hero_id": 139,
		"skill_id": 476,
		"rarity": 4
	},
	{
		"hero_id": 139,
		"skill_id": 477,
		"rarity": 5
	},
	{
		"hero_id": 140,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 140,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 140,
		"skill_id": 13,
		"rarity": 3
	},
	{
		"hero_id": 140,
		"skill_id": 14,
		"rarity": 5
	},
	{
		"hero_id": 140,
		"skill_id": 158,
		"rarity": 2
	},
	{
		"hero_id": 140,
		"skill_id": 169,
		"rarity": 4
	},
	{
		"hero_id": 140,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 140,
		"skill_id": 478,
		"rarity": 4
	},
	{
		"hero_id": 140,
		"skill_id": 479,
		"rarity": 5
	},
	{
		"hero_id": 140,
		"skill_id": 480,
		"rarity": 3
	},
	{
		"hero_id": 140,
		"skill_id": 481,
		"rarity": 3
	},
	{
		"hero_id": 140,
		"skill_id": 482,
		"rarity": 4
	},
	{
		"hero_id": 141,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 141,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 141,
		"skill_id": 134,
		"rarity": 3
	},
	{
		"hero_id": 141,
		"skill_id": 327,
		"rarity": 3
	},
	{
		"hero_id": 141,
		"skill_id": 346,
		"rarity": 3
	},
	{
		"hero_id": 141,
		"skill_id": 483,
		"rarity": 3
	},
	{
		"hero_id": 141,
		"skill_id": 484,
		"rarity": 5
	},
	{
		"hero_id": 141,
		"skill_id": 485,
		"rarity": 3
	},
	{
		"hero_id": 141,
		"skill_id": 486,
		"rarity": 4
	},
	{
		"hero_id": 141,
		"skill_id": 487,
		"rarity": 5
	},
	{
		"hero_id": 142,
		"skill_id": 1,
		"rarity": 1
	},
	{
		"hero_id": 142,
		"skill_id": 2,
		"rarity": 2
	},
	{
		"hero_id": 142,
		"skill_id": 7,
		"rarity": 3
	},
	{
		"hero_id": 142,
		"skill_id": 8,
		"rarity": 5
	},
	{
		"hero_id": 142,
		"skill_id": 156,
		"rarity": 2
	},
	{
		"hero_id": 142,
		"skill_id": 165,
		"rarity": 4
	},
	{
		"hero_id": 142,
		"skill_id": 488,
		"rarity": 3
	},
	{
		"hero_id": 142,
		"skill_id": 489,
		"rarity": 4
	},
	{
		"hero_id": 142,
		"skill_id": 490,
		"rarity": 5
	},
	{
		"hero_id": 142,
		"skill_id": 491,
		"rarity": 3
	},
	{
		"hero_id": 142,
		"skill_id": 492,
		"rarity": 4
	},
	{
		"hero_id": 142,
		"skill_id": 493,
		"rarity": 5
	},
	{
		"hero_id": 143,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 143,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 143,
		"skill_id": 160,
		"rarity": 2
	},
	{
		"hero_id": 143,
		"skill_id": 173,
		"rarity": 4
	},
	{
		"hero_id": 143,
		"skill_id": 217,
		"rarity": 3
	},
	{
		"hero_id": 143,
		"skill_id": 218,
		"rarity": 4
	},
	{
		"hero_id": 143,
		"skill_id": 219,
		"rarity": 5
	},
	{
		"hero_id": 143,
		"skill_id": 274,
		"rarity": 1
	},
	{
		"hero_id": 143,
		"skill_id": 275,
		"rarity": 2
	},
	{
		"hero_id": 143,
		"skill_id": 276,
		"rarity": 4
	},
	{
		"hero_id": 143,
		"skill_id": 494,
		"rarity": 3
	},
	{
		"hero_id": 143,
		"skill_id": 495,
		"rarity": 5
	},
	{
		"hero_id": 144,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 144,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 144,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 144,
		"skill_id": 161,
		"rarity": 4
	},
	{
		"hero_id": 144,
		"skill_id": 292,
		"rarity": 1
	},
	{
		"hero_id": 144,
		"skill_id": 293,
		"rarity": 2
	},
	{
		"hero_id": 144,
		"skill_id": 294,
		"rarity": 4
	},
	{
		"hero_id": 144,
		"skill_id": 358,
		"rarity": 3
	},
	{
		"hero_id": 144,
		"skill_id": 359,
		"rarity": 4
	},
	{
		"hero_id": 144,
		"skill_id": 360,
		"rarity": 5
	},
	{
		"hero_id": 144,
		"skill_id": 496,
		"rarity": 3
	},
	{
		"hero_id": 144,
		"skill_id": 497,
		"rarity": 5
	},
	{
		"hero_id": 145,
		"skill_id": 114,
		"rarity": 1
	},
	{
		"hero_id": 145,
		"skill_id": 115,
		"rarity": 2
	},
	{
		"hero_id": 145,
		"skill_id": 137,
		"rarity": 3
	},
	{
		"hero_id": 145,
		"skill_id": 223,
		"rarity": 3
	},
	{
		"hero_id": 145,
		"skill_id": 224,
		"rarity": 4
	},
	{
		"hero_id": 145,
		"skill_id": 225,
		"rarity": 5
	},
	{
		"hero_id": 145,
		"skill_id": 253,
		"rarity": 3
	},
	{
		"hero_id": 145,
		"skill_id": 498,
		"rarity": 3
	},
	{
		"hero_id": 145,
		"skill_id": 499,
		"rarity": 5
	},
	{
		"hero_id": 145,
		"skill_id": 500,
		"rarity": 4
	},
	{
		"hero_id": 145,
		"skill_id": 501,
		"rarity": 5
	},
	{
		"hero_id": 146,
		"skill_id": 102,
		"rarity": 1
	},
	{
		"hero_id": 146,
		"skill_id": 103,
		"rarity": 2
	},
	{
		"hero_id": 146,
		"skill_id": 154,
		"rarity": 2
	},
	{
		"hero_id": 146,
		"skill_id": 162,
		"rarity": 4
	},
	{
		"hero_id": 146,
		"skill_id": 280,
		"rarity": 3
	},
	{
		"hero_id": 146,
		"skill_id": 281,
		"rarity": 4
	},
	{
		"hero_id": 146,
		"skill_id": 282,
		"rarity": 5
	},
	{
		"hero_id": 146,
		"skill_id": 502,
		"rarity": 3
	},
	{
		"hero_id": 146,
		"skill_id": 503,
		"rarity": 5
	},
	{
		"hero_id": 146,
		"skill_id": 504,
		"rarity": 3
	},
	{
		"hero_id": 146,
		"skill_id": 505,
		"rarity": 4
	},
	{
		"hero_id": 146,
		"skill_id": 506,
		"rarity": 5
	},
	{
		"hero_id": 147,
		"skill_id": 67,
		"rarity": 1
	},
	{
		"hero_id": 147,
		"skill_id": 68,
		"rarity": 2
	},
	{
		"hero_id": 147,
		"skill_id": 141,
		"rarity": 3
	},
	{
		"hero_id": 147,
		"skill_id": 211,
		"rarity": 3
	},
	{
		"hero_id": 147,
		"skill_id": 507,
		"rarity": 3
	},
	{
		"hero_id": 147,
		"skill_id": 508,
		"rarity": 5
	},
	{
		"hero_id": 147,
		"skill_id": 509,
		"rarity": 3
	},
	{
		"hero_id": 147,
		"skill_id": 510,
		"rarity": 3
	},
	{
		"hero_id": 147,
		"skill_id": 511,
		"rarity": 4
	},
	{
		"hero_id": 147,
		"skill_id": 514,
		"rarity": 4
	},
	{
		"hero_id": 147,
		"skill_id": 515,
		"rarity": 5
	},
	{
		"hero_id": 148,
		"skill_id": 41,
		"rarity": 1
	},
	{
		"hero_id": 148,
		"skill_id": 42,
		"rarity": 2
	},
	{
		"hero_id": 148,
		"skill_id": 157,
		"rarity": 2
	},
	{
		"hero_id": 148,
		"skill_id": 168,
		"rarity": 4
	},
	{
		"hero_id": 148,
		"skill_id": 512,
		"rarity": 3
	},
	{
		"hero_id": 148,
		"skill_id": 513,
		"rarity": 5
	},
	{
		"hero_id": 148,
		"skill_id": 516,
		"rarity": 3
	},
	{
		"hero_id": 148,
		"skill_id": 517,
		"rarity": 4
	},
	{
		"hero_id": 148,
		"skill_id": 518,
		"rarity": 5
	},
	{
		"hero_id": 148,
		"skill_id": 519,
		"rarity": 3
	},
	{
		"hero_id": 148,
		"skill_id": 520,
		"rarity": 3
	},
	{
		"hero_id": 148,
		"skill_id": 521,
		"rarity": 4
	},
	{
		"hero_id": 149,
		"skill_id": 1, 
		"rarity": 1
	},
	{
		"hero_id": 149,
		"skill_id": 5, 
		"rarity": 4
	},
	{
		"hero_id": 149,
		"skill_id": 6, 
		"rarity": 5
	},
	{
		"hero_id": 149,
		"skill_id": 140, 
		"rarity": 4
	},
	{
		"hero_id": 149,
		"skill_id": 207, 
		"rarity": 4
	},
	{
		"hero_id": 149,
		"skill_id": 257, 
		"rarity": 4
	},
	{
		"hero_id": 149,
		"skill_id": 258, 
		"rarity": 5
	},
	{
		"hero_id": 150,
		"skill_id": 201, 
		"rarity": 5
	},
	{
		"hero_id": 150,
		"skill_id": 231, 
		"rarity": 5
	},
	{
		"hero_id": 150,
		"skill_id": 522, 
		"rarity": 5
	},
	{
		"hero_id": 150,
		"skill_id": 524, 
		"rarity": 5
	},
	{
		"hero_id": 151,
		"skill_id": 169, 
		"rarity": 5
	},
	{
		"hero_id": 151,
		"skill_id": 525, 
		"rarity": 5
	},
	{
		"hero_id": 151,
		"skill_id": 527, 
		"rarity": 5
	},
	{
		"hero_id": 151,
		"skill_id": 530, 
		"rarity": 5
	},
	{
		"hero_id": 152,
		"skill_id": 144, 
		"rarity": 5
	},
	{
		"hero_id": 152,
		"skill_id": 460, 
		"rarity": 5
	},
	{
		"hero_id": 152,
		"skill_id": 532, 
		"rarity": 5
	},
	{
		"hero_id": 152,
		"skill_id": 535, 
		"rarity": 5
	},
	{
		"hero_id": 153,
		"skill_id": 166, 
		"rarity": 5
	},
	{
		"hero_id": 153,
		"skill_id": 210, 
		"rarity": 5
	},
	{
		"hero_id": 153,
		"skill_id": 427, 
		"rarity": 5
	},
	{
		"hero_id": 153,
		"skill_id": 537, 
		"rarity": 5
	},
	{
		"hero_id": 154,
		"skill_id": 194, 
		"rarity": 5
	},
	{
		"hero_id": 154,
		"skill_id": 539, 
		"rarity": 5
	},
	{
		"hero_id": 154,
		"skill_id": 541, 
		"rarity": 5
	},
	{
		"hero_id": 154,
		"skill_id": 544, 
		"rarity": 5
	},
	{
		"hero_id": 155,
		"skill_id": 135, 
		"rarity": 5
	},
	{
		"hero_id": 155,
		"skill_id": 330, 
		"rarity": 5
	},
	{
		"hero_id": 155,
		"skill_id": 546, 
		"rarity": 5
	},
	{
		"hero_id": 155,
		"skill_id": 549, 
		"rarity": 5
	},
	{
		"hero_id": 156,
		"skill_id": 68, 
		"rarity": 3
	},
	{
		"hero_id": 156,
		"skill_id": 180, 
		"rarity": 3
	},
	{
		"hero_id": 156,
		"skill_id": 188, 
		"rarity": 4
	},
	{
		"hero_id": 156,
		"skill_id": 350, 
		"rarity": 3
	},
	{
		"hero_id": 156,
		"skill_id": 381, 
		"rarity": 4
	},
	{
		"hero_id": 156,
		"skill_id": 550, 
		"rarity": 4
	},
	{
		"hero_id": 156,
		"skill_id": 551, 
		"rarity": 5
	},
	{
		"hero_id": 156,
		"skill_id": 552, 
		"rarity": 3
	},
	{
		"hero_id": 156,
		"skill_id": 553, 
		"rarity": 4
	},
	{
		"hero_id": 156,
		"skill_id": 554, 
		"rarity": 5
	}
]