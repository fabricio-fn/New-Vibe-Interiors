import { styled } from "styled-components";

export const StyleStartProeject = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem 5%;
    min-height: 100vh;
    text-align: center;
    position: relative;

    div {
        img {
            box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
            width: 700px;
            height: 470px;
            object-fit: cover;
            pointer-events: none;
        }

        button {
            position: absolute;
            top: 60%;
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
    }  

    @media (max-width: 930px) {
        div {
            img {
                width: 100%;
                height: auto;
            }
        }
    }
`