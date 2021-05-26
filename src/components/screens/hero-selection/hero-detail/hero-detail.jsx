/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import styles from "../hero-selection.module.scss";

const HeroDetail = () => {
  return (
    <div className={styles.gameScreen}>
      <div className={styles.title}>CHOOSE YOUR HERO</div>

      <div className={styles.menuContainer}>
        <div className={styles.heroContainer}>
          <div className={styles.heroTitle}> Siegfried </div>
          <div className={styles.heroImg}></div>
        </div>
        <div className={styles.heroContainer}>
          <div className={styles.heroTitle}> Brunehilde </div>
          <div className={styles.staffImg}></div>
        </div>

        <div className={styles.heroContainer}>
          <div className={styles.heroTitle}> Owl </div>
          <div className={styles.shieldImg}></div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
