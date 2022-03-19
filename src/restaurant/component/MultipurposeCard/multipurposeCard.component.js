import React from "react";
import Image from "next/image";
import Food from "../../assets/image-3.png";
import {
  CardContainer,
  PriceFigure,
  PriceWrapper,
} from "./multipurposeCard.styles";

const MultipurposeCard = ({
  title = "Chicken Crunch",
  address = "11 Faulks Road Abia State, Nigeria.",
  price = 1400,
  image=Food
}) => {
  return (
    <CardContainer>
      <div className="image-container">
        <Image src={image} alt="food item" objectFit="cover" />
      </div>
      <div className="text-container">
        <header>
          <h4>{title}</h4>
        </header>
        <p>
          <i className="fa-solid fa-location-dot"></i>
          <label>{address}</label>
        </p>
      </div>
      <PriceWrapper flexDirection="row">
        <PriceFigure>
          <i className="fa-solid fa-naira-sign"></i>
          {price}
        </PriceFigure>
      </PriceWrapper>
    </CardContainer>
  );
};

export default MultipurposeCard;
