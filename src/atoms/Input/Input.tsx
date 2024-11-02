import { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    errorMessage?: string;
}

const Input = (props: InputProps) => {
    const { name, label, errorMessage, ...rest } = props;
    const id = useId();
    const uniqueName = name + '-' + id;

    // Setting custom error message if passed
    const onInvalidInput = (e: React.FormEvent<HTMLInputElement>) => {
        if (errorMessage) {
            (e.target as HTMLInputElement).setCustomValidity(errorMessage);
        }
    }

    return (
        <>
            <label className="text-black font-secondary text-2xl mt-2" htmlFor={uniqueName}>{label}</label>
            <input
                id={uniqueName}
                name={name}
                className={`p-4 bg-white font-footer text-xl`}
                onInvalid={onInvalidInput}
                {...rest}
            />
        </>
    )
}

export default Input;