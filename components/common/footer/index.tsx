import React, { FC, useState } from 'react'
import { useTranslation } from 'next-i18next'

import ReadMore from '../readmoreless'

const Footer: FC = () => {
    //translate
    const { t } = useTranslation()

    const inprint = t('footer.inprint', { returnObjects: true })

    const readmore = t('footer.readmore', { returnObjects: true })

    return (
        <div className='container m-auto pb-[150px]'>
            <div className='relative pb-[40px] md:py-[100px] flex justify-center'>
                <h1 className="text-title-sm">{t('footer.title')}</h1>
            </div>
            <div className='px-10  grid md:grid-cols-3 tracking-widest text-white pb-12'>

                {
                    (inprint as unknown as any[]).map((item, index) => (
                        <div className='w-full px-2 text-left text-lg font-lato mb-16' key={index}>
                            <p className='font-normal'>{item.title}</p>
                            <p className='font-light whitespace-pre-line'>{item.description}</p>
                            <p className='font-light mt-10'>{item.subdes}</p>
                        </div>
                    ))
                }
            </div>
            <div className='px-10 grid md:grid-cols-3 tracking-widest text-white md:pb-[100px]'>
                {
                    (readmore as unknown as any[]).map((item, index) => (
                        <div className='w-full px-2 ml-8 text-left text-lg font-lato md:mb-16 relative' key={index}>
                            <p className='font-normal mb-10'>{item.title}</p>

                            <ReadMore>
                                {item.content}
                            </ReadMore>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Footer
