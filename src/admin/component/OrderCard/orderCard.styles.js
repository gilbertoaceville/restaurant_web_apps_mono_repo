import styled from "styled-components";

export const OrderCardWrapper = styled.div`
  /* background-color:red; */
  width: 80%;
  height: 91px;
  border-radius: 5px;
  display: flex;
  margin-top: 200px;
  box-shadow: 0.5px 0.1px 1px 0px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  p{
      margin: 0px;
      font-size:14px;
      color:${(props)=>props.color ? props.color : "black"};
      font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  .section {
    
    height: 80px;
    width: 5%;
    align-items: center;
    display: flex;
  }

  .section1 {
    width: 10%;
    justify-content: flex-end;
    p {
      color: #f38b1c;
      font-size:12px
    }
  }

  .section2 {
    height: 80px;
    justify-content: space-between;
    width: 16%;

    .image {
      background-color: red;
      border-radius: 50%;
    }
    p {
      margin-top:0px;

    }
    .name{

        font-size: 12px;
        
    }
    .address{
        color:#b5b5b5;
        font-size: 10px;
    }
    .gender{
        font-size: 10px;
    }
  }

  .section3 {
    height: 57px;
    align-items: flex-start;
    flex-direction: column;
    width: 15%;

    p{
        margin-top: 5px;
    }
  }

  .section4 {
    height: 50px;
    align-items: flex-start;
    flex-direction: column;
    width: 15%;

    p{
        margin-top: 5px;
        font-size: 14px;
    }
  }

  .section5 {
    height: 80px;
    align-items: center;
    justify-content: center;
    width: 11%;
  }
`;
