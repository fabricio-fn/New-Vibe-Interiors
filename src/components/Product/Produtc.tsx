import { StyleParagraph } from "../Paragraph/StyleParagraph";
import Card from "./Card/Card";
import { StyleProduct } from "./StyleProduct";

export default function Product() {
    return (
        <StyleProduct id="product">
            <div className="content">
                <StyleParagraph fontSize="md">
                    <span>Decorate</span> every inch of the house <span>to make it feel homey</span>
                </StyleParagraph>

                <StyleParagraph fontSize="sm">
                    <span>
                        Carve out a little piece of paradise with some of our picks, the home of your dreams begins with the perfect palette for every room
                    </span>
                </StyleParagraph>
            </div>

            <div>
                <Card />
            </div>
        </StyleProduct>
    )
}