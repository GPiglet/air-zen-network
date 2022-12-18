//modules
import React, { FC, useEffect, useState } from "react"
import { useTranslation } from "next-i18next"
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import AZCarousel from '../common/carousel';



import gsap from 'gsap'

const SafeHome: FC<{ props?: any, ref: any }> = React.forwardRef((props: any, ref: any) => {
    // spardle margin top
    const [relH1, setRelH1] = useState(0)
    const [relH2, setRelH2] = useState(0)

    useEffect(() => {
        if(window.innerWidth < 540){
            console.log(window.innerWidth)
            let width = 41 + (window.innerWidth -400) * 0.1;
            setRelH1(width)
            setRelH2(width-5)
        }
        if(window.innerWidth>540 && window.innerWidth < 920){
            let width = 32 + (window.innerWidth - 550) * 8/150;
            setRelH1(width)
            setRelH2(width)
        }

        gsap.config({force3D: true});                   // for safari shaking issue(and add will-change-transform of container div)
        return ()=>{gsap.config({force3D: 'auto'});}
    }, [])

    //translate
    const { t } = useTranslation()

    //Flickity
    const [carousel, setCarousel] = React.useState<any>(null);
    const [flkty, setFlkty] = useState<any>(undefined)
    const [selected, setSelected] = useState(0)

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
                gsap.set('.desc-divs', {display: 'none'});
                gsap.set(document.getElementsByClassName('desc-divs')[flkty.selectedIndex], {display: 'block'});
            })
        }
    }, [flkty])

    const flickity = (c: Flickity) => {
        setFlkty(c)
    }

    const sliderList = t('home.swiper', { returnObjects: true })

    const flickityProps = {
        className: "carousel-nav px-[30px] mt-[120px] md:hidden ",
        options: {
            asNavFor: ".carousel-main",
            contain: true,
            pageDots: false,
            selectedAttraction: 0.01,
            friction: 0.17,
            draggable: false,
            fade: true
        },
        flickityRef: flickity
    }

    const svgGroupAnimation = (state: string) => {

        if (state === 'next') {
            flkty.next()
            carousel.next()
        } else {
            flkty.previous()
            carousel.prev()
        }
    }

    /* az carousel*/
    const onInitCarousel = (carousel: any) => {
        setCarousel(carousel);
    }

    const onSelectCarousel = (carousel: any, slide: any, selectedIndex: number, position: number, where: string) => {
        setSelected(selectedIndex);
        if ( window.innerWidth < 920 || where != 'select' ) return;
        gsap.to(".phone-images", {
            opacity: 0, onComplete: () => {
                gsap.to(document.getElementsByClassName('phone-images')[selectedIndex + 2], { opacity: 1 });
            }
        })
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

    // animation
    const refAnimContents = React.useRef<any>([]);
    const refAnimRightImage = React.useRef<any>(null);
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
            )
    }

    const containerRef = React.useRef<any>();
    const prevAnimation = React.useRef<any>(null);
    const rightImagePos = ['0%', '-50%', '-100%'];
    const startAnim = (direction: string, shown: boolean, index: number) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) {
            if (index == 1) prevAnimation.current = getShowTimeline().play(0);
            const tl = gsap.timeline()
                .to(
                    refAnimContents.current,
                    { opacity: 0, display: 'none' }
                )
                .to(
                    refAnimContents.current[index - 1],
                    { opacity: 1, display: 'flex' }
                )
                .to(
                    refAnimRightImage.current,
                    { y: rightImagePos[index - 1], duration: 1 },
                    0
                );
            
            if ( index == 1 ) tl.play();
            else {
                tl.to(
                    '.phone-images',
                    { opacity: 0},
                    0
                )
                .to(
                    document.getElementsByClassName('phone-images')[index-1],
                    {opacity:1},
                    0.5
                )
                .play();
            }
        }
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) {
            if (index == 3) prevAnimation.current = getHideTimeline(1).reverse(0).delay(1);
            const tl = gsap.timeline()
                .to(
                    refAnimContents.current,
                    { opacity: 0, display: 'none' }
                )
                .to(
                    refAnimContents.current[index - 1],
                    { opacity: 1, display: 'flex' }
                )
                .to(
                    refAnimRightImage.current,
                    { y: rightImagePos[index - 1], duration: 1 },
                    0
                );

            if ( index == 3 ) tl.play();
            else {
                tl.to(
                    '.phone-images',
                    { opacity: 0},
                    0
                )
                .to(
                    document.getElementsByClassName('phone-images')[index-1],
                    {opacity:1},
                    0.5
                )
                .play();
            }
        }
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);
    }

    return (
        <div id="secure" ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%] will-change-transform">
            {/*left side animation*/}
            <div className="relative h-[44rem] sm:h-[52rem] md:static md:h-auto" style={{height: `${relH1}rem`}}>
                <svg className="absolute left-[50%] translate-x-[-50%] top-[-60px] w-[310%] sm:top-0 sm:w-[120%] md:left-[10%] md:top-1/2 md:translate-y-[-50%] md:w-[60%] md:mt-[70px]" viewBox="0 0 804 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M497.478 697.95C666.249 643.997 760.109 465.887 707.12 300.13C654.13 134.373 474.358 43.7373 305.587 97.69C136.816 151.643 42.9562 329.753 95.9454 495.51C148.935 661.267 328.707 751.903 497.478 697.95Z" fill="url(#paint0_radial_1376_4769)" />
                    <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_4769)" />
                    <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.258 586.13 339.163Z" stroke="url(#paint2_linear_1376_4769)" />
                    {['Home1.png', 'Home2.png', 'Home3.png', 'Home4.png', 'Home5.png'].map((item, ind) => 
                        <image key={ind} href={"/images/" + item} x="32.5%" y="10%" fillOpacity='0.5' className={`${ind==0?'' : 'opacity-0'} phone-images w-[25%] translate-x-[4%] sm:translate-x-0 sm:w-[35%] md:translate-y-[4%] 4xl:w-[43%] 4xl:translate-x-[-5%] 4xl:translate-y-[1%]`} />
                    )}
                    <defs>
                        <radialGradient id="paint0_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.28) rotate(72.664) scale(635.151 646.7)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_4769" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className={`relative px-10 h-full z-10 items-center md:flex md:hidden md:px-0 md:pl-[25%] `} >
                <div className="flex flex-col-reverse md:flex-col text-white">
                    <div className="w-full sm:w-[58%] sm:mx-0 sm:mt-[10rem] md:w-2/3 m-auto">
                        <p className="font-lato-light font-light text-[22px] ">{t('home.safehome.tip')}</p>
                        <h1 className="text-title-sm-white">{t('home.safehome.title')}</h1>
                        {t('home.safehome.description').split('\n').map((item, index) =>
                            <p className="font-lato font-light tracking-widest text-lg mt-4" key={index}>{item}</p>
                        )}
                    </div>
                    <div className="relative left-[-20px] w-full mx-auto mb-[100px] sm:w-1/2 md:w-2/3 md:mb-0 md:mt-[100px] md:mx-0">
                        <div className="font-lato text-lg font-medium">
                            <img src="/images/sparkle.svg" className="w-[49px] h-[47px] inline"/>
                            {t('home.safehome.list', { returnObjects: true })[0].split('\n')[0]}
                        </div>
                        <div className="font-lato-light text-lg font-light pl-[50px]">
                            {t('home.safehome.list', { returnObjects: true })[0].split('\n')[1]}
                        </div>
                    </div>
                </div>
            </div>

            {/*right-side animation*/}
            <div className="realtive z-0 md:static h-[32rem] sm:h-0">
                <svg ref={refAnimRightImage} className="absolute translate-x-[-27%] top-[25%] w-[220%] sm:translate-x-[6%] sm:top-[20%] sm:w-[140%] md:translate-x-0 md:top-[50%] md:mt-[70px] md:w-[70%] md:right-[-30%] md:translate-y-0" viewBox="0 60 907 750" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M538.472 704.59C686.17 656.921 768.31 499.556 721.937 353.106C675.564 206.655 518.239 126.576 370.541 174.245C222.842 221.913 140.702 379.278 187.075 525.729C233.448 672.179 390.774 752.258 538.472 704.59Z" fill="url(#paint0_radial_1376_4815)" />
                    <path opacity="0.5" d="M512.183 639.605C615.95 606.114 673.659 495.555 641.079 392.664C608.499 289.773 497.968 233.513 394.2 267.003C290.433 300.493 232.724 411.052 265.304 513.943C297.884 616.834 408.415 673.095 512.183 639.605Z" fill="url(#paint1_radial_1376_4815)" />
                    <path d="M621.253 399.063C650.392 491.089 598.779 589.983 505.956 619.941C413.134 649.898 314.27 599.571 285.13 507.544C255.99 415.517 307.604 316.624 400.426 286.666C493.249 256.708 592.113 307.036 621.253 399.063Z" stroke="url(#paint2_linear_1376_4815)" />
                    <path opacity="0.6" d="M797.616 342.142C857.338 530.749 751.554 733.421 561.329 794.815C371.103 856.209 168.486 753.071 108.765 564.464C49.0433 375.857 154.827 173.185 345.052 111.791C535.278 50.3971 737.895 153.535 797.616 342.142Z" stroke="url(#paint3_linear_1376_4815)" />
                    <image href="/images/homeContent2.png" width="600" height="350" clipPath="url(#reliableCircle)" x="18.5%" y="35%" fillOpacity='0.5' />
                    <defs>
                        <clipPath id="reliableCircle">
                            <circle cx="454" cy="454" r="150" fill="#FFFFFF" />
                        </clipPath>
                        <radialGradient id="paint0_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(393.723 195.087) rotate(72.8188) scale(560.702 566.428)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_4815" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(410.487 281.646) rotate(72.8188) scale(393.929 397.952)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_4815" x1="400.275" y1="286.19" x2="507.953" y2="619.822" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_1376_4815" x1="344.901" y1="111.314" x2="565.257" y2="794.073" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/*left side animation, desktop:hidden mobile:show*/}
            <div className="relative h-[39rem] sm:h-[50rem] md:h-0 block md:hidden" style={{height: `${relH2+1}rem`}}>
                <svg className="md:absolute translate-x-[-33%] sm:translate-x-[-8%] md:translate-x-0 left-[-27%] top-[28.5%] w-[310%] sm:top-[37%]  md:top-1/2 md:translate-y-[-50%] sm:w-[120%] md:w-[100%] xl:w-[70%]   sm:left-[-10%]  md:left-[-45%] xl:left-[-20%]" viewBox="0 0 804 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M497.478 697.95C666.249 643.997 760.109 465.887 707.12 300.13C654.13 134.373 474.358 43.7373 305.587 97.69C136.816 151.643 42.9562 329.753 95.9454 495.51C148.935 661.267 328.707 751.903 497.478 697.95Z" fill="url(#paint0_radial_1376_4769)" />
                    <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_4769)" />
                    <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.258 586.13 339.163Z" stroke="url(#paint2_linear_1376_4769)" />
                    <image href="/images/Home2.png" x="32.5%" y="10%" fillOpacity='0.5' className="w-[25%] translate-x-[4%] translate-y-[-10%] sm:translate-y-0 sm:translate-x-0 sm:w-[35%]" />
                    <defs>
                        <radialGradient id="paint0_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.28) rotate(72.664) scale(635.151 646.7)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_4769" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className="relative items-center px-10 h-full z-10 md:fixed md:hidden md:px-0 md:mt-0 md:pl-[25%]" >
                <div className="flex flex-col-reverse md:flex-col text-white">
                    <div className="w-full m-auto md:w-[60%] md:mx-0 md:mt-[10rem]">
                        <p className="font-lato-light font-light text-[22px]">{t('home.reliable.tip')}</p>
                        <h1 className="text-title-sm-white">{t('home.reliable.title')}</h1>
                        {
                            t('home.reliable.description').split('\n').map((item, index) =>
                                <p className="font-lato font-light tracking-widest text-lg mt-3" key={index}>{item}</p>
                            )
                        }
                    </div>
                    <div className="relative left-[-20px] m-auto mb-[100px] w-full sm:w-1/2 md:w-2/3 md:mb-0 md:mt-[100px] md:mx-0">
                        <div className="font-lato text-lg font-medium">
                            <img src="/images/sparkle.svg" className="w-[49px] h-[47px] inline"/>
                            {t('home.reliable.list', { returnObjects: true })[0].split('\n')[0]}
                        </div>
                        <div className="font-lato-light text-lg font-light pl-[50px]">
                            {t('home.reliable.list', { returnObjects: true })[0].split('\n')[1]}
                        </div>
                    </div>
                </div>
            </div>

            {/*Carousal*/}
            <div ref={el => { if (el && refAnimContents.current.indexOf(el) == -1) refAnimContents.current.push(el) }} className="carousel-content relative w-full h-full z-10 md:fixed md:hidden md:px-0 md:mt-0 md:pl-[25%]">
                <picture className={`${selected + 1 === sliderList.length ? 'hidden' : ''} `}>
                    <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('next')} className='top-[90%] w-[47px] h-[93px] cursor-pointer absolute right-[20px] md::right-[-10px] xl:right-[230px] md:bottom-auto md:top-1/2 center-y-transform z-50' />
                </picture>
                <picture className={`${selected === 0 ? 'hidden' : ''}`}>
                    <img src="/images/sparkle-arrow.svg" alt='' onClick={() => svgGroupAnimation('prev')} className={`top-[90%] z-50 w-[47px] h-[93px] sparkle-arrow-reverse cursor-pointer absolute left-[20px] md:left-[-70px] md:bottom-auto md:top-1/2 4xl:left-[-110px]`} />
                </picture>
                <div className="flex flex-col md:w-full md:justify-center">
                    <div className="w-full mx-auto md:w-[90%] xl:w-[70%] md:mx-0">
                        <Flickity
                            {...flickityProps}
                        >
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div className="relative w-full mr-4 opacity-50" key={ind}>
                                        {/* <p className="font-lato-light font-light text-[22px] text-white">{item.tip}</p> */}
                                        <h1 className="text-title-sm-white text-center text-[22px] translate-x-[-20px]">{item.title}</h1>
                                        <div className="grid md:grid-cols-2 w-full mt-8">
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
                        <AZCarousel className="hidden md:block carousel-nav pl-[55px] top-[-150px]" onInit={onInitCarousel} onSelect={onSelectCarousel} onShow={onShowCarousel} onHide={onHideCarousel}>
                            {
                                (sliderList as unknown as any[]).map((item, ind) => (
                                    <div className="md:w-full" key={ind}>
                                        <p className="font-lato-light font-light text-[22px] text-white">{item.tip}</p>
                                        <h1 className="text-title-sm-white w-[84%]">{item.title}</h1>
                                        {
                                            item.description.split('\n').map((sentence: string, index: number) =>
                                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{sentence}</p>
                                            )
                                        }
                                        <div className="grid md:grid-cols-2 w-full mt-8">
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
            <div className="relative z-0 h-[38rem] sm:h-[40rem] md:hidden">
                <svg className="absolute translate-x-[-50%] left-[50%] top-[-50%] w-[150%] sm:w-[120%] sm:top-[-30%] md:left-[10%] md:top-1/2 md:translate-y-[-50%] md:w-[60%] md:mt-[70px]" viewBox="0 0 804 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M497.478 697.95C666.249 643.997 760.109 465.887 707.12 300.13C654.13 134.373 474.358 43.7373 305.587 97.69C136.816 151.643 42.9562 329.753 95.9454 495.51C148.935 661.267 328.707 751.903 497.478 697.95Z" fill="url(#paint0_radial_1376_4769)" />
                    <path opacity="0.5" d="M474.04 622.595C600.747 582.09 671.214 448.371 631.432 323.926C591.649 199.481 456.682 131.435 329.975 171.941C203.267 212.447 132.801 346.166 172.583 470.61C212.366 595.055 347.332 663.101 474.04 622.595Z" fill="url(#paint1_radial_1376_4769)" />
                    <path d="M586.13 339.163C618.068 439.068 561.499 546.433 459.757 578.958C358.015 611.483 249.656 556.841 217.719 456.937C185.781 357.032 242.35 249.667 344.092 217.142C445.834 184.617 554.193 239.258 586.13 339.163Z" stroke="url(#paint2_linear_1376_4769)" />
                    {['Home3.png', 'Home4.png', 'Home5.png'].map((item, ind) => 
                        <image key={ind} href={"/images/" + item} x="32.5%" y="10%" fillOpacity='0.5' className={`${ind == 0 ? '' : 'opacity-0'} carousel-images w-[50%] translate-x-[-8%] translate-y-[23%] sm:translate-y-0 sm:translate-x-0 sm:w-[35%]`} />
                    )}
                    <defs>
                        <radialGradient id="paint0_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(332.077 121.28) rotate(72.664) scale(635.151 646.7)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <radialGradient id="paint1_radial_1376_4769" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(349.863 189.652) rotate(72.664) scale(476.85 485.52)">
                            <stop stopColor="#2294C3" />
                            <stop offset="1" stopColor="#2294C3" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="paint2_linear_1376_4769" x1="343.94" y1="216.666" x2="459.909" y2="579.434" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#159BDE" />
                            <stop offset="1" stopColor="#159BDE" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>                
            </div>
            <div className="md:hidden">
            {
                (sliderList as unknown as any[]).map((item, ind) => (
                    <div className={`desc-divs relative w-full px-10 mb-20 ${ind == 0 ? '' : 'hidden'}`} key={ind} >
                        {item.description.split('\n').map((sentence: string, index: number) =>
                            <p className="font-lato font-light tracking-widest text-white text-lg" key={index}>{sentence}</p>
                        )}
                    </div>
                ))
            }
            </div>
        </div>


    );
});
SafeHome.displayName = 'SafeHome';
export default SafeHome
