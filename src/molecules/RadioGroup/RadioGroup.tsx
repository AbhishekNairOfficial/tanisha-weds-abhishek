import * as RadioGroup from "@radix-ui/react-radio-group";
import Radio from "../../atoms/Radio/Radio";

type Options = {
    label: string;
    value: string;
}

type RadioGroupProps = {
    options: Options[]
    label: string;
    name: string
}

const RadioGroupComponent = (props: RadioGroupProps) => {
    const { options, label, name } = props;

    return (
        <RadioGroup.Root required name={name} aria-label={label}>
            <label className="text-black font-secondary text-2xl block mb-2">{label}</label>
            <div className="flex gap-5">
                {options.map((option) => (
                    <Radio
                        label={option.label}
                        value={option.value}
                        key={option.value}
                    />
                ))}
            </div>
        </RadioGroup.Root>
    )
}

export default RadioGroupComponent