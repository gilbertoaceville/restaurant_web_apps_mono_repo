import styled from 'styled-components';

export const DeliveryWrapper = styled("div")`
height: 100%;
/* border: 1px solid red; */

.cardHolder{
height: 85%;
overflow-y:scroll ;
scroll-behavior: smooth;
  /* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none;
scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
   display: none;
 }
}
`;

