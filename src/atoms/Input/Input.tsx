import { useId } from "react";

type InputProps =
    React.HTMLProps<HTMLInputElement> &
    React.HTMLProps<HTMLTextAreaElement> &
    {
        name: string;
        label?: string;
        errorMessage?: string;
        elementType?: 'input' | 'textarea'
    }
type ChangeEvent = React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>;

const Input = (props: InputProps) => {
    const { name, label, elementType = 'input', errorMessage, ...rest } = props;
    const id = useId();

    const uniqueName = name + '-' + id;
    const Tag = elementType === 'textarea' ? 'textarea' : 'input';

    // Setting custom error message if passed
    const onInvalidInput = (e: ChangeEvent) => {
        if (errorMessage) {
            (e.target as HTMLInputElement).setCustomValidity(errorMessage);
        }
    }

    const onChange = (e: ChangeEvent) => {
        (e.target as HTMLInputElement).setCustomValidity('');
    }

    return (
        <>
            <label className="text-black font-secondary text-2xl mt-2" htmlFor={uniqueName}>{label}</label>
            <Tag
                id={uniqueName}
                name={name}
                className={`p-4 bg-white font-footer text-xl`}
                onInvalid={onInvalidInput}
                onChange={onChange}
                {...rest}
            />
        </>
    )
}

export default Input;