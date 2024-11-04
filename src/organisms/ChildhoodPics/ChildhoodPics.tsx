import ABHISHEK_CHILDHOOD from '../../assets/abhishek-childhood.webp';
import TANISHA_CHILDHOOD from '../../assets/tanisha-childhood.webp';
import Image from '../../atoms/Image/Image';

const Childhood = () => (
    <section>
        <h2
            className="text-2xl font-primary text-primary text-center">
            Some of you may remember us like this...
            <div className="h-12"></div>
            <div className='flex justify-center gap-5'>
                <Image
                    src={ABHISHEK_CHILDHOOD}
                    alt='Abhishek childhood picture'
                    className='-rotate-6 shadow-lg'
                    width='360px'
                    height='360px'
                />
                <Image
                    src={TANISHA_CHILDHOOD}
                    alt='Tanisha childhood picture'
                    className='rotate-6 shadow-lg'
                    width='360px'
                    height='360px'
                />
            </div>
            <div className="h-24"></div>
        </h2>
    </section>
)

export default Childhood