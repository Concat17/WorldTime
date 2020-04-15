import * as React from "react";

import Clock from "../Clock/Clock";

import "./ClockGrid.css";

const ClockGrid: React.FC<{}> = () => {
  return (
    <div className="clock-grid">
      <Clock />
      <Clock />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
};

export default ClockGrid;
