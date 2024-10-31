import Events from "../../organisms/Events/Events"
import Footer from "../../organisms/Footer/Footer"
import Landing from "../../organisms/Landing/Landing"
import RSVP from "../../organisms/RSVP/RSVP"
import Venue from "../../organisms/Venue/Venue"

const HomePage = () => {
    return (
        <main className='relative'>
            <Landing />
            <div className="h-24 md:h-48"></div>
            <Events />
            <div className="h-24 md:h-48"></div>
            <Venue />
            <div className="h-24 md:h-48"></div>
            <RSVP />
            <div className="h-24 md:h-48"></div>
            <Footer />
        </main>
    )
}

export default HomePage