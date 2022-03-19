import styled from "styled-components";


export const Text = styled('h1')`

font-size: 12px;
line-height: 20px;
color: ${({ color }) => color || "#000000"};
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
  "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
  sans-serif;
font-weight: 500;

@media(max-width: 750px){
    font-size: 18px;
}
`;