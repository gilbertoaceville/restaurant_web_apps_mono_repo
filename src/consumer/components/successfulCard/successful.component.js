import React from "react";
import Button from "../../../restaurant/component/Button/button.component";
import Modal from "../modal/modal.component";
import { ModalContainer } from "./successful.styles";

const SuccessfulCard = ({
  title = "Successful",
  text = "Your Order has been placed",
  icon = <i className="fa-solid fa-check"></i>,
  value = "Back to Shopping",
}) => {
  return (
    <ModalContainer>
      <div className="modal-wrapper">
        {icon && <div className="icon-container">{icon}</div>}
        <div className="modal-text-wrap">
          <header>
            <h3>{title}</h3>
          </header>
          <p>{text}</p>
        </div>
        {value && <Button value={value} />}
      </div>
    </ModalContainer>
  );
};

export default SuccessfulCard;
