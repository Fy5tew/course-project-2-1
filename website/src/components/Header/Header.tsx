import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useWindowSize } from "usehooks-ts";

import { headerActions } from '../../features/header/headerSlice';
import { menuActions } from "../../features/menu/menuSlice";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";


const BREAKPOINT_WIDTH = 768;


export function Header() {
    const dispatch = useDispatch();
    const isHeaderVisible = useSelector(headerActions.getVisible);
    const isMenuOpened = useSelector(menuActions.getOpened);
    const { width } = useWindowSize();

    useEffect(() => {
        if (isMenuOpened && width > BREAKPOINT_WIDTH) {
            dispatch(menuActions.close());
        }
    }, [dispatch, isMenuOpened, width]);

    if (width <= BREAKPOINT_WIDTH) {
        return (
            <HeaderMobile isVisible={isHeaderVisible} />
        );
    }

    return (
        <HeaderDesktop isVisible={isHeaderVisible} />
    );
}
