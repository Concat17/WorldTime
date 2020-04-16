import * as React from "react";

import * as zones from "../../../store/iana.json";
import { ThemeSwitcherContainer } from "../../../store/themeChanger";

import "./CitySelector.css";

interface CitySelectorProps {
  onChangeLocation: (location: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  onChangeLocation,
}: CitySelectorProps) => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();

  return (
    <div className={`city-selector city-selector-${themeSwitcher.theme}`}>
      <div
        className={`city-selector-border city-selector-border-${themeSwitcher.theme}`}
      >
        <select
          className={`select-${themeSwitcher.theme}`}
          onChange={(e) => onChangeLocation(e.target.value)}
        >
          {Object.keys(zones).map((key, index) => {
            if (key !== "default") {
              return (
                <option key={index} value={key}>
                  {key}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default CitySelector;
