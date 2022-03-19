/*
 * component: Toggler
 */

import React, { useState } from "react";
import { func, string } from "prop-types";
import { ToggleThemeStyles, TogglerWrapper } from "./toggler.styled";
import { IoMdSunny as SunIcon, IoMdMoon as MoonIcon } from "react-icons/io";
import { BsToggleOff as Off, BsToggleOn as On } from "react-icons/bs";
import { FlexibleDiv } from "../../../lib/components/Box/styles";



/* 
CustomToggle
  -Not Exported as deafault
  -Use the style props to style the text
  -Use the iconSize props to change the icon size
*/ 

export const CustomToggle = ({style, iconSize, iconText}) => {

  const [toggle, setToggle] = useState(true);

  const onClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <TogglerWrapper>
          {toggle ? (
            <>
              <div className={"offline"}>
                <div style={style} className={"you-are-offline"}>{  iconText ? iconText : "Offline"}</div>
                <div className={"offline-switch"}>
                  <Off
                    onClick={onClick}
                    id="off"
                    style={{
                      color: "#707070",
                      fontSize: iconSize || "1.2rem",
                      padding: "0px",
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={"online"}>
                <div style={style} className={"you-are-online"}>{ iconText ? iconText : "Online"}</div>
                <div className={"online-switch"}>
                  <On
                    onClick={onClick}
                    style={{
                      color: "#15d527",
                      fontSize: iconSize || "1.2rem",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </TogglerWrapper>
    </div>
  )
}



const ToggleTheme = ({ theme, toggleTheme }) => {
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
