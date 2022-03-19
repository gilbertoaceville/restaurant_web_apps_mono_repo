import styled from "styled-components";
import { Container } from "../../components/container/container.component";
import { Text } from "../../components/typography/text.component";
import { colors } from "../../infrastructure/theme/colors";
import { fonts, fontWeights } from "../../infrastructure/theme/fonts";
import { AiOutlineRight as Icon } from "react-icons/ai";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const CardListHeaderContainer = styled(Container)`
  background: ${({ background }) => background? background : "transparent"};
`;
export const TitleSection = styled(Container)`
  width: 80%;
  flex-direction: column;
`;
export const Title = styled(Text)`
  color: ${colors.black.strong};
  font-weight: ${fontWeights.semiBold};
  line-height: ${lineHeights.title};
`;
export const SubTitle = styled(Text)`
  color: ${colors.text.soft};
`;
export const SeeAllSection = styled(Container)`
  width: auto;
`;
export const SeeAllText = styled(Text)`
  color: ${colors.primary};
`;
export const RightIcon = styled(Icon)`
  color: ${colors.primary};
`;
