import React from "react";
import Input from "../../atoms/Input/Input";
import ThankYou from "../../atoms/ThankYou/ThankYou";
import { saveGuestBook } from "../../utils/supabase/supabase";

const GuestBookForm = () => {
    const [showToast, setShowToast] = React.useState(false)

    React.useEffect(() => {
        if (showToast) {
            window.setTimeout(() => {
                setShowToast(false);
            }, 3000)
        }
    }, [showToast])

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const payload: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value: FormDataEntryValue, key: string) => {
            payload[key] = value;
        });
        const success = await saveGuestBook(payload);
        if (success) {
            // Clear form after submission
            (event.target as HTMLFormElement).reset();
            setShowToast(true);
        } else {
            // show error toast
        }
    }

    return (
        <section className="md:mx-[200px]">
            <form className="flex flex-col gap-4" onSubmit={(e) => onSubmit(e)}>
                <Input
                    name='name'
                    label='Your Name'
                    maxLength={50}
                    pattern="[a-zA-Z\s]{5,50}"
                    required
                    placeholder="Your full name here.."
                    errorMessage="Please enter your full name"
                />
                <Input
                    name='message'
                    label='Your Message'
                    maxLength={600}
                    pattern="[a-zA-Z\s]{5,50}"
                    required
                    elementType="textarea"
                    placeholder="Your thoughts here..."
                    errorMessage="Please enter something"
                    rows={8}
                />
                {showToast && <ThankYou />}
                <button
                    type="submit"
                    className="mt-5 py-3 px-20 bg-secondary rounded-[5px] cursor-pointer text-white font-primary text-2xl m-auto"
                >
                    Submit
                </button>
            </form>
        </section>
    )
}

export default GuestBookForm;