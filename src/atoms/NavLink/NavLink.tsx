import { Link } from "react-router-dom"

type NavLinkProps = {
    link: string,
    title: string,
}

const NavLink = (props: NavLinkProps) => {
    return (
        <Link
            to={props.link}
            className="text-primary font-primary text-xl hover:underline"
        >
            {props.title}
        </Link>
    )
}

export default NavLink