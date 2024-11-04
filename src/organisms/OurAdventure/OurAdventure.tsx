import React from "react"
import Image from "../../atoms/Image/Image";
import { ourAdventureConfig } from "../../config/memoriesConfig";
import convertSrcSet from "../../helpers/convertSrcSet";

const OurAdventure = () => (
    <React.Suspense fallback={<div>Loading...</div>}>
        <section>
            <h2
                className="text-2xl font-primary text-primary text-center"
            >
                Our Adventures
            </h2>
            <div className="h-12"></div>
            <div className='flex flex-col md:flex-row md:justify-center items-center'>
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageOne)}
                    className='-rotate-6 shadow-lg w-4/5 md:w-1/5'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageTwo)}
                    className='-rotate-3 shadow-lg w-4/5 md:w-1/5'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageThree)}
                    className='rotate-6 shadow-lg w-4/5 md:w-1/5'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageFour)}
                    className='rotate-12 shadow-lg w-4/5 md:w-1/5'
                />
            </div>
            <div className="h-12 md:h-24"></div>
        </section>
    </React.Suspense>
)

export default OurAdventure