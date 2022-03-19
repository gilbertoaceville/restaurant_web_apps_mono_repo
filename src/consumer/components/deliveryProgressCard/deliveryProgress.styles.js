import styled from "styled-components";

export const CardContainer = styled.div`
  width: 651px;
  height: 311px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  box-shadow: 0 8px 8px -4px #333;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .progress-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 100%;
  }

  .progress-container {
    display: flex;
    align-items: flex-start;
  }

  .progress-text-container {
    margin-left: 10px;
  }

  .progress-text-container p {
    font-size: 14px;
    color: #000000;
    margin: 0;
  }

  .progress-card-wrap input {
    width: 150px;
    border: none;
  }

  @media (max-width: 750px) {
    width: 95%;

    .progress-wrapper {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      justify-content: center;
      grid-gap: 1.3em;
      padding: 0 1em;
    }

    .progress-container {
        
    }
  }
`;

export const ProgressDotContainer = styled.div`
  width: 25px;
  height: 25px;
  border: ${({ color }) => `1px solid ${color || "#0018ec"}`};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressDot = styled.div`
  width: 17px;
  height: 17px;
  border-radius: inherit;
  background: ${({ color }) =>
    `${color || "#0018ec"} 0% 0% no-repeat padding-box`};
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 16px;
  line-height: 26px;
  color: ${({ color }) => color || "#0018ec"};
  text-transform: capitalize;
`;
