import * as RadioGroup from "@radix-ui/react-radio-group"
import { useId } from "react"

type RadioButtonProps = {
    value: string
    label: string

}

const Radio = (props: RadioButtonProps) => {
    const { value, label } = props
    const id = useId();

    const uniqueId = value + '_' + id
    return (
        <div className="flex flex-row gap-2">
            <RadioGroup.Item
                aria-label={value}
                className="bg-white size-6 rounded-full cursor-default hover:bg-bgWhite"
                value={value}
                id={uniqueId}
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