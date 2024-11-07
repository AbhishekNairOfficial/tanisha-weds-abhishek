import NameComponent from "../../molecules/NameComponent/NameComponent"
import LandingTemplate from "../../Templates/Landing/Landing"

const Landing = () => {
    return (
        <LandingTemplate>
            <NameComponent />
            <div className="h-24"></div>
            <h2 className="font-primary text-primary text-2xl md:text-4xl m-auto w-screen text-center">
                January 19th & 20th, 2025
            </h2>
            <div className="h-16 md:h-24"></div>
            <hr className="w-24 mb-[30px] border-t-2 border-primary m-auto text-center" />
            <p className="font-secondary text-center text-2xl px-5 md:w-1/3 m-auto mb-[10px] text-primary">
                We&#39;re excited to have you join us on our special day.<br />
                Please RSVP to confirm your presence.</p>
            <h3 className="font-primary text-primary text-2xl stroke-2 stroke-black text-center">
                Love, T&A
            </h3>
            <hr className="w-24 mt-[30px] border-t-2 border-primary m-auto text-center" />
        </LandingTemplate>
    )
}

export default Landing