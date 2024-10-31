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
            <label className="text-black font-secondary text-2xl mt-2" htmlFor={uniqueName}>{label}</label>
            <input
                id={uniqueName}
                className={`p-4 bg-white font-footer text-xl ${errors && errors[name] && 'border-2 border-error'}`}
                {...register(name, { required })}
                {...rest} />
            {errors && errors[name] && <span className="text-error font-footer">This field is required</span>}
        </>
    )
}

export default Input;