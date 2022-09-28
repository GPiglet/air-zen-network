import React, { FC, useEffect, useRef } from "react"
import gsap from "gsap";
import { useTranslation } from "next-i18next";
import Sparkle from "../common/sparkle";


const Hero = React.forwardRef((props: any, ref: any) => {

    //Animate
    const containerRef = useRef<any>();
    const heroImgRef = useRef<any>();
    const animSideUpRefs = useRef<any>([]);
    const animZoomInRefs = useRef<any>([]);
    const animZoomOutRefs = useRef<any>([]);
    const animGradient = React.useRef<any>([]);

    const getShowTimeline = (duration: number = 1.5, isFirst: boolean = false) => {
        const tl = gsap.timeline({ onComplete: () => { if (containerRef.current) gsap.set([containerRef.current, ...animGradient.current], { display: 'none' }); } })
            .fromTo(
                animSideUpRefs.current,
                { y: 0, opacity: (index, target, targets) => target.getAttribute('opacity') || 1 },
                { y: 0, opacity: 0, duration },
                0
            )
            .fromTo(
                heroImgRef.current,
                { opacity: 1 },
                { opacity: 0, duration },
                0
            )
            .fromTo(
                animZoomInRefs.current,
                { opacity: (index, target, targets) => target.getAttribute('opacity') || 1 },
                { opacity: 0, transformOrigin: '50% 50%', duration },
                0
            )
            .fromTo(
                animZoomOutRefs.current,
                { opacity: (index, target, targets) => target.getAttribute('opacity') || 1 },
                { opacity: 0, transformOrigin: '50% 50%', duration },
                0
            )

        if (!isFirst) tl.fromTo(
            animGradient.current,
            { opacity: 1 },
            { opacity: 0 },
            duration / 2
        );
        return tl;

    }

    const { t } = useTranslation()

    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean, isFirst: boolean) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current, ...animGradient.current], { display: 'block' });
        gsap.set(animGradient.current, { background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 60%)' })
        if (direction == 'UP' && shown) prevAnimation.current = getShowTimeline(1.5, isFirst).reverse(0);
        else if (direction == 'DOWN' && !shown) prevAnimation.current = getShowTimeline().play();
    }
    return (
        <>
            <section ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className="container mx-auto relative pt-32 md:h-screen md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">

                <div ref={el => { if (el && animSideUpRefs.current.indexOf(el) == -1) animSideUpRefs.current.push(el) }} className="relative md:absolute px-10 z-10 flex items-center md:h-[70%] hero-fade">
                    <div className="flex flex-wrap ">
                        <div className="w-full md:w-2/5 p-4 md:p-0">
                            <h1 className="text-title-sm">{t("landing.wifi.title")} </h1>
                            {
                                t('landing.wifi.description').split('\n').map((item, index) => (
                                    <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="relative md:static h-[30rem] sm:h-[56rem] md:h-0">                    
                    <svg className="absolute left-1/2 translate-x-[-50%] top-[-175px] w-[174%] sm:top-0 sm:w-[120%] sm:right-[-20%] md:absolute md:left-auto md:translate-x-0 md:top-[60%] md:translate-y-[-45%] md:right-[-20%] md:w-[105%] 4xl:top-[55%] 4xl:right-[-33%] 5xl:w-[150%] 5xl:top-[50%] 5xl:right-[-73%]" viewBox="-220 0 1450 1700" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path ref={el => { if (el && animSideUpRefs.current.indexOf(el) == -1) animSideUpRefs.current.push(el) }} className='hero-fade' opacity="0.33" d="M50.0812 701.846C55.2566 989.408 335.109 1200.06 627.722 1301.88C920.334 1403.71 1234.95 1659.84 1242.99 2106.91C1245.57 2250.91 1245.77 155.351 1242.99 0.000182753C1013.21 121.659 900.23 166.66 594.437 171.818C288.643 176.976 44.9057 414.284 50.0812 701.846Z" fill="url(#paint0_linear_967_2268)" />
                        <circle ref={el => { if (el && animZoomInRefs.current.indexOf(el) == -1) animZoomInRefs.current.push(el) }} opacity="0.7" cx="511.729" cy="696.732" r="346.322" fill="url(#paint1_radial_967_2268)" />
                        <circle ref={el => { if (el && animZoomOutRefs.current.indexOf(el) == -1) animZoomOutRefs.current.push(el) }} opacity="0.3" cx="512.408" cy="696.273" r="362.358" stroke="#7BB690" />
                        <path ref={el => { if (el && animSideUpRefs.current.indexOf(el) == -1) animSideUpRefs.current.push(el) }} className='hero-fade' opacity="0.6" d="M1023.68 696.224C1023.68 978.288 794.632 1206.95 512.089 1206.95C229.545 1206.95 0.5 978.288 0.5 696.224C0.5 414.16 229.545 185.5 512.089 185.5C794.632 185.5 1023.68 414.16 1023.68 696.224Z" stroke="url(#paint2_radial_967_2268)" />
                        <circle ref={el => { if (el && animZoomOutRefs.current.indexOf(el) == -1) animZoomOutRefs.current.push(el) }} opacity="0.7" cx="511.828" cy="696.377" r="259.285" transform="rotate(-90.105 511.828 696.377)" fill="url(#paint3_radial_967_2268)" />
                        <image ref={heroImgRef} className='hero-fade' href="/images/model.png" x="24.5%" y="30%" cx="511.828" cy="696.377" transform="translate(0,0)" />
                        <defs>
                            <linearGradient id="paint0_linear_967_2268" x1="278.213" y1="680.928" x2="1245.06" y2="732.717" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(463.027 512.748) rotate(68.4205) scale(713.575)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint2_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(938.541 518.031) rotate(143.707) scale(1014.19 1015.91)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                            <radialGradient id="paint3_radial_967_2268" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(475.366 558.632) rotate(68.4205) scale(534.239)">
                                <stop stopColor="#7BB690" />
                                <stop offset="1" stopColor="#7BB690" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <div ref={el => {if (el && animSideUpRefs.current.indexOf(el) == -1) animSideUpRefs.current.push(el)}} className="absolute z-[2] md:translate-x-0 md:top-[60%] md:translate-y-[-45%] md:right-[-20%] md:w-[105%] 4xl:top-[55%] 4xl:right-[-33%] 5xl:w-[150%] 5xl:top-[50%] 5xl:right-[-73%]">
                        <Sparkle className="relative w-[240px] left-[70%] top-[-260px] 5xl:top-[-382px]">{t('landing.wifi.sparkle1')}</Sparkle>
                        <Sparkle className="relative w-[240px] left-[65%] 5xl:top-[30px]">{t('landing.wifi.sparkle2')}</Sparkle>
                    </div>
                </div>
            </section>
            <div ref={el => { if (el && animGradient.current.indexOf(el) == -1) animGradient.current.push(el) }} className='z-0 hidden md:block fixed top-0 left-0 w-[100vw] h-[100vh]'></div>
        </>
    );
});
Hero.displayName = 'Hero'
export default Hero

