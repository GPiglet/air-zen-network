import React, { FC, useEffect, useState } from 'react'
import Flickity from "react-flickity-component"
import "flickity/dist/flickity.css"
import gsap from "gsap";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import AZCarousel from '../common/carousel';

const Credential = React.forwardRef((props: any, ref: any) => {
    const [carousel, setCarousel] = React.useState<any>(null);

    //translate
    const { t } = useTranslation()
    const refBackCircle = React.useRef<SVGSVGElement>(null);
    const refBackCircleCarousel = React.useRef<HTMLDivElement>(null);
    const containerRef = React.useRef<any>();

    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
    useEffect(() => {
        if (router.query.section === 'credentials')
            scrollToRef(containerRef)
    }, [])



    const carouselList = t('landing.credential.swiper', { returnObjects: true })

    const imageList = [
        '/images/volskbank.png',
        '/images/districtbank.png',
        '/images/districtbank.png',
        '/images/volskbank.png',
        '/images/volskbank.png',
    ]

    //Flickity
    const [flkty, setFlkty] = useState<any>(undefined)
    const [selected, setSelected] = useState(0)

    useEffect(() => {
        if (flkty && refBackCircle.current) {
            flkty.element.appendChild(refBackCircle.current);
            refBackCircle.current.classList.remove('hidden');

            flkty.on('settle', () => {
                setSelected(flkty.selectedIndex)
            })
        }
    }, [flkty, refBackCircle])

    const flickity = (c: Flickity) => {
        setFlkty(c)
    }

    const flickityProps = {
        className: "credential-carousel relative z-50 md:hidden",
        options: {
            asNavFor: ".carousel-main",
            // contain: true,
            pageDots: false
        },
        flickityRef: flickity
    }


    const clickCell = (index: number) => {
        // selectCarouselInd(index + 1)    
        flkty.select(index)

    }

    const duration = 1;
    const positions = [
        ['18%', '60%', '88%'],
        ['4%', '32%', '72%'],
        ['-12%', '16%', '46%'],
    ];

    const onInitCarousel = (carousel: any) => {
        setCarousel(carousel);
        if (refBackCircleCarousel.current && carousel.getRef()) {
            carousel.getRef().insertBefore(refBackCircleCarousel.current, carousel.getRef().firstChild);
            refBackCircleCarousel.current.classList.remove('hidden');
        }
    }

    const clickCellCarousel = (index: number) => {
        if (carousel.getSelectedIndex() == index) return;
        carousel.select(index)
    }

    const onChangeCarousel = (carousel: any, slide: any, shownIndex: number, position: number) => {
        let left = '';
        if (carousel.getSelectedIndex() == 0) left = positions[0][shownIndex];
        else if (carousel.getSelectedIndex() == carousel.slides.length - 1) left = positions[2][shownIndex];
        else left = positions[1][shownIndex];

        gsap.to(slide, { left, duration });
        if (refBackCircleCarousel.current && carousel.getSelectedIndex() == shownIndex + position) {
            gsap.to(refBackCircleCarousel.current, { left: parseInt(left) - 4 + '%', duration });
            gsap.to(animCircle.current[2], { scale: carousel.getSelectedIndex() % 2 == 0 ? 1 : 0.88 });
        }
    }

    const onSelectCarousel = (carousel: any, slide: any, selectedIndex: number, position: number) => {
        gsap.to(slide.children[0].children[1], { width: '120%', maxWidth: '120%', duration });
        gsap.to(slide, { opacity: 1, duration });
        gsap.to(slide.getElementsByTagName('ul'), { opacity: 1, display: 'block', duration });
    }

    const onDeselectCarousel = (carousel: any, slide: any, selectedIndex: number, position: number) => {
        gsap.to(slide.children[0].children[1], { width: '80%', maxWidth: '100%', duration });
        gsap.to(slide, { opacity: 0.5, duration });
        gsap.to(slide.getElementsByTagName('ul'), { opacity: 0, display: 'none', duration });
    }

    const onShowCarousel = (carousel: any, slide: any, shownIndex: number, position: number, onComplete: Function) => {
        const from = shownIndex == 0 ? -Math.floor(100 / carousel.getConfig().shownLength) + '%' : '100%';
        if (carousel.getSelectedIndex() == 0) gsap.fromTo(slide, { left: from }, { left: positions[0][shownIndex], duration });
        else if (carousel.getSelectedIndex() == carousel.slides.length - 1) gsap.fromTo(slide, { left: from }, { left: positions[2][shownIndex], duration });
        else gsap.fromTo(slide, { left: from }, { left: positions[1][shownIndex], duration });
    }

    const onHideCarousel = (carousel: any, slide: any, hiddenIndex: number, position: number, onComplete: Function) => {
        const left = -Math.floor(100 / carousel.getConfig().shownLength) + '%';
        gsap.to(slide, { left: hiddenIndex > position ? '100%' : left, duration });
    }

    const onCalcHeight = (carousel: any) => {
        for (let i = 0; i < carousel.slides.length; i++) {
            if (i != carousel.getSelectedIndex()) {
                return carousel.slides[i].getBoundingClientRect().height | 300;
            }
        }
        return 200;
    }

    const config = {
        position: 0,
        shownLength: 3,
        step: 1,
    }


    // animation
    const animSideUp = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const animGradient = React.useRef<any>([]);
    const animCircle = React.useRef<any>([]);

    const getShowTimeline = (duration: number = 3) => {
        return gsap.timeline({ paused: true, onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
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
                animSideUp.current,
                { y: 200 },
                { y: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animFadeIn.current,
                { opacity: 0, y: 200 },
                { opacity: 1, y: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animGradient.current,
                { opacity: 0, background: 'radial-gradient(circle, rgba(123, 182, 144, 0.5) 0%, rgba(123, 182, 144, 0) 80%)' },
                { opacity: 1, background: 'radial-gradient(circle, rgba(123, 182, 144, 0.5) 0%, rgba(123, 182, 144, 0) 50%)', duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animCircle.current[0],
                { scale: 1.2, transformOrigin: 'center center' },
                { scale: 1, transformOrigin: 'center center', duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animCircle.current[2],
                { scale: 0.4, transformOrigin: 'center center' },
                { scale: carousel && carousel.getSelectedIndex() % 2 != 0 ? 0.88 : 1, transformOrigin: 'center center', duration: duration / 2 },
                duration / 2
            )

    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ paused: true, onComplete: () => { if (containerRef.current) gsap.set([containerRef.current], { display: 'none' }); } })
            .fromTo(
                animSideUp.current[0],
                { opacity: 1 },
                { opacity: 0, duration },
                0
            )
            .fromTo(
                animSideUp.current,
                { y: 0 },
                { y: -100, duration },
                0
            )
            .fromTo(
                animFadeIn.current,
                { opacity: 1, y: 0 },
                { opacity: 0, y: -100, duration },
                0
            )
            .fromTo(
                animGradient.current,
                { opacity: 1, background: 'radial-gradient(circle, rgba(123, 182, 144, 0.5) 0%, rgba(123, 182, 144, 0) 50%)' },
                { opacity: 0, background: 'radial-gradient(circle, rgba(123, 182, 144, 0.5) 0%, rgba(123, 182, 144, 0) 80%)', duration },
                0
            )
            .fromTo(
                animCircle.current[0],
                { scale: 1, transformOrigin: 'center center' },
                { scale: 1.2, transformOrigin: 'center center', duration },
                0
            )
            .fromTo(
                animCircle.current[2],
                { scale: carousel && carousel.getSelectedIndex() % 2 != 0 ? 0.88 : 1, transformOrigin: 'center center' },
                { scale: 0.4, transformOrigin: 'center center', duration },
                0
            )

    }

    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) prevAnimation.current = getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getHideTimeline().play(0);
        else if (direction == 'UP' && shown) prevAnimation.current = getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown) prevAnimation.current = getShowTimeline().reverse(0);

    }

    const router = useRouter()


    return (
        <section id='credentials' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className='container md:overflow-hidden flex md:block mt-14 md:mt-0 md:pt-[160px] h-[80vh] md:h-screen items-center md:items-start md:fixed md:hidden md:w-full md:left-[50%] md:translate-x-[-50%]'>
            <div className='w-full relative z-50 md:absolute md:top-1/2 md:translate-y-[-60%]'>
                <div className=' pt-10 pb-8 md:pb-24 flex justify-center'>
                    <h1 ref={el => { if (el && animSideUp.current.indexOf(el) == -1) animSideUp.current.push(el) }} className="text-title-sm relative z-50">{t('landing.credential.title')}</h1>
                </div>
                <picture className={`${selected + 1 === carouselList.length ? 'hidden' : ''} `}>
                    <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                    <img src="/images/sparkle-arrow.svg" alt=''  className='md:hidden w-[47px] h-[93px] cursor-pointer absolute right-[10px] top-[40%] center-y-transform z-50' />
                </picture>
                <picture className={`${selected === 0 ? 'hidden' : ''}`}>
                    <source srcSet="/images/sparkle-arrow.svg" type="image/webp" />
                    <img src="/images/sparkle-arrow.svg" alt=''  className='md:hidden w-[47px] h-[93px] cursor-pointer absolute left-[10px] sparkle-arrow-reverse transform-none top-[40%] center-y-transform z-50' />
                </picture>
                <div ref={el => { if (el && animFadeIn.current.indexOf(el) == -1) animFadeIn.current.push(el) }}>
                    <Flickity
                        {...flickityProps}

                    >
                        {/* <div className='hidden md:block w-[200px]'></div> */}
                        {
                            (carouselList as unknown as any[]).map((item, index) => (

                                <div className={`mr-10 w-[65%] credential-detail mobile`} onClick={() => clickCell(index)} key={index}>
                                    <picture>
                                        <source srcSet={imageList[index]} type="image/webp" />
                                        <img src={imageList[index]} alt="" className='opacity-50'/>
                                    </picture>
                                    <div className='py-2'>
                                        <div className='w-full py-2 px-2'>
                                            <p className='font-lato text-[22px] text-white'>{item.title}</p>
                                        </div>
                                        <ul className='w-full   md:w-1/2 pl-2 px-2 text-white list-disc opacity-0'>
                                            {
                                                item.list.split('\n').map((detail: string, ind: number) => (
                                                    <li className='font-lato text-base font-light' key={ind}>{detail}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </Flickity>
                    <AZCarousel className='credential-carousel ml-[30px] md:ml-auto relative z-50 hidden md:block' config={config}
                        onInit={onInitCarousel}
                        onShow={onShowCarousel}
                        onHide={onHideCarousel}
                        onSelect={onSelectCarousel}
                        onDeselect={onDeselectCarousel}
                        onChange={onChangeCarousel}
                        onCalcHeight={onCalcHeight}
                    >
                        {
                            (carouselList as unknown as any[]).map((item, index) => (

                                <div className={`mr-10 w-[60%] md:w-[30%] opacity-50 credential-detail`} onClick={() => clickCellCarousel(index)} key={index}>
                                    <picture>
                                        <source srcSet={imageList[index]} type="image/webp" />
                                        <img src={imageList[index]} className="w-[80%]" alt="" />
                                    </picture>
                                    <div className='md:flex md:p-7'>
                                        <div className='w-full md:w-1/2 px-2'>
                                            <p className='font-lato text-[22px] text-white'>{item.title}</p>
                                        </div>
                                        <ul className='w-full   md:w-1/2 pl-2 px-2 text-white list-disc hidden'>
                                            {
                                                item.list.split('\n').map((detail: string, ind: number) => (
                                                    <li className='font-lato text-base font-light' key={ind}>{detail}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </AZCarousel>
                    <svg ref={refBackCircle} className='hidden z-[-1] absolute w-[180%] top-[-74%] right-[10%]' viewBox="0 0 736 736" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle className='scale-[0.6] origin-center' opacity="0.3" cx="368.2" cy="368.2" r="338.706" transform="rotate(-120 368.2 368.2)" fill="url(#paint0_radial_0_1)" />
                        <circle className="hidden" opacity="0.8" cx="368.199" cy="368.2" r="367.206" transform="rotate(-120 368.199 368.2)" stroke="url(#paint1_linear_0_1)" />
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

                    <div ref={refBackCircleCarousel} className='hidden absolute w-[120%] md:w-[45%] top-0  md:top-1/2 md:translate-y-[-44%] right-[27%] md:left-[14%]' >
                        <svg viewBox="-30 -30 796 796" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle ref={el => { if (el && animCircle.current.indexOf(el) == -1) animCircle.current.push(el) }} opacity="0.3" cx="368.2" cy="368.2" r="338.706" transform="rotate(-120 368.2 368.2)" fill="url(#paint0_radial_0_2)" />
                            <circle ref={el => { if (el && animCircle.current.indexOf(el) == -1) animCircle.current.push(el) }} opacity="0.8" cx="368.199" cy="368.2" r="367.206" transform="rotate(-120 368.199 368.2)" stroke="url(#paint1_linear_0_2)" />
                            <circle ref={el => { if (el && animCircle.current.indexOf(el) == -1) animCircle.current.push(el) }} opacity="0.4" cx="368.204" cy="367.623" r="311.914" transform="rotate(-120 368.204 367.623)" fill="url(#paint2_radial_0_2)" />
                            <defs>
                                <radialGradient id="paint0_radial_0_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(320.569 188.262) rotate(68.4205) scale(697.882)">
                                    <stop stopColor="#7BB690" />
                                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                                </radialGradient>
                                <linearGradient id="paint1_linear_0_2" x1="368.199" y1="0.493683" x2="368.199" y2="735.905" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#7BB790" />
                                    <stop offset="1" stopColor="#7BB790" stopOpacity="0" />
                                </linearGradient>
                                <radialGradient id="paint2_radial_0_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(341.918 353.047) rotate(82.9191) scale(427.785)">
                                    <stop stopColor="#7BB690" />
                                    <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <div ref={el => { if (el && animGradient.current.indexOf(el) == -1) animGradient.current.push(el) }} className='z-0 hidden md:block fixed top-1/2 left-1/2 center-transform w-full h-full'></div>
        </section>
    )
})
Credential.displayName = 'Credential';
export default Credential