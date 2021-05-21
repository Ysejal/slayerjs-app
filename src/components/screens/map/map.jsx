import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from "./map.module.scss";

// import { useMusic, load, loop, mute, setTrack} from '../../../actions/music';
// import { track_list } from '../../../game-data/tracks';

import { useMap, updateMap } from '../../../actions/map';
import { updateScreen } from '../../../actions/screen';
import { updateGameState } from '../../../actions/game_state';

// For Combat:
import { usePlayer, drawHand, shuffleDeck, resetDeck } from '../../../actions/player';
import { spawnMonster } from '../../../actions/monster';
import { setupShop } from '../../../actions/shop';

import PartyStatus from '../../combat-components/player-status';

import menuSound from '../../../sound_clips/path_game_sound.mp3'


function eventHandler(event, dispatcher){
  switch (event) {
    case '👹':
      // for now... reset map after boss.
      dispatcher(spawnMonster('Eye'));

      dispatcher(resetDeck());
      dispatcher(shuffleDeck());
      dispatcher(drawHand());

      
      // dispatcher( updateGameState({floorComplete: true}) );

      dispatcher( updateGameState({screen:'Combat'}) );
      dispatcher( updateScreen('Combat') );

      break;
    case '☠️':
      // TODO: make a elite fight ... so dispatch a elite...
      if ( rollDice(0,2) > 0 ){
        dispatcher(spawnMonster('Fire'));
      }else{
        dispatcher(spawnMonster('Stone'));
      }

      dispatcher(resetDeck());
      dispatcher(shuffleDeck());
      dispatcher(drawHand());
      // Load fight before screen update?
      dispatcher(updateGameState({screen:'Combat'}));
      dispatcher(updateScreen('Combat'));
      break;
    case '🔥':
      // TODO: set up rest, training & mending 
      dispatcher(updateGameState({screen:'Bonfire'}));
      dispatcher(updateScreen('Bonfire'));
      break;
    case '❗':
      // TODO: set up a few trials for demo
      dispatcher(updateGameState({screen:'Trial'}));
      dispatcher(updateScreen('Trial'));
      break;
    case '💰':
      dispatcher(updateGameState({screen:'Shop'}));
      dispatcher(setupShop())
      dispatcher(updateScreen('Shop'));
      break;
    case '⚔️':
      let diceRoll = rollDice(0,3)
      switch (diceRoll) {
        case 0:
          dispatcher(spawnMonster('Slime'));
          break;
        case 1:
          dispatcher(spawnMonster('Nul'));
          break;
        case 2:
          dispatcher(spawnMonster('Enforcer'));
          break;
      }
      dispatcher(resetDeck());
      dispatcher(shuffleDeck());
      dispatcher(drawHand());
      // Load fight before screen update?
      dispatcher(updateGameState({screen:'Combat'}));
      dispatcher(updateScreen('Combat'));
      break;

    default:
      break;
  }
}

function rollDice(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
}

function genPathLength(){
  let length = rollDice(1,4)
  let onesOdds = rollDice(0,50)

  if (onesOdds == 0 && length == 1){
    return 1
  }
  if (onesOdds < 1 && length == 3){
    return 4
  }
  return length
}



function genEvent( roll, fightOdds, elieteOdds, bonfireOdds, trialOdds, shopOdds){
  if ( roll < fightOdds){
    return {  fieldEvent: '⚔️' }
  }else if ( roll < elieteOdds ){
    return {  fieldEvent: '☠️' }
  }else if ( roll < bonfireOdds ){
    return {  fieldEvent: '🔥' }
  }else if ( roll < trialOdds ){
    return {  fieldEvent: '❗' }
  }else if ( roll < shopOdds){
    return {  fieldEvent: '💰' }
  }else{
    return {  fieldEvent: '⚔️' }
  }
}

function genPath( pathLength, setEvent ){

  if ( setEvent ){
    
    let events = []
    for (let e = 0; e < pathLength; e++) {
      let roll = rollDice(0,101);
      events.push(genEvent(roll, 70, 85, 100, 0, 0))
    }

    return({
      fieldEvent: setEvent,
      fieldPaths: pathLength,
      fieldPathEvents: events
    })

  }else{

    // generate paths
    let events = []
    for (let e = 0; e < pathLength; e++) {
      let roll = rollDice(0,101);
      events.push(genEvent(roll, 70, 90, 100))
    }

    // generate field of said paths
    let roll = rollDice(0,101);
    return({
      fieldEvent: genEvent(roll, 70, 80, 87, 95, 100).fieldEvent,
      fieldPaths: pathLength,
      fieldPathEvents: events
    })

  }
}

