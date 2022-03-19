import React from "react";
import Button from "../../../restaurant/component/Button/button.component";
import HorizontalTable from "../../components/horizontalTable/horizontalTable.component";
import Modal from "../../components/modal/modal.component";
import { CheckoutContainer } from "./checkout.styles";

const Checkout = () => {
  return (
    <CheckoutContainer>
      <section className="left-layout">
        <HorizontalTable
          orderSummary={true}
          headerTitle="Order Summary"
          headerText={false}
        />
        <div className="separator"></div>
        <HorizontalTable nameOrCardNumber="Name" headerText={false} />
      </section>
      <section className="right-layout">
        <HorizontalTable
          headerTitle="Payment Details"
          nameOrCardNumber="Card Number"
          headerText="Change"
          address={""}
          cardNumber="0000123456789"
          nameOrNumber=""
          headerText={false}
        />
        <div className="btn">
          <Button value="Make Payment" />
        </div>
      </section>
    </CheckoutContainer>
  );
};

export default Modal(Checkout);
