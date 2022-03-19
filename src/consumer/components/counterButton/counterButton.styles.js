import styled from "styled-components";
import { colors } from "../../infrastructure/theme/colors";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { Container } from "../container/container.component";
import { Text } from "../typography/text.component";
import { BsPlusLg as IconForPlus } from "react-icons/bs";
import { FaMinus as IconForMinus } from "react-icons/fa";

export const CounterComponent = styled(Container)`
  border-radius: 19px;
  height:26px;
  background: rgba(235, 173, 91, 0.7);
  width:100px;
`;

export const MinusWrapper = styled(Container)`
  height: 100%;
  justify-content: center;
  cursor: pointer;
`;
export const Minus = styled(IconForMinus)`
  color: ${colors.black.strong};
`;

export const CounterWrapper = styled(Container)`
  height: 100%;
  border-radius: 19px;
  opacity: 0.6;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  justify-content: center;
`;

export const CounterText = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.bold};
`;
export const PlusWrapper = styled(Container)`
  height: 100%;
  justify-content: center;
  cursor: pointer;
`;

export const Plus = styled(IconForPlus)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.bold};
`;
