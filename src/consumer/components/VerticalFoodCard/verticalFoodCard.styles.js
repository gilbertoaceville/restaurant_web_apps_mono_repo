import styled from "styled-components";
import Image from "next/image";
export const Container = styled.div`
  width: 14%;
  margin-top: 10px;
  margin-right: 2%;
  height: 250px;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .imageContainer {
    flex: 3;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    display: flex;

    .CardImage {
      width: 100%;
      flex: 1;
    }
  }

  .food-content {
    display: flex;
    margin-top: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .food-name {
    align-items: flex-start;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 16px;
    color: #000000;
  }
  .food-location {
    font-size: 14px;
    display: flex;
    color: #7f7f7f;

    .location-text {
      color: #7f7f7f;
      align-items: flex-start;
      justify-content: flex-start;
      display: flex;
    }

    .location-icon {
    }
  }
  .food-Price {
    flex: 1;
    font-size: 16px;
    color: #000000;

    align-items: center;
    justify-content: center;
    display: flex;
  }

  @media screen and (max-width: 1292px) {
    width: 20%;
  }

  @media screen and (max-width: 992px) {
    width: 25%;
    margin-left: 0px;
  }
  @media screen and (max-width: 672px) {
    width: 40%;
    height: 250px;
  }
  @media screen and (max-width: 440px) {
    width: 80%;
  }
`;

export const CardImage = styled(Image)`
  background-color: orange;
  height: 100%;
  flex: 1;

  @media screen and (max-width: 992px) {
    width: "90%";
  }
`;
