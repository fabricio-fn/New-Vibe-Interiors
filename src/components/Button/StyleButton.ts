import { css, styled } from "styled-components";

interface iButtonProps {
    buttonStyle: "solid" | "outline" | "transparent" | "solidDark"
    buttonSize?: "lg" | "md" | "sm"
}

export const StyleButton = styled.button<iButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border-radius: 2rem;
    font-weight: ${({theme}) => theme.font.weight.semibold};
    font-size: 18px;

    svg {
        font-size: 24px;
    }

    ${({ buttonSize }) => {
        switch (buttonSize) {
            case "lg":
                return css`
                    padding: .5rem 2.5rem;
                    `
            case "md":
                return css`
                    padding: .4rem 1.5rem;
                `
            case "sm":
                return css`
                    padding: 0;
                `
        }
    }}

    ${({ buttonStyle, theme }) => {
        switch (buttonStyle) {
            case "solid":
                return css`
                    background: ${theme.colors.aditional2};
                    color: ${theme.colors.aditional3};
                    border: 1px solid ${theme.colors.aditional2};

                        &:hover {
                            border: 1px solid ${theme.colors.aditional3};
                            background: transparent;
                        }
                `
            case "outline":
                return css`
                    background: transparent;
                    color: ${theme.colors.secondary};
                    border: 1px solid ${theme.colors.secondary};

                    &:hover {
                        color: ${theme.colors.aditional3};
                        border: 1px solid ${theme.colors.aditional2};
                        background: ${theme.colors.aditional2};
                    } 
                `
            case "transparent":
                return css`
                    color: ${theme.colors.primary};
                    
                    &:hover {
                        color: ${({ theme }) => theme.colors.aditional2};
                        box-shadow: none;
                    }
                `
            case "solidDark":
                return css`
                    background: ${theme.colors.secondary};
                    color: ${theme.colors.aditional3};
                    
                    svg {
                        color: ${theme.colors.aditional2};
                    }
                `
        }
    }}
`