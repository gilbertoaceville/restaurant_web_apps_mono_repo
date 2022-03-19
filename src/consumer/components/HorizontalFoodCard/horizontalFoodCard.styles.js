import styled from "styled-components";

export const HorizontalSectionContainer = styled.div`
  width: 55%;
  border-radius: 20px;
  justify-content: center;
  display: flex;
  overflow: hidden;
  background: linear-gradient(to right, #f38b1c, #edd5ae);
  position: relative;

  .food-wrap {
    width: 50%;
  }

  @media screen and (max-width: 750px) {
    border-radius: 10px;
    width: ${(props) => (props.mediawidth ? props.mediawidth : "90%")};
  }
`;
export const Section = styled.div`
  background-color: ${(props) =>
    props.background ? props.background : "transparent"};
  width: ${(props) => (props.width ? props.width : "50%")};
  margin-left: 30px;
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  .logo-wrap {
    margin-top: 1em;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  @media screen and (max-width: 750px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
  }
`;
export const FoodContainer = styled.div`
  ${"" /* width: 50%; */}
  position: absolute;
  right: 0;
  top: -50%;
  transform: translate(0, 50%);

  @media screen and (max-width: 768px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
    position: unset;
  }
`;
export const Name = styled.p`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin: 2em 0 0.5em 0;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 750px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
    margin: 1em 0 0.5em 0;
    font-size: 16px;
  }

  @media screen and (max-width: 692px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};

    font-size: 16px;
  }
`;
export const Text = styled.p`
  font-size: 16px;
  color: white;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 750px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
    margin-bottom: 1em;
  }
  @media screen and (max-width: 660px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
    font-size: 12px;
  }
`;

export const Order = styled.p`
  font-size: 20px;
  color: white;
  font-weight: 800;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  @media screen and (max-width: 750px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};
  }

  @media screen and (max-width: 692px) {
    width: ${(props) => (props.mediawidth ? props.mediawidth : "100%")};

    font-size: 16px;
  }
`;
