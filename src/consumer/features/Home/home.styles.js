import styled from "styled-components";
import { Square } from "../../components/Square/square.component";

export const Container = styled.div`
  /* flex: 1; */

  .text-section-wrap {
    display: flex;
    justify-content: center;
  }

  .text-section {
    margin: 1.5em 0;
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: space-between;
    p,
    h1 {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    }

    h1 {
      font-size: 18px;
      font-weight: 550;
      line-height: 24px;
    }

    p {
      font-size: 14px;
      color: #7f7f7f;
      line-height: 19px;
    }

    .text-section-right {
      color: #f38b1c;
      font-size: 13px;
      display: inline-flex;
    }
  }

  @media screen and (max-width: 992px) {
    .text-section {
      margin: 1.5em 0;
    }
  }

  @media screen and (max-width: 750px) {
    .text-section {
      margin: 1em 0;

      h1 {
        font-size: 16px;
        line-height: 22px;
      }

      p {
        font-size: 12px;
        line-height: 17px;
      }
    }
  }
`;

export const SecondSection = styled.div`
  width: 100%;
  height: auto;
  margin-top: 40px;
  align-items: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 750px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
  }

  .horizontalSection {
    width: 90%;
    display: flex;

    @media screen and (max-width: 750px) {
      width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
      flex-direction: column;
      align-items: center;
      justify-content: center;

      /* background-color: green; */
    }
  }
`;
export const SmallCardContainer = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex-direction: row;

  @media screen and (max-width: 1292px) {
  }

  @media screen and (max-width: 750px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    /* background-color: red; */
    /* justify-content: center; */
  }
`;

export const ThirdSection = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;

  .inner {
    width: 95%;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly;
    display: flex;
  }

  @media screen and (max-width: 1292px) {
    .inner {
      width: 95%;
      /* background-color:blue; */
      align-items: center;
      flex-wrap: wrap;
      justify-content: center;
      display: flex;
    }
  }
  @media screen and (max-width: 750px) {
    width: "100%";
    flex-direction: column;
    justify-content: center;
    display: flex;
    align-items: center;

    .inner {
      width: 90%;
      align-items: center;
      flex-wrap: wrap;

      justify-content: center;
      display: flex;
    }
  }
`;

export const FourthSection = styled.div`
  margin: 2em 0;
  ${"" /* width: 95%; */};

  .restaurant-card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;

    .restaurant-card-wrapper {
      width: 90%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(376px, 1fr));
      grid-gap: 2em 1em;
      justify-content: center;
    }
  }
`;

export const UnoCard = styled.div`
  width: 376px;
  height: 208px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  overflow: hidden;

  p,
  h1 {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .card-footer {
    background: #f38b1c 0% 0% no-repeat padding-box;
    ${"" /* border-radius: 0px 0px 25px 25px; */}
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    padding: 0.5em 1em;
    width: 100%;

    .card-footer-header,
    .card-footer-address {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h1 {
        font-size: 15px;
        color: #ffffff;
        font-weight: 550;
      }

      p {
        font-size: 12px;
        color: #ffffff;
        margin-top: 0.5em;
      }
    }
  }

  @media(max-width: 900px) {
    justify-self: center; 
  }

  @media (max-width: 750px) {
    width: 280px;
    height: 132px;
  }
`;
