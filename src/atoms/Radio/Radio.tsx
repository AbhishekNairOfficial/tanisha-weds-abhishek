import * as RadioGroup from "@radix-ui/react-radio-group"
import { useId } from "react"
import { FieldValues, Path, UseFormRegister } from "react-hook-form"

type RadioButtonProps<T extends FieldValues> = {
    value: string
    label: string
    register: UseFormRegister<FieldValues>
    parentName: Path<T>;

}

const Radio = <T extends FieldValues>(props: RadioButtonProps<T>) => {
    const { value, label, register, parentName } = props
    const id = useId();

    const uniqueId = value + '_' + id
    return (
        <div className="flex flex-row gap-2">
            <RadioGroup.Item
                className="bg-white size-6 rounded-full cursor-default hover:bg-bgWhite"
                value={value}
                id={uniqueId}
                {...register(parentName)}
            >
                <RadioGroup.Indicator className="relative flex m-auto bg-primary size-3 rounded-full" />
            </RadioGroup.Item>
            <label
                className="text-black font-footer text-xl"
                htmlFor={uniqueId}
            >
                {label}
            </label>
        </div>
    )
}

export default Radio