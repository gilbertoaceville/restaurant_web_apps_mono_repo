import styled from "styled-components";

export const WrapperContainer = styled.div`
  background-color: #fff9ec;
  width: 100%;
  display: flex;
  justify-content: center;

  ul,
  li,
  a,
  p {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  a {
    color: inherit;
  }

  .section-container {
    width: 90%;

    justify-content: space-around;
    display: flex;

    .section {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .logo-container {
      width: 15%;
      justify-content: flex-start;
    }

    .first-nav-link-container {
      width: 50%;

      a {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      p {
        font-size: 14px;
        color: #7f7f7f;
      }

      .route-active {
        color: #f38b1c;
      }
      .profile-image {
        background-color: gray;
        height: 26px;
        width: 26px;
        border-radius: 100%;
        overflow: hidden;
      }

      li {
        margin: 0px;
        color: #7f7f7f;
        font-size: 14px;
      }
    }
    .second-nav-link-container {
      .button-container {
        .button {
          margin-right: 1em;
          border: 2px solid #f38b1c;
          align-items: center;
          display: flex;
          justify-content: center;
          border-radius: 6px;
          background-color: #f38b1c;
          box-sizing: border-box;
          cursor: pointer;

          p {
            color: ${(props) => (props.color ? props.color : "#ffffff")};
            font-size: 14px;
            margin: 0;
            padding: 0;
          }
        }

        .order-button {
          padding: 0.6em 0.9em;

          p {
            font-weight: 700;
          }
        }

        .auth-button {
          background-color: transparent;
          padding: 0.3em 0.9em;

          p {
            color: #f38b1c;
            font-size: 13px;
            font-weight: 600;
          }
        }
      }
      ${"" /* width: 30%; */}
    }
  }

  @media (max-width: 768px) {
    .section-container {
      width: 95%;
      justify-content: space-between;
      display: flex;
      .section {
        width: unset;
      }

      .logo-container {
        width: unset;
      }

      .first-nav-link-container {
        ${
          "" /* align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column; */
        }
      }

      .second-nav-link-container {
        .button-container {
          .button {
            margin-right: 0;
            border-radius: 4px;
          }

          .order-button {
            padding: 0.4em 0.9em;
            ${
              "" /* height: 35px;
            width: 120px; */
            }
          }

          .auth-button {
            display: none;
          }
        }
      }
    }
  }

  @media screen and (max-width: 750px) {
    .section-container {
      width: 95%;
      .first-nav-link-container {
        display: none;
      }
    }
  }
`;

export const Link = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: flex;

  @media screen and (max-width: 992px) {
    flex-direction: row;
  }
`;

export const FlexibleDiv = styled.div`
  height: max-content;
  ${"" /* flex-basis: 33.3%; */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Notifications = styled(FlexibleDiv)`
  padding: 10px 5px;
  cursor: pointer;
  &:hover {
    border-radius: 15px;
    background-color: #70707015;

    svg {
      color: #f38b1c;
    }
  }
`;

export const Icon = styled.div`
  height: 45%;
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.7rem;
  color: #7f7f7f;
  position: relative;

  .icon-number {
    font-size: 10px;
    background-color: #ea4335;
    border-radius: 100%;
    height: 11px;
    width: 11px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1%;
    right: 20%;
    transform: translate(-20%, -1%);
    box-shadow: 0 2px 3px -1px #ffffff;
  }

  .cart-icon-number {
    top: 10%;
    right: 0;
    transform: translate(0, -10%);
    font-size: 9px;
    height: 10.5px;
    width: 10.5px;
  }
`;

export const BranchText = styled.p`
  ${"" /* flex-basis: 30%; */}
  font-size: 15px;
  color: #7f7f7f;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  .icon {
    margin: 3px 0 0 4px;
  }

  * {
    margin-left: 4px;
  }

  @media (max-width: 750px) {
    flex-basis: unset;
    font-size: 12px;
  }
`;

export const Settings = styled(FlexibleDiv)`
  padding: 10px 5px;
  cursor: pointer;
  &:hover {
    border-radius: 15px;
    background-color: #70707015;
    svg {
      color: #f38b1c;
    }
  }
`;

export const Help = styled(Settings)``;

export const Cart = styled(Notifications)``;
