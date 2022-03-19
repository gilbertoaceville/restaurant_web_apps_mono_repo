import React from "react";
import { OrderCardWrapper } from "./orderCard.styles";
import Logo from "../../assets/logo.png";
import Image from "next/image";

export const OrderCard = () => {
  return (
    <OrderCardWrapper>
      <div className="section section1">
        <p>HDXIDHJNE</p>
      </div>

      <div className="section section2">
        <Image className="image" src={Logo} height={60} width={60} />

        <div className="personal-detail">
          <p className="name">Girky mandi</p>
          <p className="address">44B Aba Owerri Road</p>
          <p className="gender">male</p>
        </div>
      </div>

      <div className="section section3">
        <p className="content email">girkymandi@gmail.com</p>
        <p className="content number">08064659936</p>
      </div>

      <div className="section section4">
        <p className="content items-Order">Onion Bagel Pizza,</p>
        <p className="content items-Order">Tofu Burger King,</p>
      </div>

      <div className="section section5">
          <p>Pending</p>
      </div>
    </OrderCardWrapper>
  );
};
