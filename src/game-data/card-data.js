
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
            power: [7+(Math.floor(Math.random() * 9) +1),Math.floor(Math.random()*2)]

        },
        description : "Deal 7 + random damage up to 9, Stun ennemy for one turn"

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
        description : "Deal 6 damage"

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
        description : '8 damage'
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
        description : "Deal 6 damage + random damage increase speed"


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
        description : "Deal 7 damage and bleed ennemy, increase attack"


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
        description : "Deal 3 times of random 1 to 4 damage"


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
        description : "Throw a fireball to all ennemies"

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
        description : "Deal 7 damage plus poison ennemy"

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
        description : "Cast a Powerfull spell that exhaust the Hero + deal 15 damage"

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
        description : "Bite with a Frosted power dealing 7 damage"

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
        description : "Stun with an electrical discharge deal 6 damage"

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
];

