import { useEffect, useState } from "react"

interface HeaderHook {
	showMenu: boolean
	toggleMenu: () => void
}

export default function useHeader(): HeaderHook {
	const [showMenu, setShowMenu] = useState(true)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	useEffect(() => {
		const handleResize = () => {

			setShowMenu(window.innerWidth > 363)
		}

		const handleScroll = () => {
			if (window.innerWidth <= 363) {
				setShowMenu(false)
			}
		}

		window.addEventListener("resize", handleResize)
		window.addEventListener("scroll", handleScroll)

		handleResize()

		return () => {
			window.removeEventListener("resize", handleResize)
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return {
		showMenu,
		toggleMenu,
	}
}