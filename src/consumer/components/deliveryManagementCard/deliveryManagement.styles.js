import styled from "styled-components";

export const ManagementCard = styled.div`
  height: auto;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 10px 20px;
  margin: 5px 0px;
  width: 428px;
  box-shadow: 0 8px 8px -4px #ccc;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  p,
  h1,
  h2,
  h4,
  h3,
  h5,
  h6 {
    margin: 0;
  }

  img {
    border-radius: 100%;
  }

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2em;
  }

  .icon-container {
    background-color: #f38b1c;
    border-radius: 8px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    width: 350px;
  }

  @media (max-width: 768px) {
    width: 328px;
  }

  @media (max-width: 750px) {
    width: 90%;
    padding: 10px;
  }
  
  @media (max-width: 320px) {
    width: 92%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexComponent = styled.div`
  margin: 3px 0px;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "space-between"}
  align-items: ${(props) => props.alignItems || "center"};
  width: 100%;
`;

export const TextContent = styled.p`
  color: ${(props) => props.color || "#7F7F7F"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: ${(props) => props.fontWeight || 600};
  line-height: ${(props) => props.lineHeights || "24px"};
`;

export const ManagementBtn = styled.div`
  height: 20px;
  padding: 8px 10px;
  background: ${(props) => props.bgColor || "#E4EC0099"};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 750px) {
    padding: 3px 10px;
  }
`;

export const DefaultWrap = styled.div``;

export const ImageContainer = styled.div`
  width: 93px;
  height: 93px;
  margin-right: 17px;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PriceFigure = styled.p`
  color: ${(props) => props.color || "#000000"};
  font-weight: bold;
  position: relative;

  .fa-naira-sign {
    font-size: 10px;
    position: absolute;
    left: -10px;
    top: 2px;
  }
`;
