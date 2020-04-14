import * as React from "react";
import { ThemeSwitcherContainer } from "../../store/store";
import "./ThemeSwitcher.css";

const ThemeSwitcher: React.FC<{}> = () => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();
  return (
    <div>
      <button
        className={`switcher-${themeSwitcher.theme}`}
        onClick={themeSwitcher.toggle}
      >
        {themeSwitcher.theme}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
