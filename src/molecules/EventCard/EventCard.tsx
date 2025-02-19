
interface EventCardProps {
    image: string
    title: string
    date: string
    body: string
}

const dateOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short', // abbreviated month
    hour: '2-digit',
    minute: '2-digit',
    hour12: true // Use 24-hour format
};

const EventCard = (props: EventCardProps) => {
    const { image = '', title = '', date = '', body = '' } = props;

    const formattedDate = new Date(date).toLocaleString(undefined, dateOptions)

    return (
        <div className="md:mx-12 mb-16 md:mb-0">
            <img className="shadow-lg rounded-lg" src={image} alt='Event Card Main'></img>
            <div className="h-4" />
            <h4 className="font-primary text-primary text-2xl md:text-4xl">{title}</h4>
            <span className="font-secondary text-black text-xl md:text-2xl">{formattedDate}</span>
            <div className="h-2 md:h-4" />
            <p className="font-secondary text-primary text-xl md:text-2xl">{body}</p>
        </div>
    )
}

export default EventCard