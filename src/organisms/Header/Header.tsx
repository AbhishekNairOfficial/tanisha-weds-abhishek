import { m } from 'framer-motion';
import { rsvpSectionId } from '../../config/constants';
import NavLink from '../../atoms/NavLink/NavLink';
import { useNavigate } from 'react-router-dom';

import MEMORIES_ICON from '../../assets/memories-icon.svg';
import GUESTBOOK_ICON from '../../assets/guestbook-icon.svg';

const Header = () => {
    const navigate = useNavigate();

    const onRSVPClick = () => {
        navigate('/');
        setTimeout(() => {
            const section = document.querySelector(`#${rsvpSectionId}`);
            section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100)
    }
    return (
        <nav className="px-5 md:px-12 py-5 flex gap-5 justify-between align-middle items-center">
            <m.a
                animate={{
                    rotateY: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity
                }}
                className="font-primary text-3xl md:text-5xl text-primary stroke-#000-0.5 mr-auto"
                href="/"
            >
                T + A
            </m.a>
            <NavLink link='/memories' title='Memories' icon={MEMORIES_ICON} />
            <NavLink link='/guestbook' title='GuestBook' icon={GUESTBOOK_ICON} />
            <button
                type="button"
                className="py-1 px-5 bg-secondary rounded-[5px] text-white font-primary text-2xl tracking-[5px]"
                onClick={onRSVPClick}
            >
                RSVP
            </button>
        </nav>
    );
};

export default Header;
