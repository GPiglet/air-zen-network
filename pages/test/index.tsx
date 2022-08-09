import type { NextPage } from 'next'
import React, { useContext } from 'react'
import { LanguageContext } from '../../contexts/language'

const Test: NextPage = () => {

    const { changeLang, lang } = useContext(LanguageContext);
    const change = (lang: string) => {
        console.log(lang, '--------')
        changeLang(lang)
    }

    return (
        <>

                <button onClick={() => change('en')} className="bg-black text-white w-[50px] py-5 px-10 mr-10   ">En</button>
                <button onClick={() => change('ge')} className="bg-black text-white w-[50px] py-5 px-10 mr-10   ">Ge</button>
                {lang}
        </>
    )
}

export default Test