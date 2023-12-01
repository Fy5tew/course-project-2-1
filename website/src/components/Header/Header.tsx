import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useWindowSize } from "usehooks-ts";

import { menuActions } from "../../features/menu/menuSlice";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";


const BREAKPOINT_WIDTH = 710;


export function Header() {
    const dispatch = useDispatch();
    const { width } = useWindowSize();

    useEffect(() => {
        if (width > BREAKPOINT_WIDTH) {
            dispatch(menuActions.close());
        }
    }, [dispatch, width]);

    if (width < BREAKPOINT_WIDTH) {
        return (
            <HeaderMobile />
        );
    }

    return (
        <HeaderDesktop />
    );
}
