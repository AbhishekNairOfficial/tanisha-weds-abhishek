const Header = () => {
    return (
        <nav className="px-12 py-5 flex justify-between align-middle">
            <a className="font-primary text-5xl text-primary stroke-#000-0.5" href="/">
                T + A
            </a>
            <button type="button" className="py-1 px-5 bg-secondary rounded-[5px] text-white font-primary text-2xl tracking-[5px]">
                RSVP
            </button>
        </nav>
    );
};

export default Header;
