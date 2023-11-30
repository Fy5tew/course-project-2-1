import { useContext } from "react";

import { MenuContext } from "../contexts/MenuContext";


export type UseMenuValue = {
    isOpened: boolean,
    open: () => void,
    close: () => void,
    toggle: () => void,
};


export function useMenu(): UseMenuValue {
    const menu = useContext(MenuContext);

    const open = () => menu?.setOpened(true);
    const close = () => menu?.setOpened(false);
    const toggle = () => menu?.setOpened((prevState => !prevState));

    return {
        isOpened: menu?.isOpened || false,
        open,
        close,
        toggle,
    };
}
