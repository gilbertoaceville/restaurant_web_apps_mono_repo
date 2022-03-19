import styled from "styled-components";

export const ProfileContainer = styled.main`
  .form-container {
    display: flex;
    justify-content: center;
    padding: 1em 2em;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 1em;
    width: 65%;
  }

  .left-form-layout,
  .right-form-layout {
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right-form-layout {
    border: none;
  }

  .radio-input-container {
    margin: 1em 0;
    display: flex;
    justify-content: flex-start;
    width: 60%;
  }

  .radio-input-container label {
    display: flex;
    align-items: center;
  }

  .radio-input-container label span {
    margin: 0 1em 0 0.5em;
  }

  .radio-input-container label input[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 1px solid #f38b1c;
    border-radius: 50%;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
  }

  .radio-input-container label input[type="radio"]::before {
    content: "";
    width: 0.65em;
    height: 0.65em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em #f38b1c;
    background-color: #f38b1c;
  }

  .radio-input-container label input[type="radio"]:checked::before {
    transform: scale(1);
  }

  .separator {
    height: 1px;
    width: 100%;
    background: #ccc;
    margin: 2em auto;
  }

  .btn-container input {
    margin: 0 !important;
  }

  @media (max-width: 1024px) {
    .form {
      width: 80%;
    }
  }

  @media (max-width: 768px) {
    .form {
      width: 100%;
    }
  }

  @media (max-width: 750px) {
    .form {
      grid-template-columns: repeat(1, 1fr);
    }

    .radio-input-container {
      width: 80%;
    }

    .left-form-layout {
      border-right: none;
    }
  }

  @media (max-width: 320px) {
    input,
    select {
      width: 280px !important;
    }

    .radio-input-container label input[type="radio"] {
      width: 1.15em !important;
    }

    .btn-container input {
      width: 280px;
    }
  }
`;

export const HeaderWrap = styled.header`
  background: #c8c8c8 0% 0% no-repeat padding-box;
  height: 35px;
  width: 350px;
  margin: 16px 0;
  display: flex;
  align-items: center;
  padding-left: 1em;

  .header-title {
    color: #000000;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 320px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
`;
