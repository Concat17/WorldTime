import * as React from "react";

import { ThemeSwitcherContainer } from "../../../store/store";

import "./ClockFace.css";

interface ClockFaceProps {
  time: string;
}

const ClockFace: React.FC<ClockFaceProps> = ({ time }: ClockFaceProps) => {
  let splittedTime = time.toString().split(" ");
  let themeSwitcher = ThemeSwitcherContainer.useContainer();

  return (
    <div className={`clock-face clock-face-${themeSwitcher.theme}`}>
      <h1 className="clock-time">{splittedTime[0]}</h1>
      <h1 className="clock-time">
        {parseInt(splittedTime[2]) % 2 === 0 ? ":" : " "}
      </h1>
      <h1 className="clock-time">{splittedTime[1]}</h1>
      <h1 className="clock-time">
        {parseInt(splittedTime[2]) % 2 === 0 ? ":" : " "}
      </h1>
      <h1 className="clock-time">{splittedTime[2]}</h1>
    </div>
  );
};

export default ClockFace;
