import React from "react";
import Image from "next/image";
import Cross from "../../assets/cross-circle.png";
import { ModalWrapper } from "./modal.styles";

function Modal(Component) {
  return function ModalLayout(props) {
      const {iconContainer = true} = props;
    return (
      <ModalWrapper>
        <div className="overlay"></div>
        {iconContainer && (
          <div className="img-container">
            <Image src={Cross} alt="" objectFit="contain" width="30px" />
          </div>
        )}
        <Component {...props} />
      </ModalWrapper>
    );
  };
}

export default Modal;
