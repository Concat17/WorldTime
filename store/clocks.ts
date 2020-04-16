import { useState } from "react";
import { createContainer } from "unstated-next";

function useClocks() {
  let [clocks, setClocks] = useState(["clock0"]);
  let [clockNumber, setClockNumber] = useState(1);

  let addClock = () => {
    setClockNumber(clockNumber + 1);
    setClocks([...clocks, `clock${clockNumber}`]);
  };

  return { clocks, addClock };
}

export const ClocksContainer = createContainer(useClocks);
