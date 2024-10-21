const NameComponent = () => {
    return (
        <h1 className="flex flex-col text-5xl md:text-7xl items-center">
            <span className="font-primary text-primary">Tanisha</span>
            <div className="flex items-center">
                <hr className="w-20 border-t-2 border-primary" />
                <span className="mx-2 font-primary text-primary">&</span>
                <hr className="w-20 border-t-2 border-primary" />
            </div>
            <span className="font-primary text-primary">Abhishek</span>
        </h1>
    )
}

export default NameComponent;