import styled from "styled-components";
import { BsStarFill as Icon } from "react-icons/bs";
import { colors } from "../../infrastructure/theme/colors";
import { lineHeights } from "../../infrastructure/theme/spacing";


export const RatingStar = styled(Icon)`
  color: ${(color)=> {color || colors.primary}};
  line-height: ${lineHeights.title};
  padding: 0px 2px;
  font-size: ${(iconSize)=> {iconSize || null}};
`;

export const RatingWrapper = styled('div')`
width: max-content;
padding: 2px;

button {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
.on {
  color: #f38b1c;
}
.off {
  color: #ccc;
}
`