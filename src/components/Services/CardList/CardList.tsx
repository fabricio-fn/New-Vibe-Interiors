import { StyleButton } from "../../Button/StyleButton";
import { StyleParagraph } from "../../Paragraph/StyleParagraph";
import { DataCardList } from "../DataCardList/DataCardList";
import { StyleCardList } from "./StyleCardList";
import { BsArrowRight } from "react-icons/bs";

export default function CardList() {
    return (
        <>
            {DataCardList.map((item, index) => (
                <StyleCardList key={index}>
                    <StyleParagraph fontSize="lg">
                        {item.title}
                    </StyleParagraph>
                    
                    <div>
                        <img src={item.img} alt="" />
                        <StyleButton buttonSize="md" buttonStyle="solid">
                            <BsArrowRight />
                        </StyleButton>
                    </div>
                </StyleCardList>
            ))}
        </>
    )
}