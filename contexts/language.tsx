import React, { createContext, useReducer, FC, ReactNode } from 'react';



type LanguageContextType = {
    lang: string,
    changeLang?: (lang: string) => void
};


const initialState = {
    lang: 'en'
}

export const LanguageContext = createContext<LanguageContextType>(initialState);

type childrenType = {
    children ?: ReactNode,
}

export const LanguageProvider:FC<childrenType> = ({ children }) => {

    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'CHANGE_LANG':
                console.log(state, action.type)
                return {
                    lang: [action.payload]
                }
            default:
                return state;
        }
    }, initialState);

    const value = {
        lang: state.lang,
        changeLang: (lang:string) => dispatch({
            type: 'CHANGE_LANG',
            payload: lang
        })
    }
    return (
        <LanguageContext.Provider value={value}> {/* <- this value is gonna be Global state */}
            {children}
        </LanguageContext.Provider>
    )
}