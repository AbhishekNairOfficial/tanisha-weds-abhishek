import React from "react"
import Header from "../../organisms/Header/Header"
import Trees from "../../atoms/Trees/Trees"

type LandingProps = {
    children: React.ReactNode
}

const LandingTemplate = (props: LandingProps) => {
    const { children } = props

    return (
        <>
            <Header />
            <div className="h-24"></div>
            <Trees />
            <div className="h-24 md:h-0"></div>
            {children}
        </>
    )
}

export default LandingTemplate