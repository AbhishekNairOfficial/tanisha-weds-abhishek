import ABHISHEK_CHILDHOOD from '../../assets/abhishek-childhood.webp';
import TANISHA_CHILDHOOD from '../../assets/tanisha-childhood.webp';
import Image from '../../atoms/Image/Image';

const Childhood = () => (
    <section>
        <h2
            className="text-2xl font-primary text-primary text-center">
            Some of you may remember us like this...
        </h2>
        <div className="h-12"></div>
        <div className='flex justify-center md:gap-5'>
            <Image
                src={ABHISHEK_CHILDHOOD}
                alt='Abhishek childhood picture'
                className='w-[200px] md:w-[360px]'
                rotate={-6}
                animate
            />
            <Image
                src={TANISHA_CHILDHOOD}
                alt='Tanisha childhood picture'
                rotate={6}
                className='w-[200px] md:w-[360px]'
                animate
            />
        </div>
    </section>
)

export default Childhood