import React, { FC, useEffect, useState } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import { useTranslation } from 'next-i18next'

const ReferenceProjects: FC = () => {
    //translate
    const { t } = useTranslation()


    const carouselList = [
        {
            title: 'AIM-Re­fe­renz­-stre­cke',
            image: '/images/Bildschirmfoto.png',
            details: [
                '2Zeiler Herausforderungen',
                'kurze Bullets zur Technik',
                'Projektzeitraum',
            ]
        },
        {
            title: 'Volksbank Köln/Bonn',
            image: '/images/volskbank.png',
            details: [
                'WiFi für 30 Standorte',
                '150 WLAN Router',
                '700 Mitarbeiter',
                'Kunden-WLAN',
                'Managed Service'
            ]
        },
        {
            title: 'Kreissparkasse Tuttlingen',
            image: '/images/districtbank.png',
            details: [
                'WiFi für 30 Standorte',
                '150 WLAN Router',
                '700 Mitarbeiter',
                'Kunden-WLAN',
                'Managed Service'
            ]
        },
        {
            title: 'IHK Schwarzwald- Baar-Heuberg',
            image: '/images/districtbank.png',
            details: [
                'WiFi für 30 Standorte',
                '150 WLAN Router',
                '700 Mitarbeiter',
                'Kunden-WLAN',
                'Managed Service'
            ]
        },
    ]

    let flkty: any = undefined;

    useEffect(() => {
        if (flkty)
            flkty.on('settle', () => {
                console.log(flkty.selectedIndex, '99999999')
            })
    })

    const flickity = (c: Flickity) => {
        flkty = c
    }

    const flickityProps = {
        className: "credential-carousel ml-[30px] md:ml-auto relative z-50",
        options: {
            asNavFor: ".carousel-main",
            pageDots: false
        },
        flickityRef: flickity
    }


    const clickCell = (index: number) => {
        // selectCarouselInd(index + 1)    
        flkty.select(index)

    }

    return (
        <section id='reference' className='flex items-center overflow-x-hidden'>
            <div className='w-full'>
                <div className=' py-10 flex justify-center'>
                    <h1 className="text-title-sm">{t('industrial.referenceproject.title')}</h1>
                </div>

                <Flickity
                    {...flickityProps}

                >
                    {/* <div className='hidden md:block w-[200px]'></div> */}
                    {
                        carouselList.map((item, index) => (

                            <div className={`mr-10 w-[60%] md:w-[35%] credential-detail`} onClick={() => clickCell(index)} key={index}>
                                <picture>
                                    <source srcSet={item.image} type="image/webp" />
                                    <img src={item.image} alt="" />
                                </picture>
                                <div className='md:flex md:p-7'>
                                    <div className='w-full md:w-1/2 px-2'>
                                        <p className='font-lato text-[22px] text-white'>{item.title}</p>
                                    </div>
                                    <ul className='w-full   md:w-1/2 pl-2 px-2 text-white list-disc hidden'>
                                        {
                                            item.details.map((detail, ind) => (
                                                <li className='font-lato text-base font-light' key={ind}>{detail}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        ))
                    }
                    <svg className='absolute w-[120%] md:w-[45%] top-0 top-[-40%] md:top-[-39%] right-[27%] md:right-[27.5%]' viewBox="0 0 736 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle opacity="0.3" cx="368.2" cy="368.2" r="338.706" transform="rotate(-120 368.2 368.2)" fill="url(#paint0_radial_0_1)" />
                        <circle opacity="0.8" cx="368.199" cy="368.2" r="367.206" transform="rotate(-120 368.199 368.2)" stroke="url(#paint1_linear_0_1)" />
                        <circle opacity="0.4" cx="368.204" cy="367.623" r="311.914" transform="rotate(-120 368.204 367.623)" fill="url(#paint2_radial_0_1)" />
                        <defs>
                            <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320.569 188.262) rotate(68.4205) scale(697.882)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <linearGradient id="paint1_linear_0_1" x1="368.199" y1="0.493683" x2="368.199" y2="735.905" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7BB790" />
                                <stop offset="1" stopColor="#7BB790" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint2_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(341.918 353.047) rotate(82.9191) scale(427.785)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </Flickity>
            </div>
        </section>
    )
}

export default ReferenceProjects