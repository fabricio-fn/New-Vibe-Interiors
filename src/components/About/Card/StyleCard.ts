import { styled } from "styled-components";

export const StyleCard = styled.ul`
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: 515px) {
        justify-content: center;
    }
`