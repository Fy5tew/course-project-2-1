import { useEffect, RefObject } from "react";


type ValidRefTarget = {
    contains(target: EventTarget | null): any;
}


export function useOnClickOutside(ref: RefObject<ValidRefTarget>, handler: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target)) {
                handler()
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, handler]);
}
