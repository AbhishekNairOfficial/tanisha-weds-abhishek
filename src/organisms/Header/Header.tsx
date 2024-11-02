import { motion } from 'framer-motion';
import { rsvpSectionId } from '../../config/constants';

const Header = () => {

    const onRSVPClick = () => {
        const section = document.querySelector(`#${rsvpSectionId}`);
        section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    return (
        <nav className="px-5 md:px-12 py-5 flex justify-between align-middle">
            <motion.a
                animate={{
                    rotateY: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity
                }}
                className="font-primary text-3xl md:text-5xl text-primary stroke-#000-0.5"
                href="/"
            >
                T + A
            </motion.a>
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
