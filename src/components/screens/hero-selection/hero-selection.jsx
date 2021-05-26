/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styles from "./hero-selection.module.scss";

import { gameState } from "../../../game-data/game-state";
import { updateGameState } from "../../../actions/game_state";
import { updatePlayer } from "../../../actions/player";
import { heros } from "../../../game-data/heros-data";
import { updateScreen } from "../../../actions/screen";

// import { HeroDetail } from './hero-detail';

// in this screen player chooses hero weapon / deck

const HeroSelection = () => {
  const dispatch = useDispatch();

  const onCardClick = (heroType) => {
    dispatch(updatePlayer(heros[0]));
    dispatch(updateGameState(gameState));
    dispatch(updateGameState({ screen: "Map" }));
    dispatch(updateScreen("Map"));
    // will be changed to map screen.
  };

  return (
    <div className={styles.gameScreen}>
      <div className={styles.title}>CHOOSE YOUR HERO</div>

      <div className={styles.menuContainer}>
        <button
          id="backBttn"
          onClick={() => {
            dispatch(updateGameState({ screen: "Title" }));
            dispatch(updateScreen("Title"));
          }}
          className={styles.backButton}
        >
          [ BACK ]
        </button>

        <div
          onClick={() => onCardClick("sword")}
          className={styles.heroContainer}
        >
          <div className={styles.heroTitle}> Sword Class </div>
          <div className={styles.heroImg}></div>
        </div>

        <div
          onClick={() => onCardClick("staff")}
          className={styles.heroContainer}
        >
          <div className={styles.heroTitle}> Staff Class </div>
          <div className={styles.staffImg}></div>
        </div>

        <div
          onClick={() => onCardClick("shield")}
          className={styles.heroContainer}
        >
          <div className={styles.heroTitle}> Shield Class </div>
          <div className={styles.shieldImg}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSelection;
