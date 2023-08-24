import { StyleButton } from "../../Button/StyleButton";
import { DataCardList } from "../DataCardList/DataCardList";
import { StyleCardList } from "./StyleCardList";
import { BsArrowRight } from "react-icons/bs";

export default function CardList() {
    return (
        <>
            {DataCardList.map((item, index) => (
                <StyleCardList key={index}>
                    <img src={item.img} alt="" />
                    <StyleButton buttonSize="md" buttonStyle="solidDark">
                        Learn More
                        <BsArrowRight />
                    </StyleButton>
                </StyleCardList>
            ))}
        </>
    )
}