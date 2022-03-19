import React from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import {
  RestrauntsBranchCardContainer,
  Wrapper,
  ImageSection,
  LoveIconWrapper,
  LoveIcon,
  LinearGradientBackground,
  InfoSection,
  NameAndStarContainer,
  NameText,
  RatingStar,
  AddressAndRatingContainer,
  AddressText,
  RatingNumber,
} from "./restrauntsBranchCard.styles";
import CardBg from "../../../lib/assets/Crunchies.png";
import { colors } from "../../infrastructure/theme/colors";
import { fontSizes } from "../../infrastructure/theme/fonts";

export const RestrauntsBranchCard = ({
  backgroundImage,
  firstGradientColor,
  secondGradientColor,
  thirdGradientColor,
  branchName,
  branchAddress,
  rating,
}) => {
  return (
    <RestrauntsBranchCardContainer backgroundImage={backgroundImage}>
      <ImageSection background="transparent" height="130px">
        <LoveIconWrapper>
          <LoveIcon name="heart" size={15} />
        </LoveIconWrapper>
      </ImageSection>

      <InfoSection
        firstGradientColor={firstGradientColor}
        secondGradientColor={secondGradientColor}
        thirdGradientColor={thirdGradientColor}
      >
        <NameAndStarContainer boxedLayout justifyContent="space-between">
          <Wrapper width="auto" alignItems="flex-start">
            <NameText fontSize={fontSizes.smallTitle} color={colors.white}>
              {branchName}
            </NameText>
          </Wrapper>
          <Wrapper width="auto" justifyContent="space-between">
            <RatingStar size="10px" />
            <RatingStar size="10px" />
            <RatingStar size="10px" />
            <RatingStar size="10px" />
            <RatingStar size="10px" />
          </Wrapper>
        </NameAndStarContainer>
        <Spacer size="0.2rem" />
        <AddressAndRatingContainer
          boxedLayout
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Wrapper width="85%" alignItems="flex-start">
            <AddressText fontSize={fontSizes.smallBody} color={colors.white}>
              {branchAddress}
            </AddressText>
          </Wrapper>
          <Wrapper width="auto" alignItems="flex-end">
            <RatingNumber color={colors.white} fontSize={fontSizes.caption}>
              {rating}
            </RatingNumber>
          </Wrapper>
        </AddressAndRatingContainer>
      </InfoSection>
    </RestrauntsBranchCardContainer>
  );
};

RestrauntsBranchCard.defaultProps = {
  image: CardBg,
  firstGradientColor: "rgba(0,0,0,0.8)",
  secondGradientColor: "rgb(101,67,33)",
  thirdGradientColor: colors.primary,
  branchName: "Faulks Branch",
  branchAddress: "162 old Glenridge St Fountain Aba, Abia State",
  rating: "4.9",
};
