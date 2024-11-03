import { m } from 'framer-motion'

const ThankYou = () => {
    return (
        <m.div
            initial={{ scale: 0, y: 100 }}
            animate={{
                scale: [0, .2, .4, .6, .8, 1],
                y: [100, 80, 60, 40, 20, 0]
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
            className='m-auto rounded-3xl p-10 bg-white absolute left-0 right-0 text-center w-2/4 shadow-lg'
        >
            <span className='text-primary font-primary text-2xl'>
                Thank you!
            </span>
        </m.div>
    )
}

export default ThankYou