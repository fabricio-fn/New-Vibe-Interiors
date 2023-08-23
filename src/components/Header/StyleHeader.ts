import { styled } from "styled-components";

export const StyledHeader = styled.header`
    padding: 0rem 5%; 
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: ${({theme}) => theme.colors.primary};

    .btnMenu {
        display: none;
    }

    @media(max-width: 363px) { 
        justify-content: start;
        background-color: ${({theme}) => theme.colors.secondary};

        .btnMenu {
            display: block;
        }
    }

    .active {
        left: 0;
    }
`