import React from "react";
import Button from "../../../restaurant/component/Button/button.component";
import Footer from "../../components/footer/footer.component";
import { MultiPurposeCard } from "../../components/multiPurposeCard/multiPurposeCard.component";
import { Spacer } from "../../components/spacer/spacer.component";
import SubHeader from "../../components/subheader/subheader.component";
import {
  CartContainer,
  FlexLayout,
  Separator,
  SubTitle,
  SubValue,
} from "./cart.styles";

const cartArray = [
  {
    index: 0,
    name: "Chicken peppersoup",
    img: "",
    address: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    price: 1400,
  },
  {
    index: 1,
    name: "Hot Dog Pie",
    img: "",
    address: "54 East West Road Abia State, Nigeria.",
    price: 500,
  },
  {
    index: 2,
    name: "Chicken Crunch",
    img: "",
    address: "6 Factory Rd(Leventis building) Aba, Abia State, Nigeria.",
    price: 1000,
  },
];
const Cart = () => {
  return (
    <CartContainer>
      <SubHeader search={false} />
      <article className="cart-wrapper">
        <section className="cart-wrap">
          <div className="cart-left-layout">
            {cartArray.map(({ index, name, img, address, price }) => (
              <>
                <MultiPurposeCard
                  key={index.toString()}
                  width="90%"
                  foodName={name}
                  address={address}
                  price={price}
                  deleteIcon
                  counter
                />
                <Spacer size="small" />
              </>
            ))}
          </div>
          <div className="cart-right-layout">
            <FlexLayout>
              <SubTitle>items</SubTitle>
              <SubValue>3</SubValue>
            </FlexLayout>
            <FlexLayout>
              <SubTitle>subtotal</SubTitle>
              <SubValue><i className="fa-solid fa-naira-sign"></i>5,900</SubValue>
            </FlexLayout>
            <FlexLayout>
              <SubTitle>delivery</SubTitle>
              <SubValue><i className="fa-solid fa-naira-sign"></i>500</SubValue>
            </FlexLayout>
            <Separator />
            <FlexLayout>
              <SubTitle color="#F38B1C">Total</SubTitle>
              <SubValue><i className="fa-solid fa-naira-sign"></i>6,400</SubValue>
            </FlexLayout>
            <div className="btn-container">
              <Button value="Proceed to Check Out" />
            </div>
          </div>
        </section>
      </article>
      <Footer />
    </CartContainer>
  );
};

export default Cart;