function fillPaths( numberOfPaths, setEvent) {
  const paths = []

  for (let p = 0; p < numberOfPaths; p++) {
    // Gen a new number of paths per field choice
    paths.push( genPath( genPathLength(), setEvent ))
  }

  return paths
}

function startingField(startingPaths){
  let newField = {
    fieldEvent: 'START',
    fieldPaths: startingPaths,
    fieldPathEvents: fillPaths(startingPaths, '⚔️'),
    count: 0
  }
  return newField
}

function createField( fieldEvents, fieldCount ){
  let pathLength = 0
  let fieldBatch = []

  if ( fieldCount === 7){
    for (let i = 0; i < fieldEvents.length; i++) {
      fieldBatch.push({
        fieldEvent: fieldEvents[i].fieldEvent,
        fieldPaths: 0,
        fieldPathEvents: [{
          fieldEvent: "👹"
        }]
      })
    }
  }else{
    for (let i = 0; i < fieldEvents.length; i++) {
      pathLength = genPathLength()
      fieldBatch.push({
        fieldEvent: fieldEvents[i].fieldEvent,
        fieldPaths: pathLength,
        fieldPathEvents: fillPaths(pathLength)
      })
    }
  }

  return fieldBatch
}

const MapScreen = () => {

  const dispatch = useDispatch();
  const currentField = useMap();
  const UsePlayer = usePlayer();


  useEffect(() => {
    if (currentField.count === 0){
      dispatch(updateMap(startingField(3)))
    }
  }, []);
  

  const onPathSelection = (field) => {
    let newField = {}

    // check if the next event is going to be floor boss:
    let isBossNext = field.fieldPathEvents.find( fields => fields.fieldEvent === "👹" )
    
    if ( isBossNext ){
      newField = {
        fieldEvent: field.fieldEvent,
        fieldPaths: 1,
        fieldPathEvents: [{
            fieldEvent: "👹",
            fieldPaths: 0,
          fieldPathEvents: []
        }],
        count: currentField.count + 1
      }
    }else{
      newField = {
        fieldEvent: field.fieldEvent,
        fieldPaths: field.fieldPathEvents.length,
        fieldPathEvents: createField(field.fieldPathEvents, currentField.count),
        count: currentField.count + 1
      }
    }
    // update map...
    dispatch(updateMap(newField))
    eventHandler(newField.fieldEvent, dispatch)
  }


  function playMenuSound(){
    let sounds = document.createElement('audio');
    sounds.src = menuSound;
    sounds.volume = 0.1;
    sounds.play();
  }


  return (
    <div className={styles.screenContainer}>
      <div className={styles.screen}>
        <PartyStatus />

        <div className={styles.screenBody}>

          <button id="backBttn" onClick={() => 
                    {
                        dispatch(updateGameState({screen:'HeroSelection'}));
                        dispatch(updateScreen('HeroSelection'));
                    } }className = {styles.backButton}>
                [ BACK ]
          </button>

          <div className={styles.mapContainer}>
            <h1>Choose a path:</h1>

            <div style={{display:'flex', flexDirection:'row',}}>
              {currentField.fieldPathEvents.map( (field, index) =>
                <button key={index} onMouseEnter={()=>playMenuSound()}  className={styles.pathButton} onClick={() => onPathSelection(field)}>
                    <h2>{field.fieldEvent}</h2>
                    {field.fieldPathEvents.map( (e, index) => 
                      <div key={index} style={{display:'flex', margin:'2px', opacity:'.5'}}>
                        {e.fieldEvent}
                      </div>
                    )}
                </button>
              )}
            </div>
          </div>

          <div className={styles.legendContainer}>
            <div className={styles.legendTitle}>LEGEND:</div>
            <div className={styles.legendItem}> FIGHT : ⚔️</div>
            <div className={styles.legendItem}> ELITE : ☠️</div>
            <div className={styles.legendItem}> BONFIRE : 🔥</div>
            <div className={styles.legendItem}> TRIAL : ❗</div>
            <div className={styles.legendItem}> SHOP : 💰</div>
            <div className={styles.legendItem}> BOSS : 👹</div>
          </div>

        </div>

      </div>
    </div>
  );

}


export default MapScreen;

