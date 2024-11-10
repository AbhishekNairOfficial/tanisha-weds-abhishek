import React from "react";
import { RSVPResponse } from "../../utils/supabase/types";
import { getRSVP } from "../../utils/supabase/supabase";
import GuestMessage from "../../atoms/GuestMessage/GuestMessage";

const GuestInfo = () => {
    const [rsvp, setRSVP] = React.useState<RSVPResponse[] | []>([]);

    React.useEffect(() => {
        (async () => {
            const response = await getRSVP();
            if (response && response?.length) {
                setRSVP(response);
            }
        })();
    }, []);

    const totalCount = React.useMemo(() => (
        rsvp.reduce((total, current) => {
            return total + current.noOfGuests;
        }, 0)
    ), [rsvp]);

    return (
        <section>
            <h1 className="text-3xl mb-5">Guest Info ({totalCount}):</h1>
            <ul className="border border-black">
                <li className="flex flex-col">
                    {rsvp.map((rsvpItem) => (
                        <GuestMessage key={rsvpItem.name} name={rsvpItem.name} guests={rsvpItem.noOfGuests} />
                    ))}
                </li>
            </ul>
        </section>
    )
}

export default GuestInfo;