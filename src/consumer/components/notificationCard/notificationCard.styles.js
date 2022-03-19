import styled from "styled-components";
import { Container } from "../container/container.component";
import { colors } from "../../infrastructure/theme/colors";
import { Text } from "../typography/text.component";
import { fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const MultiPurposeCardContainer = styled(Container)`
  border-radius: 16px;
  padding: 10px 3%;
  width: ${({ width }) => (width ? width : "100%")};
  box-shadow: ${({ boxShadow }) =>
    boxShadow ? boxShadow : "rgba(149, 157, 165, 0.2) 0px 8px 24px"};
`;
export const ImageSection = styled(Container)``;
export const CardImage = styled.img`
  width: 90px;
  height: 78px;
`;
export const InfoSection = styled(Container)``;
export const Wrapper = styled(Container)``;
export const NotificationMessage = styled(Text)``;
export const BoldMessage = styled(Text)``;
export const TimeStampWrapper = styled(Container)``;
export const TimeStamp = styled(Text)``;
