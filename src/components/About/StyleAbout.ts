import { styled } from "styled-components";

export const StyleAbout = styled.section`
    background-image: linear-gradient(90deg, #DEDEDE 30%, #D0D0D0 20%);
    min-height: 100vh;
    display: flex;
    padding: 1rem 5%;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.aditional1};

    .content {
        text-align: end;
        display: flex;
        gap: 2rem;
        flex-direction: column;
        align-items: end;
        width: 670px;
    }
    
    div {
        img {
            pointer-events: none;
            box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
            width: 400px;
            height: 450px;
            object-fit: cover;
        }
    }

    @media (max-width: 995px) {
        flex-direction: column;
        align-items: start;

        .content {
            text-align: start;
            align-items: start;
            width: 100%;
        }
    }
    
    @media (max-width: 440px) {
        div {
            img {
                width: 100%;
            }
        }
    }
`