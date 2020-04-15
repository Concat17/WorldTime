import * as React from "react";

import "./ClockDate.css";

interface ClockDateProps {
  date: string;
}

const ClockDate: React.FC<ClockDateProps> = ({ date }: ClockDateProps) => {
  return <div className="clock-date">{date}</div>;
};

export default ClockDate;
