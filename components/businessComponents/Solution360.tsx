import React, { FC, useEffect } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import { useTranslation } from 'next-i18next'
import gsap from 'gsap';
import AZCarousel from '../common/carousel';




const Solution360: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
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
        className: "carousel-nav pl-[55px] mt-[120px] xl:mt-[150px] md:hidden",
        options: {
            asNavFor: ".carousel-main",
            contain: true,
            pageDots: false
        },
        flickityRef: flickity
    }

    const sliderList = t('business.solution.swiper', { returnObjects: true })


    /* az carousel*/
    const [carousel, setCarousel] = React.useState<any>(null);
    const [selected, setSelected] = React.useState(0)

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
        return 310;//carousel.slides[carousel.getSelectedIndex()].getBoundingClientRect().height;
    }

    const onClickNext = () => {
        if ( flkty ) flkty.next();
        carousel.next();
    }

    const onClickPrev = () => {
        if ( flkty ) flkty.previous();
        carousel.prev();
    }

    // animation
    const getShowTimeline = (duration: number=1.5) => {
        return gsap.timeline({onReverseComplete: ()=>{if (containerRef.current)gsap.set([containerRef.current], {display: 'none'});}})
            .fromTo(
                containerRef.current,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration },
                0
            )
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ onComplete: () => { if (containerRef.current)gsap.set([containerRef.current], { display: 'none' }); } })
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
        if ( prevAnimation.current ) prevAnimation.current.kill();
        gsap.set([containerRef.current], {display: 'flex'});
        if ( direction == 'DOWN' && shown ) prevAnimation.current = getShowTimeline().play(0);
        else if ( direction == 'DOWN' && !shown ) prevAnimation.current = getHideTimeline().play(0);
        else if ( direction == 'UP' && shown ) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown ) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <section id='solution' ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className='container m-auto relative mt-[300px]  md:mt-[0] md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]'>
            <svg className='hidden md:block absolute z-30 left-1/2 translate-x-[-50%] md:translate-x-0  top-[40%] md:top-[50%] md:translate-y-[-50%]  md:w-[115%] sm:top-[10%] sm:w-[140%] w-[150%] md:left-[-27%] xl:left-[-33%] md:w-[100%] xl:w-[130%] ' viewBox="0 0 763 764" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.8">
                    <ellipse opacity="0.7" cx="381.16" cy="381.842" rx="179.165" ry="179.4" transform="rotate(-180 381.16 381.842)" fill="url(#paint0_radial_1376_6235)" />
                    <circle opacity="0.3" r="220" transform="matrix(-0.706643 0.70757 -0.706643 -0.70757 381.25 381.749)" stroke="url(#paint1_linear_1376_6235)" />
                    <path opacity="0.3" d="M237.045 381.752C237.045 302.001 301.611 237.352 381.255 237.352C460.899 237.352 525.465 302.001 525.465 381.752C525.465 461.502 460.899 526.151 381.255 526.151C301.611 526.151 237.045 461.502 237.045 381.752Z" stroke="#7BB690" />
                    <path opacity="0.6" d="M116.86 381.896C116.86 235.916 235.246 117.575 381.282 117.575C527.318 117.575 645.703 235.916 645.703 381.896C645.703 527.876 527.318 646.217 381.282 646.217C235.246 646.217 116.86 527.876 116.86 381.896Z" stroke="url(#paint2_radial_1376_6235)" />
                    <ellipse opacity="0.7" rx="134.269" ry="134.181" transform="matrix(0.499509 0.866309 -0.865741 0.500492 381.156 381.838)" fill="url(#paint3_radial_1376_6235)" />
                </g>
                <image href="/images/phone-home1.png" className='w-[20%]' x="40.5%" y="40%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                <image href="/images/app-download.svg" className='w-[20%]' x="49%" y="66%" cx="511.828" cy="696.377" transform="translate(0,0)" />
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
            <div className=' z-50 absolute top-1/2 translate-y-[-50%] w-full'>

                <div className="text-center pt-[100px] md:pt-0">
                    <h1 className="text-title-sm">{t('business.solution.title')} </h1>
                </div>
                <div className='relative flex'>
                    <picture>
                        <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => onClickNext()} className="w-[47px] h-[93px] hidden md:block cursor-pointer absolute right-[50px] top-[40%] center-y-transform" />
                    </picture>
                    <picture>
                        <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                        <img src="/images/sparkle-arrow.svg" alt='' onClick={() => onClickPrev()} className={`w-[47px] h-[93px] hidden md:block  cursor-pointer absolute left-[50px] sparkle-arrow-reverse  top-[40%] center-y-transform`} />
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
                                                <p className="font-lato-light text-lg font-light">{hint.split('\n')[0]} </p>
                                            </div>
                                        ))}
                                    </div>

                                ))
                            }

                        </Flickity>
                        <AZCarousel className="hidden md:block carousel-nav pl-[55px] md:h-[70%] mt-[120px]" onInit={onInitCarousel} onSelect={onSelectCarousel} onShow={onShowCarousel} onHide={onHideCarousel} onCalcHeight={onCalcHeight}>
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div key={ind} className='mr-10 w-[80%] md:w-full'>
                                        {item.map((hint: string, index: number) => (
                                            <div className="text-white tracking-[0.08em] mb-12" key={index}>
                                                <p className="font-lato text-lg font-medium">{hint.split('\n')[0]} </p>
                                                <p className="font-lato-light text-lg font-light">{hint.split('\n')[0]} </p>
                                            </div>
                                        ))}
                                    </div>

                                ))
                            }
                        </AZCarousel>
                    </div>

                </div>
            </div>
        </section>
    )
})
Solution360.displayName = 'Solution360';
export default Solution360