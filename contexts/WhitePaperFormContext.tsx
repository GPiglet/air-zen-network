import {createContext} from 'react';
export type WhitePaperType = {
    image: string,
    heading: string,
    title: string,
    description: string,
    filename: string
}
type WhitePaperFormContextType = {
    isShow: boolean,
    whitePaper: WhitePaperType | null,
    showForm: (show: boolean) => void,
    setWhitePaper: (wp: WhitePaperType) => void
};

const WhitePaperFormDefaultValues: WhitePaperFormContextType = {
    isShow: false,
    whitePaper: null,
    showForm: (show: boolean) => {},
    setWhitePaper: (wp: WhitePaperType) => {}
}
export const WhitePaperFormContext = createContext<WhitePaperFormContextType>(WhitePaperFormDefaultValues);