import styled from "styled-components";

export const DispatcherWrapper = styled("div")`
  height: 100%;
  /* border: 1px solid red; */

  .cardHolder {
    height: 85%;
    overflow-y: scroll;
    padding: 0 5px;
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
    height: 10%;
    display: flex;
    /* width: 100%; */
    align-items: center;
    font-weight: bold;
    /* border: 1px solid red; */

    .NAG,
    .EP,
    .blank {
      flex-basis: 33%;
      font-size: 12px;
    }
  }

  .blank {
    display: flex;
    justify-content: flex-end;
    .addDispatcher {
      width: 150px;
      height: 50px;
    }
  }
`;
