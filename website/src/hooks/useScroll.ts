import { useEffect, useState, useRef, RefObject } from "react";


type ScrollableRef = {
    scrollHeight: number,
    scrollWidth: number,
    scrollTop: number,
    scrollLeft: number,
    addEventListener: (eventType: string, callback: () => void) => void,
}


export function useScrollPosition(ref: RefObject<ScrollableRef>) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            if (ref.current) {
                setScrollPosition(ref.current.scrollTop);
            }
        }

        if (ref.current) {
            ref.current.addEventListener("scroll", updatePosition);
        }
        updatePosition();

        return () => {
            window.removeEventListener("scroll", updatePosition);
        };
    }, [ref]);

    return scrollPosition;
};


export function useOnScroll(
    ref: RefObject<ScrollableRef>,
    callback: (() => void) | ((direction: 'down' | 'up') => void),
    sensitivity?: number,
) {
    const scrollPosition = useScrollPosition(ref);
    const prevScrollPosition = useRef<number>(scrollPosition);

    useEffect(() => {
        if (sensitivity && (Math.abs(scrollPosition - prevScrollPosition.current) < sensitivity)) {
            return;
        }
        if (scrollPosition > prevScrollPosition.current) {
            callback('down');
        }
        if (scrollPosition < prevScrollPosition.current) {
            callback('up');
        }
        prevScrollPosition.current = scrollPosition;
    }, [callback, sensitivity, scrollPosition]);
}
