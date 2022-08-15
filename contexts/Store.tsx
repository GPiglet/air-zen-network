import React, { createContext, useReducer, FC, ReactNode } from 'react';



type StoreContextType = {
    step: number,
    changeStep?: (step: number) => void,
    homeOption?: {
        roomSize?: number,
        node?: number,
        contractTerm?: number,
        monthPay?: number,
        mail?: string,
        firstName?: string,
        surName?: string,
        street?: string,
        placeName?: string,
        federalState?: string,
        houseNo?: number,
        postCode?: number,
        payMethod?: string

    },
    businessOption?: {
        business?: string
    },
    changeHomeOption?: (homeOption: object) => void,
    changeBusinessOption?: (businessOption: object) => void
};


const initialState = {
    step: 1,
    homeOption: {
    },
    businessOption: {

    }
}

export const StoreContext = createContext<StoreContextType>(initialState);

type childrenType = {
    children?: ReactNode,
}

export const StoreProvider: FC<childrenType> = ({ children }) => {

    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'CHANGE_STEP':
                // console.log(state, action.payload)
                return {
                    step: action.payload,
                    homeOption: state.homeOption
                }
            case 'CHANGE_HOME_OPTION':
                return {
                    step: state.step,
                    businessOption: state.businessOption,
                    homeOption: { ...state.homeOption, ...action.payload }
                }
            case 'CHANGE_BUSINESS_OPTION':
                return {
                    step: state.step,
                    homeOption: state.homeOption,
                    businessOption: { ...state.businessOption, ...action.payload }
                }
            default:
                return state;
        }
    }, initialState);

    const value = {
        step: state.step,
        homeOption: state.homeOption,
        businessOption: state.businessOption,
        changeStep: (step: number) => dispatch({
            type: 'CHANGE_STEP',
            payload: step
        }),
        changeHomeOption: (homeOption: object) => dispatch({
            type: 'CHANGE_HOME_OPTION',
            payload: homeOption
        }),
        changeBusinessOption: (businessOption: object) => dispatch({
            type: 'CHANGE_BUSINESS_OPTION',
            payload: businessOption
        })
    }
    return (
        <StoreContext.Provider value={value}> {/* <- this value is gonna be Global state */}
            {children}
        </StoreContext.Provider>
    )
}