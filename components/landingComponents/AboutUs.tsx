import React, { FC, Suspense, useEffect, useState, useContext } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import gsap from "gsap";
import { useTranslation } from "next-i18next";


const AboutUs: FC = () => {

    //translate
    const { t } = useTranslation()

    // Animate Refs
    const aboutCircleRef1 = React.useRef<any>();
    const aboutCircleRef2 = React.useRef<any>();
    const aboutCircleRef3 = React.useRef<any>();
    const aboutCircleRef4 = React.useRef<any>();
    const aboutCircleRef5 = React.useRef<any>();
    const aboutCircleRef6 = React.useRef<any>();

    //Flickity
    const [flkty, setFlkty] = useState<any>(undefined)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        if (flkty)
            flkty.on('settle', () => {
                setSelected(flkty.selectedIndex)
            })
    })

    const flickity = (c: Flickity) => {
        setFlkty(c)
    }

    const flickityProps = {
        className: "carousel-nav pl-[55px] md:h-[70%] mt-[120px] xl:mt-[200px]",
        options: {
            asNavFor: ".carousel-main",
            contain: true,
            pageDots: false,
            selectedAttraction: 0.01,
            friction: 0.17,
            fade: true
        },
        flickityRef: flickity
    }


    const sliderList = t('landing.section3.swiper', { returnObjects: true })

    const svgGroupAnimation = (state: string) => {
        if (state === 'next') {
            flkty.next()
            gsap.to([aboutCircleRef2.current, aboutCircleRef3.current,], { duration: 0.8, scale: (1 + (flkty.selectedIndex + 1) * 0.03), transformOrigin: "50% 50%", })
            gsap.to(aboutCircleRef4.current, { duration: 0.8, scale: (1 + (flkty.selectedIndex + 1) * 0.05), transformOrigin: "50% 50%", })
        } else {
            flkty.previous()
            gsap.to([aboutCircleRef2.current, aboutCircleRef3.current,], { duration: 0.8, scale: (1 - (flkty.selectedIndex + 1) * 0.03), transformOrigin: "50% 50%", })
            gsap.to(aboutCircleRef4.current, { duration: 0.8, scale: (1 - (flkty.selectedIndex + 1) * 0.05), transformOrigin: "50% 50%", })

        }
    }


    return (
        <section id='aboutus' className='container m-auto relative md:fixed md:hidden md:flex items-center md:py-20'>
            <svg ref={aboutCircleRef1} className='hidden md:block absolute top-[35%] left-1/2 center-transform w-[150%]' viewBox="-200 -200 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                <defs>
                    <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            <div className=' z-50 w-full '>

                <div>
                    <div className="text-center">
                        <h1 className="text-title-sm mt-20">{t('landing.section3.title')} </h1>
                    </div>
                    <div className=' md:flex'>
                        <picture className={`${selected + 1 === sliderList.length ? 'hidden' : ''} `}>
                            <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                            <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('next')} className='w-[47px] h-[93px] hidden md:block cursor-pointer absolute right-[47px]  top-1/2 center-y-transform z-50 about-fade-in ' />
                        </picture>
                        <picture className={`${selected === 0 ? 'hidden' : ''}`}>
                            <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                            <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('prev')} className={`w-[47px] h-[93px] hidden md:block  cursor-pointer absolute left-[47px] sparkle-arrow-reverse transform-none top-1/2 center-y-transform z-50 about-fade-in`} />
                        </picture>
                        <div className='md:w-[10%]'></div>
                        <div className='w-full md:w-2/5 z-40 relative about-fade-in'>
                            <Flickity
                                {...flickityProps}
                            >
                                {
                                    (sliderList as unknown as any[]).map((item, ind) => (
                                        <div className='w-[80%] md:w-full mr-12' key={ind}>
                                            <p className="font-lato uppercase font-black text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white tracking-widest">{item.title}</p>
                                            <p className="font-lato font-light tracking-widest text-white text-lg mt-3">{item.content}</p>
                                        </div>

                                    ))
                                }

                            </Flickity>
                        </div>
                        <div className='relative w-full md:w-2/5 h-[300px] w:h-auto'>

                            <svg className='absolute z-30 top-[-54%] left-[-50%] md:top-[-75%] xl:top-[-100%]  md:w-[300%] sm:top-[-70%] sm:w-[100%] sm:left-[-2%] w-[200%] xl:left-[-63%] md:left-[-100%] md:w-[100%] xl:w-[249%] ' viewBox="0 0 1295 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path ref={aboutCircleRef2} className='about-us-animate' opacity="0.5" d="M666.531 1047.33C887.445 1047.33 1066.53 868.239 1066.53 647.325C1066.53 426.411 887.445 247.325 666.531 247.325C445.617 247.325 266.531 426.411 266.531 647.325C266.531 868.239 445.617 1047.33 666.531 1047.33Z" fill="url(#paint0_radial_0_1)" />
                                <path ref={aboutCircleRef3} className='about-us-animate' opacity="0.5" d="M741.941 880.701C873.371 838.685 946.464 699.983 905.199 570.899C863.934 441.816 723.937 371.234 592.506 413.25C461.076 455.265 387.983 593.968 429.249 723.051C470.514 852.134 610.511 922.716 741.941 880.701Z" fill="url(#paint1_radial_0_1)" />
                                <path ref={aboutCircleRef4} className='about-us-animate' d="M951.031 647.325C951.031 804.45 823.656 931.825 666.531 931.825C509.406 931.825 382.031 804.45 382.031 647.325C382.031 490.2 509.406 362.825 666.531 362.825C823.656 362.825 951.031 490.2 951.031 647.325Z" stroke="url(#paint2_linear_0_1)" />
                                <path ref={aboutCircleRef5} className='about-us-animate' opacity="0.3" d="M1166.5 647C1166.5 922.866 942.862 1146.5 666.996 1146.5C391.13 1146.5 167.496 922.866 167.496 647C167.496 371.134 391.13 147.5 666.996 147.5C942.862 147.5 1166.5 371.134 1166.5 647Z" stroke="url(#paint3_linear_0_1)" />
                                <path ref={aboutCircleRef6} className='about-us-animate' opacity="0.5" d="M1.49603 647C1.49606 289.948 290.944 0.500034 647.996 0.500066C1005.05 0.500097 1294.5 289.948 1294.5 647C1294.5 1004.05 1005.05 1293.5 647.996 1293.5C290.944 1293.5 1.496 1004.05 1.49603 647Z" stroke="url(#paint4_linear_0_1)" />
                                <image className='about-us-phone about-fade-in' href="/images/phone-home.png" x="40.5%" y="33%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                                <foreignObject className="font-lato-light about-us-animate italic w-[260px] text-lg text-white hidden md:block" x="67.5%" y="61.5%" width="260px" height="100px">
                                    <p
                                    >{t('landing.section3.sparkle1')}</p>
                                </foreignObject>
                                <foreignObject className="font-lato-light about-us-animate italic w-[260px] text-lg text-white hidden md:block" x="9%" y="74.5%" width="260px" height="100px">
                                    <p
                                    >{t('landing.section3.sparkle2')}</p>
                                </foreignObject>
                                <image href="/images/sparkle.svg" className="about-us-animate w-[49px] h-[47px] hidden md:block about-fade-in" x="5%" y="74%" cx="511.828" cy="696.377" />
                                <image href="/images/sparkle.svg" className="about-us-animate w-[49px] h-[47px] hidden md:block about-fade-in" x="64%" y="61%" cx="511.828" cy="696.377" />
                                <defs>
                                    <radialGradient id="paint0_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(689.034 286.09) rotate(90.385) scale(806.303 806.304)">
                                        <stop stopColor="#2294C3" />
                                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                                    </radialGradient>
                                    <radialGradient id="paint1_radial_0_1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(613.135 431.62) rotate(72.664) scale(494.623 503.616)">
                                        <stop stopColor="#2294C3" />
                                        <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                                    </radialGradient>
                                    <linearGradient id="paint2_linear_0_1" x1="666.531" y1="362.325" x2="666.531" y2="932.325" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#159BDE" />
                                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint3_linear_0_1" x1="666.996" y1="147" x2="666.996" y2="1147" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#159BDE" />
                                        <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="paint4_linear_0_1" x1="647.996" y1="1294" x2="647.996" y2="6.55078e-05" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset="1" stopColor="white" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs