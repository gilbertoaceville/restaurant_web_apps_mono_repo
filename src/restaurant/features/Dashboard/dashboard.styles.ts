import styled from "styled-components";

export const DashboardWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  .dashboard-header {
    height: 15%;
  }
  .dashboard-body {
    height: 85%;
    display: flex;
    justify-content: stretch;  

    .whitespace{
  flex-basis: 3%;

    }
  }
`;

export const DrawerDiv = styled.div`
  height: 100%;
  flex-basis: 16%;
  background: #f38b1c 0% 0% no-repeat padding-box;
`;


export const Display = styled.div`
  height: 100%;
  flex-basis: 72.5%;
`;
