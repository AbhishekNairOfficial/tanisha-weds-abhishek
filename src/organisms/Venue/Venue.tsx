import venueConfig from '../../config/venueConfig';
import VENUE_PHOTO from '../../assets/venue-photo.png';

const Venue = () => {
    const { venueTitle, venueAddress, mapTitle, directions, mapCode } = venueConfig;
    return (
        <section className="flex flex-col align-center justify-center md:mx-[200px]">
            <h1 className="text-primary font-primary text-3xl md:text-5xl underline m-auto">Venue</h1>
            <div className="h-16 md:h-24"></div>
            <div className='md:flex gap-5'>
                <img className='w-screen md:w-2/4' src={VENUE_PHOTO} alt='The venue, MRF Greens Pavillion' />
                <div className='flex-grow mx-5 md:mx-0 mt-2 md:mt-0'>
                    <h4 className='font-primary text-primary text-2xl md:text-3xl mb-4'>{venueTitle}</h4>
                    <p className='font-secondary text-black text-2xl'>{venueAddress}</p>
                </div>
            </div>
            <div className="h-16 md:h-24"></div>
            <div className='md:flex gap-5'>
                <iframe
                    src={mapCode}
                    width="600"
                    height="450"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title='Google Map link of the Venue'
                />
                <div className='flex-grow mx-5 md:mx-0 mt-2 md:mt-0'>
                    <h4 className='font-primary text-primary text-2xl md:text-3xl mb-4'>{mapTitle}</h4>
                    {directions.map(({ title, body }) => (
                        <p className='font-secondary text-black text-2xl mb-2' key={title}>
                            <b>{title}:</b> {body}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Venue