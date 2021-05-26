/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./player-status.module.scss";

import { updatePlayer, usePlayer } from "../../../actions/player";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { useMap } from "../../../actions/map";

import heart from "../../../image/Life1.png";
import coin from "../../../image/coin.png";
import defense from "../../../image/defense.png";
import curses from "../../../image/curses.png";
import niveau from "../../../image/niveau.png";
import Treasure from "../../../image/treasure.png";

function updateHeroHealthBar(health, maxHealth) {
  var x = document.getElementById("patyHealthBar");
  x.style.backgroundColor = "red";

  if (health === maxHealth) {
    x.style.height = "2vh";
    x.style.width = "20vw";
  } else {
    const percentOfHealth = (health / maxHealth) * 100;
    const newBar = (percentOfHealth / 100) * 20;
    x.style.width = newBar + "vw";
  }
}

const PlayerStatus = () => {
  const player = usePlayer();
  const currentField = useMap();
  const { health: heroHealth } = usePlayer();
  const { maxHealth: heroMaxHealth } = usePlayer();

  const dispatch = useDispatch();

  useEffect(() => {
    updateHeroHealthBar(heroHealth, heroMaxHealth);
  }, [heroHealth, heroMaxHealth]);

  useEffect(() => {
    let count = 0;
    for (var i = 0; i < player.deck.length; ++i) {
      if (player.deck[i].type === "curse") count++;
    }

    for (let i = 0; i < player.discard.length; i++) {
      if (player.discard[i].type === "curse") count++;
    }

    for (let i = 0; i < player.hand.length; i++) {
      if (player.hand[i].type === "curse") count++;
    }

    dispatch(updatePlayer({ curseCount: count }));
  }, [dispatch, player.deck, player.discard, player.hand]);

  return (
    <div className={styles.playerStatusContainer}>
      <div className={styles.playerStatus}>
        <div className={styles.playerGold}>
          <img src={coin} alt="coin" /> {player.gold}
        </div>

        <div className={styles.playerDefense}>
          <img src={defense} alt="defense" /> {player.defense}
        </div>

        <div className={styles.healthBarContainer}>
          <div className={styles.healthEmoji}>
            <img src={heart} alt="heart" />
          </div>
          <div className={styles.healthBorder}>
            <div className={styles.healthIndicator}>
              {player.health} / {player.maxHealth}
            </div>
            <div id="patyHealthBar"> </div>
          </div>
        </div>
      </div>
      <div className={styles.playerGameStatus}>
        <img src={niveau} alt="niveau" />
        {"Floor: " + currentField.count}
        {player.curseCount > 0 ? (
          <div className={styles.curse}>
            <img src={curses} alt="curses" />
            Curses : {player.curseCount}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default PlayerStatus;
