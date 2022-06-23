import { useState } from "react"

let timer: number;

export const useDebounce = (waittime: number = 1000) => {
    const [state, setState] = useState('')

    const debounce = (value: string) => {
        clearInterval(timer)

        timer = setTimeout(() => {
            setState(value)
        }, waittime)
    }

    return [
        state,
        debounce
    ] as const
}