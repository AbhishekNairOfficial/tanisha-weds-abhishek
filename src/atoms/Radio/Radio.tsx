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
        <>
            <RadioGroup.Item
                {...register(parentName)}
                className="size-[25px] cursor-default rounded-full bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
                value={value}
                id={uniqueId}
            >
                <RadioGroup.Indicator className="relative flex size-full items-center justify-center after:block after:size-[11px] after:rounded-full after:bg-violet11" />
            </RadioGroup.Item>
            <label
                className="pl-[15px] text-[15px] leading-none text-white"
                htmlFor={uniqueId}
            >
                {label}
            </label>
        </>
    )
}

export default Radio