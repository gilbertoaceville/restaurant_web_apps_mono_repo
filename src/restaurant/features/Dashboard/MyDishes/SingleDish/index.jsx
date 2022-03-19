/**
 * This page will display each dish in full page.
 * The page will therefore listen to the parent component
 * to receive the properties of whichever dish is being clicked.
 *
 */
import React from 'react';
import { useState } from 'react'
import {
  SingleDishWrapper,
  SingleDishHead,
  SingleDishBody,
  Navigation,
  Settings,
  DishImageWrapper,
  DishDetails,
  DishTitleAndPrice,
  DishCode,
  DishRating,
  DishInfo,
  DishAvailability,
} from "./singleDish.styles";
import { BsToggleOff as Off, BsToggleOn as On } from "react-icons/bs";
import { BiArrowBack, BiTrash } from 'react-icons/bi';
import { MdEdit, MdStarRate } from 'react-icons/md';
import Sausage from '../../../../../lib/assets/sausage.jpg'
import MiniHeaderOutLine from '../../../../component/MiniHeader/MiniHeaderOutline'

const Index = ({onClick}) => {
  const [dishCategory, setDishCategory] = useState("vegetables and legumes");
  const [dishImage, setDishImage] = useState(Sausage.src);
  const [dishTitle, setDishTitle] = useState(" Hot Dog Pie");
  const [dishCode, setDishCode] = useState("2546685");
  const [toggleSwitch, setToggleSwitch] = useState(true);

  return (
    <SingleDishWrapper>
      <MiniHeaderOutLine
        onClick={onClick}
        navigation
        settings
        title={dishCategory}
      />

      <SingleDishBody>
        <DishImageWrapper>
          <img src={dishImage} alt="" />
        </DishImageWrapper>
        <DishDetails>
          <DishTitleAndPrice>
            {dishTitle}
            <div className={"dish-price"}>#500</div>
          </DishTitleAndPrice>
          <DishCode>Dish Code: {dishCode}</DishCode>
          <DishRating>
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
            <MdStarRate />
          </DishRating>
          <DishInfo>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          </DishInfo>
          <DishAvailability>
            <div>
              <span>Availability</span>
              <div className="availability-text">
                {"Toggle on if this dish is still available to order"}
              </div>
            </div>
            <div>
              {toggleSwitch ? (
                <Off
                  onClick={() => setToggleSwitch(!toggleSwitch)}
                  id="off"
                  style={{
                    color: "#707070",
                    fontSize: "1.2rem",
                    padding: "0px",
                  }}
                />
              ) : (
                <On
                  onClick={() => setToggleSwitch(!toggleSwitch)}
                  style={{
                    color: "#F38B1C",
                    fontSize: "1.2rem",
                  }}
                />
              )}
            </div>
          </DishAvailability>
        </DishDetails>
      </SingleDishBody>
    </SingleDishWrapper>
  );
};

export default Index;
