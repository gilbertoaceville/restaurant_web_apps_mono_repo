import React from "react";
import { DateStatus, DeliveryStatus, StampContainer } from "./timeStamp.styles";

const TimeStamp = ({ deliveryStatus = "Delivered", date = "08-04-2021" }) => {
  return (
    <StampContainer>
      <DeliveryStatus color="#00EC18">{deliveryStatus}</DeliveryStatus>
      <DateStatus>{date}</DateStatus>
    </StampContainer>
  );
};

export default TimeStamp;
