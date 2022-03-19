import React, { useState } from "react";
import { Spacer } from "../../components/spacer/spacer.component";
import { colors } from "../../infrastructure/theme/colors";
import {
  MultiPurposeCardContainer,
  ImageSection,
  CardImage,
  InfoSection,
  Wrapper,
  NotificationMessage,
  BoldMessage,
  TimeStampWrapper,
  TimeStamp,
} from "./notificationCard.styles";
import Crunchies from "../../../lib/assets/Crunchies.png";
import { fontSizes, fontWeights } from "../../infrastructure/theme/fonts";
import { lineHeights } from "../../infrastructure/theme/spacing";

export const NotificationCard = ({ image, orderNumber, timeStamp,width }) => {
  return (
    <MultiPurposeCardContainer
      background={colors.white}
      justifyContent="space-between"
      boxedLayout
      width={width}
    >
      <ImageSection width="auto">
        <CardImage src={image} />
      </ImageSection>
      <InfoSection width="82%">
        <Wrapper alignItems="flex-start" width="80%">
          <NotificationMessage
            fontWeight={fontWeights.regular}
            fontSize={fontSizes.caption}
            displayInline
          >
            Your Order{" "}
            <BoldMessage
              fontSize={fontSizes.caption}
              displayInline
              fontWeight={fontWeights.semiBold}
            >
              {orderNumber}
            </BoldMessage>{" "}
            has been and confirmed, and will be delivered within 30 min. You can
            track delivery in{" "}
            <BoldMessage
              fontSize={fontSizes.caption}
              displayInline
              fontWeight={fontWeights.semiBold}
            >
              Orders
            </BoldMessage>
            .
          </NotificationMessage>
        </Wrapper>
        <Spacer size="small" />
        <Wrapper justifyContent="flex-end">
          <TimeStampWrapper width="auto">
            <TimeStamp fontSize={fontSizes.caption} color={colors.text.regular}>
              {timeStamp}
            </TimeStamp>
          </TimeStampWrapper>
        </Wrapper>
      </InfoSection>
    </MultiPurposeCardContainer>
  );
};

NotificationCard.defaultProps = {
  image: Crunchies.src,
  orderNumber: "#CR845645",
  timeStamp: "Just Now",
};
