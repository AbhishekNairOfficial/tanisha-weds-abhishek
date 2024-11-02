import Input from "../../atoms/Input/Input";
import RadioGroupComponent from "../../molecules/RadioGroup/RadioGroup";
import rsvpConfig from "../../config/rsvpConfig";
import { saveRSVP } from "../../utils/supabase/supabase";

const Form = () => {
    const { radioOptions } = rsvpConfig;

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // preventing default;
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const payload: { [key: string]: FormDataEntryValue } = {};
        formData.forEach((value: FormDataEntryValue, key: string) => {
            payload[key] = value;
        });
        const success = await saveRSVP(payload);
        if (success) {
            // Clear form after submission
            (event.target as HTMLFormElement).reset();
        } else {
            // show error toast
        }
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
                label='No.of Guests in your party (Including you)?'
                required
                placeholder="How many people will we see?"
            />
            <Input
                type="tel"
                pattern="\+\d{10,13}"
                name='phoneNumber'
                label='Phone Number'
                required
                placeholder="+11234567890"
            />
            <button
                type="submit"
                className="mt-5 py-3 px-20 bg-secondary rounded-[5px] cursor-pointer text-white font-primary text-2xl m-auto"
            >
                Submit
            </button>
        </form >

    )
}

export default Form