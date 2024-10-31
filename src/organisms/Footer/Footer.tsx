const Footer = () => {
    return (
        <footer className="bg-secondary py-8 md:py-16">
            <section className="mx-5 md:mx-[200px] grid grid-cols-2 justify-stretch text-white font-footer text-md md:text-xl">
                <span>&#169; {new Date().getFullYear()}</span>
                <span className="text-right">Thank you for being</span>
                <span>Made with love and React Js</span>
                <span className="text-right">part of our big day!</span>
            </section>
        </footer>
    )
}

export default Footer