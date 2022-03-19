import React, { useState } from "react";
import Button from "../../../restaurant/component/Button/button.component";
import InputComponent from "../../../restaurant/component/Input/input.component";
import Modal from "../../components/modal/modal.component";
import SelectComponent from "../../components/select/select.component";
import { PaymentMethodWrapper } from "./paymentMethod.styles";

const PaymentMethod = () => {
  const options = [
    {
      name: "select payment method",
      value: null,
    },
    {
      name: "visa",
      value: "visa",
    },
    {
      name: "mastercard",
      value: "mastercard",
    },
  ];
  return (
    <PaymentMethodWrapper>
      <header>
        <h3 className="title">Add Payment Method</h3>
      </header>
      <SelectComponent title="Payment Method" options={options} />
      <div className="card-number">
        <InputComponent
          type="text"
          label="Card Number"
          placeholder="4554 6543 5487 6254"
        />
      </div>
      <div className="card-passcode">
        <InputComponent type="password" label="Card Pin" placeholder="****" />
        <InputComponent type="password" label="CVV" placeholder="****" />
      </div>
      <div className="date-wrap">
        <div className="date-container">
          <InputComponent
            type="date"
            label="Expiry Date"
            placeholder="Select date"
          />
        </div>
        <div className="checker-save-container">
          <input type="checkbox" id="toggle" />
          <label>Save the Card</label>
        </div>
      </div>
      <div className="btn-container">
        <Button value="Add Card" />
      </div>
    </PaymentMethodWrapper>
  );
};

export default Modal(PaymentMethod);
