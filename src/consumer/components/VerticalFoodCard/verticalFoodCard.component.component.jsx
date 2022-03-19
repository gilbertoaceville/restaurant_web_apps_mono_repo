import React from "react";

import { Container, CardImage } from "./verticalFoodCard.styles";
import Image from "next/image";
import Food from "../../assets/pizza.png";
import Logo from "../../../lib/assets/logo/logo.png";
import { MdLocationOn } from "react-icons/md";

export const VerticalFoodCard = ({ Name, src, Location, price }) => {
  return (
    <Container>
      <div className="imageContainer">
        <Image
          className="CardImage"
          src={src}
          width={"300%"}
          height={"300%"}
          alt=",xd,d,d"
        />
      </div>
      <div className="food-content food-name">{Name}</div>
      <div className=" food-content food-location">
        <div className="location-icon">
          {" "}
          <MdLocationOn color="#F38B1C" />
        </div>
        <div className="location-text">{Location}</div>
      </div>
      <div className="food-content food-Price">{price}</div>
    </Container>
  );
};
