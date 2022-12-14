import React, { FC, useState } from 'react'
import { useTranslation } from 'next-i18next'

import ReadMore from '../readmoreless'
import ContactForm from '../form/ContactForm'
import NewsLetterForm from '../form/NewsLetterForm'

const Footer: FC = () => {
    //translate
    const { t } = useTranslation()

    const legal:any = t('footer.legal', { returnObjects: true });
    const partner:any = t('footer.partner', { returnObjects: true });
    const newsletter:any = t('footer.newsletter', { returnObjects: true });

    const legalLinks = [
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
        "/files/230922_airzen_agb_de.pdf",
    ];

    return (
        <div className='container m-auto pb-[150px]'>
            <div className='relative pb-[40px] md:py-[100px] flex justify-center'>
                <h1 className="text-title-sm">{t('footer.title')}</h1>
            </div>
            <div className='px-10 grid md:grid-cols-3 gap-6 pb-[100px] md:pb-[200px]'>
                <div className='font-lato text-lg text-white tracking-widest'>
                    {/* <p className='font-medium pb-6'>{legal.title}</p>                     */}
                    <ReadMore title={legal.title}>
                        <p className='font-medium'>{legal.description[0]}</p>
                        <p className='font-light'>{legal.description[1]}</p>
                        <p className='font-light'>{legal.description[2]}</p>
                        <p className='font-light pb-6'>{legal.description[3]}</p>
                        <p className='font-medium'>{legal.readmore}</p>
                        <div className='flex flex-col gap-6'>
                            {legal.links.map((link: string, ind: number) =>
                                <p key={ind}><a href={legalLinks[ind]} className='underline'>{link}</a></p>
                            )}
                        </div>
                    </ReadMore>
                </div>

                <div className='font-lato text-lg text-white tracking-widest'>
                    <ReadMore title={partner.title}>
                        <p className='font-light pb-6'>{partner.description[0]}</p>
                        <p className='font-light'>{partner.description[1]}</p>
                        <ContactForm />
                    </ReadMore>
                </div>

                <div className='font-lato text-lg text-white tracking-widest'>
                    <ReadMore title={newsletter.title}>
                        <p className='font-light pb-6'>{newsletter.description[0]}</p>
                        <p className='font-light'>{newsletter.description[1]}</p>
                        <NewsLetterForm />
                    </ReadMore>
                </div>
            </div>

        </div>
    )
}

export default Footer
