import { styled } from "styled-components";

export const StyleCard = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 397px) {
        justify-content: center;
    }
`