import Childhood from '../../organisms/ChildhoodPics/ChildhoodPics';
import Footer from '../../organisms/Footer/Footer';
import MemoriesLanding from '../../organisms/MemoriesLanding/MemoriesLanding';

const MemoriesPage = () => {
    return (
        <main className='relative'>
            <MemoriesLanding />
            <div className="h-24 md:h-48"></div>
            <Childhood />
            <Footer />
        </main>
    )
}

export default MemoriesPage