import styled from 'styled-components'

export const ComplaintsWrapper = styled('div')`
overflow: hidden;
height: 100%;
margin-left: 20px;

`

export const Children = styled('div')`
padding: 0 5px;
overflow: scroll;
height: 90%;
scroll-behavior: smooth;
  /* Hide scrollbar for IE, Edge and Firefox */
-ms-overflow-style: none;
scrollbar-width: none;

/* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
   display: none;
 }
`

  
 