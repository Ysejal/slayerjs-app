import React from 'react';
import styles from './discard-zone.module.scss'

import { usePlayer } from '../../../actions/player';
import { useDispatch } from 'react-redux'


const DiscardZone = () =>{
    const player = usePlayer();
    const dispatch = useDispatch();

    

    return(
        <div className = {styles.discardZone}>

            <div className={styles.void}> 
                VOID: {player.voidDeck.length}
            </div>

            <div className={styles.discard}>
                DISCARD: {player.discard.length}
            </div>

            
        
        </div>
    );
}


export default DiscardZone;
