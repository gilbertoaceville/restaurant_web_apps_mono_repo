import styled from "styled-components";

export const ModalContainer = styled.section`
  width: 651px;
  height: 300px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  box-shadow: 0 8px 8px -4px #555;
  left: 50%;
  top: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

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

  .modal-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .icon-container {
    width: 50px;
    height: 50px;
    background: #f38b1c 0% 0% no-repeat padding-box;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
  }

  .icon-container .fa-check {
    color: #ffffff;
    font-size: 20px;
  }

  .modal-text-wrap {
    margin: 2em 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .modal-text-wrap header h3 {
    color: #000000;
    font-size: 24px;
    font-weight: 600;
    line-height: 34px;
  }

  .modal-text-wrap p {
    color: #7f7f7f;
    text-transform: capitalize;
    font-size: 14px;
    line-height: 24px;
  }

  @media (max-width: 750px) {
    width: 95%;
  }

  .modal-text-wrap {
    margin: 1em 0;
  }

  .modal-text-wrap header h3 {
    font-size: 20px;
    line-height: 30px;
  }
  
`;
