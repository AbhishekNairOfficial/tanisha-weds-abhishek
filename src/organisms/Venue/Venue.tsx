import * as AspectRatio from "@radix-ui/react-aspect-ratio";

import venueConfig from '../../config/venueConfig';
import VENUE_PHOTO from '../../assets/venue-photo.webp';

const Venue = () => {
    const { venueTitle, venueAddress, mapTitle, directions, mapCode } = venueConfig;
    return (
        <section className="md:mx-[200px] md:grid flex flex-col md:grid-cols-3 md:gap-x-4 md:gap-y-20">
            <h1 className="text-primary font-primary text-3xl md:text-5xl underline m-auto col-span-3 mb-16 md:mb-0">Venue</h1>
            <img className='w-screen col-span-2 md:w-full object-cover' src={VENUE_PHOTO} alt='The venue, MRF Greens Pavillion' />

            <div className='flex-grow mx-5 md:mx-0 mt-2 md:mt-0 mb-16'>
                <h4 className='font-primary text-primary text-2xl md:text-3xl mb-4'>{venueTitle}</h4>
                <p className='font-secondary text-black text-2xl'>{venueAddress}</p>
            </div>

            <div className="col-span-2">
                <AspectRatio.Root className="" ratio={16 / 9}>
                    <iframe
                        src={mapCode}
                        loading="lazy"
                        height='100%'
                        width='100%'
                        className="col-span-2"
                        referrerPolicy="no-referrer-when-downgrade"
                        title='Google Map link of the Venue'
                    />
                </AspectRatio.Root>
            </div>

            <div className='flex-grow mx-5 md:mx-0 mt-2 md:mt-0'>
                <h4 className='font-primary text-primary text-2xl md:text-3xl mb-4'>{mapTitle}</h4>
                {directions.map(({ title, body }) => (
                    <p className='font-secondary text-black text-2xl mb-2' key={title}>
                        <b>{title}:</b> {body}
                    </p>
                ))}
            </div>

        </section >
    )
}

export default Venue