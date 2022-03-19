import React, { useState } from "react";
import {
  HorizontalSpacer,
  Spacer,
} from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  FoodName,
  IconWrapper,
  LocationIcon,
  AddressWrapper,
  Address,
  DeleteIcon,
  QuantitySection,
  QuantityText,
  LastOrPriceSection,
  PriceWrapper,
  NairaIcon,
  PriceFigure,
  DynamicSectionWrapper,
  FavouriteIconContainer,
  FavouriteIcon,
  OrderStatusWrapper,
  OrderStatusText,
} from "./multiPurposeCard.styles";
import Crunchies from "../../../lib/assets/Crunchies.png";
import { CounterButton } from "../counterButton/counterButton.component";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";

export const MultiPurposeCard = ({
  source,
  counter,
  favourite,
  orderStatus,
  quantity,
  foodName,
  address,
  price,
  boxShadow,
  width,
  border,
  background,
  deleteIcon,
}) => {
  return (
    <MultiPurposeCardContainer
      width={width}
      background={background || colors.white}
      justifyContent="space-between"
      alignItems={deleteIcon ? "center" : "flex-start"}
      orderStatus={orderStatus}
      boxShadow={boxShadow}
      border={border}
    >
      <ImageSection width="auto">
        <CardImage src={source} />
      </ImageSection>
      <HorizontalSpacer />
      <InfoSection>
        <Wrapper alignItems="flex-start">
          <FoodName fontSize={fontSizes.body} fontWeight={fontWeights.semiBold}>
            {foodName}
          </FoodName>
        </Wrapper>
        <Spacer />
        <Wrapper alignItems="flex-start" justifyContent="flex-start">
          <IconWrapper width="5%">
            <LocationIcon size="14px" />
          </IconWrapper>
          <AddressWrapper width="94%">
            <Address
              fontSize={fontSizes.caption}
              displayInline
              color={colors.text.soft}
            >
              {address}
            </Address>
          </AddressWrapper>
        </Wrapper>
      </InfoSection>
      {quantity ? (
        <QuantitySection width="auto">
          <QuantityText
            fontSize={fontSizes.smallBody}
            fontWeight={fontWeights.regular}
          >
            {quantity} Qty
          </QuantityText>
        </QuantitySection>
      ) : null}
      <LastOrPriceSection
        width="24%"
        height="100%"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        {deleteIcon ? (
          <Wrapper alignItems="flex-end" flexDirection="column">
            <DeleteIcon size="15px" />
            <Spacer size="0.2rem" />
          </Wrapper>
        ) : null}
        <PriceWrapper justifyContent="flex-end" alignItems="flex-start">
          <NairaIcon name="currency-ngn" width="9px" height="11px" />
          <PriceFigure fontSize={fontSizes.body} fontWeight={fontWeights.bold}>
            {price}
          </PriceFigure>
        </PriceWrapper>
        <Spacer size="small" />
        <DynamicSectionWrapper justifyContent="flex-end" alignItems="center">
          {counter ? (
            <CounterButton />
          ) : favourite ? (
            <FavouriteIconContainer
              justifyContent="flex-end"
              alignItems="center"
            >
              <FavouriteIcon name="heart" size={20} />
            </FavouriteIconContainer>
          ) : orderStatus ? (
            <OrderStatusWrapper justifyContent="flex-end" alignItems="center">
              <OrderStatusText
                fontSize={fontSizes.caption}
                fontWeight={fontWeights.semiBold}
                color={colors.primary}
              >
                Order Status
              </OrderStatusText>
            </OrderStatusWrapper>
          ) : null}
        </DynamicSectionWrapper>
      </LastOrPriceSection>
    </MultiPurposeCardContainer>
  );
};

MultiPurposeCard.defaultProps = {
  source: Crunchies.src,
  foodName: "Hot Dog Pie",
  address:
    "54 East West Road Abia State, Nigeria.",
  price: "1,400",
};
