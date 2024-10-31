import rsvpConfig from "../../config/rsvpConfig"
import Form from "../RSVPForm/RSVPForm";

const RSVPComponent = () => {
    const { body } = rsvpConfig;
    return (
        <section className="flex flex-col align-center justify-center">
            <h1 className="text-primary font-primary text-3xl md:text-5xl underline m-auto">
                RSVP
            </h1>
            <div className="h-4 md:h-8"></div>
            <div className="flex flex-col justify-center mx-5 md:mx-[200px]">
                <p className='font-secondary text-primary text-2xl md:whitespace-pre text-center'>{body}</p>
                <div className="h-16 md:h-24"></div>
                <Form />
            </div>
        </section>
    )
}

export default RSVPComponent