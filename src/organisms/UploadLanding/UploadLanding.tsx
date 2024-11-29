import LandingTemplate from "../../Templates/Landing/Landing"

const UploadLanding = () => {
    return (
        <LandingTemplate>
            <h1 className="font-primary text-primary text-5xl md:text-7xl text-center">
                Upload
            </h1>
            <div className="h-24"></div>
            <hr className="w-40 border-t-2 border-primary m-auto" />
            <div className="h-8 md:h-12"></div>
            <p className="text-center mx-5 font-secondary text-primary text-2xl">
                Please share your memories from our special event here
            </p>
            <div className="h-4 md:h-6"></div>
        </LandingTemplate>
    )
}

export default UploadLanding