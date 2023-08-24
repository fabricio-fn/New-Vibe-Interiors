import { styled } from "styled-components";

export const StyleVideoSection = styled.section`
    display: flex;
    align-items: center;
    padding: 1rem 5%;
    gap: 2rem;
    min-height: 100vh;
    justify-content: space-between;

    .content {
        width: 340px;
        display: flex;
        gap: 2rem;
        align-items: start;
        flex-direction: column;
    }

    img {
        box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
        width: 700px;
        height: 500px;
        object-fit: cover;
        pointer-events: none;
    }

    @media (max-width: 780px) {
        img {
            width: 100%;
            height: auto;
        }
    }

    @media (max-width: 1026px) {
        align-items: start;
        flex-direction: column;
    }
`