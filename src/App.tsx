import * as React from "react";

import { ThemeSwitcherContainer } from "../store/store";

import Background from "./components/Background/Background";

import "./App.css";

export const App: React.FC<{}> = () => {
  return (
    <ThemeSwitcherContainer.Provider>
      <Background />
    </ThemeSwitcherContainer.Provider>
  );
};
