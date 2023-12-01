import { useWindowSize } from "usehooks-ts";

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";


export function Header() {
    const { width } = useWindowSize();

    if (width > 768) {
        return (
            <HeaderDesktop />
        );
    }
    return (
        <HeaderMobile />
    );
}
