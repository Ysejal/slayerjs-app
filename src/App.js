import React from "react";

// Screens
import Title from "./components/screens/title";
import Combat from "./components/screens/combat";
import Resolution from "./components/screens/resolution";
import HeroSelection from "./components/screens/hero-selection";
import Map from "./components/screens/map";
import Shop from "./components/screens/shop";
import Bonfire from "./components/screens/bonfire";
import Trial from "./components/screens/trial";

import Music from "./components/music";

import { useScreen } from "./actions/screen";

import { FullScreen, useFullScreenHandle } from "react-full-screen";

import Transition from "./components/transition";

const screens = {
  Title,
  Combat,
  Resolution,
  HeroSelection,
  Map,
  Shop,
  Bonfire,
  Trial,
};

const App = () => {
  const screen = useScreen();
  const Screen = screens[screen];

  const handle = useFullScreenHandle();

  return (
    <div>
      <button onClick={handle.enter}>Enter fullscreen</button>
      <Music />
      <FullScreen handle={handle}>
        <Transition />
        <Screen />
      </FullScreen>
    </div>
  );
};

export default App;
