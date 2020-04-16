import * as React from "react";

import { ThemeSwitcherContainer } from "../../../store/themeChanger";
import { ClocksContainer } from "../../../store/clocks";

import "./ClockAdder.css";

const ClockAdder: React.FC<{}> = () => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();
  let clocks = ClocksContainer.useContainer();

  return (
    <div
      className={`clock-adder clock-adder-${themeSwitcher.theme}`}
      onClick={clocks.addClock}
    >
      +
    </div>
  );
};

export default ClockAdder;
