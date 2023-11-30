import React from 'react';
import { createContext, useState } from 'react';


export type MenuContextValue = {
    isOpened: boolean,
    setOpened: (value: React.SetStateAction<boolean>) => void,
};


export type MenuContextProviderProps = {
    children: React.ReactNode,
};


export const MenuContext = createContext<MenuContextValue | null>(null);


export function MenuContextProvider({ children }: MenuContextProviderProps) {
    const [ isOpened, setOpened ] = useState(false);

    return (
        <MenuContext.Provider value={{
            isOpened,
            setOpened,
        }}>
            { children }
        </MenuContext.Provider>
    );
}
