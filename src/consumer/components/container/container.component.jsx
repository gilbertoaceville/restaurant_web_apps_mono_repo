import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";

export const Container = styled.div`
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ background }) => (background ? background : "transparent")};
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "space-between"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "center")};
  padding: ${({ paddingVertical }) =>
      paddingVertical ? paddingVertical : "0"};
    ${({ boxedLayout }) => (boxedLayout ? "5%" : "0")};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  margin: 0;
  box-sizing:border-box;

  @media (max-width: 1020px) {
    padding: ${({ paddingVertical }) =>
        paddingVertical ? paddingVertical : "0"}
      /* ${({ boxedLayout }) => (boxedLayout ? "3%" : "0")}; */
  }

  @media (max-width: 800px) {
    width: ${({ resWidth }) => (resWidth ? resWidth : "100%")};
    flex-direction: ${({ resFlexDirection }) =>
      resFlexDirection ? resFlexDirection : "column"};
    justify-content: ${({ justifyContent }) =>
      justifyContent ? justifyContent : "space-between"};
    align-items: center;
    padding: ${({ paddingVertical }) =>
        paddingVertical ? paddingVertical : "0"};
      ${({ boxedLayout }) => (boxedLayout ? "5%" : "0")};
    flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : "wrap")};
  }
`;

