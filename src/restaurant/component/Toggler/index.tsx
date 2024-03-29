/*
 * component: Toggler
 * author: Favour George
 * Date: April 9, 2020
 * Default toggleTheme button
 */

import React from "react";
import { func, string } from "prop-types";
import { ToggleThemeStyles } from "./toggler.styled";
import { IoMdSunny as SunIcon, IoMdMoon as MoonIcon } from "react-icons/io";

interface Props {
  // lightTheme: String;
  theme: String;
  toggleTheme: () => {};
  isLight: boolean;
  // onClick: () => {};
}
const ToggleTheme: React.FC<Props> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light" ? "" : "";
  return (
    <ToggleThemeStyles transform={isLight} onClick={toggleTheme}>
      <SunIcon />
      <MoonIcon />
    </ToggleThemeStyles>
  );
};

ToggleTheme.propTypes = {
  // theme: string.isRequired,
  // toggleTheme: func.isRequired,
};

export default ToggleTheme;
