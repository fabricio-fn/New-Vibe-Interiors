import { styled } from "styled-components";

export const StyleHome = styled.main`
    display: flex;
    background-image: url("/img/background-home.jpg");
    background-size: cover;
    padding: 1rem 5%;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    min-height: 100vh;
    width: 100%;

    h1 {
        margin-bottom: 40px;
    }

    div {
        display: flex;
        gap: 1rem;
    }

    p {
        width: 240px;
    }

    @media (max-width: 397px) {
        h1 {
            margin-bottom: 0px;
        }

        div {
            flex-direction: column;
        }
    }
`