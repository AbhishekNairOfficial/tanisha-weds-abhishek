import { FieldValues, useForm } from "react-hook-form";
import Input from "../../atoms/Input/Input";
import RadioGroupComponent from "../../molecules/RadioGroup/RadioGroup";
import rsvpConfig from "../../config/rsvpConfig";

const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { radioOptions } = rsvpConfig;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset();
    }

    return (

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors} name='nameField' label='Your Name' required register={register} />
            <RadioGroupComponent
                name='willYouBeJoining'
                label='Will you be joining us?'
                options={radioOptions}
                register={register}
            />
            <Input errors={errors} name='noOfGuests' label='No.of Guests in your party (Including you)?' required register={register} />
            <Input errors={errors} name='phoneNumber' label='Phone Number' required register={register} />
            <button type="submit" className="mt-5 py-3 px-20 bg-secondary rounded-[5px] cursor-pointer text-white font-primary text-2xl m-auto">
                Submit
            </button>
        </form >

    )
}

export default Form