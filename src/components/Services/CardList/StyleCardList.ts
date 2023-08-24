import { styled } from "styled-components";

export const StyleCardList = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    flex-wrap: wrap;
    padding: 0rem 5%;
    height: 150px;
    gap: 2rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.aditional4};

    p {
        color: ${({ theme }) => theme.colors.aditional4};
    }

    div {
        display: flex;
        gap: 2rem;
        align-items: center;
        flex-wrap: wrap;

        img {
            display: none;
            width: 250px;
            height: 150px;
            object-fit: cover;
            background-repeat: no-repeat;
            pointer-events: none;
        }

        button {
            height: 40px;
            margin-right: 20px;
        }
    }

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};

        p {
            color: ${({ theme }) => theme.colors.aditional2};
        }

        img {
            display: block;
        }
    }

    @media (max-width: 859px) {
        height: auto;
    }

    @media (max-width: 774px) {
        flex-direction: column;
        align-items: start;
        padding: 1rem 5%;
    }

    @media (max-width: 634px) {
        p {
            font-size: 32px;
        }
    }
`