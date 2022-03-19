import styled from "styled-components";

export const CardContainer = styled.figure`
  width: 219px;
  height: 304px;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  ${'' /* box-shadow: 0 8px 8px -2px #333; */}
  border-radius: 8px;

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  label {
    margin: 0;
    padding: 0;
  }

  .image-container {
    width: 100%;
    height: 153px;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;
  }

  .text-container {
      padding: 5px 10px;
  }

  .text-container header h4 {
      font-size: 16px;
      font-weight: 550;
      line-height: 28px;
      text-transform: capitalize;
  }

  .text-container p {
      font-size: 14px;
      color: #7F7F7F;
      margin: 5px 0;
      display: flex;
      line-height: 19px;
  }

  .text-container .fa-location-dot {
      color: #F38B1C;
      margin-right: 5px;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 1em;
`;

export const PriceFigure = styled.p`
  color: ${(props) => props.color || "#000000"};
  font-weight: bold;
  position: relative;
  font-size: 16px;

  .fa-naira-sign {
    font-size: 10px;
    position: absolute;
    left: -10px;
    top: 2px;
  }
`;