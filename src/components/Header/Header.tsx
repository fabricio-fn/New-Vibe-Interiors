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
        <StyledHeader>
            <StyleNavbar className={ showMenu ? "active" : ""}>
                <StyleButtonLink href="https://www.linkedin.com/in/fabriciofn/">About</StyleButtonLink>
                <StyleButtonLink href="https://www.linkedin.com/in/fabriciofn/">Product</StyleButtonLink>
                <StyleButtonLink href="https://www.linkedin.com/in/fabriciofn/">Project</StyleButtonLink>
                <StyleButtonLink href="https://www.linkedin.com/in/fabriciofn/">Services</StyleButtonLink>
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