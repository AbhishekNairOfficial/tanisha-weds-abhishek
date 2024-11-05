import React from "react"
import { Link } from "react-router-dom"
import useScreenWidth from "../../hooks/useScreenWidth"
import { MOBILE_SCREEN_WIDTH } from "../../config/constants"

type NavLinkProps = {
    link: string,
    title: string,
    icon: string
}

const NavLink = (props: NavLinkProps) => {
    const { link, title, icon } = props

    const screenWidth = useScreenWidth();

    const isMobile = screenWidth < MOBILE_SCREEN_WIDTH;

    return (
        <Link
            to={link}
            className="text-primary font-primary text-xl hover:underline"
        >
            {isMobile ? (
                <img src={icon} alt='title' />
            ) : title}
        </Link>
    )
}

export default NavLink