import styled from "styled-components";

export const FormContainer = styled.form`
  background: #f38b1c;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

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

  .form-header header h2 {
    font-size: 18px;
    color: #ffffff;
    line-height: 30px;
  }

  .form-header p {
    font-size: 14px;
    color: #ffffff;
  }

  .form-wrap {
    display: flex;
    margin-top: 1.5em;
  }

  .form-input {
    display: flex;
    align-items: center;
    border-radius: 15px;
    background: #ffffff;
    height: 32px;
    padding: 0 15px;
    width: 300px;
  }

  .form-input .fa-envelope {
    color: #707070;
    margin-right: 15px
  }

  .form-input input {
    border: none;
    margin: 0;
    padding: 0;
    width: 85%;
    text-indent: 0;
  }

  .form-btn > div {
    padding: 0;
    display: flex;
    align-items: flex-start;
  }

  .form-btn input {
    width: fit-content;
    text-indent: unset;
    height: 32px;
    padding: 0 20px;
    border: 2px solid #ffffff;
    margin: 0 0 0 1em !important;
  }

  @media (max-width: 750px) {
    .form-wrap {
      flex-direction: column;
    }

    .form-input { 
        padding: 0 0 0 15px;
        width: 280px;
    }

    .form-btn input {
        margin: 1em 0 !important;
    }
  }

  @media (max-width: 300px) {
    .form-input { 
        padding: 0 0 0 15px;
        width: 240px;
    }
  }
`;
