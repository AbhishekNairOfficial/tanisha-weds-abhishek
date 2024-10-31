import { FieldValues, useForm } from "react-hook-form";
import Input from "../../atoms/Input";

const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data: FieldValues) => {
        console.log(data);
        reset();
    }

    return (

        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <Input errors={errors} name='nameField' label='Name' required register={register} />
            <Input errors={errors} name='noOfGuests' label='No.of Guests in your party' required register={register} />
            <Input errors={errors} name='phoneNumber' label='Phone Number' required register={register} />
            <button type="submit">Submit</button>
        </form >

    )
}

export default Form