import React from "react";
import { HorizontalSpacer, Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";
import {
  CardListHeaderContainer,
  TitleSection,
  Title,
  SubTitle,
  SeeAllSection,
  SeeAllText,
  RightIcon,
} from "./cardListHeader.styles";

export const CardListHeader = ({ title, subTitle, seeAllText, background }) => {
  return (
    <CardListHeaderContainer
      flexDirection="row"
      paddingHorizontal
      background={background}
    >
      <TitleSection alignItems="flex-start">
        <Title fontSize={fontSizes.smallTitle}>{title}</Title>
        <Spacer size="0.2rem" />
        <SubTitle fontSize={fontSizes.smallBody} color={colors.text.regular}>
          {subTitle}
        </SubTitle>
      </TitleSection>
      <SeeAllSection justifyContent="flex-end">
        <SeeAllText fontSize={fontSizes.smallBody} color={colors.primary}>
          {seeAllText}
        </SeeAllText>
        <HorizontalSpacer />
        <RightIcon name="right" size={12} />
      </SeeAllSection>
    </CardListHeaderContainer>
  );
};

CardListHeader.defaultProps = {
  title: "Restraunts Near By",
  subTitle: "Check Crunchies Restraunts nearby to you",
  seeAllText: "See All",
};
