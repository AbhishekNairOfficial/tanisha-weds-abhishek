import LandingTemplate from "../../Templates/Landing/Landing"

const GuestBookLanding = () => {
    return (
        <LandingTemplate>
            <h1 className="font-primary text-primary text-5xl md:text-7xl text-center">
                GuestBook
            </h1>
            <div className="h-24"></div>
            <hr className="w-40 border-t-2 border-primary m-auto" />
            <div className="h-8 md:h-12"></div>
            <h2 className="text-center mx-5 font-primary text-primary text-2xl md:text-4xl">
                Share your wishes and Memories
            </h2>
            <div className="h-4 md:h-6"></div>
            <p className="text-center mx-5 font-secondary text-primary text-2xl">
                Add your personal message to help us treasure this special day forever.<br />
                Sign our digital guestbook with your love, advice, and well wishes
            </p>
            <div className="h-8 md:h-12"></div>
            <hr className="w-40 border-t-2 border-primary m-auto" />
        </LandingTemplate>
    )
}

export default GuestBookLanding