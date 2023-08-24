import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        scroll-behavior: smooth;
    }

    body { background: ${({ theme }) => theme.colors.primary}; }

    button {
        cursor: pointer;
        background: transparent;
        border: none;
        transition: .4s;

        &:hover {
            filter: brightness(1.1);
            box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.25);
        }
    }

    b { color: ${({ theme }) => theme.colors.aditional2}; }

    span { color: ${({ theme }) => theme.colors.aditional4}; }

    a {
        text-decoration: none;
        transition: .4s;
    }

    ul, ol, li {
        transition: .4s;
        margin: 0;
        padding: 0;
        list-style: none;
    }
`