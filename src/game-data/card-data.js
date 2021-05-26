
//  CARD LAYOUT:
// {
//     name: '',
//     requiredHero: 'u',
//     art: '<art url>',
//     type: 'attack',
//     energy: 1,
//     exhaust: false,
//     action: {
//         target: ['foe'],
//         effect: ['damage'],
//         power: [5]
//     },
//     description: "5 Damage",
//     card_id: 0
// },


// requiredHero :

// a - any hero standing
// o - off needed
// u - util needed
// d - def needed
// do - def & off needed
// ud - util & def needed
// ou - off & util needed
// e - every hero needed


import Offensive from '../image/bowie-knife-2.png';
import Defensive from '../image/black-hand-shield.png';
import Punch from '../image/punch.png';
import Health from '../image/heart-plus.png';
import Stone from '../image/meteor-impact.png';
import Rage from '../image/deadly-strike.png';
import Blind from '../image/bolt-eye.png';
import Quick from '../image/quick-slash.png';
import Explosion from '../image/fission.png';
import Fire from '../image/lucifer-cannon.png';
import Poison from '../image/chemical-arrow.png';
import Skull from '../image/surprised-skull.png';
import Frost from '../image/saber-tooth.png';
import Electric from '../image/rolling-energy.png';
import Trade from '../image/fulguro-punch.png';
import Radiant from '../image/edged-shield.png';
import Bash from '../image/shield-reflect.png';
import Mend from '../image/meditation.png';
import ADrain from '../image/Assymetric_Drain.png';
import BExchange from '../image/Balance_Exchange.png';
import BronzeShield from '../image/bronze_shield.png';
import IronShield from '../image/iron_shield.png';
import Determination from '../image/Determination.png';
import SimpleDrain from '../image/Simple_drain.png';
import ExtremeDrain from '../image/Extreme_drain.png';
import DefenseTotal from '../image/Defense_total.png';
import Reinforcement  from '../image/Reinforcement.png';
import StaticShield from '../image/Static_shield.png';
import ForcedRest from '../image/forced_rest.png';
import StaticRest from '../image/Static_Rest.png';
import UltraPower from '../image/Ultra_power.png';
import OffensiveParade from '../image/Offensive_parade.png';
import NifflePurge from '../image/Niffle_purge.png';
import TotalCleanse from '../image/Total_cleanse.png';
import MiraculousHit from '../image/Miraculous_Hit.png';
import TotalCounter from '../image/Total_counter.png';
import DefensivePurge from '../image/Defensive_purge.png'


