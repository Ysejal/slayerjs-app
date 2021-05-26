import React from "react";
import styles from "./hero-zone.module.scss";

import Hero from "../../../hero";

const HeroZone = () => {
  return (
    <div className={styles.heroColumn}>
      <p hidden>
        <Hero heroType={"mage"} status={"normal"} />
      </p>
      <Hero heroType={"sword"} status={"normal"} />
      <p hidden>
        <Hero heroType={"shield"} status={"normal"} />
      </p>
    </div>
  );
};

export default HeroZone;
