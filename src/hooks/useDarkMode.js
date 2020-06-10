import React from "react";
import {useEffect} from "react";
import useLocalStorage from "./useLocalStorage";

const useDarkMode = (initialValue) => {
const [useDarkMode, setDark] = useLocalStorage('dark-mode', initialValue);
    useEffect(() => {
        if (useDarkMode === true) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [useDarkMode])
    return [useDarkMode, setDark];
}

export default useDarkMode;