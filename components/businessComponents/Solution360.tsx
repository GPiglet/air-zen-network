import React, { FC, useEffect } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';
import AZCarousel from '../common/carousel';




const Solution360: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    //translate
    const { t } = useTranslation()

    const [flkty, setFlkty] = React.useState<any>(undefined);
    const [selected, setSelected] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    useEffect(() => {
        if (window.innerWidth < 920) setIsMobile(true)
    }, [])

    useEffect(() => {
        if (flkty) {
            flkty.on('settle', () => {
                setSelected(flkty.selectedIndex)
            })

            flkty.on('change', () => {
                gsap.to(".carousel-images", {
                    opacity: 0, onComplete: () => {
                        gsap.to(document.getElementsByClassName('carousel-images')[flkty.selectedIndex], { opacity: 1 });
                    }
                });
            })
        }
            
    })

    const flickity = (c: Flickity) => {
        setFlkty(c)
    }

    const flickityProps = {
        className: "carousel-nav px-[30px] md:hidden",
        options: {
            asNavFor: ".carousel-main",
            contain: true,
            draggable: false,
            pageDots: false
        },
        flickityRef: flickity
    }

    const sliderList = t('business.solution.swiper', { returnObjects: true })

    /* az carousel*/
    const [carousel, setCarousel] = React.useState<any>(null);

    const onInitCarousel = (carousel: any) => {
        setCarousel(carousel);
    }

    const onSelectCarousel = (carousel: any, slide: any, selectedIndex: number, position: number) => {
        setSelected(selectedIndex);
    }

    const onShowCarousel = (carousel: any, slide: any, shownIndex: number, position: number, onComplete: Function) => {
        const leftFromTo = (position - carousel.getPosition() > 0) ? ['20%', '0'] : ['-10%', '0'];       // next : prev
        gsap.fromTo(slide, { opacity: 0, left: leftFromTo[0] }, {
            opacity: 1, left: leftFromTo[1], duration: 1.5, onComplete: () => {
                if (onComplete) onComplete();
            }
        });
    }

    const onHideCarousel = (carousel: any, slide: any, hiddenIndex: number, position: number, onComplete: Function) => {
        const leftFromTo = (position - carousel.getPosition() > 0) ? ['0', '-10%'] : ['0', '20%'];       // next : prev
        gsap.fromTo(slide, { opacity: 1, left: leftFromTo[0] }, {
            opacity: 0, left: leftFromTo[1], duration: 1, onComplete: () => {
                if (onComplete) onComplete();
            }
        });
    }

    const onCalcHeight = (carousel: any) => {
        return 310;//carousel.slides[carousel.getSelectedIndex()].getBoundingClientRect().height;
    }

    const onClickNext = () => {
        if (flkty) flkty.next();
        carousel.next();
    }

    const onClickPrev = () => {
        if (flkty) flkty.previous();
        carousel.prev();
    }

    // animation
    const getShowTimeline = (duration: number = 1) => {
        return gsap.timeline({ onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                1
            )
    }

    const getHideTimeline = (duration: number = 1) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                containerRef.current,
                { y: 0, opacity: 1 },
                { y: -100, opacity: 0, duration },
                0
            )
    }

    const containerRef = React.useRef<any>();
    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean, index: number) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'flex' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0).delay(1);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <section id='solution' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className='container m-auto relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]'>
            <div className='z-10 relative md:absolute md:top-1/2 md:translate-y-[-50%] w-full'>
                <div className='relative flex'>
                    <picture className={`${selected + 1 === sliderList.length ? 'hidden' : ''} `}>
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => onClickNext()} className="top-[90%] w-[47px] h-[93px] cursor-pointer absolute right-[20px] md:right-[230px] md:bottom-auto md:top-1/2 center-y-transform z-50" />
                    </picture>
                    <picture className={`${selected === 0 ? 'hidden' : ''}`}>
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => onClickPrev()} className={`top-[90%] z-50 w-[47px] h-[93px] sparkle-arrow-reverse cursor-pointer absolute left-[20px] md:left-[-70px] md:bottom-auto md:top-1/2 4xl:left-[130px]`} />
                    </picture>
                    <div className='md:w-1/2'></div>
                    <div className='w-full md:w-1/2'>
                        <Flickity
                            {...flickityProps}
                        >
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div className="relative w-full mr-4 opacity-50" key={ind}>
                                        <h1 className="text-title-sm-white text-center text-[22px] translate-x-[-20px]">{item.title}</h1>                                        
                                        <div className="relative grid w-full md:grid-cols-2 mt-8 md:left-[-60%] md:w-[65%]">
                                            {
                                                (item.list as unknown as any[]).map((list, index) =>
                                                    <div className="flex mb-12 w-[90%] md:w-full" key={index}>
                                                        <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[15px]" alt="" />
                                                        <div className="text-white tracking-[0.08em]">
                                                            <p className="font-lato text-lg font-medium">{list.split('\n')[0]} </p>
                                                            <p className="font-lato-light text-lg font-light">{list.split('\n')[1]}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        </div>                                        
                                    </div>
                                ))
                            }

                        </Flickity>
                        <AZCarousel className="hidden md:block carousel-nav md:h-[70%] mt-[120px]" onInit={onInitCarousel} onSelect={onSelectCarousel} onShow={onShowCarousel} onHide={onHideCarousel} onCalcHeight={onCalcHeight}>
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div className="md:w-full" key={ind}>
                                        <h1 className="relative text-title-sm-white w-[84%] 4xl:top-[-160px] 4xl:left-[-50%] 4xl:w-full 4xl:text-center">{item.title}</h1>
                                        <div className="relative grid grid-cols-1 left-[-60px] w-[65%] mt-8">
                                            {
                                                (item.list as unknown as any[]).map((list, index) =>
                                                    <div className="flex mb-12 w-[90%] md:w-full" key={index}>
                                                        <img src="/images/check-icon.svg" className="w-[28px] h-[22px] mr-[15px]" alt="" />
                                                        <div className="text-white tracking-[0.08em]">
                                                            <p className="font-lato text-lg font-medium">{list.split('\n')[0]} </p>
                                                            <p className="font-lato-light text-lg font-light">{list.split('\n')[1]}</p>
                                                        </div>
                                                    </div>
                                                )
                                            }

                                        </div>
                                    </div>
                                ))
                            }
                        </AZCarousel>
                    </div>

                </div>
            </div>
            {/*left animation for carousal*/}
            <div className="relative z-0 h-[44rem] sm:h-[50rem] md:static md:h-auto">
                <svg className='absolute z-0 top-[-40%] left-1/2 translate-x-[-50%] w-[230%] sm:top-[-25%] sm:w-[140%] md:translate-x-0 md:top-[50%] md:translate-y-[-50%] md:w-[115%] md:left-[-27%] md:w-[100%] 4xl:w-[110%] 4xl:left-[-25%] 4xl:top-[50%]' viewBox={`0 100 763 ${isMobile ? '690' : '590'}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                        <ellipse opacity="0.7" cx="381.16" cy="381.842" rx="179.165" ry="179.4" transform="rotate(-180 381.16 381.842)" fill="url(#paint0_radial_1376_6235)" />
                        <circle opacity="0.3" r="220" transform="matrix(-0.706643 0.70757 -0.706643 -0.70757 381.25 381.749)" stroke="url(#paint1_linear_1376_6235)" />
                        <path opacity="0.3" d="M237.045 381.752C237.045 302.001 301.611 237.352 381.255 237.352C460.899 237.352 525.465 302.001 525.465 381.752C525.465 461.502 460.899 526.151 381.255 526.151C301.611 526.151 237.045 461.502 237.045 381.752Z" stroke="#7BB690" />
                        <path opacity="0.6" d="M116.86 381.896C116.86 235.916 235.246 117.575 381.282 117.575C527.318 117.575 645.703 235.916 645.703 381.896C645.703 527.876 527.318 646.217 381.282 646.217C235.246 646.217 116.86 527.876 116.86 381.896Z" stroke="url(#paint2_radial_1376_6235)" />
                        <ellipse opacity="0.7" rx="134.269" ry="134.181" transform="matrix(0.499509 0.866309 -0.865741 0.500492 381.156 381.838)" fill="url(#paint3_radial_1376_6235)" />
                    </g>
                    {
                        ['Business4.png', 'Business5.png', 'Business6.png', 'Business7.png', 'Business8.png', 'Business9.png', 'Business10.png', 'Business11.png'].map((item, ind) =>
                            <image key={ind} href={"/images/" + item} x="32.5%" y="20%" fillOpacity='0.5' className={`${ind == 0 ? '' : 'opacity-0'} carousel-images w-[34%] translate-x-0 translate-y-[23%] sm:translate-y-0 sm:translate-x-[16px] sm:w-[30%] 4xl:w-[22%] 4xl:translate-y-[195px] 4xl:translate-x-[47px]`} />   
                    )}
                    <image href="/images/app-download.svg" className='hidden md:block w-[20%]' x="49%" y="93%" cx="511.828" cy="696.377" transform="translate(0,0)" />
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
            </div>
        </section>
    )
})
Solution360.displayName = 'Solution360';
export default Solution360