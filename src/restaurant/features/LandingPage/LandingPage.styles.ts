import styled from "styled-components";

export const LandingPageWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;
  background: #fff9ec 0% 0% no-repeat padding-box;
  border-radius: 100% 33% 100% 0% / 81% 0% 100% 1%;

  #logo-holder {
    height: 25%;
    width: 30%;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  justify-content: center;
  align-items: center;

  .form-and-title-holder {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .form-title-holder {
    display: flex;
    padding: 5px 10px;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 15%;
  }
  .form-holder {
    padding: 5px 10px;
    width: 80%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Logo = styled.img`
  height: 100%;
  width: 100%;
`;


export const FormTitle = styled.div`
  padding: 10px 5px;
  cursor: pointer;
`;
