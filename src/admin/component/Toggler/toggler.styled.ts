/*
 * style: toggler.styled
 * styling the toggler button
 */


import styled from 'styled-components';
import { FlexibleDiv } from "../../../lib/components/Box/styles";

interface Props {
  transform: String;
}

export const ToggleThemeStyles = styled.button`
  background: ${({ background }) => background || null};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  margin: 0 auto;
  overflow: hidden;
  padding: 0.5rem;
  position: relative;
  width: 8rem;
  height: 4rem;

  svg {
    height: auto;
    width: 2.5rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${(lightTheme: Props) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${(lightTheme: Props) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;

const font = "12px";
const txtColor = "#707070";

export const TogglerWrapper = styled(FlexibleDiv)`
width: max-content;
.offline,
  .online {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    .you-are-offline {
      font-size: ${font};
      color: ${txtColor};
      height: 100%;
      padding: 0px 15px;
    }
    .you-are-online {
      font-size: ${font};
      color: #15d527;
      height: 100%;
      padding: 0px 15px;


    }

    .offline-switch,
    .online-switch {
      display: flex;
      cursor: pointer;
      padding: 0px 10px;

    }
  }`