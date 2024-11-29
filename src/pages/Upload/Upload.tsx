import Footer from "../../organisms/Footer/Footer"
import PhotoUploadBox from "../../organisms/PhotoUploadBox/PhotoUploadBox"
import UploadLanding from "../../organisms/UploadLanding/UploadLanding"

const UploadPage = () => (
    <main>
        <UploadLanding />
        <PhotoUploadBox />
        <div className="h-24 md:h-48"></div>
        <Footer />
    </main>
)

export default UploadPage