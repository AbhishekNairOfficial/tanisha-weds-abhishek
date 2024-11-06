import Footer from "../../organisms/Footer/Footer"
import GuestBookForm from "../../organisms/GuestBookForm/GuestBookForm"
import GuestBookLanding from "../../organisms/GuestBookLanding/GuestBookLanding"

const GuestBookPage = () => {
    return (
        <main className='relative'>
            <GuestBookLanding />
            <div className="h-24 md:h-48"></div>
            <GuestBookForm />
            <div className="h-24 md:h-48"></div>
            <Footer />
        </main>
    )
}

export default GuestBookPage