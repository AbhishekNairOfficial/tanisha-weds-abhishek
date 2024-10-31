import { useId } from "react";
import { FieldErrors, FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
    name: Path<T>;
    label?: string;
    required?: boolean;
    errors?: FieldErrors<T> | undefined;
    register: UseFormRegister<T>
}

const Input = <T extends FieldValues>(props: InputProps<T>) => {
    const { name, label, required, register, errors, ...rest } = props;
    const id = useId();

    const uniqueName = name + '-' + id;

    return (
        <>
            <label htmlFor={uniqueName}>{label}</label >
            <input id={uniqueName} {...register(name, { required })} {...rest} />
            {errors?.nameField && <span>This field is required</span>}
        </>
    )
}

export default Input;