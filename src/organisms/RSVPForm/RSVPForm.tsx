import React from "react";

import Input from "../../atoms/Input/Input";
import RadioGroupComponent from "../../molecules/RadioGroup/RadioGroup";
import rsvpConfig from "../../config/rsvpConfig";
import { saveRSVP } from "../../utils/supabase/supabase";
import ThankYou from "../../atoms/ThankYou/ThankYou";
import useToast from "../../hooks/useToast";

const Form = () => {
    const { radioOptions } = rsvpConfig;
    const [showToast, setShowToast] = useToast({});
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // preventing default;
        event.preventDefault();
        setIsSubmitting(true);
        const formData = new FormData(event.currentTarget);
        const payload: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value: FormDataEntryValue, key: string) => {
            payload[key] = value;
        });
        const success = await saveRSVP(payload);
        if (success) {
            // Clear form after submission
            (event.target as HTMLFormElement).reset();
            setShowToast(true);
        } else {
            // show error toast
        }
        setIsSubmitting(false);
    }

    return (

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
            <RadioGroupComponent
                name='attendance'
                label='Will you be joining us?'
                options={radioOptions}
            />
            <Input
                name='noOfGuests'
                type="number"
                min={1}
                max={100}
                label='Number of Guests in your party (Including you)?'
                required
                placeholder="How many people will we see?"
            />
            <Input
                type="tel"
                pattern="\+\d{10,13}"
                name='phoneNumber'
                label='Phone Number'
                required
                placeholder="+91 xxxxx-xxxxx"
                errorMessage="Please enter the phone number with country code"
            />
            {showToast && <ThankYou />}
            <button
                type="submit"
                className={`mt-5 py-3 px-20 bg-secondary rounded-[5px] cursor-pointer text-white font-primary text-2xl m-auto disabled:opacity-50`}
                disabled={isSubmitting}
            >
                Submit
            </button>
        </form >

    )
}

export default Form