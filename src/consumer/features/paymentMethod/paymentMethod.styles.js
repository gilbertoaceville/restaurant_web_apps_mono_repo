import styled from "styled-components";

export const PaymentMethodWrapper = styled.main`
  width: 500px;
  height: 560px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p,
  label {
    ${
      "" /* margin: 0;
      padding 0; */
    }
  }

  .title {
    font-size: 18px;
    ${"" /* line-height: 0px; */}
    color: #000000;
  }

  .card-passcode,
  .date-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
  }

  .card-passcode input,
  .date-container input {
    width: 140px;
  }

  .date-container input {
    padding: 0 15px 0 0;
  }

  .checker-save-container {
    display: flex;
    align-items: center;
    padding-top: 2em;
  }

  #toggle {
    -webkit-appearance: none;
    background-color: #fff;
    border: 1px solid #F38B1C;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
      inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);
    padding: 7px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  #toggle:checked {
    background-color: #F38B1C;
    color: #ffffff
  }

  #toggle:checked:after {
	content: '\\2714';
	font-size: 14px;
	position: absolute;
	top: 50%;
	left: 50%;
    transform: translate(-50%, -50%);
	color: #ffffff;
}

  .checker-save-container label {
    margin: 0 0 0 7px;
    color: #f38b1c;
    font-size: 14px;
  }

  .btn-container input {
    margin: 0 !important;
  }

  @media (max-width: 750px) {
    width: 95%;
    height: 80%;

    input {
      margin: 0;
    }
  }

  @media (max-width: 320px) {
    height: 78%;
    p,
    label {
      margin: 0;
    }

    .card-number input,
    .card-passcode,
    .date-wrap {
      width: 280px;
    }

    .card-passcode input,
    .date-container input {
      width: 130px;
    }

    .btn-container input {
      width: 280px;
    }
  }
`;
