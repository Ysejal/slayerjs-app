
import Curse from "../image/cursed-star.png";
import Bleed from "../image/bleeding-wound.png";
import Fatigue from "../image/oppression.png"

export const afflictionCards = [
    {
        name: 'Curse',
        requiredHero: 'a',
        art: Curse,
        type: 'curse',
        energy: 0,
        exhaust: false,
        action: {
            target: ['player'],
            effect: ['curse'],
            power: [0]
        },
        description: "Party is cursed, can't be used",
    },
    {   
        name: 'Fatigue',
        requiredHero: 'a',
        art: Fatigue,
        type: 'affliction',
        energy: 1,
        exhaust: true,
        action: {
            target: ['affliction'],
            effect: ['affliction'],
            power: [0]
        },
        description: "Party is fatigued\nVOID",
    },{
        name: 'Bleed',
        requiredHero: 'a',
        art: Bleed,
        type: 'affliction',
        energy: 0,
        exhaust: true,
        action: {
            target: ['affliction', 'player'],
            effect: ['affliction', 'damage'],
            power: [3, 3]
        },
        description: "Take 3 damage \nVOID",
    },
]