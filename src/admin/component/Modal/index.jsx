/*
 * component: modal
 * author:
 * Date:
 * Crunchies modal component
 */

import React, { useImperativeHandle, forwardRef, useState } from "react";
import { ModalWrap } from "./modal.styles";
// import Button from "../Button";
import { CloseIcon } from "react-icons/io5";
import { OverFlowScrollBar } from "../../../lib/components/OverflowScroll/styles";

const Modal = 
  ({ show, handleClose, modalTitle, noHeader, children }, ref) => {
    let buttonRef = React.createRef();

    const [canClose, setCanClose] = useState(false);

    useImperativeHandle(ref, () => ({
      preventBodyScroll() {
        buttonRef.current.ownerDocument.body.style.overflow = "hidden";
      },
      addBodyScroll() {
        buttonRef.current.ownerDocument.body.style.overflow = "";
      },
    }));

    const close = () => {
      buttonRef.current.ownerDocument.body.style.overflow = "";
      handleClose();
    };

    return (
      <ModalWrap
        show={show}
        ref={buttonRef}
        canClose={canClose}
        noHeader={noHeader}
        onMouseEnter={() => setCanClose(true)}
        onMouseLeave={() => setCanClose(false)}
      >
        {canClose ? <div className={"overlay"} /> : null}

        <div className="main">
          {canClose ? (
            <div className="cover-ev" onClick={() => close()} />
          ) : null}

          <div className="modalBody">
            <div className="modalWrap">
              <header>
                <div className="modalHead">
                  <h2>{modalTitle && modalTitle.toUpperCase()}</h2>
                </div>
                <span className="closeBtn" onClick={() => close()}>
                  <CloseIcon width="15px" height="15px" color="#b3b3b9" />
                </span>
              </header>

              <OverFlowScrollBar className="modalContainer">
                {children}
              </OverFlowScrollBar>
            </div>
          </div>
        </div>
      </ModalWrap>
    );
  }


export default Modal;
