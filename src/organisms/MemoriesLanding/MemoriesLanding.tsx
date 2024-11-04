import Trees from "../../atoms/Trees/Trees"
import Header from "../../organisms/Header/Header"
import MEMORIES_BANNER_IMAGE from '../../assets/memories-banner-image.webp';
import Image from '../../atoms/Image/Image';

const MemoriesLanding = () => {
    return (
        <>
            <Header />
            <div className="h-24"></div>
            <Trees />
            <div className="h-24 md:h-0"></div>
            <h1 className="font-primary text-primary text-5xl md:text-7xl text-center">
                Memories
            </h1>
            <div className="h-24"></div>
            <Image
                src={MEMORIES_BANNER_IMAGE}
                alt='Abhishek and Tanisha standing next to a waterfall'
                width='960px'
                height='480px'
                className="relative m-auto shadow-lg"
            />
        </>
    )
}

export default MemoriesLanding;