import { styled } from "styled-components";

export const StyleNavbar = styled.nav`
    display: flex;
    align-items: center;
    gap: 2rem;
    z-index: 1;
    flex-wrap: wrap;
    background: transparent;
    
    a {
        color: ${({theme}) => theme.colors.secondary};
    }
    
    div {
        display: flex;
        gap: .5rem;
        border: 1px solid ${({theme}) => theme.colors.primary};
        padding: .5rem;
        border-radius: .5rem;
    }

    @media(max-width: 363px) {
        position: absolute;
        left: -100%;
        padding: 2rem 5%;
        margin-top: 280px;
        display: flex;
        align-items: start;
        flex-direction: column;
        width: 100%;
        transition: .4s;
        background-color: ${({theme}) => theme.colors.secondary};

        a {
            color: ${({theme}) => theme.colors.primary};
        }
    }
`