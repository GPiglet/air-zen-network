import React, { FC, useContext, useTransition } from 'react'

import { StoreContext } from '../../../contexts/Store'
import { useTranslation } from 'next-i18next'


const Sticky: FC = () => {

    const { t } = useTranslation()
    const { changeCookieAllow } = useContext(StoreContext)

    return (
        <div className="md:block bg-black fixed bottom-0 w-full py-7 z-60 border border-third border-opacity-30">
            <div className="container mx-auto flex  md:pl-16 flex-col-reverse md:flex-row">
                <div className="flex flex-col mx-16 md:ml-0 mt-5 md:mt-0">
                    <button className="w-full md:w-max font-lato text-white text-base bg-gradient-to-r from-secondary to-[#669AB4] py-2.5 px-7 rounded-md" onClick={() => changeCookieAllow?.(true)}>
                        {t('cookie.accept')}
                    </button>
                    <div className="bg-gradient-to-r w-full p-[1px] rounded-md from-secondary to-[#669AB4] mt-3">
                        <button className=" font-lato w-full text-white text-base bg-black py-2.5 border- rounded-md" onClick={() => changeCookieAllow?.(true)}>
                            {t('cookie.customize')}
                        </button>

                    </div>
                </div>
                <span className="px-5 md:px-0 font-lato font-light text-xs leading-4 md:text-base text-white tracking-[2px]">{t('cookie.content')}<a href="" className='underline'>{t('cookie.detail')}</a></span>
            </div>
        </div>
    )
}

export default Sticky