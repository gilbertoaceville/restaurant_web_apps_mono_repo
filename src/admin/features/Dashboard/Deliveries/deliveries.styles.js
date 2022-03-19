import styled from "styled-components";

export const DeliveriesWrapper = styled("div")`
  height: 100%;

  .cardHolder {
    height: 85%;
    padding: 0 5px;
    overflow-y: scroll;
    scroll-behavior: smooth;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;
    scrollbar-width: none;

    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .headLabel {
    height: 20px;
    display: flex;
    /* width: 100%; */
    align-items: flex-end;
    font-weight: bold;

    .NAG {
      flex-basis: 30%;
    }
    .EP {
      flex-basis: 23%;
    }
    .status {
      flex-basis: 15%;
    }
    .report {
      flex-basis: 15%;
    }
    .blank {
      flex-grow: 1;
    }
  }
`;
