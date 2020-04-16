import * as React from "react";

import { ThemeSwitcherContainer } from "../store/themeChanger";

import Background from "./components/Background/Background";

import "./App.css";

export const App: React.FC<{}> = () => {
  return (
    <ThemeSwitcherContainer.Provider>
      <Background />
    </ThemeSwitcherContainer.Provider>
  );
};
