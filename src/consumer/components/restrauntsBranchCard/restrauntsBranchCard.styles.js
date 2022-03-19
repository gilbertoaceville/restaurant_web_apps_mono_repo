import styled from "styled-components";
import { Container } from "../../components/container/container.component";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  fonts,
  fontSizes,
  fontWeights,
} from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";
import { BsStarFill as Icon } from "react-icons/bs";
import { BsFillHeartFill as Love } from "react-icons/bs";
import CardBg from "../../../lib/assets/Crunchies.png";

export const RestrauntsBranchCardContainer = styled(Container)`
  border-radius: 25px;
  overflow: hidden;
  height: auto;
  width: 305px;
  min-width:305px;
  flex-direction: column;
  justify-content: center;
  background:${({backgroundImage})=>backgroundImage? `url(${backgroundImage.src})`:`url(${CardBg.src})`};
  background-size:cover;
  background-repeat:round;
`;
export const Wrapper = styled(Container)``;
export const ImageSection = styled(Container)`
  width: 100%;
  position: relative;
  flex-direction: column;
`;
export const LoveIconWrapper = styled(Container)`
  background: rgba(250, 250, 250, 0.3);
  padding: 0.5rem 1.3%;
  width: auto;
  flex-direction: column;
  border-radius: 0 0 40px 40px;
  position: absolute;
  right: 10%;
`;
export const LoveIcon = styled(Love)`
  color: ${colors.primary};
`;

export const InfoSection = styled(Container)`
  flex-direction: column;
  padding: 10px 0 15px 0;
  background: linear-gradient(
    260deg,
    ${({ firstGradientColor }) => firstGradientColor}10%,
    ${({ secondGradientColor }) => secondGradientColor},
    ${({ thirdGradientColor }) => thirdGradientColor} 80% 
  );
`;
export const NameAndStarContainer = styled(Container)``;
export const NameText = styled(Text)`
  font-weight: ${fontWeights.bold};
`;
export const RatingStar = styled(Icon)`
  color: ${colors.primary};
  line-height: ${lineHeights.title};
`;

export const AddressAndRatingContainer = styled(Container)`
`;
export const AddressText = styled(Text)`
`;
export const RatingNumber = styled(Text)`
`;
