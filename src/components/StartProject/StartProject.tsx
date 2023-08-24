import { StyleButton } from "../Button/StyleButton";
import { StyleTitle } from "../Title/StyleTitle";
import { StyleStartProeject } from "./StyleStartProject";
import { BsArrowRight } from "react-icons/bs";

export default function StartProject() {
    return (
        <StyleStartProeject id="project">
            <StyleTitle tag="h2" fontSize="lg">Start project</StyleTitle>

            <div>
                <img src="/img/img-start-project.jpg" alt="" />
                <StyleButton buttonSize="md" buttonStyle="solidDark">
                    Learn More
                    <BsArrowRight />
                </StyleButton>
            </div>
        </StyleStartProeject>
    )
}