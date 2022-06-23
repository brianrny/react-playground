import { Dispatch, SetStateAction, useRef } from "react"

interface Props {
    props: {
        value?: string
        setValue: Dispatch<SetStateAction<string>>
        debounceTimer?: number
    }
}

function DebounceInput({ props }: Props) {
    let debouceTimer: number;

    const { setValue, debounceTimer } = props;

    const ref = useRef<HTMLInputElement | any>(null);

    const debounce = (inputValue: string, waittime = 1500) => {
        clearTimeout(debouceTimer)

        debouceTimer = setTimeout(() => {
            setValue(inputValue)
        }, debounceTimer)
    }

    return (
        <>
            <input ref={ref} type="text" onChange={() => debounce(ref.current.value)} />
        </>
    )
}

export default DebounceInput
