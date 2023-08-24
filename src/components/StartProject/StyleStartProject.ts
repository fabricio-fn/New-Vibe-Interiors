import { styled } from "styled-components";

export const StyleStartProeject = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 5%;
    min-height: 100vh;

    img {
        box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
        width: 700px;
        object-fit: cover;
        pointer-events: none;
    }

    @media (max-width: 930px) {
        img {
            width: 100%;
        }
    }
`