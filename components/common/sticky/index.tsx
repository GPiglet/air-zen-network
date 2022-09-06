import React, { FC, useContext, useTransition } from 'react'

import { StoreContext } from '../../../contexts/Store'
import { useTranslation } from 'next-i18next'


const Sticky: FC = () => {

    const { t } = useTranslation()
    const { changeCookieAllow } = useContext(StoreContext)

    return (
        <div className="hidden md:block bg-black fixed bottom-0 w-full py-7 z-60 border border-third border-opacity-30">
            <div className="container mx-auto flex  pl-16">
                <div className="flex flex-col mr-16">
                    <button className="w-max font-lato text-white text-base bg-gradient-to-r from-secondary to-[#669AB4] py-2.5 px-7 rounded-md" onClick={() => changeCookieAllow?.(true)}>
                        {t('cookie.accept')}
                    </button>
                    <div className="bg-gradient-to-r w-full p-[1px] rounded-md from-secondary to-[#669AB4] mt-3">
                        <button className=" font-lato w-full text-white text-base bg-black py-2.5 border- rounded-md" onClick={() => changeCookieAllow?.(true)}>
                            {t('cookie.customize')}
                        </button>

                    </div>
                </div>
                <span className="font-lato font-light text-base text-white tracking-[2px]">{t('cookie.content')}<a href="" className='underline'>{t('cookie.detail')}</a></span>
            </div>
        </div>
    )
}

export default Sticky