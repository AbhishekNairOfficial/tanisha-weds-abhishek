import Events from "../../organisms/Events/Events"
import Landing from "../../organisms/Landing/Landing"
import Venue from "../../organisms/Venue/Venue"

const HomePage = () => {
    return (
        <main className='relative'>
            <Landing />
            <div className="h-48"></div>
            <Events />
            <div className="h-48"></div>
            <Venue />
        </main>
    )
}

export default HomePage