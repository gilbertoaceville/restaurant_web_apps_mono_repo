import styled from "styled-components";

export const StampContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

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

export const DeliveryStatus = styled.p`
  font-size: 16px;
  color: ${({ color }) => color || "#E4EC00"};
  font-weight: 550;
  text-transform: capitalize;
  margin: 0;
`;

export const DateStatus = styled.p`
  color: #000000;
  font-size: 14px;
  margin: 0 0 0 10px;
`;
