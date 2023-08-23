import { css, styled } from "styled-components"
import Title from "./Title"

export const StyleTitle = styled(Title)`
    color: ${({ theme }) => theme.colors.aditional};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    line-height: 100px;
    
    ${({ fontSize }) => {
        switch (fontSize) {
            case "lg":
                return css`
                    font-size: 136px;
                    
                    @media (max-width: 843px) {
                        font-size: 100px;
                        line-height: 80px;
                    }

                    @media (max-width: 620px) {
                        font-size: 64px;
                        line-height: 50px;
                    }

                    @media (max-width: 397px) {
                        font-size: 45px;
                        line-height: 40px;
                    }
                `
            case "md":
                return css`
                    font-size: 32px;
                `
        }
    }}
`