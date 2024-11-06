type WishProps = {
    message: string,
    name: string,
}

const Wish = (props: WishProps) => (
    <div className="flex">
        <span className="self-start font-primary text-primary text-9xl leading-6">
            “
        </span>
        <div className="flex flex-col flex-grow">
            <p className="flex-grow font-secondary text-primary text-2xl">
                {props.message}
            </p>
            <h4 className="self-end font-secondary text-primary font-bold text-2xl">
                {props.name}
            </h4>
        </div>
        <span className="self-end font-primary text-primary text-9xl leading-6">
            ”
        </span>
    </div>
);

export default Wish