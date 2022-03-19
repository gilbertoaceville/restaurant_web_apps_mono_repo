import React from "react";
import {
  Section,
  FoodContainer,
  HorizontalSectionContainer,
  Name,
  Text,
  Order,
} from ".//horizontalFoodCard.styles";
import Image from "next/image";
import Food from "../../assets/pizza.png";
import Logo from "../../assets/logo.png";

export const HorizontalCard = () => {
  return (
    <HorizontalSectionContainer>
      <Section width="50%">
        <div className="logo-wrap">
          <Image
            src={Logo}
            alt="Picture of the author"
            width={"130px"}
            height={"80px"}
          />
        </div>
        <Name>Crunchies Pizza</Name>

        <Text>
          We are here with the best <br />
          desert in town.
        </Text>
      </Section>

      <div className="food-wrap">
        <FoodContainer>
          <Image
            src={Food}
            alt="Picture of the author"
            width={"290px"}
            height={"300px"}
          />
        </FoodContainer>
      </div>
    </HorizontalSectionContainer>
  );
};
