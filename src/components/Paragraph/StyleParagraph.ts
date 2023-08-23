import { css, styled } from "styled-components"

interface iParagraph {
    fontSize: "lg" | "md" | "sm";
}

export const StyleParagraph = styled.p<iParagraph>`
    color: ${({ theme }) => theme.colors.secondary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    
    ${({ fontSize }) => {
        switch (fontSize) {
            case "lg":
                return css`
                    font-size: 48px;
                    `
            case "md":
                return css`
                    font-size: 32px;
                `
            case "sm":
                return css`
                    font-size: 16px;
                `
        }
    }}
`