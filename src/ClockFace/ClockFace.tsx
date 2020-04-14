import * as React from "react";

import "./ClockFace.css";

const ClockFace: React.FC<{}> = () => {
  return (
    <div className="clock-face">
      <h1 className="clock-time">22:01</h1>
    </div>
  );
};

export default ClockFace;
