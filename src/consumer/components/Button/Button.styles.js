import styled from "styled-components"

export const   ButtonWrapper = styled.div`
background-color: ${(props)=> props.background ? props.background :"#F38B1C"};
width:100%;
height: 30px;
border:2px solid #F38B1C;
align-items: center;
display: flex;
justify-content: center;
border-radius:10px;

`

export const MyCart = styled.p`
font-size: 14px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const ButtonText = styled.p`
color:${(props)=>props.color ? props.color : "#ffffff"};
font-size: 14px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`