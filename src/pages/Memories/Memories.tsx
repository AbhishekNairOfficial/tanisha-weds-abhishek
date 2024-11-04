import Childhood from '../../organisms/ChildhoodPics/ChildhoodPics';
import Footer from '../../organisms/Footer/Footer';
import MemoriesLanding from '../../organisms/MemoriesLanding/MemoriesLanding';
import OurAdventure from '../../organisms/OurAdventure/OurAdventure';

const MemoriesPage = () => {
    return (
        <main className='relative'>
            <MemoriesLanding />
            <div className="h-24 md:h-48"></div>
            <Childhood />
            <div className="h-24 md:h-48"></div>
            <OurAdventure />
            <Footer />
        </main>
    )
}

export default MemoriesPage