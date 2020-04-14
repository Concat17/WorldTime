import * as React from "react";

import "./CitySelector.css";

const CitySelector: React.FC<{}> = () => {
  return (
    <select className="city-selector">
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
    </select>
  );
};

export default CitySelector;
