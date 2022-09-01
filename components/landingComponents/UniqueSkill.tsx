// modules
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from "gsap";
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const UniqueSkill = React.forwardRef((props: any, ref: any) => {
    const [isMobile, setIsMobile] = useState(false)

    //translate
    const { t } = useTranslation()

    const router = useRouter()
    const scrollToRef = (ref: any) => window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
    useEffect(() => {
        if (router.query.section === 'solutions')
            scrollToRef(containerRef)
        if (window.innerWidth > 920)
            setIsMobile(false)
        else
            setIsMobile(true)
    }, [])

    const skillList = t('landing.solution.list', { returnObjects: true })

    const graphList = [
        {
            graph: '/images/graph-home.svg',
            href: '/home'
        },
        {
            graph: '/images/graph-business.svg',
            href: '/business'
        },
        {
            graph: '/images/graph-education.svg',
            href: '/education'
        },
        {
            graph: '/images/graph-industrial.svg',
            href: '/industrial'
        },
    ]


    // Animate Refs
    const containerRef = React.useRef<any>();
    const animSideUp = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const animSkills = React.useRef<any>([]);
    const circleRef = React.useRef<any>(null);
    const animGradient = React.useRef<any>([]);

    const getShowTimeline = (duration: number = 3) => {
        return gsap.timeline({ paused: true })
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
                { opacity: 0 },
                { opacity: 1, duration: duration / 2 },
                duration / 2
            )
            .fromTo(
                animSkills.current,
                { y: 600 },
                { y: 0, duration: duration / 2 },
                0
            )
            // .fromTo(
            //     animGradient.current[0],
            //     {opacity: 0, background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 0%)'},
            //     {opacity: 1, background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)'},
            //     0
            // )
            // .fromTo(
            //     animGradient.current[0],
            //     {opacity: 1, background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)'},
            //     {opacity: 0, background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 0%)', duration: duration/2},
            //     duration/2
            // )
            .fromTo(
                animGradient.current[1],
                { opacity: 0, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)' },
                { opacity: 1, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 60%)', duration },
                0
            )
            .fromTo(
                circleRef.current,
                { scale: 1.2 },
                { scale: .8, duration: duration / 2 },
                duration / 2
            );
    }

    const getHideTimeline = (duration: number = 1.5) => {
        return gsap.timeline({ paused: true, onComplete: () => { gsap.set([containerRef.current, circleRef.current], { display: 'none' }); } })
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
                { opacity: 1 },
                { opacity: 0, duration },
                0
            )
            .fromTo(
                animSkills.current,
                { y: 0 },
                { y: -100, duration },
                0
            )
            .fromTo(
                animGradient.current[1],
                { opacity: 1, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 60%)' },
                { opacity: 0, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)', duration },
                0
            )
            .fromTo(
                circleRef.current,
                { scale: .8 },
                { scale: 0.6, duration },
                0
            );
    }


    const startAnim = (direction: string, shown: boolean) => {
        gsap.set([containerRef.current, circleRef.current], { display: 'block' });
        if (direction == 'DOWN' && shown) getShowTimeline().play(0);
        else if (direction == 'DOWN' && !shown) getHideTimeline().play(0);
        else if (direction == 'UP' && shown) getHideTimeline().reverse(0);
        else if (direction == 'UP' && !shown) getShowTimeline().reverse(0);
    }


    return (
        <>
            <div id='solutions' ref={(el) => { containerRef.current = el; if (ref) ref.current = { container: el, startAnim } }} className='z-10 md:container mx-auto relative justify-center items-center md:pt-20 pb-[200px] md:fixed md:hidden md:left-[50%] md:translate-x-[-50%] md:top-1/2 md:translate-y-[-50%]'>
                <div className='mt-[200px] md:mt-[120px]'>
                    <div className=" text-center  text-white">
                        <h1 ref={el => animSideUp.current.push(el)} className="text-title-sm">{t('landing.solution.title')}</h1>
                        <p ref={el => { animSideUp.current.push(el); animFadeIn.current.push(el) }} className="font-lato font-light tracking-widest text-[22px] mt-3">{t('landing.solution.subtitle')}</p>
                    </div>
                    <div ref={el => { animFadeIn.current.push(el) }} className='w-full mt-[160px]'>
                        <div className='md:m-auto md:w-max  '>
                            {
                                (skillList as unknown as any[]).map((item: any, index: any) => (
                                    <div ref={el => animSkills.current.push(el)} className='right-[-20px] sm:right-[-70px] w-full md:w-[210px] xl:w-[280px] md:inline-block align-top md:right-auto relative px-5 py-5 flex-1 unique-skill-items unique-skill-animate z-40' key={index}>
                                        <div className=' border-[1px] bg-black  border-slate-600 rounded-md h-full'>
                                            <div className='tracking-widest py-3 md:pt-[80px] md:pb-[100px] px-[20px] text-white w-full relative  md:h-[300px]'>
                                                <picture className=''>
                                                    <source srcSet={graphList[index].graph} type="image/webp" />
                                                    <img src={graphList[index].graph} className={`unique-graph w-[200px] md:w-auto absolute center-x-transform top-[-80px] opacity-50 z-10 ${index % 2 == 0 ? 'left-[80px]' : 'right-[-100px]'} md:left-1/2`} alt="" />
                                                </picture>
                                                <p className='font-lato text-[22px] uppercase unique-skill-title pb-3'>{item.title}</p>
                                                <p className='font-lato-light font-bold text-xl w-[60%] md:w-[90%] pb-3'>{item.subtitle}</p>
                                                <p className='hidden font-lato font-light text-xl text-lg unique-skill-description pb-3 md:w-[280px]'>{item.description}</p>
                                                <ul className='hidden list-disc pl-2 unique-skill-list md:w-[280px]'>
                                                    {item.list.split('\n').map((subitem: string, ind: number) => (
                                                        <li className='font-lato text-[16px] font-extralight leading-6' key={ind}>{subitem}</li>
                                                    ))}
                                                </ul>
                                                <button onClick={() => router.push(graphList[index].href)} className="cursor-pointer" >
                                                    <div className='w-[89px] h-[89px] md:w-[65px] md:h-[65px] top-[5px] md:top-auto sparkle absolute right-[10px] sm:right-[80px] md:right-[10px] md:bottom-[22px]'>
                                                    </div>
                                                    <div className='hidden unique-skill-button absolute bottom-0' >
                                                        <p className='text-base text-neutral-700 '>{t('landing.solution.solution')}</p>
                                                    </div>

                                                </button>
                                            </div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
            <div ref={el => animGradient.current.push(el)} className='z-0 hidden md:block fixed top-0 left-0 w-[100vw] h-[100vh]'></div>
            <div ref={el => animGradient.current.push(el)} className='z-0 md:container hidden md:block fixed top-1/2  translate-y-[-50%] left-1/2 translate-x-[-50%] w-full h-full max-h-[1080px]'></div>
            <div ref={el => { circleRef.current = el; animFadeIn.current.push(el) }} className='z-0 md:container hidden fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full' >
                <svg viewBox="-200 -200 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                    <defs>
                        <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </>
    )

})
UniqueSkill.displayName = 'UniqueSkill'
export default UniqueSkill