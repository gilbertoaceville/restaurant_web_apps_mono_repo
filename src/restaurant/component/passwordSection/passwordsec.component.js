import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Tracker from "../../assets/tracker.png";
import OrderTracker from "../../assets/order-tracker.png";
import DeliveryTracker from "../../assets/delivery-tracker.png";
import AuthLayout from "../AuthLayout/authLayout.component";
import {
  DotsContainer,
  LeftLayout,
  LeftLayoutContainer,
  LeftLayoutWrap,
  RightLayout,
  Text,
  Title,
} from "./password.styles";

const sliders = [
  {
    index: 0,
    title: "Nearby restaurants",
    text: "You don't have to go far to find a good restaurant, we have provided all the restaurants that is near you",
    img: Tracker,
  },
  {
    index: 1,
    title: "Select the Favorites Menu",
    text: "Now eat well, don't leave the house,You can choose your favorite food only with one click",
    img: OrderTracker,
  },
  {
    index: 2,
    title: "Delivery and Tracking",
    text: "Track all your dishes as it Is been delivered to you in realtime",
    img: DeliveryTracker,
  },
];

const PasswordLayout = ({
  children,
  title = "Forgot Password?",
  text = "Enter the email you used in creating your account below",
  formHeight,
}) => {
  const [index, setIndex] = useState(0);

  // timer control
  const timeOutRef = useRef(null);

  //clear timer
  const resetTimer = () => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }
  };

  useEffect(() => {
    resetTimer();
    timeOutRef.current = setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === sliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      resetTimer();
    };
  }, [index]);
  return (
    <AuthLayout>
      <LeftLayout>
        <LeftLayoutContainer>
          <LeftLayoutWrap
            style={{
              transform: `translateX(-${index * (100 / sliders.length)}%)`,
            }}
          >
            {sliders.map(({ img, text, title, index }) => (
              <div key={index.toString()} className="left_layout_content">
                <div className="img-wrapper">
                  <Image src={img} alt={`image_${index}`} objectFit="cover" />
                </div>
                <header>
                  <Title>{title}</Title>
                </header>
                <Text>{text}</Text>
              </div>
            ))}
          </LeftLayoutWrap>
        </LeftLayoutContainer>

        <DotsContainer id={`dots-wrapper-${index}`}>
          {sliders.map(({ index }) => (
            <div
              key={index.toString()}
              id={`dot-${index}`}
              className="dot"
            ></div>
          ))}
        </DotsContainer>
      </LeftLayout>
      <RightLayout>
        <form
          style={{ height: formHeight }}
          onSubmit={(e) => e.preventDefault()}
          className="form"
        >
          <header className="form_header">
            <Title style={{ margin: 0 }}>{title}</Title>
            <Text color="#7F7F7F">{text}</Text>
          </header>
          {children}
        </form>
      </RightLayout>
    </AuthLayout>
  );
};

export default PasswordLayout;
