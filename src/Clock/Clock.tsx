import * as React from "react";

import ClockFace from "../ClockFace/ClockFace";
import CitySelector from "../CitySelector/CitySelector";
import ClockDate from "../ClockDate/ClockDate";

import "./Clock.css";

const Clock: React.FC<{}> = () => {
  return (
    <div className="clock">
      <CitySelector />
      <ClockFace />
      <ClockDate />
    </div>
  );
};

export default Clock;
