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
                {ourAdventureConfig.map((adventure) => (
                    <Image
                        key={adventure.srcSet["1x"]}
                        srcSet={convertSrcSet(adventure.srcSet)}
                        className='shadow-lg w-4/5 md:w-1/5'
                        rotate={adventure.rotate}
                        animate
                    />
                ))}
            </div>
            <div className="h-12 md:h-24"></div>
        </section>
    </React.Suspense>
)

export default OurAdventure