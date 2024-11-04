import React from "react"
import Image from "../../atoms/Image/Image";
import ourAdventureConfig from "../../config/ourAdventureConfig";
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
            <div className='flex justify-center'>
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageOne)}
                    width={'20vw'}
                    className='-rotate-6 shadow-lg'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageTwo)}
                    width={'20vw'}
                    className='-rotate-3 shadow-lg'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageThree)}
                    width={'20vw'}
                    className='rotate-6 shadow-lg'
                />
                <Image
                    srcSet={convertSrcSet(ourAdventureConfig.imageFour)}
                    width={'20vw'}
                    className='rotate-12 shadow-lg'
                />
            </div>
            <div className="h-12 md:h-24"></div>
        </section>
    </React.Suspense>
)

export default OurAdventure