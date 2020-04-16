import * as React from "react";

import { ThemeSwitcherContainer } from "../../../store/store";

import "./ThemeSwitcher.css";

const ThemeSwitcher: React.FC<{}> = () => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();
  return (
    <div className="theme-switcher" onClick={themeSwitcher.toggle}>
      {themeSwitcher.theme === "dark" ? (
        <i className="fas fa-sun fa-2x"></i>
      ) : (
        <i className="fas fa-moon fa-2x"></i>
      )}
    </div>
  );
};

export default ThemeSwitcher;
