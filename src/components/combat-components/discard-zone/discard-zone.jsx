import React from 'react';
import styles from './discard-zone.module.scss'

import { usePlayer } from '../../../actions/player';
import { useDispatch } from 'react-redux'

import { updateScreen } from '../../../actions/screen';
import { updateGameState } from '../../../actions/game_state';

import { endTurn } from '../../../actions/combat'


const DiscardZone = () =>{
    const player = usePlayer();
    const dispatch = useDispatch();

    const onBttnClick = () =>  dispatch(endTurn());
    const backClick = () =>  dispatch(endTurn());

    return(
        <div className = {styles.discardZone}>

            <div className={styles.void}> 
                VOID: {player.voidDeck.length}
            </div>

            <div className={styles.discard}>
                DISCARD: {player.discard.length}
            </div>

            <button id="turnBttn" onClick={onBttnClick} className = {styles.devButton}>
                [ END TURN ]
            </button>

            <button id="backBttn" onClick={() => 
                      {
                        dispatch(updateGameState({screen:'Title'}));
                        dispatch(updateScreen('Title'));
                      } }className = {styles.backButton}>
                  [ SURRENDER ]
            </button>
        
        </div>
    );
}


export default DiscardZone;
