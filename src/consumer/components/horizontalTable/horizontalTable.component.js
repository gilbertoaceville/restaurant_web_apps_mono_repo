import React, { Fragment } from "react";
import {
  ContainerWrap,
  HeaderWrap,
  HeaderTitle,
  TextWrap,
  FlexComponent,
  TextContent,
  TextContentWrap,
  PriceWrapper,
  NairaIcon,
  PriceFigure,
  TextTitle,
  HeaderWrapper,
  TextWrapper,
} from "./horizontalTable.styles";

const mappedOrderSummary = [
  {
    food: "Chicken peppersoup",
    price: 1400,
  },
  {
    food: "Hot Dog Pie",
    price: 500,
  },
  {
    food: "Chicken Crunch",
    price: 4000,
    qty: 4,
  },
];
const HorizontalTable = (props) => {
  const {
    headerSection = true,
    headerTitle = "Delivery Details",
    headerText = "Change",
    address = "145 Abia polytechnic street, off Aba Owerii Road, Aba, Abia State",
    emailOrHolder = "matthewcabret@gmail.com",
    nameOrNumber = "Matthew Cabret",
    cardNumber,
    nameOrCardNumber,
    emailOrcardHolder = "Email",
    visa = true,
    masterCard,
    orderSummary = false,
    price = 1400,
    deliveryPrice = 500,
    orderSummaryArray = mappedOrderSummary,
    lastLabel,
    NetTotal = true,
    addressChange = true,
    expiryDate = true,
  } = props;
  return (
    <ContainerWrap>
      {headerSection ? (
        <HeaderWrap>
          <HeaderTitle>{headerTitle}</HeaderTitle>
          {headerText && (
            <HeaderTitle color="#F38B1C">{headerText}</HeaderTitle>
          )}
        </HeaderWrap>
      ) : null}

      {orderSummary && (
        <HeaderWrapper>
          {orderSummaryArray.map(({ food, price, qty, naira = true }) => (
            <FlexComponent>
              <TextWrapper>
                <TextTitle>{food}</TextTitle>
              </TextWrapper>
              <TextWrapper>
                <TextTitle>{qty && qty + " Qty"}</TextTitle>
              </TextWrapper>
              <PriceWrapper flexDirection="row">
                <PriceFigure>
                  <i className="fa-solid fa-naira-sign"></i>
                  {price}
                </PriceFigure>
              </PriceWrapper>
            </FlexComponent>
          ))}

          <HeaderWrap>
            <FlexComponent>
              <TextWrapper>
                <TextContent>{lastLabel ? lastLabel : "Delivery"}</TextContent>
              </TextWrapper>
              <PriceWrapper flexDirection="row">
                <PriceFigure>
                  <i className="fa-solid fa-naira-sign"></i>
                  {deliveryPrice}
                </PriceFigure>
              </PriceWrapper>
            </FlexComponent>
          </HeaderWrap>

          {NetTotal ? (
            <FlexComponent padding="5px 0">
              <TextTitle fontWeight="bold" color="#F38B1C">
                Total
              </TextTitle>
              <PriceWrapper flexDirection="row">
                <PriceFigure color="#F38B1C">
                  <i className="fa-solid fa-naira-sign"></i>
                  {price}
                </PriceFigure>
              </PriceWrapper>
            </FlexComponent>
          ) : null}
        </HeaderWrapper>
      )}

      {nameOrCardNumber && (
        <Fragment>
          <TextWrap>
            <FlexComponent>
              <TextTitle>{nameOrCardNumber}:</TextTitle>
            </FlexComponent>
            <TextContentWrap>
              <FlexComponent>
                <TextTitle fontWeight="bold">
                  {nameOrNumber ? nameOrNumber : cardNumber}
                </TextTitle>
                {cardNumber ? (
                  <Fragment>
                    {visa ? (
                      <i className="fa-brands fa-cc-visa"></i>
                    ) : (
                      masterCard && <i className="fa-brands fa-cc-mastercard"></i>
                    )}
                  </Fragment>
                ) : null}
              </FlexComponent>
            </TextContentWrap>
          </TextWrap>

          <TextWrap>
            <FlexComponent>
              <TextTitle>{emailOrcardHolder}:</TextTitle>
            </FlexComponent>
            <TextContentWrap>
              <TextContent fw="bold">{emailOrHolder}</TextContent>
            </TextContentWrap>
          </TextWrap>

          {address ? (
            <TextWrap>
              <FlexComponent>
                <TextTitle>Address:</TextTitle>
                {addressChange && (
                  <HeaderTitle style={{fontSize: "15px"}} color="#F38B1C">Change Address</HeaderTitle>
                )}
              </FlexComponent>
              <TextContentWrap>
                <TextContent width="50%" fw="bold">
                  {address}
                </TextContent>
                <TextContent></TextContent>
              </TextContentWrap>
            </TextWrap>
          ) : (
            cardNumber &&
            expiryDate && (
              <FlexComponent>
                <TextWrap>
                  <TextTitle>Expiry Date:</TextTitle>
                  <TextContent fw="bold">08/2024</TextContent>
                </TextWrap>
                <TextWrap>
                  <TextTitle>CVV</TextTitle>
                  <TextContent fw="bold">412</TextContent>
                </TextWrap>
                <TextWrap>
                  <TextContent>{""}</TextContent>
                </TextWrap>
              </FlexComponent>
            )
          )}
        </Fragment>
      )}
    </ContainerWrap>
  );
};
export default HorizontalTable;
