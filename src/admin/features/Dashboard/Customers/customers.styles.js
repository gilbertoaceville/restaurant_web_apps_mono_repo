import styled from 'styled-components';

export const CustomersWrapper = styled("div")`
height: 100%;

.cardHolder{
height: 85%;
overflow-y:scroll ;
padding: 0 5px;
scroll-behavior: smooth;
  /* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none;
scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
   display: none;
 }
}

.headLabel{
  height: 10%;
  display: flex;
  /* width: 100%; */
  align-items: center;
  font-weight: bold;

  .NAG,.EP,.blank{
  flex-basis: 33%;
  font-size: 12px;
  }
}
`;

