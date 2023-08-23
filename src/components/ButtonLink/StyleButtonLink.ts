import { styled } from "styled-components";

export const StyleButtonLink = styled.a`
    font-weight: ${({ theme }) => theme.font.weight.estralight};
    color: ${({ theme }) => theme.colors.secondary};

    &:hover { color: ${({ theme }) => theme.colors.aditional2}; }
`