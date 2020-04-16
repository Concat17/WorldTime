import * as React from "react";

import { ThemeSwitcherContainer } from "../../../store/themeChanger";

import "./ClockDate.css";

interface ClockDateProps {
  date: string;
}

const ClockDate: React.FC<ClockDateProps> = ({ date }: ClockDateProps) => {
  let themeSwitcher = ThemeSwitcherContainer.useContainer();

  return (
    <div className={`clock-date clock-date-${themeSwitcher.theme}`}>{date}</div>
  );
};

export default ClockDate;
