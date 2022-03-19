import styled from "styled-components";

export const ButtonWrapper = styled.div` 
width: 100%;
height: 100%;
background-color:#F38B1C;
display: flex;
align-items: center;
border-radius:12px;
justify-content: center;
cursor: pointer;

&:hover{
      opacity: 0.8;
    }

p{
    font-weight:700;
    font-size:14px;
    color:${(props)=>props.color ? props.color : "white"};
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

`