import { StyleParagraph } from "../../Paragraph/StyleParagraph";
import { DataCardList } from "../DataCardList/DataCardList";

export default function CardList() {
    return (
        <>
            {DataCardList.map((item, index) => (
                <li key={index}>
                    <StyleParagraph fontSize="lg">
                        {item.title}<b>{item.icon}</b>
                    </StyleParagraph>

                    <StyleParagraph fontSize="sm">
                        <span>{item.description}</span>
                    </StyleParagraph>
                </li>
            ))}
        </>
    )
}