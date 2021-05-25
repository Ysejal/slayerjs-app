import {cards} from './card-data'

export const heros = [

    {
        utilityHero: 'staff',
        utilityHeroStatus: 'standing',
        utilityHeroAilgments: [],
        utilityHeroAilgmentsDuration: [],

        offenseHero: 'sword',
        offenseHeroStatus: 'standing',
        offenseHeroAilgments: [],
        offenseHeroAilgmentsDuration: [],

        defenseHero: 'shield',
        defenseHeroStatus: 'standing',
        defenseHeroAilgments: [],
        defenseHeroAilgmentsDuration: [],

        health: 55,
        maxHealth: 55,
        energy: 3,
        defense: 0,
        deck: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24].map(id => cards[id]),

        hand: [],
        discard: [],
        voidDeck: [],
        gold: 20,
        items: []
    }
    
];









