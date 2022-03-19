import styled from "styled-components";

export const ModalWrapper = styled.section`
  height: 100vh;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #70707090;
  }

  .img-container {
      position: absolute;
      top: 0%;
      right: 5%;
      transform: translate(-5%, 0%);
      cursor: pointer;
  }
`;
