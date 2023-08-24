import { styled } from "styled-components";

export const StyleCardList = styled.li`
img {
        box-shadow: 20px 5px 50px ${({ theme }) => theme.colors.secondary};
        width: 140px;
        height: 140px;
        object-fit: cover;
        background-repeat: no-repeat;
        pointer-events: none;
    }
`