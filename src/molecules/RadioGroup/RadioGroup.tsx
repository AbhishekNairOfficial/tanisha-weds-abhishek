import * as RadioGroup from "@radix-ui/react-radio-group";
import Radio from "../../atoms/Radio/Radio";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type Options = {
    label: string;
    value: string;
}

type RadioGroupProps<T extends FieldValues> = {
    options: Options[]
    label: string;
    register: UseFormRegister<FieldValues>
    name: Path<T>;
}

const RadioGroupComponent = <T extends FieldValues>(props: RadioGroupProps<T>) => {
    const { options, label, register, name } = props;

    return (
        <RadioGroup.Root name={name} aria-label={label}>
            <label className="text-black font-secondary text-2xl block mb-2">{label}</label>
            <div className="flex gap-5">
                {options.map((option) => (
                    <Radio
                        register={register}
                        label={option.label}
                        value={option.value}
                        key={option.value}
                        parentName={name}
                    />
                ))}

            </div>
        </RadioGroup.Root>
    )
}

export default RadioGroupComponent