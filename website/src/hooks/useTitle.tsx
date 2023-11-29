import { createContext, useContext } from 'react';
import { useEffect, useRef } from 'react';
import { ReactNode } from 'react';


const TitleContext = createContext<string>('');


export type TitleContextProviderProps = {
    children: ReactNode,
};


export function TitleContextProvider({ children }: TitleContextProviderProps) {
    const originTitleRef = useRef<string>(document ? document.title : '');

    return (
        <TitleContext.Provider value={originTitleRef.current}>
            { children }
        </TitleContext.Provider>
    );
}


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
