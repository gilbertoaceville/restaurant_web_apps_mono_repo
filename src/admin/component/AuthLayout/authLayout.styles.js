import styled from "styled-components";

export const Layout = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 2em 0;
justify-content: center;
height: 100vh;

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`;