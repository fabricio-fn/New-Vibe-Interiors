import { styled } from "styled-components";

export const StyleFooter = styled.footer`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
    
    padding: 1rem 5%;
    height: 70px;

    @media(max-width: 512px) {
        height: auto;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
    }
`