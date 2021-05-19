import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from "./combat.module.scss";

import { usePlayer, updatePlayer } from '../../../actions/player';

import CombatZone from '../../combat-components/combat-zone';

import { updateScreen } from '../../../actions/screen';

import Hand from '../../combat-components/hand';
import DrawZone from '../../combat-components/draw-zone';
import DiscardZone from '../../combat-components/discard-zone';
import CombatLog from '../../combat-components/combat-log';

import { useMonster } from '../../../actions/monster';
import { updateCombat } from '../../../actions/combat';

import { updateGameState, resolutionCards } from '../../../actions/game_state';

import PartyStatus from '../../combat-components/player-status';


const CombatScreen = () => {
    const { gold: loot } = useMonster();
    const { health: foeHealth } = useMonster();
    const player = usePlayer();

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch( updatePlayer({ energy: 3, defense:0 }) );
    }, [])
    
    useEffect(() => {
        // This block of code only executes when foeHealth changes
        if (foeHealth <= 0) {
            dispatch( updateGameState({loot: loot, playerGold: player.gold }) )            
            dispatch( resolutionCards() );
            dispatch( updateCombat({
                combatLog : 
                    [{
                        origin: 'player',
                        description: 'Start of combat'
                    }]
            }))
 
            dispatch( updateGameState({screen:'Resolution'}));
            dispatch( updateScreen('Resolution') ) 

        }
    }, [foeHealth]);

    useEffect(() => {
        if (player.health <= 0) {
            dispatch( updateGameState({defeat:true}) )
            dispatch( resolutionCards() );

            dispatch( updateCombat({
                combatLog : 
                    [{
                        origin: 'player',
                        description: 'Start of combat'
                    }]
            }))

            dispatch( updateGameState({screen:'Resolution'}));
            dispatch( updateScreen('Resolution') ) 
        }
    }, [player.health]);

    return (
    <div className={styles.game}>

        <PartyStatus />

        <CombatZone />

        <CombatLog />

        {/* this is the overlay for the players hand... */}
        <div id='playerOverlay'></div>
        
        <Hand />
        
        <div className={styles.playerZone}> 
            <DrawZone />
            <DiscardZone />
        </div>
            
    </div>
    );
    
}


export default CombatScreen;

