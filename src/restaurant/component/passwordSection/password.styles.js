import styled from "styled-components";

export const LeftLayout = styled.div`
  background: #fff9ec;
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  #dots-wrapper-0 #dot-0 {
    background: #f38b1c 0% 0% no-repeat padding-box;
  }

  #dots-wrapper-1 #dot-1 {
    background: #f38b1c 0% 0% no-repeat padding-box;
  }

  #dots-wrapper-2 #dot-2 {
    background: #f38b1c 0% 0% no-repeat padding-box;
  }
`;

export const LeftLayoutContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 70%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 220px;

  @media(max-width: 768px) {
      height: 45vh;
  }

  @media(max-width: 750px) {
      width: 200px;
      height: 65vh;
  }
`;

export const LeftLayoutWrap = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: absolute;
  -webkit-transition: -webkit-transform 300ms
    cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: -webkit-transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  transition: transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955),
    -webkit-transform 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  .left_layout_content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .img-wrapper {
    height: 220px;
    width: 220px;
    display: flex;
    align-items: center;
  }

  @media(max-width: 750px) {
      .img-wrapper {
          height: 200px;
          width: 200px;
      }
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  font-weight: 500;

  @media(max-width: 750px){
      font-size: 18px;
  }
`;

export const Text = styled(Title)`
  font-size: 12px;
  line-height: 20px;
  color: ${({ color }) => color || "#000000"};
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  ${'' /* height: 150px; */}

  @media(max-width: 768px) {
      height: 60px;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #c8c8c8 0% 0% no-repeat padding-box;
    border-radius: 100%;
    margin-right: 10px;
  }
`;

export const RightLayout = styled(LeftLayout)`
  background: #ffffff;
  text-align: left;

  .form {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: center;
    width: 300px;
  }

  @media (max-width: 750px) {
    .form_header {
      margin-top: 2em;
    }
  }

  @media(max-width: 280px) {
      .form {
          width: 260px;
      }
  }
`;
