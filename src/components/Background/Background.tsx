import * as React from "react";

import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import { ThemeSwitcherContainer } from "../../../store/store";

import "./Background.css";
import ClockGrid from "../ClockGrid/ClockGrid";

const Background: React.FC<{}> = () => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();
  return (
    <div className={`background ${themeSwitcher.theme}`}>
      <ThemeSwitcher />
      <ClockGrid />
    </div>
  );
};

export default Background;
