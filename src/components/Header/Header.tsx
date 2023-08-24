import { StyledHeader  } from "../Header/StyleHeader"
import { StyleButton } from "../Button/StyleButton"
import { MdMenu, MdClose } from "react-icons/md"
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink"
import { StyleNavbar } from "./Navbar/StyleNavbar"
import useHeader from "./Hook/useHeader"

export default function Header() {
    const { showMenu, toggleMenu } = useHeader()

    return (
        <StyledHeader id="header">
            <StyleNavbar className={ showMenu ? "active" : ""}>
                <StyleButtonLink href="#about">About</StyleButtonLink>
                <StyleButtonLink href="#product">Product</StyleButtonLink>
                <StyleButtonLink href="#project">Project</StyleButtonLink>
                <StyleButtonLink href="#services">Services</StyleButtonLink>
            </StyleNavbar>

            <StyleButton buttonStyle="transparent" buttonSize="sm" className="btnMenu"
                onClick={toggleMenu}>
                {showMenu ? ( <MdClose size="30" /> ) : <MdMenu size="30" /> }
            </StyleButton>     
        </StyledHeader>
    )
}