import { createContext, useRef, ReactNode } from 'react';


export type TitleContextProviderProps = {
    children: ReactNode,
};


export const TitleContext = createContext<string>('');


export function TitleContextProvider({ children }: TitleContextProviderProps) {
    const originTitleRef = useRef<string>(document ? document.title : '');

    return (
        <TitleContext.Provider value={originTitleRef.current}>
            { children }
        </TitleContext.Provider>
    );
}
