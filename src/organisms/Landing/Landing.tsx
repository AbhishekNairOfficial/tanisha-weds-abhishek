import NameComponent from "../../molecules/NameComponent/NameComponent"
import Header from "../Header/Header"

import TREE_LEFT_IMAGE from '../../assets/landing-page-tree-left.svg';
import TREE_RIGHT_IMAGE from '../../assets/landing-page-tree-right.svg';

const Landing = () => {
    return (
        <>
            <Header />
            <div className="h-24"></div>
            <div className="flex w-screen justify-between absolute">
                <img src={TREE_LEFT_IMAGE} alt="Left Tree" />
                <img src={TREE_RIGHT_IMAGE} alt="Right Tree" />
            </div>
            <NameComponent />
            <div className="h-24"></div>
            <h2 className="font-primary text-primary text-4xl m-auto w-screen text-center">
                January 19th & 20th, 2025
                </h2>
            <div className="h-24"></div>
            <hr className="w-24 mb-[30px] border-t-2 border-primary m-auto text-center" />
            <p className="font-secondary text-center text-2xl w-1/3 m-auto mb-[10px] text-primary">
                We&#39;re excited to have you join us on our special day.<br />
                Please RSVP to confirm your presence.</p>
            <h3 className="font-primary text-primary text-2xl stroke-2 stroke-black text-center">
                Love, T&A
            </h3>
            <hr className="w-24 mt-[30px] border-t-2 border-primary m-auto text-center" />
        </>
    )
}

export default Landing