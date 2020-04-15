import * as React from "react";
import * as zones from "../../../store/iana.json";
import "./CitySelector.css";

interface CitySelectorProps {
  onChangeLocation: (location: string) => void;
}

const CitySelector: React.FC<CitySelectorProps> = ({
  onChangeLocation,
}: CitySelectorProps) => {
  return (
    <div className="city-selector">
      <div className="city-selector-border">
        <select onChange={(e) => onChangeLocation(e.target.value)}>
          {Object.keys(zones).map((key, index) => {
            if (key !== "default") {
              return (
                <option key={index} value={key}>
                  {key}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
};

export default CitySelector;
