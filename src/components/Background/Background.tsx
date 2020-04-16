import * as React from "react";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeSwitcherContainer } from "../../../store/themeChanger";
import { ClocksContainer } from "../../../store/clocks";

import "./Background.css";
import ClockGrid from "../ClockGrid/ClockGrid";

const Background: React.FC<{}> = () => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();
  return (
    <div className={`background ${themeSwitcher.theme}`}>
      <ThemeSwitcher />
      <ClocksContainer.Provider>
        <ClockGrid />
      </ClocksContainer.Provider>
    </div>
  );
};

export default Background;
