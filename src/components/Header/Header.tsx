import { useEffect, useState } from "react"
import { StyledHeader  } from "../Header/StyleHeader"
import { StyleButton } from "../Button/StyleButton"
import { MdMenu, MdClose } from "react-icons/md"
import { StyleButtonLink } from "../ButtonLink/StyleButtonLink"
import { StyleNavbar } from "../Navbar/StyleNavbar"

export default function Header() {
    const [showMenu, setShowMenu] = useState(true)

    function ToggleMenu() {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        function handleScroll() {
            if (window.innerWidth <= 363) {
                setShowMenu(false);
            }
        }

        function handleResize() {
            setShowMenu(window.innerWidth > 363);
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    return (
        <StyledHeader id="header">
            <StyleNavbar className={ showMenu ? "active" : ""}>
                <StyleButtonLink href="#about">About</StyleButtonLink>
                <StyleButtonLink href="#product">Product</StyleButtonLink>
                <StyleButtonLink href="#project">Project</StyleButtonLink>
                <StyleButtonLink href="#services">Services</StyleButtonLink>
            </StyleNavbar>

            <StyleButton buttonStyle="transparent" buttonSize="sm" className="btnMenu"
                onClick={ToggleMenu}>
                {showMenu ? (
                    <MdClose size="30" />
                    
                ) : <MdMenu size="30" /> }
            </StyleButton>     
        </StyledHeader>
    )
}