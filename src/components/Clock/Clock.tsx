import * as React from "react";

import ClockFace from "../ClockFace/ClockFace";
import CitySelector from "../CitySelector/CitySelector";
import ClockDate from "../ClockDate/ClockDate";

import { convertDate } from "../../logic/dateConverter";

import "./Clock.css";

const Clock: React.FC<{}> = () => {
  const [location, setLocation] = React.useState("local");
  const [date, setDate] = React.useState(convertDate(location));

  //Replaces componentDidMount and componentWillUnmount
  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 50);
    return function cleanup() {
      clearInterval(timerID);
    };
  });

  const handleChangeLocation = (location) => {
    setLocation(location);
  };

  function tick() {
    setDate(convertDate(location));
  }

  return (
    <div className="clock">
      <CitySelector onChangeLocation={handleChangeLocation} />
      <ClockFace
        time={
          date.second % 2 === 0
            ? date.toFormat("HH:mm:ss").toString()
            : date.toFormat("HH mm ss").toString()
        }
      />
      <ClockDate date={date.toFormat("ccc dd LLL 'UTC:' ZZ").toString()} />
    </div>
  );
};

export default Clock;
