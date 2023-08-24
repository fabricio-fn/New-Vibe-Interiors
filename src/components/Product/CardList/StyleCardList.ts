import { styled } from "styled-components";

export const StyleCardList = styled.li`
    position: relative;
    
    img {
        box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
        width: 280px;
        height: 400px;
        object-fit: cover;
        pointer-events: none;
    }

    button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        display: none;
        width: 190px;
        gap: 1rem;
    }

    &:hover {
        button {
            display: flex;
        }
    }

    @media (max-width: 320px) {
        img { width: 100%; }
    }
`