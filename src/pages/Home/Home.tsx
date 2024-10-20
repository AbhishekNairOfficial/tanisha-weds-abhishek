import Events from "../../organisms/Events/Events"
import Landing from "../../organisms/Landing/Landing"

const HomePage = () => {
    return (
        <main className='relative'>
            <Landing />
            <div className="h-48"></div>
            <Events />
        </main>
    )
}

export default HomePage