import styled from "styled-components";

export const ContainerWrap = styled.div`
  padding: 10px;
  margin: 10px 0;
  ${"" /* width: 100%; */}
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  p,
  label,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
`;

export const HeaderWrapper = styled.div``;

export const TextWrapper = styled.div`
  margin: 5px 0;
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const PriceFigure = styled.p`
  color: ${({ color }) => color || "#000000"};
  font-weight: bold;
  position: relative;

  .fa-naira-sign {
      font-size: 10px;
      position: absolute;
      left: -10px;
      top: 2px;
  }
`;
export const NairaIcon = styled.div``;

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0 10px;
  border-bottom: 1px solid #ccc;
`;

export const HeaderTitle = styled.h3`
  color: ${(props) => props.color || "#7f7f7f"};
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
`;

export const TextWrap = styled.div`
  margin: 10px 0;
`;

export const FlexComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  padding: ${({ padding }) => padding || 0};
  width: 98%;

  .fa-cc-visa, .fa-cc-mastercard {
      color: #1100FF;
  }
`;

export const TextTitle = styled.p`
  font-size: ${(props) => props.fs || "14px"};
  color: ${({ color }) => color || "#000000"};
  font-weight: ${(props) => props.fontWeight || 500};
`;

export const TextContentWrap = styled(FlexComponent)`
  margin: 0;
  ${"" /* flex-direction: column; */}
`;

export const TextContent = styled(TextTitle)`
  font-weight: ${(props) => props.fw || 600};
  font-size: ${(props) => props.fs || "14px"};
  color: #000000;
  width: ${(props) => props.width || "100%"};
`;
