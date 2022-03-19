import styled from "styled-components";

export const CardWrapper = styled("div")`
  width: 100%;
  height: 95px;
  background: transparent url() 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #00000029;
  border-radius: 11px;
  opacity: 1;
  filter: blur(0px);
  display: flex;
  justify-content: space-between;
  margin: 15px 0px;
`;

export const CardDetailsWrapper = styled("div")`
  flex-basis: 33%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserImageWrapper = styled("div")`
  flex-basis: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;

    .userImage {
      width: 100%;
      height: 100%;
      clip-path: circle(50%);
      border-radius: inherit;
      box-shadow: 0px 3px 10px #0000001a;
      opacity: 1;
    }
  }
`;

export const UserDetailsWrapper = styled("div")`
  flex-basis: 68%;

  div {
    padding: 2px 0;
    height: 100%;
  }

  .userName {
    color: #000;
    font-size: 13px;
    font-weight: 600;
  }

  .userAddress {
    color: #7f7f7f95;
    font-size: 11px;
    font-weight: lighter;
  }

  .userGender {
    font-size: 10px;
    font-weight: lighter;
  }
`;

export const Status = styled("div")`
  display: flex;
  flex-basis: 35%;
  justify-content: space-around;
  align-items: center;

  .deliveryStatus {
    color: #15d527;
    font-size: 12px;
  }
  .deliveryReport {
    color: #f38b1c;
    border: 1px solid #f38b1c;
    padding: 12px;
    border-radius: 12px;
    font-size: 12px;
    cursor: pointer;
  }
  .text {
    color: #f38b1c;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;
    cursor: pointer;
  }
`;

export const DispatcherSection = styled("div")`
  display: flex;
  /* border: solid red; */
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;

  .pending {
    color: #d5c815;
    font-size: 12px;
  }
  .verified{
    color: #00d115;
    font-size: 12px;
  }
  .profile {
    color: #f38b1c;
    font-size: 12px;
    cursor: pointer;
    padding: 5px 0px;
    &:hover{
      opacity: 0.7;
    }
  }

  .pending-profile {
    text-align: center;
  }
  .verifyButton {
    display: flex;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    /* padding: 10px 20px; */
    border-radius: 5px;
    background-color: #ccf6d0;
    color: #00d115;
    cursor: pointer;
    height: 40px;
    width: 100px;
    &:hover{
      opacity: 0.8;
    }
  }
`;

export const CardTextButtonWrapper = styled("div")`
  flex-basis: 15%;
  display: flex;
  align-items: center;

  .button {
    flex-basis: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #f38b1c;
    font-size: 12px;
    /* font-weight: bold; */

    p {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      div {
        width: max-content;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 20px;
        }
      }
    }
  }

  .button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 5px;

    .callTime {
      height: 100%;
      display: flex column;
      width: 100%;
    }
    .time {
      color: #7f7f7f95;
      height: 20%;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      font-weight: lighter;
      font-size: 12px;
    }

    .callCancel {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80%;

      .cancel {
        cursor: pointer;

        .cancelButton {
          height: 40px;
          width: 100px;
          cursor: pointer;
          border-radius: 5px;
          background-color: #ffd8cc;
          font-size: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ff3e00;
          &:hover{
      opacity: 0.8;
    }        }
        svg {
          font-size: 30px;
        }

        .dropdownIconHolder {
          /* border: 1px solid red; */
          position: relative;

          .moreDropdown {
            /* border: 1px solid red; */
            width: 100px;
            height: 70px;
            border-radius: 5px;
            background-color: #fff;
            box-shadow: 2px 2px 2px lightgrey;
            position: absolute;
            top: 0;
            right: 30px;

            div {
              padding: 5px 10px;
              color: #000000;

              &:hover {
                background-color: #3c393917;
              }
            }
          }
        }
      }
    }
  }
`;

export const EmailPhoneWrapper = styled("div")`
  flex-basis: 25%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .subWrapper {
    /* width: 300px; */
    padding: 5px;
    .userEmail,
    .userPhone {
      font-size: 12px;
      font-weight: lighter;
      padding: 2px 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .call {
    cursor: pointer;
    svg {
      padding: 5px;
      color: #f38b1c;
      border-radius: 8px;
      font-size: 15px;
    }
  }
`;
