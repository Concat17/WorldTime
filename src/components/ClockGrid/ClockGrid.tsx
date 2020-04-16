import * as React from "react";

import { ClocksContainer } from "../../../store/clocks";

import Clock from "../Clock/Clock";
import ClockAdder from "../ClockAdder/ClockAdder";

import "./ClockGrid.css";

const ClockGrid: React.FC<{}> = () => {
  let clocks = ClocksContainer.useContainer();
  return (
    <div className="clock-grid">
      {clocks.clocks.map((clock) => {
        return <Clock key={clock}></Clock>;
      })}
      {/* <Clock />
      <Clock />
      <Clock />
      <Clock />
      <Clock /> */}
      <ClockAdder />
    </div>
  );
};

export default ClockGrid;
