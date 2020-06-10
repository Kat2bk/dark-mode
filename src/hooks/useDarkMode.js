import {useLocalStorage} from "./useLocalStorage";
import {useEffect} from "react";

export const useDarkMode = (initialValue) => {
const [useDarkMode, setDark] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {
        if (useDarkMode === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [])
    return [useDarkMode, setDark];
}