import React, { FC, useEffect, useRef } from "react"
import gsap from "gsap";
import { useTranslation } from "next-i18next";


const Hero = React.forwardRef((props: any, ref: any) => {

    //Animate
    const containerRef = useRef<any>();
    const heroImgRef = useRef<any>();
    const animSideUpRefs = useRef<any>([]);
    const animZoomInRefs = useRef<any>([]);
    const animZoomOutRefs = useRef<any>([]);
    const animGradient = React.useRef<any>([]);

    const getShowTimeline = (duration: number=1.5) => {
        return gsap.timeline({onComplete: ()=>{gsap.set([containerRef.current, ...animGradient.current], {display: 'none'});}})
            .fromTo(
                animSideUpRefs.current, 
                {y: 0, opacity: (index, target, targets)=>target.getAttribute('opacity')||1}, 
                {y: -100, opacity: 0, duration}, 
                0
            )
            .fromTo(
                heroImgRef.current,
                {opacity: 1},
                {opacity: 0, duration},
                0
            )
            .fromTo(
                animZoomInRefs.current,
                {opacity: (index, target, targets)=>target.getAttribute('opacity')||1},
                {opacity: 0, transformOrigin: '50% 50%', duration},
                0
            )
            .fromTo(
                animZoomOutRefs.current,
                {opacity: (index, target, targets)=>target.getAttribute('opacity')||1},
                {opacity: 0, transformOrigin: '50% 50%', duration},
                0
            )
            .fromTo(
                animGradient.current,
                {opacity: 1},
                {opacity: 0},
                duration/2
            )
    }

    const { t } = useTranslation()

    const startAnim = (direction: string, shown: boolean) => {
        gsap.set([containerRef.current, ...animGradient.current], {display: 'block'});
        gsap.set(animGradient.current, {background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)'})
        if ( direction == 'UP' && shown ) getShowTimeline().reverse(0);
        else if (direction == 'DOWN' && !shown ) getShowTimeline().play();
    }
    return (
        <>
        <section ref={(el)=>{containerRef.current=el; if (ref) ref.current = {container: el, startAnim}}} className="container mx-auto pb-16 relative pt-32 md:fixed md:hidden md:left-[50%] md:translate-x-[-50%]">
            <svg className="absolute right-[-52%] bottom-[-56%] sm:top-[20%] md:top-[-5%] xl:top-[-16%] sm:w-[120%] sm:right-[-20%] w-[174%] md:right-[-27%] lg:right-[-25%] md:w-[105%] " viewBox="-220 0 1450 2114" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={el => animSideUpRefs.current.push(el)} className='hero-fade' opacity="0.33" d="M50.0812 701.846C55.2566 989.408 335.109 1200.06 627.722 1301.88C920.334 1403.71 1234.95 1659.84 1242.99 2106.91C1245.57 2250.91 1245.77 155.351 1242.99 0.000182753C1013.21 121.659 900.23 166.66 594.437 171.818C288.643 176.976 44.9057 414.284 50.0812 701.846Z" fill="url(#paint0_linear_967_2268)" />
                <circle ref={el => animZoomInRefs.current.push(el)} opacity="0.7" cx="511.729" cy="696.732" r="346.322" fill="url(#paint1_radial_967_2268)" />
                <foreignObject ref={el => animSideUpRefs.current.push(el)} className="font-lato-light w-[260px] text-lg text-white hidden md:block hero-fade" x="59%" y="23.4%" width="260px" height="100px">
                    <p
                    >{t('landing.wifi.sparkle1')}</p>
                </foreignObject>
                <image ref={el => animSideUpRefs.current.push(el)} href="/images/sparkle.svg" className="w-[49px] h-[47px] hidden md:block hero-fade" x="55.5%" y="23%" cx="511.828" cy="696.377" />
                <circle ref={el => animZoomOutRefs.current.push(el)} opacity="0.3" cx="512.408" cy="696.273" r="362.358" stroke="#7BB690" />
                <image ref={el => animSideUpRefs.current.push(el)} href="/images/sparkle.svg" className="w-[50px] h-[47px] hidden md:block hero-fade" x="50.5%" y="43%" cx="511.828" cy="696.377" />
                <foreignObject ref={el => animSideUpRefs.current.push(el)} className="font-lato-light w-[260px] text-lg text-white hidden md:block hero-fade" x="54%" y="43.4%" width="260px" height="100px">
                    <p
                    >{t('landing.wifi.sparkle2')}</p>
                </foreignObject>
                <path ref={el => animSideUpRefs.current.push(el)} className='hero-fade' opacity="0.6" d="M1023.68 696.224C1023.68 978.288 794.632 1206.95 512.089 1206.95C229.545 1206.95 0.5 978.288 0.5 696.224C0.5 414.16 229.545 185.5 512.089 185.5C794.632 185.5 1023.68 414.16 1023.68 696.224Z" stroke="url(#paint2_radial_967_2268)" />
                <circle ref={el => animZoomOutRefs.current.push(el)} opacity="0.7" cx="511.828" cy="696.377" r="259.285" transform="rotate(-90.105 511.828 696.377)" fill="url(#paint3_radial_967_2268)" />
                <image ref={heroImgRef} className='hero-fade' href="/images/model.png" x="24.5%" y="25%" cx="511.828" cy="696.377" transform="translate(0,0)" />
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
            <div ref={el => animSideUpRefs.current.push(el)} className="relative px-10 z-10 flex items-center md:h-[70%] hero-fade">
                <div className="flex flex-wrap ">
                    <div className="w-full md:w-2/5">
                        <h1 className="text-title-md">{t("landing.wifi.title")} </h1>
                        {
                            t('landing.wifi.description').split('\n').map((item, index) => (
                                <p className="font-lato font-light tracking-widest text-white text-lg mt-3" key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
        <div ref={el => animGradient.current.push(el)} className='z-0 hidden md:block fixed top-0 left-0 w-[100vw] h-[100vh]'></div>
        </>
    );
});
Hero.displayName = 'Hero'
export default Hero

