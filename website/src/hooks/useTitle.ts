import { useContext, useEffect } from 'react';

import { TitleContext } from '../contexts/TitleContext';


export function useTitle(newTitle: string) {
    const originalTitle = useContext(TitleContext);

    useEffect(() => {
        if (!document) {
            return;
        }

        if (document.title !== newTitle) {
            document.title = originalTitle ? `${newTitle} | ${originalTitle}` : newTitle;
        }

        return () => {
            document.title = originalTitle;
        };
    }, [originalTitle, newTitle]);
};
