import eventsConfig from "../../config/eventsConfig"
import EventCard from "../../molecules/EventCard/EventCard"

const Events = () => {
    return (
        <section className="flex flex-col align-center justify-center ">
            <h1 className="text-primary font-primary text-5xl underline m-auto">Reception &#38; Ceremony</h1>
            <div className="h-24"></div>
            <div className="flex mx-[160px]">
                {eventsConfig.eventsList.map((event) => (
                    <EventCard
                        key={event.date}
                        title={event.title}
                        body={event.body}
                        date={event.date}
                        image={event.image}
                    />  
                ))}
            </div>
        </section>
    )
}

export default Events