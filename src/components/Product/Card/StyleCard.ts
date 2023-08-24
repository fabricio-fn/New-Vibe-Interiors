import { styled } from "styled-components";

export const StyleCard = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    @media (max-width: 397px) {
        justify-content: center;
    }
`