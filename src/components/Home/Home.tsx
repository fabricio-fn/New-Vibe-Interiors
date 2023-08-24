import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleTitle } from "../Title/StyleTitle";
import Card from "./Card/Card";
import { StyleHome } from "./StyleHome";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
    return (
        <StyleHome>
            <StyleTitle tag="h1" fontSize="lg">
                Transform <br />
                your space
            </StyleTitle>
            
            <div>
                <StyleButton buttonSize="md" buttonStyle="solidDark">
                    Start Project
                    <BsArrowRight />
                </StyleButton>

                <StyleButton buttonSize="md" buttonStyle="outline">
                    Learn More
                    <BsArrowRight />
                </StyleButton>
            </div>

            <StyleParagraph fontSize="sm">The mind creates the beautiful, the heart creates the home, home sweet home</StyleParagraph>

            <Card />
        </StyleHome>
    )
}