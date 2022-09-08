import React, { FC, Suspense, useEffect, useState, useContext, useRef } from 'react'
import Flickity from "react-flickity-component"
import AZCarousel from '../common/carousel';
import "flickity/dist/flickity.css"
import gsap from "gsap";
import { useTranslation } from "next-i18next";
import { useRouter } from 'next/router';
import FadeIn from 'react-fade-in/lib/FadeIn'



const AboutUs = React.forwardRef((props: any, ref: any) => {


    //translate
    const { t } = useTranslation()
    const router = useRouter()

    const containerRef = useRef<any>();

    // Animate Refs
    const animCrouselScaleLg = React.useRef<any>([]);
    const animCrouselScaleSm = React.useRef<any>([]);
    const animSideUp = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const animGradient = React.useRef<any>([]);
    const animCircle = React.useRef<any>([]);


    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
    useEffect(() => {
        if (router.query.section === 'aboutus')
            scrollToRef(containerRef)
    }, [])


    const imageList = [
        '/images/phone-home1.png',
        '/images/phone-home2.png',
        '/images/phone-home3.png',
        '/images/phone-home2.png',
    ]

    //Flickity
    const [carousel, setCarousel] = React.useState<any>(null);
    const [flkty, setFlkty] = useState<any>(undefined)
    const [selected, setSelected] = useState(0)
    const [carouselImg, setCarouselImg] = useState(imageList[0])

    useEffect(() => {
        if (flkty)
            flkty.on('settle', () => {
                setSelected(flkty.selectedIndex)

            })
    }, [flkty])

    const flickity = (c: Flickity) => {
        setFlkty(c)
    }

    const flickityProps = {
        className: "carousel-nav pl-[55px] md:h-[70%] mt-[120px] md:hidden",
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


    const sliderList = t('landing.aboutus.swiper', { returnObjects: true })

    const svgGroupAnimation = (state: string) => {

        if (state === 'next') {
        setCarouselImg(imageList[flkty.selectedIndex +1])

            flkty.next()
            carousel.next()
            gsap.to(animCrouselScaleLg.current, { duration: 0.8, scale: (1 + (flkty.selectedIndex + 1) * 0.03), transformOrigin: "50% 50%", })
            gsap.to(animCrouselScaleSm.current, { duration: 0.8, scale: (1 + (flkty.selectedIndex + 1) * 0.05), transformOrigin: "50% 50%", })
        } else {
        setCarouselImg(imageList[flkty.selectedIndex -1])

            flkty.previous()
            carousel.prev()
            gsap.to(animCrouselScaleLg.current, { duration: 0.8, scale: (1 - (flkty.selectedIndex + 1) * 0.03), transformOrigin: "50% 50%", })
            gsap.to(animCrouselScaleSm.current, { duration: 0.8, scale: (1 - (flkty.selectedIndex + 1) * 0.05), transformOrigin: "50% 50%", })

        }
    }


    /* az carousel*/
    const onInitCarousel = (carousel: any) => {
        setCarousel(carousel);
    }

    const onSelectCarousel = (carousel: any, slide: any, selectedIndex: number, position: number) => {
        setSelected(selectedIndex);
    }

    const onShowCarousel = (carousel: any, slide: any, shownIndex: number, position: number, onComplete: Function) => {
        const leftFromTo = (position - carousel.getPosition() > 0) ? ['50%', '20%'] : ['0', '20%'];       // next : prev
        gsap.fromTo(slide, { opacity: 0, left: leftFromTo[0] }, {
            opacity: 1, left: leftFromTo[1], duration: 1.5, onComplete: () => {
                if (onComplete) onComplete();
            }
        });
    }

    const onHideCarousel = (carousel: any, slide: any, hiddenIndex: number, position: number, onComplete: Function) => {
        const leftFromTo = (position - carousel.getPosition() > 0) ? ['20%', '0'] : ['20%', '50%'];       // next : prev
        gsap.fromTo(slide, { opacity: 1, left: leftFromTo[0] }, {
            opacity: 0, left: leftFromTo[1], duration: 1, onComplete: () => {
                if (onComplete) onComplete();
            }
        });
    }

    const onCalcHeight = (carousel: any) => {
        return carousel.slides[carousel.getSelectedIndex()].getBoundingClientRect().height;
    }

    /* animation */
    const getShowTimeline = (duration: number = 3) => {
        return gsap.timeline({ paused: true, onReverseComplete: () => { if ( containerRef.current ) gsap.set([containerRef.current, animCircle.current], { display: 'none' }); } })
            .fromTo(
                animSideUp.current[0],
                { opacity: 0 },
                { opacity: 1, duration },
                0
            )
            .fromTo(
                animSideUp.current,
                { y: 600 },
                { y: 200, duration: duration / 2 },
                0
            )
            .fromTo(
                [animSideUp.current, animFadeIn.current],
                { y: 200 },
                { y: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animFadeIn.current,
                { opacity: 0 },
                { opacity: 1, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animGradient.current,
                { opacity: 0, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)' },
                { opacity: 1, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 60%)', duration: duration / 2 },
                0
            )
            .fromTo(
                animCircle.current,
                { scale: 1.2, opacity: 0 },
                { scale: .8, opacity: 1, duration: duration / 2 },
                0
            );
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ paused: true, onComplete: () => { if ( containerRef.current ) gsap.set([containerRef.current, animCircle.current], { display: 'none' }); } })
            .fromTo(
                animSideUp.current[0],
                { opacity: 1 },
                { opacity: 0, duration },
                0
            )
            .fromTo(
                [animSideUp.current, animFadeIn.current],
                { y: 0 },
                { y: -100, duration },
                0
            )
            .fromTo(
                animFadeIn.current,
                { opacity: 1 },
                { opacity: 0, duration },
                0
            )
            .fromTo(
                animGradient.current,
                { opacity: 1, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 60%)' },
                { opacity: 0, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)', duration },
                0
            )
            .fromTo(
                animCircle.current,
                { scale: .8 },
                { scale: 1.2, duration },
                0
            );
    }

    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean) => {
        if ( prevAnimation.current ) prevAnimation.current.kill();
        gsap.set([containerRef.current, animCircle.current], { display: 'block' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }


    return (
        <>
            <section id='aboutus' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className='z-10 container m-auto relative items-center md:py-20 md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]'>
                <div className=' z-50 w-full md:absolute md:top-1/2 md:translate-y-[-50%]'>
                    <div>
                        <div className="text-center">
                            <h1 ref={el => animSideUp.current.push(el)} className="relative z-40 text-title-sm mt-20 md:mt-0">{t('landing.aboutus.title')} </h1>
                        </div>
                        <div ref={el => animFadeIn.current.push(el)} className=' md:flex relative'>
                            <picture className={`${selected + 1 === sliderList.length ? 'hidden' : ''} `}>
                                <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                                <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('next')} className='w-[47px] h-[93px] hidden md:block cursor-pointer absolute right-[47px]  top-1/2 center-y-transform z-50  ' />
                            </picture>
                            <picture className={`${selected === 0 ? 'hidden' : ''}`}>
                                <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                                <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('prev')} className={`w-[47px] h-[93px] hidden md:block  cursor-pointer absolute left-[47px] sparkle-arrow-reverse transform-none top-1/2 center-y-transform z-50 `} />
                            </picture>
                            <div className='md:w-[10%]'></div>
                            <div className='w-full md:w-2/5 z-40 relative '>
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
                                <AZCarousel className="hidden md:block carousel-nav pl-[55px] md:h-[70%] mt-[120px]" onInit={onInitCarousel} onSelect={onSelectCarousel} onShow={onShowCarousel} onHide={onHideCarousel} onCalcHeight={onCalcHeight}>
                                    {
                                        (sliderList as unknown as any[]).map((item, ind) => (
                                            <div className='w-[80%] md:w-full mr-12' key={ind}>
                                                <p className="font-lato uppercase font-black text-[22px] text-transparent bg-clip-text bg-gradient-to-r from-gray-400 via-gray-200 to-white tracking-widest">{item.title}</p>
                                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3">{item.content}</p>
                                            </div>
                                        ))
                                    }
                                </AZCarousel>
                            </div>
                            <div className='relative w-full md:w-2/5 h-[300px] w:h-auto'>

                                <svg className='absolute z-30 top-[-85%] left-[-50%] md:top-[85%] md:translate-y-[-50%]  md:w-[300%] sm:top-[-70%] sm:w-[100%] sm:left-[-2%] w-[200%] xl:left-[-63%] md:left-[-100%] md:w-[100%] xl:w-[249%] ' viewBox="0 0 1295 1294" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path ref={el => animCrouselScaleLg.current.push(el)} opacity="0.5" d="M666.531 1047.33C887.445 1047.33 1066.53 868.239 1066.53 647.325C1066.53 426.411 887.445 247.325 666.531 247.325C445.617 247.325 266.531 426.411 266.531 647.325C266.531 868.239 445.617 1047.33 666.531 1047.33Z" fill="url(#paint0_radial_0_1)" />
                                    <path ref={el => animCrouselScaleLg.current.push(el)} opacity="0.5" d="M741.941 880.701C873.371 838.685 946.464 699.983 905.199 570.899C863.934 441.816 723.937 371.234 592.506 413.25C461.076 455.265 387.983 593.968 429.249 723.051C470.514 852.134 610.511 922.716 741.941 880.701Z" fill="url(#paint1_radial_0_1)" />
                                    <path ref={el => animCrouselScaleSm.current.push(el)} d="M951.031 647.325C951.031 804.45 823.656 931.825 666.531 931.825C509.406 931.825 382.031 804.45 382.031 647.325C382.031 490.2 509.406 362.825 666.531 362.825C823.656 362.825 951.031 490.2 951.031 647.325Z" stroke="url(#paint2_linear_0_1)" />
                                    <path opacity="0.3" d="M1166.5 647C1166.5 922.866 942.862 1146.5 666.996 1146.5C391.13 1146.5 167.496 922.866 167.496 647C167.496 371.134 391.13 147.5 666.996 147.5C942.862 147.5 1166.5 371.134 1166.5 647Z" stroke="url(#paint3_linear_0_1)" />
                                    <path opacity="0.5" d="M1.49603 647C1.49606 289.948 290.944 0.500034 647.996 0.500066C1005.05 0.500097 1294.5 289.948 1294.5 647C1294.5 1004.05 1005.05 1293.5 647.996 1293.5C290.944 1293.5 1.496 1004.05 1.49603 647Z" stroke="url(#paint4_linear_0_1)" />
                                    <image className='about-us-phone ' href={carouselImg} x="40.5%" y="33%" width='293' cx="511.828" cy="696.377" transform="translate(0,0)" />
                                    <foreignObject className="font-lato-light  w-[260px] text-lg text-white hidden md:block" x="67.5%" y="61.5%" width="260px" height="100px">
                                        <p
                                        >{t('landing.aboutus.sparkle1')}</p>
                                    </foreignObject>
                                    <foreignObject className="font-lato-light  w-[260px] text-lg text-white hidden md:block" x="9%" y="74.5%" width="260px" height="100px">
                                        <p
                                        >{t('landing.aboutus.sparkle2')}</p>
                                    </foreignObject>
                                    <image href="/images/sparkle.svg" className=" w-[49px] h-[47px] hidden md:block " x="5%" y="74%" cx="511.828" cy="696.377" />
                                    <image href="/images/sparkle.svg" className=" w-[49px] h-[47px] hidden md:block " x="64%" y="61%" cx="511.828" cy="696.377" />
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
            <div ref={el => animGradient.current.push(el)} className='z-0 md:container hidden md:block fixed top-0 md:top-[50%] md:translate-y-[-50%] left-1/2 translate-x-[-50%] w-full h-full max-h-[1080px]'></div>
            <div ref={el => animCircle.current = el} className='z-0 md:container hidden fixed top-1/2 left-1/2 center-transform w-full' >
                {/* <svg viewBox="-200 -200 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                <defs>
                    <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg> */}
            </div>
        </>
    )
})
AboutUs.displayName = 'AboutUs';
export default AboutUs