import styled from 'styled-components'

export const MyDishesWrapper = styled('div')`
height: 100%;
overflow-y: scroll;
scroll-behavior: smooth;
  /* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none;
scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
   display: none;
 }
`;

export const MyDishesHeader = styled('div')`
height: 15%;
margin-top: 10px;
`;

export const MyDishesList = styled('div')`
height: max-content;
display: flex;
justify-content:space-around;
flex-wrap: wrap;
`;