export const cards = [
    {   
        name : "Magic Rage",
        requiredHero: 'a',
        art : Rage,
        type: 'attack',
        energy: 3,
        exhaust: false,
        action : {
            target: ['foe','foe'],
            effect: ['damage','stun'],
            power: [7+(Math.floor(Math.random() * 13) +1),Math.floor(Math.random()*2)]

        },
        description : "Deal 7 + random damage up to 9, Stun ennemy for one turn",
        cost : 100

    },
    {
        name: 'Blinding Ray',
        requiredHero: 'u',
        art: Blind,
        type: 'utility',
        energy: 2,
        exhaust: true,
        action: {
            target: ['foe','player'],
            effect: ['stun','delayUtility'],
            power: [1,3]
        },
        description: "Stun enemy for 1 turn & mage for 3 turns. \nVOID",
        cost: 90,
    },
    {
        name : "Close Attack",
        requiredHero: 'a',
        art: Punch,
        type: 'attack',
        energy: 1,
        exhaust: false,
        action: {
            target: ['foe'],
            effect: ['damage'],
            power: [6]
        },
        description : "Deal 6 damage",
        cost : 50

    },
    {
        name : "Projectile",
        requiredHero : 'a',
        art : Stone,
        type : 'attack',
        energy : 2,
        exhaust : false,
        action : {
            target: ['foe'],
            effect: ['damage'],
            power: [8]
        },
        description : '8 damage',
        cost : 60
    },
     {
        name : "Quick Attack",
        requiredHero : 'a',
        art : Quick,
        type : 'attack',
        energy : 2,
        exhaust : false,
        action : {
            target: ['foe','player'],
            effect: ['damage','speed'],
            power: [6 + (Math.floor(Math.random() * 3)+1) ,3]

        },
        description : "Deal 6 damage + random damage increase speed",
        cost : 60


    },
    {
        name : "Sharped blade",
        requiredHero : 'a', 
        art : Offensive,
        type : 'attack',
        energy : 1, 
        exhaust : true,
        action : {
            target:['foe','foe','player'],
            effect: ['damage','bleed','attack'],
            power : [7, 3, 1.2]

        },
        description : "Deal 7 damage and bleed ennemy, increase attack",
        cost :60


    },
    {
        name : "Destructive burst",
        requiredHero : "a", 
        art : Explosion,
        type : 'attack',
        energy : 3, 
        exhaust : false,
        action : {
            target:['foe'],
            effect: ['damage'],
            power : [(Math.floor(Math.random() * 6)+1) + (Math.floor(Math.random() * 6)+1) + (Math.floor(Math.random() * 6)+1)]

        },
        description : "Deal 3 times of random 1 to 6 damage",
        cost : 75


    },
   
    {   
        name : "Fire Breathe",
        requiredHero: 'a',
        art : Fire,
        type: 'attack',
        energy: 3,
        exhaust: false,
        action : {
            target: ['foe','foe'],
            effect: ['damage',"burn"],
            power: [8 + (Math.floor(Math.random() * 4)+1),3]

        },
        description : "Throw a fireball to all ennemies",
        cost : 70

    },
    {   
        name : "Poisonned Attack",
        requiredHero: 'a',
        art : Poison,
        type:  'attack',
        energy: 2,
        exhaust: false,
        action : {
            target: ['foe','foe'],
            effect: ['damage','poison'],
            power: [7,2]

        },
        description : "Deal 7 damage plus poison ennemy",
        cost : 60

    },
    {   
        name : "Annhilating Casting",
        requiredHero: 'a',
        art : Skull,
        type: 'attack',
        energy: 3,
        exhaust: true,
        action : {
            target: ['foe','player','foe'],
            effect: ['damage','damage','stun'],
            power: [15,4,1]

        },
        description : "Cast a Powerfull spell that exhaust the Hero + deal 15 damage",
        cost : 70

    },
    /*{   
        name : "More than one trick up its sleeve",
        requiredHero: ,
        art : ,
        type: ,
        energy: ,
        exhaust: ,
        action : {
            target: [],
            effect: [],
            power: []

        },
        description : 

    },*/
    /*{   
        name : "Switching Hands",
        requiredHero: ,
        art : ,
        type: ,
        energy: ,
        exhaust: ,
        action : {
            target: [],
            effect: [],
            power: []

        },
        description : 

    },*/
    /*{   
        name : "Delayed Blast",
        requiredHero: ,
        art : ,
        type: ,
        energy: ,
        exhaust: ,
        action : {
            target: [],
            effect: [],
            power: []

        },
        description : 

    },*/
    {   
        name : "Frosted Bite",
        requiredHero: 'a',
        art : Frost,
        type: 'attack',
        energy: 3,
        exhaust: false,
        action : {
            target: ['foe','foe'],
            effect: ['damage','frost'],
            power: [7,2]

        },
        description : "Bite with a Frosted power dealing 7 damage",
        cost : 70

    },
    {   
        name : "Electrocuting",
        requiredHero: 'a',
        art : Electric,
        type: 'attack',
        energy: 2,
        exhaust: true,
        action : {
            target: ['foe','foe'],
            effect: ['damage','stun'],
            power: [6,2]

        },
        description : "Stun with an electrical discharge deal 6 damage",
        cost : 70

    },
    
    {   
        name: 'Defensive Tactics',
        requiredHero: 'a',
        art: Defensive,
        type: 'defend',
        energy: 1,
        exhaust: false,
        action: {
            target: ['player'],
            effect: ['defense'],
            power: [5]
        },
        description: "+5 Defense",
        cost :60
    },
    {   
        name: 'Heal',
        requiredHero: 'u',
        art: Health,
        type: 'skill',
        energy: 1,
        exhaust: true,
        action: {
            target: ['player'],
            effect: ['heal'],
            power: [8]
        },
        description: "Heal +8 \nVOID",
        cost: 100,
    },
    {
        name: 'Trading Blows',
        requiredHero: 'o',
        art: Trade,
        type: 'attack',
        energy: 3,
        exhaust: true,
        action: {
            target: ['foe', 'player'],
            effect: ['damage', 'damage'],
            power: [20, 7]
        },
        description: "Deal 20 Damage, take 7 Damage \nVOID",
        cost: 70,
    },
    {
        name: 'Radiant Shield',
        requiredHero: 'du',
        art: Radiant,
        type: 'mix',
        energy: 2,
        exhaust: true,
        action: {
            target: ['player','player'],
            effect: ['defense','heal'],
            power: [10,5]
        },
        description: "+10 Defense, +5 health \nVOID",
        cost: 85,
    },
    {
        name: 'Shield Bash',
        requiredHero: 'd',
        art: Bash,
        type: 'defend',
        energy: 1,
        exhaust: false,
        action: {
            target: ['foe'],
            effect: ['defenseTotal'],
            power: [1]
        },
        description: "Deal damage equal to your armor",
        cost: 80,
    },
    {   
        name: 'Mend',
        requiredHero: 'u',
        art: Mend,
        type: 'skill',
        energy: 2,
        exhaust: false,
        action: {
            target: ['player'],
            effect: ['mend'],
            power: [0]
        },
        description: "Remove all afflictions from deck / hand & discard piles. \nVOID",
        cost: 100,
    },

    {
		name : "Bronze Shield",
		requiredHero : "a",
		art : BronzeShield,
		type : 'defense',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player'],
			effect: ['defense'],
			power : [8]
		},
		description : "Gain 8 armor",
		cost : 60,


	},
	{
		name : "Iron Shield",
		requiredHero : "a",
		art : IronShield,
		type : 'defense',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player'],
			effect: ['defense'],
			power : [10]
		},
		description : "Gain 10 armor",
		cost : 70,

	},
	{
		name : "Balance Exchange",
		requiredHero : "a",
		art : BExchange,
		type : 'defense',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','player'],
			effect: ['damage','defense'],
			power : [5,15]
		},
		description : "loose 5 health point gain 12 armor",
		cost : 75,


	},
	{
		name : "Determination",
		requiredHero : "a",
		art : Determination,
		type : 'defense',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','player'],
			effect: ['damage','defense'],
			power : [10,30]
		},
		description : "loose 10 health point gain 30 armor",
		cost : 100

	},
	{
		name : "Simple Drain",
		requiredHero : "a",
		art : SimpleDrain,
		type : 'attack',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','foe'],
			effect: ['heal','damage'],
			power : [5,5]
		},
		description : "Drain 5 HP from the ennemy",
		cost : 70

	},
	{
		name : "Asymetric Drain",
		requiredHero : "a",
		art : ADrain,
		type : 'attack',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','foe','player'],
			effect: ['heal','damage','defense'],
			power : [3,5,5]
		},
		description : "Drain 5 HP and convert into 3HP and 5 armor",
		cost : 65,

	},
	{
		name : "Extrem Drain",
		requiredHero : "a",
		art : ExtremeDrain,
		type : 'attack',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player','foe'],
			effect: ['heal','damage'],
			power : [15,20]
		},
		description : "Drain 20 HP and convert into 15HP",
		cost : 110,

	},
	{
		name : "Shield Drain",
		requiredHero : "a",
		art : StaticShield,
		type : 'attack',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','foe'],
			effect: ['defense','damage'],
			power : [15,5]
		},
		description : "Drain 5HP into 15 armor",
		cost : 90,

	},
	{
		name : "Defense total",
		requiredHero : "a",
		art : DefenseTotal,
		type : 'defense',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player','player'],
			effect: ['defense','heal'],
			power : [20,10]
		},
		description : "Gain 20 Armor and 10 Heal",
		cost : 100,

	},
	{
		name : "Reinforcement",
		requiredHero : "a",
		art : Reinforcement,
		type : 'attack',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','foe'],
			effect: ['defense','damage'],
			power : [8,8]
		},
		description : "deal 8 damage and gain 8 armor",
		cost : 80,

	},
	{
		name : "Static Shield",
		requiredHero : "a",
		art : StaticShield,
		type : 'attack',
		energy : 3,
		exhaust : false,
		action : {
			target: ['foe','player'],
			effect: ['stun','defense'],
			power : [1,15]
		},
		description : "Stun ennemy for one turn and gain 15 armor",
		cost : 85,

	},
	{
		name : "Forced Rest",
		requiredHero : "a",
		art : ForcedRest,
		type : 'skill',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player','player','player','player'],
			effect: ['heal','delayUtility','delayOffense','delayDefense'],
			power : [35,2,2,2]
		},
		description : "heal for 30 HP but stun player during 2 turn",
		cost : 90,

	},
	{
		name : "Static Rest",
		requiredHero : "a",
		art : StaticRest,
		type : 'skill',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','player','player','player'],
			effect: ['heal','delayUtility','delayOffense','delayDefense'],
			power : [20,1,1,1]
		},
		description : "heal for 20 HP but stun player for 1 turn",
		cost : 100,

	},
	{
		name : "Ultra Power",
		requiredHero : "a",
		art : UltraPower,
		type : 'attack',
		energy : 3,
		exhaust : true,
		action : {
			target: ['player','player','player','foe'],
			effect: ['delayUtility','delayOffense','delayDefense','damage'],
			power : [1,1,1,25]
		},
		description : "deal 25 damages but stun for 1 turn",
		cost : 90,


	},
	{
		name : "Offensive Parade",
		requiredHero : "a",
		art : OffensiveParade,
		type : 'attack',
		energy :3,
		exhaust :false ,
		action : {
			target: ['player','player'],
			effect: ['damage',"defense"],
			power : [12,5]
		},
		description : "deal 12 damage and gain 5 armor",
		cost : 85,

	},
	{
		name : "Niffle Purge",
		requiredHero : "a",
		art : NifflePurge,
		type : 'skill',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player','player','foe'],
			effect: ['mend','defense','stun'],
			power : [0,10,1]
		},
		description : "Gain 10 armor and remove all affliction, stun ennemy for 1 turn",
		cost : 130,

	},
	{
		name : "Total Cleanse",
		requiredHero : "a",
		art : TotalCleanse,
		type : 'skill',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','player'],
			effect: ['mend','heal'],
			power : [0,10]
		},
		description : "heal 10 HP and remove all affliction",
		cost : 100,

	},
	{
		name : "Miraculous Hit",
		requiredHero : "a",
		art : MiraculousHit,
		type : 'attack',
		energy : 3,
		exhaust : false,
		action : {
			target: ['foe'],
			effect: ['damage'],
			power : [Math.floor(Math.random() *35) + 5]
		},
		description : "Hit an ennemy up to 35 damage",
		cost : 120,

	},
	{
		name : "Total Counter",
		requiredHero : "a",
		art : TotalCounter,
		type : 'defense',
		energy : 2,
		exhaust : false,
		action : {
			target: ['player','foe'],
			effect: ['defense','defenseTotal'],
			power : [10,1],
		},
		description : "Gain 10 armor and deal damage equal to your armor",
		cost : 100,

	},
	
	{
		name : "Defensive Purge",
		requiredHero : "a",
		art : DefensivePurge,
		type : 'skill',
		energy : 3,
		exhaust : false,
		action : {
			target: ['player','player'],
			effect: ['mend','defense'],
			power : [0,10],
		},
		description : "Remove all affliction and gain 10 armor",
		cost : 120,


	},

];

