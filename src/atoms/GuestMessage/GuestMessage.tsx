type GuestMessageProps = {
    name: string,
    guests: number,
}

const GuestMessage = (props: GuestMessageProps) => {
    const { name, guests } = props;
    const guestText = () => {
        const otherGuests = guests - 1;

        switch (guests) {
            case 0: return '';
            case 1: return 'alone :(';
            case 2: return `with ${otherGuests} other guest`;
            default: return `with ${otherGuests} other Guests!`;
        }
    }

    return (
        <span className="text-md border-black border p-5" key={name}>
            {name} is attending {guestText()}
        </span>
    )
}

export default GuestMessage