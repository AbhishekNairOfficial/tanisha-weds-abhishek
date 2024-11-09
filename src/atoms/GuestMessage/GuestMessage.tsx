type GuestMessageProps = {
    name: string,
    guests: number,
}

const GuestMessage = (props: GuestMessageProps) => {
    const { name, guests } = props;
    const guestText = () => {
        if (guests > 1) {
            return `with ${guests - 1} other Guests!`;
        } else if (guests === 1) {
            return "alone :(";
        } else {
            // if 0
            return '';
        }
    }

    return (
        <span className="text-md border-black border p-5" key={name}>
            {name} is attending {guestText()}
        </span>
    )
}

export default GuestMessage