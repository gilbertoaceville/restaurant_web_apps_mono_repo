import styled from "styled-components";

export const RestaurantCardWrapper = styled.div`
  border-radius:5px;
  height: 279px;
  border: 1px solid;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: row;


  `

  export const Section = styled.div` 
  width: ${(props)=>props.width ? props.width : "50%"};
  padding:${(props)=>props.padding? props.padding:"0px"};
  margin-left:1px;
p{
  margin:0px;
  font-size:13px;
  margin-top:5px;;
  font-weight:400;
  font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}

 
  .section1{
    height: 55%;


    .name{
      font-size: 18px;
      color:red;
      margin-bottom:4px
    }

    .address{
      font-size:12px;
      margin-bottom:4px

    }
    .id{
      font-size:12px;
      margin-bottom:4px
    }
   


}
.section2{

  background-color: #FFF9EC;
  height: 43%;
  display:flex; 


  .today-order{
  width:50%;
}

.today-customer{
  width:50%;

  .figures{
    font-weight: 500;
    margin-bottom:10px

  }
}

}
  `

  