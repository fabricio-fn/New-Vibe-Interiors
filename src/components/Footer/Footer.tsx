import { StyleFooter } from "./StyleFooter";
import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink";
import { BsArrowUp } from "react-icons/bs";

export default function Footer() {
    return (
        <StyleFooter>
            <StyleParagraph fontSize="sm">© 2023 NewVibe Interiors - All rights reserved</StyleParagraph>

            <StyleButtonLink href="#">
                <StyleButton buttonSize="md" buttonStyle="solidDark">
                    <BsArrowUp />
                </StyleButton>
            </StyleButtonLink>
        </StyleFooter>
    )
}