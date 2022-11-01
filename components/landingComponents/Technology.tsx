//modules
import React, { FC, useEffect, useRef, useState } from 'react'
import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { useRouter } from 'next/router';
import Heading from '../technologyComponents/Heading';
import Hardware from '../technologyComponents/Hardware';
import Touchpoints from '../technologyComponents/Touchpoints';
import Services from '../technologyComponents/Services';
import WhitePaper from '../technologyComponents/WhitePaper';
import OurNodes from '../technologyComponents/OurNodes';
import History from '../technologyComponents/History';
import RoadMap from '../technologyComponents/RoadMap';
import Intro from '../technologyComponents/Intro';

const Technology = React.forwardRef((props: any, ref: any) => {
    const router = useRouter()

    const containerRef = React.useRef<any>();

    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop + 400, behavior: 'smooth' })
    useEffect(() => {
        if (router.query.section === 'technology')
            scrollToRef(containerRef)
    }, [])

    // animation
    const animSlideUp = React.useRef<any>([]);
    const animSlideLeft = React.useRef<any>([]);
    const animSlideRight = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const backGradientRef = React.useRef<any>(null);

    const getShowTimeline = (duration: number = 3) => {
        return gsap.timeline({ paused: true, onReverseComplete: () => { if (containerRef.current) gsap.set([containerRef.current, backGradientRef.current], { display: 'none' }) } })
            .fromTo(
                animSlideUp.current[0],
                { opacity: 0 },
                { opacity: 1, duration },
                0
            )
            .fromTo(
                animSlideUp.current,
                { y: 600 },
                { y: 200, duration: duration / 2 },
                0
            )
            .fromTo(
                animSlideUp.current,
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
                animSlideLeft.current,
                { opacity: 0, x: -200 },
                { opacity: 1, x: 0, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animSlideRight.current,
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: duration / 2 },
                duration / 2
            )
            

    }

    const prevAnimation = React.useRef<any>(null);
    const startAnim = (direction: string, shown: boolean) => {
        if (prevAnimation.current) prevAnimation.current.kill();
        gsap.set([containerRef.current, backGradientRef.current], { display: 'flex', y: 0 });
        if (direction == 'DOWN' && shown) {
            gsap.set(backGradientRef.current, { background: 'linear-gradient(180.42deg, rgba(1, 172, 230, 0.3) 0%, rgba(1, 172, 230, 0) 50%), #000000' });
            prevAnimation.current = getShowTimeline().play(0);
        }
        else if (direction == 'UP' && !shown) {
            gsap.set(backGradientRef.current, { background: 'transparent' });
            prevAnimation.current = getShowTimeline().reverse(0);
        }
    }

    const scroll = (direction: string, offset: number = 17) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if( rect.top <= 0 && rect.top > -offset && offset > 0 ) {
            return false;
        }
        if( Math.abs(rect.top) + window.innerHeight - 100 > rect.height && offset < 0 ) {
            offset = 0;
        }
        gsap.set(containerRef.current, {
            y: '+=' + offset
        })
        return true;
    }

    return (
      <div id='technology' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim, scroll } }} className='container relative flex flex-col md:hidden justify-center m-auto pt-[12px] md:pt-[200px]'>
        <div className='z-0 absolute hidden md:block md:static top-[-180px] w-full h-[480px] md:h-0 overflow-hidden'>
          <svg className='absolute bottom-0 md:top-[-8%] left-1/2 translate-x-[-50%] w-[150%] md:w-[990px]' viewBox="0 0 994 985" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M615.476 863.499C824.278 796.749 940.401 576.393 874.843 371.319C809.285 166.245 586.872 54.1116 378.07 120.861C169.268 187.611 53.1451 407.968 118.703 613.041C184.261 818.115 406.674 930.249 615.476 863.499Z" fill="url(#paint0_radial_5689_2335)"/>
            <path opacity="0.5" d="M586.48 770.269C743.242 720.156 830.423 554.72 781.204 400.757C731.986 246.795 565.006 162.609 408.244 212.723C251.483 262.836 164.302 428.272 213.52 582.234C262.739 736.196 429.719 820.382 586.48 770.269Z" fill="url(#paint1_radial_5689_2335)"/>
            <path d="M725.268 419.576C764.801 543.241 694.778 676.138 568.843 716.397C442.908 756.656 308.779 689.022 269.246 565.356C229.713 441.691 299.736 308.794 425.671 268.535C551.606 228.276 685.735 295.91 725.268 419.576Z" stroke="url(#paint2_linear_5689_2335)"/>
            <defs>
              <radialGradient id="paint0_radial_5689_2335" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(410.843 150.047) rotate(72.664) scale(785.805 800.092)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
              </radialGradient>
              <radialGradient id="paint1_radial_5689_2335" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(432.849 234.634) rotate(72.664) scale(589.955 600.681)">
                <stop stopColor="#2294C3"/>
                <stop offset="1" stopColor="#2294C3" stopOpacity="0"/>
              </radialGradient>
              <linearGradient id="paint2_linear_5689_2335" x1="425.518" y1="268.059" x2="568.995" y2="716.873" gradientUnits="userSpaceOnUse">
                <stop stopColor="#159BDE"/>
                <stop offset="1" stopColor="#159BDE" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Headline */}
        <div className='z-10 text-center text-white mb-10 md:mb-32'>
          <p className="font-lato font-light tracking-widest text-xl mb-3">Software Defined Networking</p>
          <h1 className="text-title-sm">the <b>Airzen</b> Plattform</h1>
        </div>

        {/* Intro */}
        <Intro>
          <div className='flex flex-col md:flex-row gap-20 justify-enter'>
            <Heading className='top-[-2rem]'>
              <div className='absolute left-1/2 md:left-[55%] translate-x-[-50%] top-[62%] md:top-[46%] translate-y-[-50%] w-[60%] md:w-[75%] text-center md:text-left text-white tracking-widest'>
                <p className=''>SOFTWARE DEFINED NETWORK TECHNOLOGY</p>
                <p className='font-light'>über 40 Micro Services & digitale Infrastruktur</p>
              </div>
            </Heading>
            <Hardware className='mt-[-8rem] md:mt-0'/>
            <Touchpoints />
            <Services />
          </div>
        </Intro>

        {/* WhitePaper */}
        <WhitePaper className='my-10'/>

        {/* Our Nodes */}
        <OurNodes className='my-20'/>

        {/* history */}
        <History className='my-10'/>

        {/* roadmap */}
        <RoadMap className='my-10' />          
      </div>
    )
})
Technology.displayName = 'Technology'
export default Technology