import * as React from "react";

import "./ClockFace.css";

interface ClockFaceProps {
  time: string;
}

const ClockFace: React.FC<ClockFaceProps> = ({ time }: ClockFaceProps) => {
  return (
    <div className="clock-face">
      <h1 className="clock-time">{time}</h1>
    </div>
  );
};

export default ClockFace;
