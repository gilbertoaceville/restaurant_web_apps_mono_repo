import React from "react";
import Button from "../../../restaurant/component/Button/button.component";
import {
  CardContainer,
  ProgressDot,
  ProgressDotContainer,
  Title,
} from "./deliveryProgress.styles";

const DeliveryProgressCard = () => {
  return (
    <CardContainer>
      <div className="progress-wrapper">
        <UnoCard color="#0018ec" />
        <UnoCard color={"#E4EC00"} title="on delivery" />
        <UnoCard color={"#C8C8C8"} title="delivered" />
      </div>
    </CardContainer>
  );
};

const UnoCard = ({
  title = "Order Placed",
  date = "22-04-2021",
  time = "01:30",
  meridiem = "PM",
  color,
}) => {
  const deliveryStatus = "On Delivery";
  return (
    <div className="progress-card-wrap">
      <div className="progress-container">
        <ProgressDotContainer color={color}>
          <ProgressDot color={color} />
        </ProgressDotContainer>
        <div className="progress-text-container">
          <Title color={color}>{title}</Title>
          {title.toLowerCase() === "delivered".toLowerCase() ? null : (
            <p>
              {date} - {time}
              {meridiem}
            </p>
          )}
        </div>
      </div>
      {title.toLowerCase() === deliveryStatus.toLowerCase() && (
        <Button value="Track Delivery" />
      )}
    </div>
  );
};

export default DeliveryProgressCard;
