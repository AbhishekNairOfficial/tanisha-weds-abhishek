import { useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
}

const Input = (props: InputProps) => {
    const { name, label, ...rest } = props;
    const id = useId();
    const uniqueName = name + '-' + id;

    return (
        <>
            <label className="text-black font-secondary text-2xl mt-2" htmlFor={uniqueName}>{label}</label>
            <input
                id={uniqueName}
                name={name}
                className={`p-4 bg-white font-footer text-xl`}
                {...rest}
            />
        </>
    )
}

export default Input;