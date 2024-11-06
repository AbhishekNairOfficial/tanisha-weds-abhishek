import MEMORIES_BANNER_IMAGE from '../../assets/memories-banner-image.webp';
import Image from '../../atoms/Image/Image';
import LandingTemplate from "../../Templates/Landing";

const MemoriesLanding = () => {
    return (
        <LandingTemplate>
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
        </LandingTemplate>
    )
}

export default MemoriesLanding;