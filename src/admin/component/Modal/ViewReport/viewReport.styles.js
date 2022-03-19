import styled from "styled-components";

export const ViewReportWrapper = styled("div")`
  justify-content: center;
  align-items: center;
  position: absolute;
  display: flex;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
`;

export const ReportCard = styled("div")`
  width: 60%;
  height: 80%;
  z-index: 9999;
  border-radius: 15px;
  background-color: #fff;
`;

export const CardHeader = styled("div")`
  height: 8%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px #0000001a;
  border-bottom: 1px solid #4f4c4c2e;

  .leftDiv,
  .centerDiv,
  .rightDiv {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 20px;
    }
  }

  .leftDiv {
    flex-basis: 60%;

    .monthlyArrow {
      width: 170px;
      height: 15px;
      padding: 5px 10px;
      border-radius: 15px;
      border: 1px solid #00000098;
      /* border: 1px solid #4f4c4c2e; */
    }
  }

  .centerDiv,
  .rightDiv {
    flex-basis: 20%;
  }
`;

export const ReportCardBody = styled("div")``;

export const OverLay = styled("div")`
  background-color: #00000098;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 1;
  left: 0;
  top: 0;
`;
