import React from "react";
import Wish from "../../atoms/Wish/Wish";
import { getWishes } from "../../utils/supabase/supabase";
import { GetWishesResponse } from "../../utils/supabase/types";

const YourWishes = () => {
    const [wishes, setWishes] = React.useState<GetWishesResponse[] | []>([]);

    React.useEffect(() => {
        (async () => {
            const response = await getWishes();
            if (response && response?.length) {
                setWishes(response);
            }
        })();
    }, []);

    return (
        <section className="md:mx-[200px]">
            <h2 className="text-center font-primary text-primary text-2xl md:text-4xl">
                Your Wishes
            </h2>
            {wishes.map(((wish, index) => (
                <>
                    <hr className={`my-16 mx-auto border-primary border-1 ${index === 0 ? 'w-0' : 'w-56'}`} />
                    <Wish
                        key={wish.id}
                        message={wish.message}
                        name={wish.name}
                    />
                </>
            )))}
        </section>
    )
}

export default YourWishes;