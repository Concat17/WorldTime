import { useState } from "react";
import { createContainer } from "unstated-next";

function useThemeSwitcher() {
  let [themeColor, setTheme] = useState("dark");
  let toggle = () =>
    themeColor === "dark" ? setTheme("light") : setTheme("dark");

  return { theme: themeColor, toggle };
}

export const ThemeSwitcherContainer = createContainer(useThemeSwitcher);
