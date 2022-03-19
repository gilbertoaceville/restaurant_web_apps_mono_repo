import React from "react";
import Image from "next/image";
import Person from "../../assets/pdf.png";
import {
  ManagementCard,
  FlexComponent,
  TextContent,
  ManagementBtn,
  FlexContainer,
  ImageContainer,
  DefaultWrap,
  PriceWrapper,
  PriceFigure,
} from "./deliveryManagement.styles";

const DeliveryManagementCard = ({
  DeliveryAgentTitle = true,
  UserInfoSection = true,
  OrderDetailsSection = true,
  picture = Person,
  total = 6400,
  progress = "On Delivery- Tracking",
  name = "Nico Marks",
  email = "matthewcabret@gmail.com",
  food = "Hot Dog Pie",
  invoiceNo = "#CR845645",
  date = "22-04-2021",
  time = "01:30PM",
  phoneNumber = "08033367388",
  bgColor = "#f8ca31",
  deliveryAgent = "Delivery Agent",
  restaurant = "Crunchies Restaurant 6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
  address = "145 Abia polytechnic street, off Aba Owerii Road, Abia, Nigeria",
  makePhoneCall,
  onclickprogress
}) => {
  const deliveryContext = "Delivered To";
  return (
    <ManagementCard>
      {DeliveryAgentTitle ? (
        <>
          <div className="header-container">
            <div>
              <TextContent>Delivery Agent</TextContent>
            </div>
            <ManagementBtn onClick={onclickprogress} bgColor={bgColor}>
              <TextContent
                fontSize="15px"
                color={"#ffffff"}
                fontWeight={"bold"}
              >
                {progress}
              </TextContent>
            </ManagementBtn>
          </div>
        </>
      ) : null}
      {UserInfoSection ? (
        <FlexComponent>
          <FlexComponent>
            <ImageContainer>
              <Image src={picture} alt="profile" objectFit="cover" />
            </ImageContainer>
            <DefaultWrap>
              <TextContent
                lineHeights="26px"
                fontSize="16px"
                color={"#000000"}
                fontWeight={"bold"}
              >
                {name}
              </TextContent>
              <TextContent fontSize="12px">{email}</TextContent>
            </DefaultWrap>
          </FlexComponent>
          <div onClick={makePhoneCall} className="icon-container">
            <i
              style={{ color: "#ffffff", fontSize: "14px" }}
              className="fa-solid fa-phone"
            ></i>
          </div>
        </FlexComponent>
      ) : null}
      {OrderDetailsSection ? (
        <>
          <DefaultWrap>
            <FlexContainer>
              <TextContent>Order ID:</TextContent>
              <TextContent fontWeight={"bold"} color={"#000000"}>
                {invoiceNo} - {food}
              </TextContent>
            </FlexContainer>
            <FlexContainer>
              <TextContent>Order Date:</TextContent>
              <TextContent fontWeight={"bold"} color={"#000000"}>
                {date} - {time}
              </TextContent>
            </FlexContainer>
            <FlexContainer>
              <TextContent>Total</TextContent>
              <PriceWrapper flexDirection="row">
                <PriceFigure><i className="fa-solid fa-naira-sign"></i>{total}</PriceFigure>
              </PriceWrapper>
            </FlexContainer>
          </DefaultWrap>
        </>
      ) : null}
    </ManagementCard>
  );
};

export default DeliveryManagementCard;
