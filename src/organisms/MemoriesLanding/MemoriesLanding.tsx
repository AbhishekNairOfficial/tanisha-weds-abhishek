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
                className="relative m-auto w-full md:w-[960px]"
                loading='eager'
            />
        </>
    )
}

export default MemoriesLanding;