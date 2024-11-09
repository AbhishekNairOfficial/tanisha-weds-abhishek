import React from "react";
import { RSVPResponse } from "../../utils/supabase/types";
import { getRSVP } from "../../utils/supabase/supabase";

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

    return (
        <section>
            <h1 className="text-3xl mb-5">Guest Info</h1>
            <ul className="border border-black">
                <li className="flex gap-5 p-5">
                    {rsvp.map((rsvpItem) => (
                        <span className="text-xl" key={rsvpItem.name}>
                            {rsvpItem.name} is attending with {rsvpItem.noOfGuests} other Guests!
                        </span>
                    ))}
                </li>
            </ul>
        </section>
    )
}

export default GuestInfo;