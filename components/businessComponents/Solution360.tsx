import React, { FC, useEffect } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import { useTranslation } from 'next-i18next'




const Solution360: FC = () => {
    //translate
    const { t } = useTranslation()

    let flkty: any = undefined

    useEffect(() => {
        if (flkty)
            flkty.on('settle', () => {
                console.log(flkty.selectedIndex)
            })
    })

    const flickity = (c: Flickity) => {
        flkty = c
    }

    const flickityProps = {
        className: "carousel-nav pl-[55px] mt-[120px] xl:mt-[150px]",
        options: {
            asNavFor: ".carousel-main",
            contain: true,
            pageDots: false
        },
        flickityRef: flickity
    }

    const sliderList = t('business.solution.swiper', { returnObjects: true })

    // const sliderList = [
    //     {
    //         hintList: [
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //         ]
    //     },
    //     {
    //         hintList: [
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //         ]
    //     },
    //     {
    //         hintList: [
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //             {
    //                 title: 'Sicheres Wlan für Kinder',
    //                 description: 'inclusive Internet-Filter und Pause Knopf'
    //             },
    //         ]
    //     },

    // ]


    return (
        <section id='aboutus' className='container m-auto relative mt-[300px] md:mt-[0]'>
            <svg className='hidden md:block absolute z-30 left-[-27%] top-[40%] md:top-[-11%] xl:top-[-20%]  md:w-[115%] sm:top-[10%] sm:w-[140%] sm:left-[-20%] w-[150%] md:left-[-27%] xl:left-[-10%] md:w-[100%] xl:w-[100%] ' viewBox="0 0 763 764" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="381.16" cy="381.842" rx="179.165" ry="179.4" transform="rotate(-180 381.16 381.842)" fill="url(#paint0_radial_1376_6235)" />
                    <circle opacity="0.8" r="269.261" transform="matrix(-0.706643 0.70757 -0.706643 -0.70757 381.25 381.749)" stroke="url(#paint1_linear_1376_6235)" />
                    <path opacity="0.3" d="M237.045 381.752C237.045 302.001 301.611 237.352 381.255 237.352C460.899 237.352 525.465 302.001 525.465 381.752C525.465 461.502 460.899 526.151 381.255 526.151C301.611 526.151 237.045 461.502 237.045 381.752Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M116.86 381.896C116.86 235.916 235.246 117.575 381.282 117.575C527.318 117.575 645.703 235.916 645.703 381.896C645.703 527.876 527.318 646.217 381.282 646.217C235.246 646.217 116.86 527.876 116.86 381.896Z" stroke="url(#paint2_radial_1376_6235)" />
                    <ellipse opacity="0.7" rx="134.269" ry="134.181" transform="matrix(0.499509 0.866309 -0.865741 0.500492 381.156 381.838)" fill="url(#paint3_radial_1376_6235)" />
                </g>
                <image href="/images/phone-home.png" className='w-[20%]' x="40.5%" y="43%" cx="511.828" cy="696.377" transform="translate(0,0)" />

                <defs>
                    <radialGradient id="paint0_radial_1376_6235" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(355.965 286.536) rotate(68.4461) scale(369.576 369.223)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="paint1_linear_1376_6235" x1="172.73" y1="99.372" x2="252.332" y2="565.796" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0.4" />
                    </linearGradient>
                    <radialGradient id="paint2_radial_1376_6235" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160.663 474.202) rotate(-36.3291) scale(524.92 526.014)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="paint3_radial_1376_6235" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(115.387 62.8973) rotate(68.4076) scale(276.496 276.628)">
                        <stop stopColor="#7BB690" />
                        <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
            <div className='relative z-50'>

                <div className="text-center pt-[100px] md:pt-[18%]">
                    <h1 className="text-title-sm">{t('business.solution.title')} </h1>
                </div>
                <div className='relative flex'>
                    <picture>
                        <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => flkty.next()} className="w-[47px] h-[93px] hidden md:block cursor-pointer absolute right-[50px] top-[40%] center-y-transform" />
                    </picture>
                    <picture>
                        <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => flkty.previous()} className={`w-[47px] h-[93px] hidden md:block  cursor-pointer absolute left-[50px] sparkle-arrow-reverse  top-[40%] center-y-transform`} />
                    </picture>
                    <div className='md:w-1/2'></div>
                    <div className='w-full md:w-1/3  '>
                        <Flickity
                            {...flickityProps}
                        >
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div key={ind} className='mr-10 w-[80%] md:w-full'>
                                        {item.map((hint: string, index: number) => (
                                            <div className="text-white tracking-[0.08em] mb-12" key={index}>
                                                <p className="font-lato text-lg font-medium">{hint.split('\n')[0]} </p>
                                                <p className="font-lato-light text-lg font-light italic">{hint.split('\n')[0]} </p>
                                            </div>
                                        ))}
                                    </div>

                                ))
                            }

                        </Flickity>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Solution360