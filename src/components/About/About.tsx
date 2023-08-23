import { StyleButton } from "../Button/StyleButton";
import { StyleParagraph } from "../Paragraph/StyleParagraph";
import { StyleCard } from "./Card/StyleCard";
import { StyleAbout } from "./StyleAbout";
import { BsArrowRight } from "react-icons/bs";
import CardList from "./CardList/CardList";

export default function About() {
    return (
        <StyleAbout>
            <div>
                <img src="/img/img-about.jpg" alt="" />
            </div>

            <div className="content">
                <StyleParagraph fontSize="md">The key difference between ordinary and special, <span>No matter the season, our spaces are ass nuanced as the lifestyles they reflect, </span>don't just dream it.</StyleParagraph>

                <StyleCard>
                    <CardList />
                </StyleCard>

                <StyleButton buttonSize="md" buttonStyle="solidDark">
                    About us
                    <BsArrowRight />
                </StyleButton>
            </div>
        </StyleAbout>
    )
}