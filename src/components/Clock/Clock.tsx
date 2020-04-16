import * as React from "react";

import ClockFace from "../ClockFace/ClockFace";
import CitySelector from "../CitySelector/CitySelector";
import ClockDate from "../ClockDate/ClockDate";

import { convertDate } from "../../logic/dateConverter";
import { ThemeSwitcherContainer } from "../../../store/themeChanger";

import "./Clock.css";

const Clock: React.FC<{}> = () => {
  const [location, setLocation] = React.useState("local");
  const [date, setDate] = React.useState(convertDate(location));

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

  let themeSwitcher = ThemeSwitcherContainer.useContainer();

  return (
    <div className={`clock clock-${themeSwitcher.theme}`}>
      <CitySelector onChangeLocation={handleChangeLocation} />
      <ClockFace time={date.toFormat("HH mm ss").toString()} />
      <ClockDate date={date.toFormat("ccc dd LLL 'UTC:'ZZ").toString()} />
    </div>
  );
};

export default Clock;
