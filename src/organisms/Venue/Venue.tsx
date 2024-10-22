import venueConfig from '../../config/venueConfig';
import VENUE_PHOTO from '../../assets/venue-photo.png';
import { InfoWindow, Map, Marker } from '@vis.gl/react-google-maps';
import { useRef } from 'react';

const Venue = () => {
    const {venueTitle, venueAddress, mapTitle, directions} = venueConfig;
    const markerRef = useRef();
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
            <Map
                className='w-screen md:w-2/4 h-48'
                center={{lat: 12.88951043283849, lng: 77.43033942706109}}
                defaultZoom={15}
                gestureHandling={'greedy'}
                disableDefaultUI={true}
                >
                    <Marker ref={markerRef.current} position={{lat: 12.88951043283849, lng: 77.43033942706109}} />
                    {/* <InfoWindow anchor={markerRef.current} position={{lat: 12.88951043283849, lng: 77.43033942706109}}>
        MRF Greens Pavillion
      </InfoWindow> */}
                </Map>
                <div className='flex-grow mx-5 md:mx-0 mt-2 md:mt-0'>
                    <h4 className='font-primary text-primary text-2xl md:text-3xl mb-4'>{mapTitle}</h4>
                    {directions.map(({title, body}) => (
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