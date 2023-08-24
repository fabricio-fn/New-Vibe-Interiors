import { StyleButton } from "../Button/StyleButton"
import { StyleParagraph } from "../Paragraph/StyleParagraph"
import { BsArrowRight } from "react-icons/bs";
import { StyleVideoSection } from "./StyleVideoSection";

export default function VideoSection() {
    return (
        <StyleVideoSection>
            <div className="content">
                <StyleParagraph fontSize="md"><span>Capture</span> the spirit of spring <span>in your home</span></StyleParagraph>
                <StyleParagraph fontSize="sm"><span>We provide guidance and direction in your interior design project, inspire your space through art and design, create a space that reflects who you are</span></StyleParagraph>
                <StyleButton buttonSize="md" buttonStyle="solidDark">
                    Start Project
                    <BsArrowRight />
                </StyleButton>
            </div>

            <div className="video">
                <img src="/img/img-video-section.jpg" alt="" />
            </div>
        </StyleVideoSection>
    )
}