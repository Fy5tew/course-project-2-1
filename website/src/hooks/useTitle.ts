import { useEffect } from 'react';
import { useDispatch } from "react-redux";

import { titleActions } from "../features/title/titleSlice";


export function useTitle(newTitle?: string) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (newTitle) {
            dispatch(titleActions.setPartial(newTitle));
        }

        return () => {
            dispatch(titleActions.reset());
        };
    }, [dispatch, newTitle]);
}
