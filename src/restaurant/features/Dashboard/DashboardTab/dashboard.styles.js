import styled from "styled-components";

export const DashboardWrapper = styled.div`
 height: 100%;
`;

export const BodyHead = styled.header`
height:10% ;
width: 100%;
padding: 5px 0;

`;
export const Body = styled.body`
display: flex;
flex-wrap: wrap;
justify-content: center;
/* align-items: stretch; */
overflow: scroll;

scroll-behavior: smooth;
  /* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none;
scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
   display: none;
 }
`;

export const AddDishButton = styled.input`
color: #fff;
float: right;
border: none;
outline: none;
cursor: pointer;
font-weight: 600;
padding: 10px 15px;
border-radius: 10px;
background: #f38b1c;
`;

export const CardWrapper = styled('div')`
width: 450px;
height: 250px;
margin: 5px;
/* padding: 5px; */
border-radius: 15px;
box-shadow: #0000001A 0px 0px 10px;
background: #FFFFFF 0% 0% no-repeat padding-box;

`;
export { };