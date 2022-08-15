// modules
import React, { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import gsap from "gsap";
import { useTranslation } from 'next-i18next';

const UniqueSkill: FC = () => {

    //translate
    const { t } = useTranslation()

    const router = useRouter()

    const skillList = t('landing.section2.list', { returnObjects: true })

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
    const scrollRef = React.useRef<any>();
    const containerRef = React.useRef<any>();
    const animSideUp = React.useRef<any>([]);
    const animFadeIn = React.useRef<any>([]);
    const animSkills = React.useRef<any>([]);
    const circleRef = React.useRef<any>(null);
    const animGradient = React.useRef<any>([]);

    const onResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth > 920) enableAnim(false);
        else enableAnim(false);
    }

    const enableAnim = (enable: boolean = false) => {
        gsap.killTweensOf([...animSideUp.current, ...animFadeIn.current, ...animSkills.current, circleRef.current, ...animGradient.current]);
        if (enable) {
            // get client rect
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const start = 400, end = rect.y + rect.height * 3, top = windowHeight - 100;

            // set scroll height
            scrollRef.current.style.height = end + 'px';

            // side up
            gsap.set(animSideUp.current, { y: -rect.y / 3 * 2 });
            gsap.to(animSideUp.current, {
                y: '-=' + top,
                scrollTrigger: {
                    scrub: true,
                    start,
                    end,
                }
            },
            );

            // fade in
            gsap.set(animFadeIn.current, { opacity: 0 });
            gsap.to(animFadeIn.current, {
                opacity: 1,
                scrollTrigger: {
                    scrub: true,
                    start: 2500,
                    end,
                }
            },
            );

            // skills 
            gsap.set(animSkills.current, { y: -rect.y / 3 * 2 });
            gsap.to(animSkills.current, {
                y: '-=' + top,
                stagger: 0.05,
                scrollTrigger: {
                    scrub: true,
                    start,
                    end
                }
            })

            //circle
            gsap.to(circleRef.current, {
                width: '70%',
                scrollTrigger: {
                    scrub: true,
                    start: 2500,
                    end,
                }
            })

            //gradient
            gsap.set(animGradient.current[0], { opacity: 0, background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 10%)' });
            gsap.set(animGradient.current[1], { opacity: 0, background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 100%)' });
            gsap.to(animGradient.current[0], {
                opacity: 1,
                background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 100%)',
                scrollTrigger: {
                    scrub: true,
                    start,
                    end: 2500,
                }
            });
            gsap.to(animGradient.current[0], {
                opacity: 0,
                background: 'linear-gradient(145deg, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 10%)',
                scrollTrigger: {
                    scrub: true,
                    start: 2500,
                    end,
                }
            });

            gsap.to(animGradient.current[1], {
                opacity: 1,
                background: 'radial-gradient(circle, rgba(1, 172, 230, 0.5) 0%, rgba(1, 172, 230, 0) 80%)',
                scrollTrigger: {
                    scrub: true,
                    start: 2500,
                    end,
                }
            });
        }
        else {
            gsap.set(animSideUp.current, { y: 0 });
            gsap.set(animFadeIn.current, { opacity: 1 });
            gsap.set(animSkills.current, { y: 0 });
        }
    }

    useEffect(() => {
        onResize();
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [])





    return (
        <>
            <div id='solutions' ref={containerRef} className='z-10 md:container mx-auto relative md:flex justify-center items-center pb-[200px]'>
                <div className='mt-[200px] md:mt-[120px]'>
                    <div className=" text-center  text-white">
                        <h1 ref={el => animSideUp.current.push(el)} className="text-title-sm">{t('landing.section2.title')}</h1>
                        <p ref={el => { animSideUp.current.push(el); animFadeIn.current.push(el) }} className="font-lato font-light tracking-widest text-[22px] mt-3">{t('landing.section2.subtitle')}</p>
                    </div>
                    <div ref={el => { animFadeIn.current.push(el) }} className='w-full mt-[160px]'>
                        <div className='md:m-auto md:w-max'>
                            {
                                (skillList as unknown as any[]).map((item: any, index: any) => (
                                    <div ref={el => animSkills.current.push(el)} className='right-[-20px] sm:right-[-70px] w-full md:w-[200px] xl:w-[300px] md:inline-block align-top md:right-auto relative px-5 py-5 flex-1 unique-skill-items unique-skill-animate z-40' key={index} onClick={() => router.push(graphList[index].href)}>
                                        <div className='border-[1px] bg-black  cursor-pointer border-slate-600 rounded-md h-full'>
                                            <div className='py-3 md:pt-[80px] md:pb-[100px] px-[20px] text-white w-full relative'>
                                                <picture className=''>
                                                    <source srcSet={graphList[index].graph} type="image/webp" />
                                                    <img src={graphList[index].graph} className={`unique-graph w-[200px] md:w-auto absolute center-x-transform top-[-80px] opacity-50 z-10 ${index % 2 == 0 ? 'left-[80px]' : 'right-[-100px]'} md:left-1/2`} alt="" />
                                                </picture>
                                                <p className='font-lato text-[22px] uppercase unique-skill-title'>{item.title}</p>
                                                <p className='font-lato-light font-bold tracking-[0.08em] italic text-xl w-1/2 md:w-[80%]'>{item.subtitle}</p>
                                                <p className='hidden font-lato font-thin text-xl text-lg unique-skill-description '>{item.description}</p>
                                                <ul className='hidden list-disc pl-2 unique-skill-list '>
                                                    {item.list.split('\n').map((subitem: string, ind: number) => (
                                                        <li className='font-lato text-base font-light' key={ind}>{subitem}</li>
                                                    ))}
                                                </ul>
                                                <div className='w-[89px] h-[89px] md:w-[65px] md:h-[65px] top-[5px] md:top-auto sparkle absolute right-[70px] sm:right-[80px] md:right-[10px] md:bottom-[-2px]'>
                                                </div>
                                                <div className='hidden unique-skill-button absolute bottom-0'>
                                                    <p className='text-base text-neutral-700 '>{t('landing.section2.solution')}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                ))
                            }
                        </div>
                    </div>

                </div>
            </div>
            {/* <div ref={el => animGradient.current.push(el)} className='z-0 hidden md:block fixed top-0 left-0 w-[100vw] h-[100vh]'></div>
            <div ref={el => animGradient.current.push(el)} className='z-0 hidden md:block fixed top-0 left-0 w-[100vw] h-[100vh]'></div>
            <svg ref={el => { circleRef.current = el; animFadeIn.current.push(el) }} className='z-0 hidden md:block fixed top-1/2 left-1/2 center-transform w-full' viewBox="-200 -200 1300 1300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="449" cy="449" r="448.5" transform="rotate(-180 449 449)" stroke="url(#paint0_linear_1362_4341)" />
                <defs>
                    <linearGradient id="paint0_linear_1362_4341" x1="449" y1="-3.05176e-05" x2="449" y2="898" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg> */}
            {/* <div ref={scrollRef} className='hidden md:block'></div> */}
        </>
    )

}

export default UniqueSkill