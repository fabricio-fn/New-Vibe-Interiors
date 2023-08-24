import { styled } from "styled-components";

export const StyleProduct = styled.section`
    padding: 1rem 5%;
    display: flex;
    gap: 4em;
    width: 100%;
    flex-direction: column;

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    div p:nth-child(1) {
        width: 500px;
    }

    div p:nth-child(2) {
        width: 390px;
        text-align: end;
    }
    
    @media (max-width: 988px) {
        .content {
            gap: 2rem;
        }

        div p:nth-child(2) {
            width: 390px;
            text-align: start;
        }
    }
`