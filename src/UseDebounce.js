import { useEffect } from "react";
import useTimeout from "./UseTimeout";

export default function useDebounce(callBack, delay, dependencies) {
    const { reset, clear } = useTimeout(callBack, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}